"use client";

import { useState } from "react";
import { DEMO_ACTION_PLAN, DEMO_PROJECT } from "@/lib/ai/mock-engine";
import { ActionTask } from "@/lib/types";
import { Calendar, Plus, CheckCircle2, Clock, Zap, ArrowRight, Check, Trash2, Edit3 } from "lucide-react";

export default function CampaignPlannerPage() {
  const [tasks, setTasks] = useState<ActionTask[]>(DEMO_ACTION_PLAN);
  
  // Campaign Form State
  const [campaignName, setCampaignName] = useState("Q4 Luxury Home Interior Acquisition Sprint");
  const [goal, setGoal] = useState("Acquire 40 Qualified Lead Consultations");
  const [budget, setBudget] = useState("$3,500");
  const [startDate, setStartDate] = useState("2026-10-15");
  const [endDate, setEndDate] = useState("2026-11-15");
  const [channels, setChannels] = useState("Google Search, Instagram Reels, Local Maps");
  const [cta, setCta] = useState("Book Free 3D Design Consultation");

  const [generating, setGenerating] = useState(false);

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          const nextStatus = t.status === "COMPLETED" ? "PENDING" : t.status === "PENDING" ? "IN_PROGRESS" : "COMPLETED";
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  const handleGenerateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
    }, 700);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20 mb-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Campaign & Roadmap Architecture</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Campaign Planner & 30-Day Action Plan
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Convert GTM strategy into actionable marketing campaigns and 4-week task timelines.
          </p>
        </div>
      </div>

      {/* CREATE CAMPAIGN FORM */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-bold text-white mb-6">Create New Growth Campaign</h2>

        <form onSubmit={handleGenerateCampaign} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Campaign Name</label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Campaign Goal</label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Allocation</label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Target Marketing Channels</label>
            <input
              type="text"
              value={channels}
              onChange={(e) => setChannels(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none font-mono"
            />
          </div>

          <button
            type="submit"
            disabled={generating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
          >
            <Zap className="h-4 w-4 text-amber-300" />
            <span>{generating ? "Synthesizing Plan..." : "Generate AI Campaign Blueprint"}</span>
          </button>
        </form>
      </div>

      {/* SECTION 23: 4-WEEK ACTION PLAN TIMELINE */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">4-Week Execution Action Plan</h2>
            <p className="text-xs text-slate-400 mt-0.5">Sequential roadmap for technical setup, content, outreach, and optimization</p>
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
            Sprint active
          </span>
        </div>

        <div className="space-y-6">
          {[1, 2, 3, 4].map((weekNum) => {
            const weekTasks = tasks.filter((t) => t.week === weekNum);

            return (
              <div key={weekNum} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                      W{weekNum}
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      Week {weekNum}: {weekNum === 1 ? "SEO & Foundation Setup" : weekNum === 2 ? "Content Creation & Ads" : weekNum === 3 ? "External Promotion & Outreach" : "Performance Optimization"}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {weekTasks.filter((t) => t.status === "COMPLETED").length} / {weekTasks.length} Done
                  </span>
                </div>

                <div className="space-y-3">
                  {weekTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all ${
                        task.status === "COMPLETED"
                          ? "border-emerald-500/20 bg-emerald-500/5 opacity-80"
                          : task.status === "IN_PROGRESS"
                          ? "border-brand-500/30 bg-brand-500/10"
                          : "border-slate-800 bg-slate-950"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleTaskStatus(task.id)}
                          className={`p-1 rounded-lg border shrink-0 mt-0.5 transition-colors ${
                            task.status === "COMPLETED"
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : task.status === "IN_PROGRESS"
                              ? "border-brand-500 text-brand-400 bg-brand-500/20"
                              : "border-slate-700 text-transparent hover:border-slate-500"
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </button>

                        <div>
                          <div className={`text-xs font-semibold ${task.status === "COMPLETED" ? "line-through text-slate-400" : "text-white"}`}>
                            {task.title}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">{task.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-semibold text-brand-300 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                              {task.category}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">Due: {task.dueDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleTaskStatus(task.id)}
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border transition-all ${
                            task.status === "COMPLETED"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              : task.status === "IN_PROGRESS"
                              ? "bg-brand-500/20 text-brand-300 border-brand-500/30"
                              : "bg-slate-800 text-slate-400 border-slate-700"
                          }`}
                        >
                          {task.status}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
