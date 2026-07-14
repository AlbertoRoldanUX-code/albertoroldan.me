#!/usr/bin/env node
/**
 * Runs supabase/migrations/*.sql against the project Postgres.
 * Requires SUPABASE_URL + SUPABASE_DB_PASSWORD in .env.local
 * (or SUPABASE_DB_URL with a full connection string).
 */
import { readdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { readFileSync, existsSync } from "node:fs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationsDir = join(root, "supabase", "migrations");

function loadEnvLocal() {
  const envPath = join(root, ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function projectRef(supabaseUrl) {
  try {
    return new URL(supabaseUrl).hostname.split(".")[0];
  } catch {
    return "";
  }
}

/**
 * pg 8.22 / pg-connection-string treat sslmode=require as verify-full, which
 * rejects Supabase's chain and also overwrites ssl: { rejectUnauthorized: false }.
 * Use no-verify for local migration scripts.
 */
function withNoVerifySsl(dsn) {
  try {
    const url = new URL(dsn);
    url.searchParams.set("sslmode", "no-verify");
    return url.toString();
  } catch {
    const sep = dsn.includes("?") ? "&" : "?";
    return `${dsn.replace(/([?&])sslmode=[^&]*/g, "$1").replace(/[?&]$/, "")}${sep}sslmode=no-verify`;
  }
}

function connectionCandidates(supabaseUrl, dbPassword) {
  const explicit = (process.env.SUPABASE_DB_URL || "").trim();
  if (explicit) return [withNoVerifySsl(explicit)];

  const ref = projectRef(supabaseUrl);
  const encoded = encodeURIComponent(dbPassword);
  return [
    `postgresql://postgres:${encoded}@db.${ref}.supabase.co:5432/postgres`,
    `postgresql://postgres.${ref}:${encoded}@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`,
    `postgresql://postgres.${ref}:${encoded}@aws-0-eu-central-1.pooler.supabase.com:6543/postgres`,
    `postgresql://postgres.${ref}:${encoded}@aws-0-eu-west-1.pooler.supabase.com:5432/postgres`,
    `postgresql://postgres.${ref}:${encoded}@aws-0-eu-west-1.pooler.supabase.com:6543/postgres`,
    `postgresql://postgres.${ref}:${encoded}@aws-0-eu-west-3.pooler.supabase.com:5432/postgres`,
    `postgresql://postgres.${ref}:${encoded}@aws-0-eu-west-3.pooler.supabase.com:6543/postgres`,
  ].map(withNoVerifySsl);
}

async function main() {
  loadEnvLocal();

  const supabaseUrl = (process.env.SUPABASE_URL || "").trim();
  const dbPassword = (process.env.SUPABASE_DB_PASSWORD || "").trim();
  const dbUrl = (process.env.SUPABASE_DB_URL || "").trim();

  if (!dbUrl && !supabaseUrl) {
    throw new Error("Falta SUPABASE_URL o SUPABASE_DB_URL en .env.local");
  }
  if (!dbUrl && !dbPassword) {
    throw new Error(
      "Falta SUPABASE_DB_PASSWORD en .env.local (la contraseña de Postgres al crear el proyecto). " +
        "Sin ella no puedo ejecutar SQL desde aquí; el SQL Editor del dashboard sigue siendo la alternativa.",
    );
  }

  let pg;
  try {
    const require = createRequire(import.meta.url);
    pg = require("pg");
  } catch {
    throw new Error(
      "Falta el paquete pg. Ejecuta: npm install -D pg && npm run db:migrate",
    );
  }

  const files = (await readdir(migrationsDir))
    .filter((name) => name.endsWith(".sql"))
    .sort()
    .map((name) => join(migrationsDir, name));

  if (files.length === 0) {
    throw new Error(`No hay migraciones en ${migrationsDir}`);
  }

  const candidates = connectionCandidates(supabaseUrl, dbPassword);
  let lastError;

  for (const dsn of candidates) {
    const client = new pg.Client({
      connectionString: dsn,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 20000,
    });
    try {
      await client.connect();
      const applied = [];
      for (const file of files) {
        const sql = await readFile(file, "utf8");
        await client.query(sql);
        applied.push(file.split("/").pop());
      }
      await client.end();
      console.log("Migraciones aplicadas:", applied.join(", "));
      return;
    } catch (err) {
      lastError = err;
      try {
        await client.end();
      } catch {
        /* ignore */
      }
    }
  }

  throw new Error(`No se pudo conectar a Supabase Postgres: ${lastError}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
