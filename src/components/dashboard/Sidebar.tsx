"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  Target,
  Users,
  Search,
  Key,
  Swords,
  PenTool,
  Calendar,
  BarChart3,
  FileText,
  Settings,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "GTM Strategy", href: "/dashboard/gtm", icon: Target },
  { label: "Audience & Personas", href: "/dashboard/personas", icon: Users },
  { label: "SEO Audit", href: "/dashboard/seo", icon: Search },
  { label: "Keyword Intelligence", href: "/dashboard/keywords", icon: Key },
  { label: "Competitor Analysis", href: "/dashboard/competitors", icon: Swords },
  { label: "Content Studio", href: "/dashboard/content", icon: PenTool },
  { label: "Campaign Planner", href: "/dashboard/campaigns", icon: Calendar },
  { label: "Growth Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Report Generator", href: "/dashboard/reports", icon: FileText },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardSidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-950 border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Logo Header */}
          <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-md shadow-brand-500/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight flex items-center gap-1">
                  MarketPilot <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">AI</span>
                </span>
                <span className="block text-[10px] text-slate-400 font-medium tracking-wide">COMMAND CENTER</span>
              </div>
            </Link>

            {onClose && (
              <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white lg:hidden">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25 font-bold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info inside sidebar */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-900/40">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>AI Mode</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              Demo Active
            </span>
          </div>
          <p className="text-[10px] text-slate-500 leading-tight">
            Running contextual LLM engine. Add OpenAI key in Settings to switch to custom models.
          </p>
        </div>
      </aside>
    </>
  );
}
