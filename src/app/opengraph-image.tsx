import { ImageResponse } from "next/og";

export const alt = "Alberto Roldán — work, money, and freedom";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #111111 0%, #1c1c1c 55%, #2a241c 100%)",
          color: "#faf9f6",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: "0.02em",
            opacity: 0.72,
          }}
        >
          albertoroldán.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Work, money, and freedom
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#d8d2c8",
              maxWidth: 820,
            }}
          >
            A weekly essay to build a freer life without waiting for
            permission.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#b8b0a4",
          }}
        >
          <span>Alberto Roldán</span>
          <span>albertoroldan.me</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
