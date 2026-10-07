"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "For founders testing new product ideas and early strategy.",
      features: [
        "1 Active Project",
        "Basic GTM Strategy Analysis",
        "Basic Keyword Suggestions (10 max)",
        "Limited AI Generations (5/month)",
        "Community Support",
      ],
      cta: "Get Started Free",
      href: "/onboarding",
      popular: false,
    },
    {
      name: "Pro",
      priceMonthly: 49,
      priceAnnual: 39,
      description: "For growing startups, marketers, and independent consultants.",
      features: [
        "Unlimited Projects",
        "Advanced GTM & Positioning Engine",
        "Full Website SEO URL Analyzer",
        "Competitor Matrix & Win Playbook",
        "Unlimited AI Content Studio",
        "Campaign Planner & Action Plan",
        "Growth Analytics Dashboard",
        "Priority AI Processing",
      ],
      cta: "Start 14-Day Free Trial",
      href: "/onboarding",
      popular: true,
    },
    {
      name: "Business",
      priceMonthly: 129,
      priceAnnual: 99,
      description: "For agencies and teams requiring multi-user collaboration.",
      features: [
        "Everything in Pro",
        "Up to 10 Team Members",
        "White-label PDF Report Exporter",
        "Custom OpenAI API Key Integration",
        "Google Analytics & Search Console Connectors",
        "Dedicated Success Manager",
        "Custom SLA & Priority Support",
      ],
      cta: "Contact Sales",
      href: "/onboarding",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Transparent Pricing</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple Plans for Every Stage of Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Start with our generous free plan. Upgrade when you need unlimited AI generation and competitor tracking.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                !annual ? "bg-brand-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                annual ? "bg-brand-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`glass-card p-8 rounded-2xl border flex flex-col justify-between relative ${
                  plan.popular
                    ? "border-brand-500 bg-slate-900/90 shadow-2xl shadow-brand-500/15 ring-2 ring-brand-500/30"
                    : "border-slate-800 bg-slate-950/60"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px] mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-white">${price}</span>
                    <span className="text-xs text-slate-400">/ month {annual && price > 0 && "(billed annually)"}</span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-800">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-slate-300">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={plan.href}
                    className={`w-full inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/25"
                        : "bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
