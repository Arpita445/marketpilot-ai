"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Play, Rocket, ShieldCheck, TrendingUp, Search, BarChart3, Users } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[600px] w-full max-w-7xl bg-hero-glow" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-300 border border-brand-500/20 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>Next-Gen AI GTM & SEO Platform</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-400 font-normal">v2.4 Powered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Turn Your Product Into a{" "}
              <span className="gradient-text">Growth Strategy.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              MarketPilot AI combines Go-To-Market positioning, SEO intelligence, competitor research, and AI-powered content generation into one intelligent growth command center.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/onboarding"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/30 hover:bg-brand-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Rocket className="h-5 w-5" />
                <span>Start Free Analysis</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-slate-200 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 hover:text-white transition-all"
              >
                <Play className="h-4 w-4 text-brand-400 fill-brand-400" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Instant website URL scraper</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Demo mode without API keys</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual SaaS Dashboard Preview Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-card p-4 sm:p-6 border border-slate-800 shadow-2xl shadow-brand-500/10">
              
              {/* Top Fake Browser Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
                  marketpilot.ai/dashboard/overview
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE DASHBOARD
                </span>
              </div>

              {/* Sample Dashboard Content Preview */}
              <div className="space-y-4">
                
                {/* Project Header Bar */}
                <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center font-bold text-brand-400">
                      UN
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">UrbanNest Interiors</div>
                      <div className="text-xs text-slate-400">Nagpur, MH • Home & Interior Design</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Project Health Score</div>
                    <div className="text-lg font-extrabold text-emerald-400">82 / 100</div>
                  </div>
                </div>

                {/* Grid of Metric Mini Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>GTM Readiness</span>
                      <TrendingUp className="h-3.5 w-3.5 text-brand-400" />
                    </div>
                    <div className="text-base font-bold text-white">85%</div>
                    <div className="text-[10px] text-emerald-400 mt-1">High fit score</div>
                  </div>

                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>SEO Score</span>
                      <Search className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <div className="text-base font-bold text-white">74/100</div>
                    <div className="text-[10px] text-amber-400 mt-1">4 quick fixes</div>
                  </div>

                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Personas</span>
                      <Users className="h-3.5 w-3.5 text-indigo-400" />
                    </div>
                    <div className="text-base font-bold text-white">3 Identified</div>
                    <div className="text-[10px] text-brand-300 mt-1">Primary: Tech Pro</div>
                  </div>
                </div>

                {/* AI Insight Teaser Banner */}
                <div className="bg-brand-950/40 border border-brand-500/30 p-3.5 rounded-xl flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-500/20 text-brand-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">AI Strategy Insight</div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      "Targeting high-intent keyword <span className="text-brand-300 font-mono">interior designer nagpur</span> yields an estimated 2,400 monthly inquiries."
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Production Ready SaaS Architecture</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
