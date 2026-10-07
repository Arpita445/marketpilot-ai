"use client";

import { useState } from "react";
import { 
  Target, Users, Search, Key, Swords, PenTool, Calendar, BarChart3, ArrowRight, Check 
} from "lucide-react";

const features = [
  {
    id: "gtm",
    icon: Target,
    title: "AI GTM Strategy",
    summary: "Generate structured Go-To-Market plans with channel readiness scores.",
    details: [
      "Product positioning & 1-line value prop",
      "Scored marketing channels (0-100) with rationale",
      "Key differentiators & pitch framework",
    ],
  },
  {
    id: "personas",
    icon: Users,
    title: "Customer Intelligence",
    summary: "Identify target audience segments and detailed buyer personas.",
    details: [
      "Primary, secondary & emerging segments",
      "Demographics, pain points & buying triggers",
      "Recommended copy messages per persona",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Analyzer",
    summary: "Analyze website pages and generate technical & on-page recommendations.",
    details: [
      "Live URL scraping & meta tag evaluation",
      "Side-by-side Current vs Recommended titles",
      "Technical, content & internal link audits",
    ],
  },
  {
    id: "keywords",
    icon: Key,
    title: "Keyword Intelligence",
    summary: "Discover high-intent search queries and intent category tags.",
    details: [
      "Commercial, Transactional, Informational intent",
      "Volume estimates, competition & priority tags",
      "Target page mapping recommendations",
    ],
  },
  {
    id: "competitors",
    icon: Swords,
    title: "Competitor Insights",
    summary: "Compare positioning, content quality, and SEO opportunities.",
    details: [
      "Side-by-side competitor comparison matrix",
      "Strengths & weaknesses analysis",
      "'Where You Can Win' strategic playbook",
    ],
  },
  {
    id: "content",
    icon: PenTool,
    title: "AI Content Studio",
    summary: "Generate blogs, social posts, ads, and landing page copy in seconds.",
    details: [
      "9 content formats (Blogs, LinkedIn, Instagram, Email)",
      "Interactive editor with Expand/Shorten actions",
      "Tone & target keyword optimization",
    ],
  },
  {
    id: "campaigns",
    icon: Calendar,
    title: "Campaign Planner",
    summary: "Convert strategy into actionable multi-week marketing campaigns.",
    details: [
      "Budget, dates, channel & CTA setup",
      "AI generated weekly action timelines",
      "Status toggles & completion tracking",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Growth Analytics",
    summary: "Monitor campaign performance, traffic, and pipeline revenue.",
    details: [
      "Interactive Recharts visualization",
      "Lead conversion funnels & channel share",
      "Stripe & Google Search Console ready",
    ],
  },
];

export default function FeaturesGrid() {
  const [activeId, setActiveId] = useState("gtm");

  return (
    <section id="features" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Features & Capabilities</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            An End-to-End Operating System for Digital Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Stop stitching together 10 fragmented tools. MarketPilot AI unites all growth disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            const isSelected = activeId === feat.id;

            return (
              <div
                key={feat.id}
                onClick={() => setActiveId(feat.id)}
                className={`glass-card p-6 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-brand-500 bg-slate-900/90 shadow-xl shadow-brand-500/10 ring-1 ring-brand-500/40"
                    : "border-slate-800 hover:border-slate-700 bg-slate-950/60"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${isSelected ? "bg-brand-500 text-white" : "bg-slate-900 text-brand-400 border border-slate-800"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-bold uppercase tracking-wide text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                      Active Module
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{feat.summary}</p>

                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {feat.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
