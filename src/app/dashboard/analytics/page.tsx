"use client";

import { DEMO_ANALYTICS } from "@/lib/ai/mock-engine";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, Search, Zap } from "lucide-react";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

export default function GrowthAnalyticsPage() {
  const data = DEMO_ANALYTICS;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/20 mb-1">
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Growth Telemetry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Growth & Marketing Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Track organic traffic growth, inbound leads, acquisition channels, and keyword rank changes.
          </p>
        </div>
      </div>

      {/* KPI METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.summary.map((metric, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span className="font-bold">{metric.name}</span>
              <span className="flex items-center text-emerald-400 text-[11px] font-bold">
                <ArrowUpRight className="h-3.5 w-3.5" />
                +{metric.change}%
              </span>
            </div>

            <div className="text-3xl font-black text-white mb-1">
              {metric.unit === "$" ? `$${metric.current.toLocaleString()}` : metric.current.toLocaleString()}
            </div>

            <div className="text-[10px] text-slate-400">
              vs. previous month ({metric.unit === "$" ? `$${metric.previous.toLocaleString()}` : metric.previous.toLocaleString()})
            </div>
          </div>
        ))}
      </div>

      {/* RECHARTS VISUALIZATION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Traffic Growth Trend (Line Chart) */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-white">Monthly Traffic Growth Trend</h2>
              <p className="text-xs text-slate-400">Organic Search vs Paid Ads vs Direct Visitors</p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.trafficTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px", fontSize: "12px" }}
                />
                <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                <Line type="monotone" dataKey="organic" stroke="#3b82f6" strokeWidth={3} name="Organic SEO Traffic" />
                <Line type="monotone" dataKey="paid" stroke="#10b981" strokeWidth={2} name="Paid Campaigns" />
                <Line type="monotone" dataKey="direct" stroke="#8b5cf6" strokeWidth={2} name="Direct & Referrals" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channel Share (Donut Chart) */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Acquisition Channel Share</h2>
            <p className="text-xs text-slate-400 mb-4">Traffic source distribution</p>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.channelShare}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={4}
                    dataKey="percentage"
                  >
                    {data.channelShare.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-800 text-xs">
            {data.channelShare.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                  <span className="text-slate-300">{item.name}</span>
                </div>
                <span className="font-bold text-white font-mono">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LEAD CONVERSION & KEYWORD RANK MOVEMENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Lead Conversion Bar Chart */}
        <div className="lg:col-span-6 glass-card p-6 rounded-2xl border border-slate-800">
          <h2 className="text-base font-bold text-white mb-1">Inbound Lead Conversion Funnel</h2>
          <p className="text-xs text-slate-400 mb-4">Inbound Leads vs Scheduled Consultations</p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.leadConversions} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px", fontSize: "12px" }}
                />
                <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "10px" }} />
                <Bar dataKey="leads" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Inbound Leads" />
                <Bar dataKey="signups" fill="#10b981" radius={[4, 4, 0, 0]} name="Consultations Booked" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Keyword Rank Tracker Table */}
        <div className="lg:col-span-6 glass-card p-6 rounded-2xl border border-slate-800">
          <h2 className="text-base font-bold text-white mb-1">Top Keyword Rank Tracker</h2>
          <p className="text-xs text-slate-400 mb-4">Google Search Position Movement</p>

          <div className="space-y-3">
            {data.keywordRankings.map((kw, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white font-mono">{kw.keyword}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Google Search Position</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-base font-extrabold text-white">Rank #{kw.rank}</div>
                    <div className="text-[10px] text-emerald-400 font-bold">+{kw.change} positions up</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
