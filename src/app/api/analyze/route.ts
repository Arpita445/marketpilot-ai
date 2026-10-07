import { NextRequest, NextResponse } from "next/server";
import { AIServiceProvider } from "@/lib/ai/provider";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { project } = body;

    if (!project || !project.name) {
      return NextResponse.json({ error: "Invalid project parameters" }, { status: 400 });
    }

    const ai = new AIServiceProvider();
    const strategy = await ai.generateFullStrategy(project);

    return NextResponse.json(strategy);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Something went wrong while analyzing project: " + err.message },
      { status: 500 }
    );
  }
}
