"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Lock, Mail, User, ShieldCheck, Check } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-3xl" />

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 shadow-xl shadow-brand-500/30">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </Link>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">Start Your Free Strategy Engine</h1>
          <p className="mt-1 text-xs text-slate-400">Build your first GTM, SEO and Content plan in 2 minutes</p>
        </div>

        <div className="glass-card p-8 rounded-2xl border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Arpita Gupta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 pl-10 pr-4 text-sm text-white focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2 py-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Free forever tier included</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Instant website URL analysis</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
            >
              <span>Continue to Onboarding</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-brand-400 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
