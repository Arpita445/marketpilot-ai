"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Zap, LayoutDashboard } from "lucide-react";

export default function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              MarketPilot <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">AI</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-400 font-medium tracking-wide">GTM & SEO COMMAND CENTER</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <Link href="/dashboard" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-amber-400" />
            Live Demo
          </Link>
        </nav>

        {/* CTA Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Launch Dashboard</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
