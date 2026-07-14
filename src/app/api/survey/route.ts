import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/server";

interface SurveyBody {
  email?: unknown;
  answers?: unknown;
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SurveyBody;

    if (!body.answers || typeof body.answers !== "object" || Array.isArray(body.answers)) {
      return NextResponse.json(
        { success: false, message: "Respuestas no válidas." },
        { status: 400 },
      );
    }

    const answers = body.answers as Record<string, unknown>;
    const worksIndependently = asString(answers["working-for-yourself"]);
    const currentGoal = asString(answers["current-goal"]);
    const currentGoalOther = asString(answers["current-goal-other"]);
    const topicInterest = asString(answers["topic-interest"]);
    const topicInterestOther = asString(answers["topic-interest-other"]);

    const email = asString(body.email)?.toLowerCase();

    if (!email) {
      console.log("[survey] missing email", answers);
      return NextResponse.json({
        success: true,
        message: "Respuestas registradas.",
      });
    }

    const supabase = createServiceSupabaseClient();
    if (!supabase) {
      console.log("[survey] supabase unavailable", { email, answers });
      return NextResponse.json({
        success: true,
        message: "Respuestas registradas.",
      });
    }

    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .update({
        works_independently: worksIndependently ?? null,
        current_goal: currentGoal ?? null,
        current_goal_other:
          currentGoal === "other" ? (currentGoalOther ?? null) : null,
        topic_interest: topicInterest ?? null,
        topic_interest_other:
          topicInterest === "other" ? (topicInterestOther ?? null) : null,
        survey_completed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("email", email)
      .select("id");

    if (error) {
      console.error("[survey]", error.message);
      return NextResponse.json(
        { success: false, message: "No se pudieron guardar las respuestas." },
        { status: 500 },
      );
    }

    if (!data?.length) {
      console.warn("[survey] no subscriber found for email", email);
    }

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
