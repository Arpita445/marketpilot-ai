"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Sparkles, Brain, Cpu, Search, Target, FileText, Globe } from "lucide-react";

interface ProgressiveAnalysisLoaderProps {
  projectName: string;
  websiteUrl?: string;
  onComplete: () => void;
}

const STAGES = [
  { id: 1, label: "Understanding product & positioning", icon: Brain },
  { id: 2, label: "Identifying target audience segments", icon: Target },
  { id: 3, label: "Analyzing competitive landscape", icon: Cpu },
  { id: 4, label: "Generating detailed customer personas", icon: Sparkles },
  { id: 5, label: "Researching high-intent search keywords", icon: Search },
  { id: 6, label: "Building Go-To-Market channel matrix", icon: Target },
  { id: 7, label: "Scanning web page SEO tags & meta info", icon: Globe },
  { id: 8, label: "Preparing AI content strategy framework", icon: FileText },
  { id: 9, label: "Finalizing 30-day growth action plan", icon: CheckCircle2 },
];

export default function ProgressiveAnalysisLoader({
  projectName,
  websiteUrl,
  onComplete,
}: ProgressiveAnalysisLoaderProps) {
  const [currentStage, setCurrentStage] = useState(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < STAGES.length) {
          setCompletedStages((completed) => [...completed, prev]);
          return prev + 1;
        } else {
          setCompletedStages((completed) => Array.from({ length: STAGES.length }, (_, i) => i + 1));
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete]);

  const progressPercentage = Math.round((completedStages.length / STAGES.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Radial Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-500/15 blur-3xl animate-pulse-glow" />

      <div className="w-full max-w-lg glass-card p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-xl shadow-brand-500/30">
            <Brain className="h-7 w-7 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">MarketPilot AI Engine</h2>
          <p className="text-xs text-slate-400 mt-1">
            Analyzing <span className="text-brand-300 font-semibold">{projectName}</span> {websiteUrl ? `(${websiteUrl})` : ""}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
            <span>Analysis Progress</span>
            <span className="text-brand-400 font-mono">{progressPercentage}%</span>
          </div>
          <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-brand-600 via-indigo-500 to-emerald-400 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Stage List */}
        <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
          {STAGES.map((stage) => {
            const isDone = completedStages.includes(stage.id);
            const isCurrent = currentStage === stage.id && !isDone;
            const Icon = stage.icon;

            return (
              <div
                key={stage.id}
                className={`flex items-center gap-3.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                  isDone
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : isCurrent
                    ? "border-brand-500 bg-brand-500/15 text-white shadow-md ring-1 ring-brand-500/30"
                    : "border-slate-800/60 bg-slate-900/40 text-slate-500"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="h-4 w-4 text-brand-400 animate-spin shrink-0" />
                ) : (
                  <Icon className="h-4 w-4 text-slate-600 shrink-0" />
                )}

                <span className="flex-1">{stage.label}</span>

                {isDone && <span className="text-[10px] uppercase font-bold text-emerald-400">Ready</span>}
                {isCurrent && <span className="text-[10px] uppercase font-bold text-brand-400 animate-pulse">Scanning</span>}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center text-[11px] text-slate-400">
          Synthesizing structured strategy JSON & generating GTM roadmap...
        </div>

      </div>
    </div>
  );
}
