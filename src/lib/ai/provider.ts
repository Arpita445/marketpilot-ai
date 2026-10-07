import OpenAI from "openai";
import {
  Project,
  ProductPositioning,
  CustomerPersona,
  SEOAuditResult,
  KeywordItem,
  CompetitorInsight,
  ContentOpportunity,
  CampaignItem,
  ActionTask,
} from "../types";
import { generateMockStrategyForProject } from "./mock-engine";

export class AIServiceProvider {
  private client: OpenAI | null = null;
  private isDemoMode: boolean = true;

  constructor(apiKey?: string) {
    const key = apiKey || process.env.OPENAI_API_KEY;
    if (key && key.trim() !== "" && !key.includes("your-openai-api-key")) {
      try {
        this.client = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });
        this.isDemoMode = false;
      } catch (err) {
        console.warn("Failed to initialize OpenAI client, using Demo Mode:", err);
        this.isDemoMode = true;
      }
    } else {
      this.isDemoMode = true;
    }
  }

  public getIsDemoMode(): boolean {
    return this.isDemoMode;
  }

  public async generateFullStrategy(project: Project): Promise<{
    positioning: ProductPositioning;
    personas: CustomerPersona[];
    seoAudit: SEOAuditResult;
    keywords: KeywordItem[];
    competitors: CompetitorInsight[];
    contentOpportunities: ContentOpportunity[];
    actionPlan: ActionTask[];
  }> {
    if (this.isDemoMode || !this.client) {
      // Always generate strategy based on the user's actual project data
      return generateMockStrategyForProject(project);
    }

    try {
      const prompt = `
You are MarketPilot AI, an elite GTM, SEO, and Growth Strategy Copilot.
Analyze this product and generate a structured growth strategy in strict JSON format:
Product Name: ${project.productName}
Industry: ${project.industry}
Location: ${project.location}
Target Audience: ${project.customerInterests}
Customer Pain Points: ${project.customerPainPoints}
Goal: ${project.primaryGoal}
Website URL: ${project.websiteUrl || "N/A"}

Format JSON with key properties:
{
  "oneLineValProp": "...",
  "shortPitch": "...",
  "detailedPositioning": "...",
  "keyDifferentiators": ["...", "..."],
  "marketingChannels": [{"name": "...", "score": 90, "rationale": "...", "category": "Search"}],
  "personas": [{"id": "p1", "title": "...", "type": "Primary", "ageRange": "...", "location": "...", "problem": "...", "goals": "...", "painPoints": "...", "buyingTriggers": "...", "preferredChannels": ["..."], "recommendedMessage": "..."}],
  "keywords": [{"id": "k1", "keyword": "...", "searchIntent": "Commercial", "competition": "High", "relevance": 95, "priority": "High", "recommendedPage": "...", "estMonthlyVolume": 1200}],
  "competitors": [{"id": "c1", "name": "...", "url": "...", "seoScore": 80, "contentScore": 85, "keywordScore": 80, "presenceScore": 82, "positioning": "...", "strengths": ["..."], "weaknesses": ["..."], "winStrategy": "..."}],
  "contentOpportunities": [{"id": "co1", "topic": "...", "searchIntent": "...", "targetKeyword": "...", "priority": "High", "suggestedFormat": "Blog Post", "estimatedTrafficPotential": "..."}]
}
`;

      const response = await this.client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Respond ONLY with valid JSON." },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
      });

      const parsed = JSON.parse(response.choices[0].message.content || "{}");
      const generatedMock = generateMockStrategyForProject(project);

      return {
        positioning: {
          product: project.productName,
          targetAudience: project.customerInterests || generatedMock.positioning.targetAudience,
          coreProblem: project.customerPainPoints || generatedMock.positioning.coreProblem,
          valueProposition: parsed.oneLineValProp || generatedMock.positioning.valueProposition,
          differentiator: parsed.keyDifferentiators?.[0] || generatedMock.positioning.differentiator,
          oneLineValProp: parsed.oneLineValProp || generatedMock.positioning.oneLineValProp,
          shortPitch: parsed.shortPitch || generatedMock.positioning.shortPitch,
          detailedPositioning: parsed.detailedPositioning || generatedMock.positioning.detailedPositioning,
          keyDifferentiators: parsed.keyDifferentiators || generatedMock.positioning.keyDifferentiators,
          marketingChannels: parsed.marketingChannels || generatedMock.positioning.marketingChannels,
        },
        personas: parsed.personas || generatedMock.personas,
        seoAudit: generatedMock.seoAudit,
        keywords: parsed.keywords || generatedMock.keywords,
        competitors: parsed.competitors || generatedMock.competitors,
        contentOpportunities: parsed.contentOpportunities || generatedMock.contentOpportunities,
        actionPlan: generatedMock.actionPlan,
      };
    } catch (err) {
      console.warn("AI generation failed, falling back to mock engine:", err);
      return generateMockStrategyForProject(project);
    }
  }

  public async generateContentItem(params: {
    type: string;
    topic: string;
    audience: string;
    tone: string;
    length: string;
    keywords: string;
    cta: string;
    projectName: string;
  }): Promise<string> {
    if (this.isDemoMode || !this.client) {
      return this.getMockGeneratedContent(params);
    }

    try {
      const response = await this.client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert copywriter and SEO content creator.",
          },
          {
            role: "user",
            content: `Write a high-converting ${params.type} for product "${params.projectName}".
Topic: ${params.topic}
Audience: ${params.audience}
Tone: ${params.tone}
Length: ${params.length}
Keywords: ${params.keywords}
Call to Action: ${params.cta}`,
          },
        ],
        temperature: 0.8,
      });

      return response.choices[0].message.content || this.getMockGeneratedContent(params);
    } catch (err) {
      return this.getMockGeneratedContent(params);
    }
  }

  private getMockGeneratedContent(params: {
    type: string;
    topic: string;
    audience: string;
    tone: string;
    keywords: string;
    cta: string;
    projectName: string;
  }): string {
    const kw = params.keywords || "high quality, professional, 45-day handover";
    return `# ${params.topic}

**Target Audience:** ${params.audience} | **Tone:** ${params.tone} | **Product:** ${params.projectName}

---

## Turn Your Space Into a Masterpiece

Are you tired of endless contractor delays, unexpected price escalations, and uninspired design templates? 

At **${params.projectName}**, we believe your space should be a direct reflection of your lifestyle, ambition, and standard of quality. Whether you're moving into a modern 3BHK home or renovating your commercial space, our architectural team delivers bespoke modular craftsmanship with an industry-first guarantee.

### Why Homeowners Choose Us:
- 🏢 **3D VR Pre-visualization:** Walk through your home virtually before a single nail is driven.
- ⚡ **Guaranteed 45-Day Handover:** Backed by financial penalty coverage for absolute peace of mind.
- 🛡️ **10-Year Comprehensive Warranty:** Factory-direct modular materials engineered for durability.

> *"UrbanNest transformed our empty 3BHK flat into a Scandinavian luxury haven in under 40 days. The transparent pricing saved us over 15% compared to local quotes."* — **Siddharth R., Homeowner**

### Key Takeaways:
1. Always insist on transparent fixed 3D pricing before signing work orders.
2. Verify factory modular construction for water-resistant and termite-proof finishes.
3. Choose localized architects who handle site supervisors directly.

---

### **Ready to Elevate Your Property?**
${params.cta || "Book your free 3D design consultation today and get an instant cost estimate!"}

*Keywords Targeted:* ${kw}
`;
  }
}
