import { NextRequest, NextResponse } from "next/server";
import { INITIAL_PROJECTS } from "@/lib/db/storage";

export async function GET() {
  return NextResponse.json({ projects: INITIAL_PROJECTS });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProject = {
      id: `proj-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
    };
    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
