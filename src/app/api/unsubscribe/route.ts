import { NextResponse } from "next/server";
import { unsubscribeWithToken } from "@/lib/email/unsubscribe-service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const token = typeof body.token === "string" ? body.token : "";

    if (!token) {
      return NextResponse.json(
        { success: false, message: "missing_token" },
        { status: 400 },
      );
    }

    const result = await unsubscribeWithToken(token);
    return NextResponse.json(result, {
      status: result.success ? 200 : 400,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "error" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  if (!token) {
    return NextResponse.json(
      { success: false, message: "missing_token" },
      { status: 400 },
    );
  }

  const result = await unsubscribeWithToken(token);
  return NextResponse.json(result, {
    status: result.success ? 200 : 400,
  });
}
