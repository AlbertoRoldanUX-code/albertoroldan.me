import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { answers?: unknown };

    if (!body.answers || typeof body.answers !== "object") {
      return NextResponse.json(
        { success: false, message: "Respuestas no válidas." },
        { status: 400 },
      );
    }

    // Persist later via email provider custom fields / analytics.
    console.log("[survey]", body.answers);

    return NextResponse.json({
      success: true,
      message: "Respuestas registradas.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "No se pudieron guardar las respuestas." },
      { status: 500 },
    );
  }
}
