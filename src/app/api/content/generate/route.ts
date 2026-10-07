import { NextRequest, NextResponse } from "next/server";
import { AIServiceProvider } from "@/lib/ai/provider";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, topic, audience, tone, length, keywords, cta, projectName } = body;

    const ai = new AIServiceProvider();
    const content = await ai.generateContentItem({
      type,
      topic,
      audience,
      tone,
      length,
      keywords,
      cta,
      projectName: projectName || "UrbanNest Interiors",
    });

    return NextResponse.json({ content });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Content generation failed: " + err.message },
      { status: 500 }
    );
  }
}
