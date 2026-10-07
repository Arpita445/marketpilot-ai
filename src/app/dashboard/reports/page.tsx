"use client";

import { useState } from "react";
import {
  DEMO_PROJECT,
  DEMO_POSITIONING,
  DEMO_PERSONAS,
  DEMO_SEO_AUDIT,
  DEMO_KEYWORDS,
  DEMO_COMPETITORS,
  DEMO_ACTION_PLAN,
} from "@/lib/ai/mock-engine";
import { FileText, Download, Printer, Sparkles, CheckCircle2, ShieldCheck, Globe, Building2 } from "lucide-react";

export default function ReportGeneratorPage() {
  const [generating, setGenerating] = useState(false);
  const project = DEMO_PROJECT;
  const positioning = DEMO_POSITIONING;

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Action Bar (Hidden when printing) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300 border border-brand-500/20 mb-1">
            <FileText className="h-3.5 w-3.5" />
            <span>Executive Report Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GTM & SEO Executive Growth Report
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Generate and export client-ready PDF strategy reports containing complete audit and campaign intelligence.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrintPDF}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
          >
            <Printer className="h-4 w-4" />
            <span>Export / Print PDF Report</span>
          </button>
        </div>
      </div>

      {/* PRINTABLE REPORT DOCUMENT CONTAINER */}
      <div className="glass-card p-8 sm:p-12 rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 max-w-5xl mx-auto space-y-10 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        
        {/* Cover Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="h-4 w-4" />
              <span>MARKETPILOT AI — EXECUTIVE STRATEGY REPORT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              {project.name} Growth Roadmap
            </h1>
            <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
              Generated on {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          <div className="text-right">
            <div className="text-xs font-bold text-slate-400 uppercase">Overall Health Score</div>
            <div className="text-4xl font-black text-emerald-400 print:text-emerald-700">{project.healthScore} / 100</div>
          </div>
        </div>

        {/* 1. EXECUTIVE SUMMARY */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 pb-2">
            1. Executive Summary
          </h2>
          <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
            MarketPilot AI performed a comprehensive Go-To-Market and Search Engine Optimization audit for <strong>{project.name}</strong> ({project.productName}). The business exhibits strong baseline product-market fit with an overall GTM Readiness score of <strong>85%</strong>. By targeting high-intent localized search terms such as <em>"interior designer nagpur"</em> and deploying guaranteed 45-day handover messaging, {project.name} is positioned to capture an estimated 40+ inbound client consultations per month.
          </p>
        </div>

        {/* 2. PRODUCT OVERVIEW & POSITIONING */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 pb-2">
            2. Product Overview & Positioning
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">Product Name</span>
              <span className="text-white font-semibold print:text-black">{project.productName}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">Industry</span>
              <span className="text-white font-semibold print:text-black">{project.industry}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">Target Location</span>
              <span className="text-white font-semibold print:text-black">{project.location}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">Primary Goal</span>
              <span className="text-white font-semibold print:text-black">{project.primaryGoal}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 print:bg-gray-100 print:text-black">
            <span className="font-bold text-brand-400 block mb-1">One-Line Value Proposition:</span>
            "{positioning.oneLineValProp}"
          </div>
        </div>

        {/* 3. TARGET AUDIENCE & PERSONAS */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 pb-2">
            3. Customer Personas & Buyer Intelligence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DEMO_PERSONAS.map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2 print:bg-gray-100 print:text-black">
                <span className="text-[10px] font-bold text-brand-400 uppercase">{p.type} Segment</span>
                <h3 className="font-bold text-white print:text-black">{p.title}</h3>
                <p className="text-slate-300 print:text-gray-700 text-[11px] leading-relaxed">{p.problem}</p>
                <div className="pt-2 border-t border-slate-800 font-mono text-[10px] text-emerald-400 print:text-emerald-700">
                  Channel: {p.preferredChannels.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. KEYWORD & SEO AUDIT */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 pb-2">
            4. SEO Audit & High-Intent Keyword Matrix
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">SEO Score</span>
              <span className="text-white font-bold print:text-black">{DEMO_SEO_AUDIT.score} / 100</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">Technical SEO</span>
              <span className="text-white font-bold print:text-black">{DEMO_SEO_AUDIT.categories.technical}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">On-Page Score</span>
              <span className="text-white font-bold print:text-black">{DEMO_SEO_AUDIT.categories.onPage}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
              <span className="text-slate-400 block text-[10px]">High Intent Keywords</span>
              <span className="text-white font-bold print:text-black">{DEMO_KEYWORDS.length} Opportunities</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-2">Target Keyword</th>
                  <th className="py-2">Intent</th>
                  <th className="py-2">Est. Volume</th>
                  <th className="py-2">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {DEMO_KEYWORDS.map((k) => (
                  <tr key={k.id}>
                    <td className="py-2 font-mono text-white print:text-black">{k.keyword}</td>
                    <td className="py-2 text-slate-300 print:text-gray-700">{k.searchIntent}</td>
                    <td className="py-2 text-slate-300 print:text-gray-700 font-mono">{k.estMonthlyVolume} / mo</td>
                    <td className="py-2 font-semibold text-emerald-400 print:text-emerald-700">{k.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. COMPETITOR ANALYSIS & WIN PLAYBOOK */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 pb-2">
            5. Competitor Analysis & Winning Playbook
          </h2>

          <div className="space-y-3 text-xs">
            {DEMO_COMPETITORS.map((comp) => (
              <div key={comp.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 print:bg-gray-100">
                <div className="font-bold text-white print:text-black mb-1">{comp.name}</div>
                <p className="text-slate-300 print:text-gray-700 mb-2">{comp.positioning}</p>
                <div className="text-emerald-400 print:text-emerald-700 font-medium">
                  <strong>Win Strategy:</strong> {comp.winStrategy}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. 30-DAY ACTION PLAN */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white print:text-black border-b border-slate-800 pb-2">
            6. 30-Day Growth Execution Action Plan
          </h2>

          <div className="space-y-2 text-xs">
            {DEMO_ACTION_PLAN.map((task) => (
              <div key={task.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between print:bg-gray-100">
                <div>
                  <span className="font-mono text-slate-400 text-[10px] mr-2">Week {task.week}:</span>
                  <span className="font-semibold text-white print:text-black">{task.title}</span>
                </div>
                <span className="text-[10px] font-bold text-brand-400 print:text-blue-700">{task.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info inside report */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 print:text-gray-500">
          <span>MarketPilot AI Growth Architecture</span>
          <span>Page 1 of 1</span>
        </div>

      </div>
    </div>
  );
}
