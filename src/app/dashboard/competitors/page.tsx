"use client";

import { useState } from "react";
import { DEMO_COMPETITORS, DEMO_PROJECT } from "@/lib/ai/mock-engine";
import { CompetitorInsight } from "@/lib/types";
import { Swords, Plus, Globe, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CompetitorAnalysisPage() {
  const [competitors, setCompetitors] = useState<CompetitorInsight[]>(DEMO_COMPETITORS);
  const [newUrl, setNewUrl] = useState("");
  const [adding, setAdding] = useState(false);

  const handleAddCompetitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;
    setAdding(true);

    setTimeout(() => {
      const hostname = newUrl.replace("https://", "").replace("http://", "").split("/")[0];
      const newComp: CompetitorInsight = {
        id: `comp-${Date.now()}`,
        name: hostname || "New Competitor",
        url: newUrl,
        seoScore: 76,
        contentScore: 80,
        keywordScore: 74,
        presenceScore: 78,
        positioning: "Regional competitor offering general services.",
        strengths: ["Local brand history"],
        weaknesses: ["Outdated mobile experience", "Slow quote responses"],
        winStrategy: "Leverage guaranteed 45-day handover and interactive 3D VR previews.",
      };

      setCompetitors([...competitors, newComp]);
      setNewUrl("");
      setAdding(false);
    }, 600);
  };

  const project = DEMO_PROJECT;

  return (
    <div className="space-y-8">
      {/* Header & Add Competitor Bar */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-300 border border-rose-500/20 mb-1">
              <Swords className="h-3.5 w-3.5" />
              <span>Competitive Intelligence Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Competitor Research & Opportunity Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Benchmark your positioning, SEO scores, and content strategy against market rivals.
            </p>
          </div>
        </div>

        <form onSubmit={handleAddCompetitor} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Globe className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Add Competitor Website URL (e.g. https://competitor.com)"
              required
              className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={adding}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all shrink-0"
          >
            <Plus className="h-4 w-4" />
            <span>{adding ? "Analyzing Rival..." : "Add Competitor"}</span>
          </button>
        </form>
      </div>

      {/* COMPARISON SCORE MATRIX TABLE */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-5 border-b border-slate-800 bg-slate-900/80">
          <h2 className="text-base font-bold text-white">Side-by-Side Performance Comparison</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/40 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                <th className="p-4">Strategy Factor</th>
                <th className="p-4 bg-brand-950/40 text-brand-300 border-x border-brand-500/20 font-extrabold text-sm">
                  {project.name} (Your Site)
                </th>
                {competitors.map((comp) => (
                  <th key={comp.id} className="p-4">
                    <div className="text-white font-bold">{comp.name}</div>
                    <div className="text-[10px] text-slate-400 font-normal truncate max-w-[140px]">{comp.url}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              
              <tr>
                <td className="p-4 font-bold text-slate-300">Technical SEO Score</td>
                <td className="p-4 bg-brand-950/20 border-x border-brand-500/20 font-extrabold text-brand-400 text-sm">
                  {project.seoScore} / 100
                </td>
                {competitors.map((comp) => (
                  <td key={comp.id} className="p-4 font-semibold text-white">
                    {comp.seoScore} / 100
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-300">Content Strategy Quality</td>
                <td className="p-4 bg-brand-950/20 border-x border-brand-500/20 font-extrabold text-brand-400 text-sm">
                  {project.contentScore} / 100
                </td>
                {competitors.map((comp) => (
                  <td key={comp.id} className="p-4 font-semibold text-white">
                    {comp.contentScore} / 100
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-300">Keyword Coverage</td>
                <td className="p-4 bg-brand-950/20 border-x border-brand-500/20 font-extrabold text-brand-400 text-sm">
                  82 / 100
                </td>
                {competitors.map((comp) => (
                  <td key={comp.id} className="p-4 font-semibold text-white">
                    {comp.keywordScore} / 100
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-300">Online Local Presence</td>
                <td className="p-4 bg-brand-950/20 border-x border-brand-500/20 font-extrabold text-brand-400 text-sm">
                  {project.presenceScore} / 100
                </td>
                {competitors.map((comp) => (
                  <td key={comp.id} className="p-4 font-semibold text-white">
                    {comp.presenceScore} / 100
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* "WHERE YOU CAN WIN" STRATEGIC PLAYBOOK */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Where You Can Win (Strategic Playbook)</h2>
            <p className="text-xs text-slate-400">Actionable recommendations to out-position competitors and capture market share</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competitors.map((comp, idx) => (
            <div key={comp.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-brand-400">Vs. {comp.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">Angle #{idx + 1}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 mb-3">
                  <span className="font-bold text-slate-400 block mb-1">Rival Positioning:</span>
                  {comp.positioning}
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 mb-4">
                  <div className="font-semibold text-rose-400 text-[11px]">Rival Weaknesses:</div>
                  {comp.weaknesses.map((w, wIdx) => (
                    <div key={wIdx} className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Winning Strategy:
                </span>
                <p className="text-xs text-emerald-200 font-medium leading-relaxed">
                  {comp.winStrategy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
