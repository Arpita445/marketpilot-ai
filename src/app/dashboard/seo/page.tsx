"use client";

import { useState } from "react";
import { DEMO_SEO_AUDIT } from "@/lib/ai/mock-engine";
import { SEOAuditResult } from "@/lib/types";
import { Search, Globe, CheckCircle2, AlertCircle, RefreshCw, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function SEOAuditPage() {
  const [urlInput, setUrlInput] = useState("https://urbannest-design.demo");
  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<SEOAuditResult>(DEMO_SEO_AUDIT);

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlInput }),
      });
      if (res.ok) {
        const data = await res.json();
        setAuditResult(data);
      }
    } catch (err) {
      console.warn("Audit API error, retaining baseline audit result");
    } finally {
      setLoading(false);
    }
  };

  const audit = auditResult;

  return (
    <div className="space-y-8">
      {/* Page Header & URL Scanner Form */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/20 mb-1">
              <Search className="h-3.5 w-3.5" />
              <span>Live Web Scraper & Auditor</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              SEO Page Analyzer & Technical Audit
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Analyze website metadata, head structure, image alt attributes, and keyword density.
            </p>
          </div>
        </div>

        <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Globe className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Enter website URL (e.g. https://yourwebsite.com)"
              required
              className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all shrink-0"
          >
            {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            <span>{loading ? "Scanning Page..." : "Analyze Website"}</span>
          </button>
        </form>
      </div>

      {/* OVERALL SEO SCORE & CATEGORIES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Score Ring */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Total Technical SEO Score
          </div>
          <div className="h-32 w-32 rounded-full border-8 border-amber-500/30 flex items-center justify-center bg-slate-900 shadow-inner mb-4">
            <div>
              <span className="text-4xl font-black text-white">{audit.score}</span>
              <span className="text-xs text-slate-400 block font-bold">/ 100</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 max-w-xs">
            Scanning page: <span className="font-mono text-brand-300">{audit.url}</span>
          </p>
        </div>

        {/* Category Gauges */}
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">Technical SEO</span>
            <span className="text-2xl font-extrabold text-white">{audit.categories.technical}%</span>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">On-Page Tags</span>
            <span className="text-2xl font-extrabold text-white">{audit.categories.onPage}%</span>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">Meta Information</span>
            <span className="text-2xl font-extrabold text-white">{audit.categories.metaInfo}%</span>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">Performance</span>
            <span className="text-2xl font-extrabold text-white">{audit.categories.performance}%</span>
          </div>
        </div>

      </div>

      {/* ON-PAGE COMPARISON: CURRENT VS RECOMMENDED */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-400" />
          <span>On-Page SEO Optimization Matrix (Current vs Recommended)</span>
        </h2>

        <div className="space-y-6">
          
          {/* Page Title Comparison */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Homepage Meta Title Tag</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/30">
                <span className="text-[10px] font-bold text-rose-400 uppercase block mb-1">Current Title</span>
                <p className="text-xs font-mono text-slate-300">{audit.onPageAudit.currentTitle}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30">
                <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Recommended Optimized Title</span>
                <p className="text-xs font-mono text-emerald-200 font-semibold">{audit.onPageAudit.recommendedTitle}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
              <span className="font-semibold text-amber-400">Why change? </span>
              {audit.onPageAudit.titleRationale}
            </p>
          </div>

          {/* Meta Description Comparison */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Meta Description Tag</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/30">
                <span className="text-[10px] font-bold text-rose-400 uppercase block mb-1">Current Meta Description</span>
                <p className="text-xs text-slate-300">{audit.onPageAudit.currentMetaDesc}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30">
                <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Recommended Meta Description</span>
                <p className="text-xs text-emerald-200 font-medium">{audit.onPageAudit.recommendedMetaDesc}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
              <span className="font-semibold text-amber-400">Why change? </span>
              {audit.onPageAudit.metaDescRationale}
            </p>
          </div>

          {/* Page Elements Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-4 border-t border-slate-800">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">H1 Tag</span>
              <span className="text-white font-semibold truncate block mt-0.5">{audit.onPageAudit.h1}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Content Length</span>
              <span className="text-white font-semibold block mt-0.5">{audit.onPageAudit.contentLength} words</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Images / Missing Alt</span>
              <span className="text-white font-semibold block mt-0.5">{audit.onPageAudit.imagesCount} images ({audit.onPageAudit.imagesWithoutAlt} missing alt)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Internal Links</span>
              <span className="text-white font-semibold block mt-0.5">{audit.onPageAudit.internalLinksCount} links</span>
            </div>
          </div>

        </div>
      </div>

      {/* ACTIONABLE RECOMMENDATIONS LIST */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
        <h2 className="text-lg font-bold text-white mb-6">Actionable SEO Recommendations</h2>

        <div className="space-y-4">
          {audit.recommendations.map((rec) => (
            <div key={rec.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-white">{rec.title}</span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Impact: {rec.impact}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">{rec.description}</p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-brand-300 font-mono">
                  Action: {rec.actionStep}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
