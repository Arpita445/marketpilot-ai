"use client";

import { useState } from "react";
import { DEMO_CONTENT_OPPORTUNITIES, DEMO_PROJECT } from "@/lib/ai/mock-engine";
import {
  PenTool,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Download,
  Minimize2,
  Maximize2,
  Briefcase,
  Flame,
  FileText,
  Lightbulb,
} from "lucide-react";

export default function ContentStudioPage() {
  const [contentType, setContentType] = useState("Blog Post");
  const [topic, setTopic] = useState("Complete Cost Breakdown: 3BHK Home Interior Design in Nagpur");
  const [audience, setAudience] = useState("New Homeowners & Tech Professionals");
  const [tone, setTone] = useState("Professional & Persuasive");
  const [length, setLength] = useState("Medium (~600 words)");
  const [keywords, setKeywords] = useState("3bhk interior design cost nagpur, modular kitchen nagpur");
  const [cta, setCta] = useState("Book your free 3D VR design consultation today!");

  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initial Content Editor Text
  const [generatedText, setGeneratedText] = useState(`# Complete Cost Breakdown: 3BHK Home Interior Design in Nagpur (2026 Guide)

**Target Audience:** New Homeowners & Tech Professionals | **Tone:** Professional & Persuasive

---

## Turn Your Flat Into a Masterpiece Without Hidden Overruns

Are you moving into a newly handed-over 3BHK apartment in Nagpur? 

Planning home interiors can feel overwhelming. Unreliable local contractors, hidden material price hikes, and endless construction delays often turn a dream home into a stressful ordeal. At **UrbanNest Interiors**, we believe home design should be transparent, exciting, and delivered on schedule.

### Estimated 3BHK Cost Breakdown in Nagpur:
1. **Essential Package (₹4.5L - ₹6.5L):** High-grade modular kitchen, bedroom wardrobes, basic false ceiling, and TV unit.
2. **Premium Package (₹7.5L - ₹11L):** Customized Scandinavian woodwork, quartz kitchen countertops, ambient LED lighting, and premium veneer panelling.
3. **Luxury Bespoke Villa (₹12L+):** Complete architectural 3D layout, smart home automation, Italian marble accents, and imported furniture.

---

### The UrbanNest 45-Day Delivery Guarantee
Unlike traditional carpenters who take 6+ months, our factory-crafted modular systems arrive site-ready and assemble in under 45 days—backed by a financial penalty guarantee.

> *"UrbanNest delivered our 3BHK in Besa 5 days ahead of schedule with zero unexpected cost add-ons."* — **Anand & Priya K.**

---

### Ready to Visualize Your Dream Home?
Book your free 3D VR design consultation today and get an instant cost estimate!
`);

  const contentTypes = [
    "Blog Post",
    "Social Media Post",
    "LinkedIn Post",
    "Instagram Caption",
    "Advertisement",
    "Landing Page",
    "Product Description",
    "Email",
    "SEO Meta Description",
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);

    try {
      const res = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: contentType,
          topic,
          audience,
          tone,
          length,
          keywords,
          cta,
          projectName: DEMO_PROJECT.name,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setGeneratedText(data.content);
      }
    } catch (err) {
      console.warn("Content generation API call error, using local template");
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShorten = () => {
    const lines = generatedText.split("\n");
    setGeneratedText(lines.slice(0, Math.max(8, Math.floor(lines.length * 0.6))).join("\n"));
  };

  const handleExpand = () => {
    setGeneratedText(
      (prev) =>
        prev +
        `\n\n### Frequently Asked Questions\n**Q: How long does the 3D design phase take?**\nA: Initial 3D renders are ready within 72 hours of site measurement.\n\n**Q: Are materials termite-proof?**\nA: Yes, all boiling-water-resistant (BWR) plywood carries a 10-year factory warranty.`
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 border border-purple-500/20 mb-1">
            <PenTool className="h-3.5 w-3.5" />
            <span>AI Copywriting Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            AI Content Studio
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Generate high-converting blogs, ad copy, social posts, emails, and landing page scripts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: GENERATOR FORM */}
        <div className="lg:col-span-5 glass-card p-6 rounded-2xl border border-slate-800">
          <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>Content Prompt Configuration</span>
          </h2>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Content Format</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              >
                {contentTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Topic / Headline</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Audience</label>
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Tone of Voice</label>
                <input
                  type="text"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Target Keywords</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-xs text-white focus:border-brand-500 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Call-To-Action (CTA)</label>
              <input
                type="text"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={generating}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-600/25 hover:from-purple-500 hover:to-indigo-500 transition-all"
            >
              {generating ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              <span>{generating ? "Generating Draft..." : "Generate Content"}</span>
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: EDITABLE EDITOR & ACTION BUTTONS */}
        <div className="lg:col-span-7 glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            {/* Editor Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-4">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-brand-400" />
                <span>Live Interactive Editor</span>
              </span>

              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white flex items-center gap-1"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>

                <button
                  onClick={handleShorten}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white flex items-center gap-1"
                >
                  <Minimize2 className="h-3.5 w-3.5 text-amber-400" />
                  <span>Shorten</span>
                </button>

                <button
                  onClick={handleExpand}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white flex items-center gap-1"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Expand</span>
                </button>
              </div>
            </div>

            {/* Editable Text Area */}
            <textarea
              value={generatedText}
              onChange={(e) => setGeneratedText(e.target.value)}
              rows={18}
              className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-500 leading-relaxed resize-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Word count: ~{generatedText.split(" ").length} words</span>
            <span className="text-emerald-400 font-semibold">SEO & Keyword Optimized</span>
          </div>
        </div>

      </div>

      {/* SECTION 21: CONTENT OPPORTUNITY FINDER */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Content Opportunity Finder</h2>
            <p className="text-xs text-slate-400">High-potential topics based on target keywords and search gap analysis</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEMO_CONTENT_OPPORTUNITIES.map((opp) => (
            <div key={opp.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                  Format: {opp.suggestedFormat}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">{opp.estimatedTrafficPotential}</span>
              </div>

              <h3 className="text-xs font-bold text-white leading-snug">{opp.topic}</h3>

              <div className="text-[11px] text-slate-400">
                Target Keyword: <span className="font-mono text-brand-300">{opp.targetKeyword}</span>
              </div>

              <button
                onClick={() => {
                  setTopic(opp.topic);
                  setKeywords(opp.targetKeyword);
                }}
                className="w-full text-center text-xs font-semibold text-brand-400 hover:underline pt-2 border-t border-slate-800"
              >
                Use This Prompt →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
