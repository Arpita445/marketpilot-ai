"use client";

import { useState } from "react";
import { DEMO_KEYWORDS } from "@/lib/ai/mock-engine";
import { KeywordItem } from "@/lib/types";
import { Key, Filter, Search, ArrowUpDown, Tag, Plus, Check } from "lucide-react";

export default function KeywordsPage() {
  const [keywords, setKeywords] = useState<KeywordItem[]>(DEMO_KEYWORDS);
  const [filterIntent, setFilterIntent] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<"relevance" | "estMonthlyVolume">("relevance");

  const intents = ["All", "Commercial", "Transactional", "Informational", "Navigational"];

  const filtered = keywords
    .filter((k) => {
      const matchesIntent = filterIntent === "All" || k.searchIntent === filterIntent;
      const matchesSearch = k.keyword.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesIntent && matchesSearch;
    })
    .sort((a, b) => b[sortField] - a[sortField]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300 border border-brand-500/20 mb-1">
            <Key className="h-3.5 w-3.5" />
            <span>SEO Keyword Discovery</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Keyword Intelligence & Intent Mapping
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            High-intent keyword opportunities categorized by search intent and targeted landing pages.
          </p>
        </div>
      </div>

      {/* FILTER TOOLBAR */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter keywords..."
            className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 pl-9 pr-3 text-xs text-white focus:border-brand-500 focus:outline-none"
          />
        </div>

        {/* Intent Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {intents.map((intent) => (
            <button
              key={intent}
              onClick={() => setFilterIntent(intent)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                filterIntent === intent
                  ? "bg-brand-600 text-white shadow-md"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {intent}
            </button>
          ))}
        </div>

        {/* Sort Toggle */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ArrowUpDown className="h-3.5 w-3.5 text-brand-400" />
          <span>Sort by:</span>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as any)}
            className="bg-slate-900 border border-slate-800 text-white rounded-lg py-1 px-2 text-xs focus:outline-none"
          >
            <option value="relevance">Relevance Score</option>
            <option value="estMonthlyVolume">Monthly Volume</option>
          </select>
        </div>

      </div>

      {/* KEYWORD TABLE */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                <th className="p-4">Keyword Phrase</th>
                <th className="p-4">Search Intent</th>
                <th className="p-4">Est. Volume</th>
                <th className="p-4">Competition</th>
                <th className="p-4">Relevance</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Recommended Landing Page</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filtered.map((kw) => (
                <tr key={kw.id} className="hover:bg-slate-900/60 transition-colors">
                  
                  <td className="p-4 font-semibold text-white font-mono">
                    {kw.keyword}
                  </td>

                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      kw.searchIntent === "Commercial"
                        ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                        : kw.searchIntent === "Transactional"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : kw.searchIntent === "Informational"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}>
                      {kw.searchIntent}
                    </span>
                  </td>

                  <td className="p-4 text-slate-300 font-mono">
                    {kw.estMonthlyVolume.toLocaleString()} / mo
                  </td>

                  <td className="p-4">
                    <span className={`font-semibold ${
                      kw.competition === "High" ? "text-rose-400" : kw.competition === "Medium" ? "text-amber-400" : "text-emerald-400"
                    }`}>
                      {kw.competition}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{kw.relevance}%</span>
                      <div className="w-12 bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-brand-500 h-full" style={{ width: `${kw.relevance}%` }} />
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      kw.priority === "High"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-slate-800 text-slate-400"
                    }`}>
                      {kw.priority}
                    </span>
                  </td>

                  <td className="p-4 font-mono text-slate-400 text-[11px]">
                    {kw.recommendedPage}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
