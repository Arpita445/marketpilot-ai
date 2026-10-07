import { NextRequest, NextResponse } from "next/server";
import { scrapeAndAnalyzeURL } from "@/lib/scraper/web-scraper";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const auditResult = await scrapeAndAnalyzeURL(url);
    return NextResponse.json(auditResult);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Something went wrong while analyzing this website. Please check the URL and try again." },
      { status: 500 }
    );
  }
}
