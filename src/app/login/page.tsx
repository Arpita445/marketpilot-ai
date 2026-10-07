"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Lock, Mail, ShieldCheck, Zap } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("arpita@marketpilot.ai");
  const [password, setPassword] = useState("••••••••••••");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  const handleDemoAccess = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-3xl" />

      <div className="w-full max-w-md">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-xl shadow-brand-500/30">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </Link>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">Welcome back to MarketPilot AI</h1>
          <p className="mt-1 text-xs text-slate-400">Sign in to manage your GTM strategies and SEO projects</p>
        </div>

        {/* Card Form */}
        <div className="glass-card p-8 rounded-2xl border border-slate-800 shadow-2xl">
          
          <button
            onClick={handleDemoAccess}
            className="w-full mb-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:from-emerald-500 hover:to-teal-500 transition-all"
          >
            <Zap className="h-4 w-4 fill-white" />
            <span>Instant 1-Click Demo Login</span>
          </button>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-slate-800 w-full" />
            <span className="bg-slate-900 px-3 text-[11px] font-medium text-slate-500 uppercase tracking-wider absolute">Or Email</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">Password</label>
                <a href="#" className="text-xs text-brand-400 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
            >
              {loading ? "Authenticating..." : "Sign In"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-400">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-brand-400 hover:underline">
              Create free account
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
