"use client";

import { DEMO_PERSONAS } from "@/lib/ai/mock-engine";
import { Users, MapPin, Target, Sparkles, MessageSquare, Compass, CheckCircle2 } from "lucide-react";

export default function CustomerPersonasPage() {
  const personas = DEMO_PERSONAS;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20 mb-1">
            <Users className="h-3.5 w-3.5" />
            <span>Audience Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Customer Personas & Buyer Profiles
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            AI-mapped buyer archetypes, buying triggers, pain points, and personalized copywriting scripts.
          </p>
        </div>
      </div>

      {/* PERSONA CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                  persona.type === "Primary"
                    ? "bg-brand-500/20 text-brand-300 border-brand-500/30"
                    : persona.type === "Secondary"
                    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                }`}>
                  {persona.type} Segment
                </span>
                <span className="text-xs font-mono text-slate-400">Age: {persona.ageRange}</span>
              </div>

              <h2 className="text-lg font-bold text-white mb-2">{persona.title}</h2>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                <span>{persona.location}</span>
              </div>

              {/* Persona Fields */}
              <div className="space-y-4 text-xs">
                
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">
                    Core Problem & Need
                  </span>
                  <p className="text-slate-200 leading-relaxed">{persona.problem}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">
                    Customer Goals
                  </span>
                  <p className="text-slate-200 leading-relaxed">{persona.goals}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-rose-400 block mb-1 uppercase tracking-wider text-[10px]">
                    Pain Points & Anxiety
                  </span>
                  <p className="text-slate-200 leading-relaxed">{persona.painPoints}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-1 uppercase tracking-wider text-[10px]">
                    Buying Trigger Event
                  </span>
                  <p className="text-slate-200 leading-relaxed">{persona.buyingTriggers}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-400 block mb-2 uppercase tracking-wider text-[10px]">
                    Preferred Channels
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {persona.preferredChannels.map((channel, cIdx) => (
                      <span key={cIdx} className="bg-slate-850 text-slate-300 px-2 py-1 rounded border border-slate-800 text-[11px]">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Recommended Message */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span>Recommended Messaging Framework</span>
              </span>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-xs italic font-medium">
                "{persona.recommendedMessage}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
