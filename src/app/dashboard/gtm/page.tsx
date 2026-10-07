"use client";

import { useProject } from "@/lib/context/ProjectContext";
import { Target, CheckCircle2, ShieldCheck, Zap, Sparkles, TrendingUp, Layers, Compass } from "lucide-react";

export default function GTMStrategyPage() {
  const { strategyData } = useProject();
  const positioning = strategyData.positioning;

  return (
    <div className="space-y-8">
      
      {/* Module Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300 border border-brand-500/20 mb-1">
            <Target className="h-3.5 w-3.5" />
            <span>Go-To-Market Architecture</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GTM Strategy & Market Positioning
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Structured strategy framework for client acquisition, channel selection, and value proposition messaging.
          </p>
        </div>
      </div>

      {/* PRODUCT POSITIONING CARD */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Compass className="h-5 w-5 text-brand-400" />
          <span>Core Product Positioning Framework</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Product Name</div>
            <div className="text-sm font-semibold text-white">{positioning.product}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Target Market Niche</div>
            <div className="text-sm font-semibold text-white">{positioning.targetAudience}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">Core Pain Point Solved</div>
            <div className="text-sm font-medium text-slate-200">{positioning.coreProblem}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Primary Value Proposition</div>
            <div className="text-sm font-medium text-slate-200">{positioning.valueProposition}</div>
          </div>

        </div>

        {/* Detailed Positioning Statements */}
        <div className="mt-8 space-y-6 pt-6 border-t border-slate-800">
          
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">One-Line Value Proposition</h3>
            <div className="p-4 rounded-xl bg-brand-950/40 border border-brand-500/30 text-brand-200 text-sm sm:text-base font-semibold">
              "{positioning.oneLineValProp}"
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Elevator Pitch</h3>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {positioning.shortPitch}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Detailed Positioning Statement</h3>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {positioning.detailedPositioning}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Strategic Differentiators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {positioning.keyDifferentiators.map((diff, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{diff}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MARKETING CHANNELS READINESS SCORES */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
              <span>Acquisition Channel Readiness Matrix (0-100)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Scored based on search intent, buyer behavior, and cost-per-acquisition fit</p>
          </div>
        </div>

        <div className="space-y-4">
          {positioning.marketingChannels.map((channel, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center font-bold text-brand-400 text-xs">
                    #{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{channel.name}</h3>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                      Category: {channel.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-white">{channel.score}</span>
                    <span className="text-xs text-slate-400"> / 100</span>
                  </div>
                  <div className="w-24 bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full ${
                        channel.score >= 85 ? "bg-emerald-400" : channel.score >= 75 ? "bg-brand-500" : "bg-amber-400"
                      }`}
                      style={{ width: `${channel.score}%` }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                <span className="font-semibold text-slate-400">Strategic Rationale: </span>
                {channel.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
