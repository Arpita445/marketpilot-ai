"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Search,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Target,
  FileText,
  Swords,
  ChevronRight,
  Zap,
} from "lucide-react";
import { DEMO_PROJECT, DEMO_POSITIONING } from "@/lib/ai/mock-engine";

export default function OverviewDashboardPage() {
  const [tasks, setTasks] = useState([
    {
      id: "t1",
      title: "Optimize homepage meta title with local geo-keyword 'Nagpur'",
      module: "SEO Audit",
      link: "/dashboard/seo",
      completed: true,
    },
    {
      id: "t2",
      title: "Publish 3BHK interior cost breakdown landing page",
      module: "Content Studio",
      link: "/dashboard/content",
      completed: false,
    },
    {
      id: "t3",
      title: "Set up Google Business Maps profile & request client reviews",
      module: "GTM Strategy",
      link: "/dashboard/gtm",
      completed: true,
    },
    {
      id: "t4",
      title: "Launch Meta Instagram before/after transformation reels campaign",
      module: "Campaign Planner",
      link: "/dashboard/campaigns",
      completed: false,
    },
    {
      id: "t5",
      title: "Partner with top 3 local real estate township developers",
      module: "Outreach",
      link: "/dashboard/gtm",
      completed: false,
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const project = DEMO_PROJECT;

  return (
    <div className="space-y-8">
      {/* Top Banner Greeting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl glass-card border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-950/40">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
              ACTIVE STRATEGY ENGINE
            </span>
            <span className="text-xs text-slate-400">• Updated 5 minutes ago</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.name} Command Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Product: <span className="text-white font-medium">{project.productName}</span> ({project.location})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/reports"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
          >
            <FileText className="h-4 w-4 text-brand-400" />
            <span>Generate Executive PDF Report</span>
          </Link>
        </div>
      </div>

      {/* HEALTH SCORE & CATEGORY BREAKDOWN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Health Gauge Card */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Overall Project Health Score
          </div>

          <div className="relative flex items-center justify-center mb-4">
            {/* Outer score ring */}
            <div className="h-36 w-36 rounded-full border-8 border-slate-800 flex items-center justify-center bg-slate-900 shadow-inner">
              <div className="text-center">
                <span className="text-4xl font-black text-white tracking-tight">{project.healthScore}</span>
                <span className="text-xs font-bold text-slate-400 block">/ 100</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-2">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>High Market Growth Potential</span>
          </span>
          <p className="text-xs text-slate-400 max-w-xs">
            Based on product positioning fit, SEO health, content readiness, and competitive moat.
          </p>
        </div>

        {/* Category Readiness Breakdown Cards */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          
          <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold">GTM Readiness</span>
              <Target className="h-4 w-4 text-brand-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{project.gtmScore}%</div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2 border border-slate-800">
              <div className="bg-brand-500 h-full" style={{ width: `${project.gtmScore}%` }} />
            </div>
            <span className="text-[10px] text-emerald-400">5 scored channels ready</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold">SEO Audit</span>
              <Search className="h-4 w-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{project.seoScore}/100</div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2 border border-slate-800">
              <div className="bg-amber-500 h-full" style={{ width: `${project.seoScore}%` }} />
            </div>
            <span className="text-[10px] text-amber-400">4 meta tag suggestions</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold">Content Strategy</span>
              <FileText className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{project.contentScore}%</div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2 border border-slate-800">
              <div className="bg-purple-500 h-full" style={{ width: `${project.contentScore}%` }} />
            </div>
            <span className="text-[10px] text-emerald-400">3 key pillars mapped</span>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold">Online Presence</span>
              <Users className="h-4 w-4 text-rose-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{project.presenceScore}/100</div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2 border border-slate-800">
              <div className="bg-rose-500 h-full" style={{ width: `${project.presenceScore}%` }} />
            </div>
            <span className="text-[10px] text-slate-400">Opportunity in Maps</span>
          </div>

        </div>

      </div>

      {/* QUICK INSIGHTS HIGHLIGHTS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-400" />
            <span>AI Strategic Insights</span>
          </h2>
          <span className="text-xs text-slate-400">Generated from market analysis</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="glass-card p-5 rounded-2xl border border-amber-500/30 bg-slate-900/60 relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Localized Keywords Opportunity</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Your website current title lacks high-intent location tags. Targeting <span className="text-amber-300 font-mono">interior designer Nagpur</span> unlocks ~2,400 monthly searchers.
                </p>
                <Link
                  href="/dashboard/keywords"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline"
                >
                  <span>View Keyword Strategy</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-brand-500/30 bg-slate-900/60 relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Strongest Audience Segment</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Your primary persona is <span className="text-brand-300 font-semibold">"Upgrading Tech Professional"</span> (Age 28-40) who values guaranteed 45-day handovers over generic catalogues.
                </p>
                <Link
                  href="/dashboard/personas"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-400 hover:underline"
                >
                  <span>Explore Persona Playbook</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-emerald-500/30 bg-slate-900/60 relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Competitor Win Angle</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Incumbents like Livspace rely on subcontracted workers. Position your guaranteed zero-subcontracting quality and fixed VR pricing to win 3BHK deals.
                </p>
                <Link
                  href="/dashboard/competitors"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:underline"
                >
                  <span>Open Competitor Matrix</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* RECOMMENDED NEXT ACTIONS */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white">Recommended Growth Action Plan</h2>
            <p className="text-xs text-slate-400 mt-0.5">High-priority tasks generated by MarketPilot AI to boost rankings & lead flow</p>
          </div>
          <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            {tasks.filter((t) => t.completed).length} of {tasks.length} Completed
          </span>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                task.completed
                  ? "border-emerald-500/20 bg-emerald-500/5 opacity-75"
                  : "border-slate-800 bg-slate-900/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`p-1 rounded-lg border shrink-0 mt-0.5 transition-colors ${
                    task.completed
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-slate-700 text-transparent hover:border-slate-500"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </button>

                <div>
                  <div className={`text-sm font-semibold ${task.completed ? "line-through text-slate-400" : "text-white"}`}>
                    {task.title}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                      {task.module}
                    </span>
                    <span className="text-[11px] text-slate-500">• Priority: High</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <Link
                  href={task.link}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Open Module</span>
                  <ArrowRight className="h-3.5 w-3.5 text-brand-400" />
                </Link>

                <button
                  onClick={() => toggleTask(task.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                    task.completed
                      ? "border-slate-800 bg-slate-900 text-slate-400"
                      : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  }`}
                >
                  {task.completed ? "Done" : "Mark Complete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
