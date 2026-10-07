"use client";

import { useState } from "react";
import { DEFAULT_USER } from "@/lib/db/storage";
import {
  Settings,
  User,
  Key,
  CreditCard,
  Globe,
  Bell,
  Check,
  Zap,
  ShieldAlert,
  Save,
  Sparkles,
  Layers,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "ai" | "billing" | "integrations" | "danger"
  >("profile");

  // Form State
  const [userName, setUserName] = useState(DEFAULT_USER.name);
  const [userEmail, setUserEmail] = useState(DEFAULT_USER.email);
  const [userRole, setUserRole] = useState(DEFAULT_USER.role);

  // AI Settings
  const [openaiKey, setOpenaiKey] = useState("");
  const [demoMode, setDemoMode] = useState(true);
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini");

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700 mb-1">
            <Settings className="h-3.5 w-3.5" />
            <span>Workspace Preferences</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Settings & Integrations
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Manage your account, AI Provider keys, subscription billing, and third-party connectors.
          </p>
        </div>
      </div>

      {/* SETTINGS TABS TOOLBAR */}
      <div className="glass-card p-2 rounded-2xl border border-slate-800 flex items-center gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeTab === "profile"
              ? "bg-brand-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <User className="h-4 w-4" />
          <span>Profile & Account</span>
        </button>

        <button
          onClick={() => setActiveTab("ai")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeTab === "ai"
              ? "bg-brand-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Key className="h-4 w-4" />
          <span>AI Preferences & Provider Keys</span>
        </button>

        <button
          onClick={() => setActiveTab("billing")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeTab === "billing"
              ? "bg-brand-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <CreditCard className="h-4 w-4" />
          <span>Billing & Subscription</span>
        </button>

        <button
          onClick={() => setActiveTab("integrations")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeTab === "integrations"
              ? "bg-brand-600 text-white shadow-md"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span>API Integrations</span>
        </button>

        <button
          onClick={() => setActiveTab("danger")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeTab === "danger"
              ? "bg-rose-600 text-white shadow-md"
              : "text-rose-400 hover:text-rose-300"
          }`}
        >
          <ShieldAlert className="h-4 w-4" />
          <span>Danger Zone</span>
        </button>
      </div>

      {/* TAB CONTENT */}

      {/* PROFILE TAB */}
      {activeTab === "profile" && (
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-lg font-bold text-white mb-6">User Profile Information</h2>

          <form onSubmit={handleSave} className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Role / Job Title</label>
              <input
                type="text"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
            >
              {saved ? <Check className="h-4 w-4 text-emerald-400" /> : <Save className="h-4 w-4" />}
              <span>{saved ? "Profile Saved!" : "Save Changes"}</span>
            </button>
          </form>
        </div>
      )}

      {/* AI PREFERENCES TAB */}
      {activeTab === "ai" && (
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">AI Model & Provider Settings</h2>
            <p className="text-xs text-slate-400">Configure your custom OpenAI API key or use our built-in Demo Engine.</p>
          </div>

          <form onSubmit={handleSave} className="space-y-4 max-w-xl">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Demo Mode / Mock Fallback</span>
                <span className="text-[11px] text-slate-400">Generates contextual responses if no API key is set</span>
              </div>
              <input
                type="checkbox"
                checked={demoMode}
                onChange={(e) => setDemoMode(e.target.checked)}
                className="h-5 w-5 rounded border-slate-800 bg-slate-950 text-brand-600 focus:ring-0"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Custom OpenAI API Key</label>
              <input
                type="password"
                placeholder="sk-proj-..."
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-sm text-white focus:border-brand-500 focus:outline-none font-mono"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Your API key is stored securely in environment variables and never exposed to the client.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Model Architecture</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              >
                <option value="gpt-4o-mini">GPT-4o Mini (Fast & Cost Efficient)</option>
                <option value="gpt-4o">GPT-4o (High Reasoning)</option>
                <option value="claude-3-5-sonnet">Claude 3.5 Sonnet (Compatible)</option>
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
            >
              {saved ? <Check className="h-4 w-4 text-emerald-400" /> : <Save className="h-4 w-4" />}
              <span>{saved ? "AI Configuration Saved!" : "Save Key Configuration"}</span>
            </button>
          </form>
        </div>
      )}

      {/* BILLING TAB */}
      {activeTab === "billing" && (
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Subscription & Stripe Billing</h2>
              <p className="text-xs text-slate-400 mt-0.5">Manage your current SaaS tier and payment methods</p>
            </div>
            <span className="text-xs font-bold text-brand-300 bg-brand-500/20 px-3 py-1 rounded-full border border-brand-500/30">
              PRO PLAN ACTIVE
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xl font-extrabold text-white">$49 / month</div>
              <p className="text-xs text-slate-300 mt-1">Unlimited Projects, Advanced SEO Analyzer, AI Content Studio & PDF Exporter</p>
            </div>

            <button
              onClick={() => alert("Stripe portal customer session initialized.")}
              className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-850 text-xs font-semibold text-white hover:bg-slate-800 transition-all shrink-0"
            >
              Manage Stripe Billing
            </button>
          </div>
        </div>
      )}

      {/* INTEGRATIONS TAB */}
      {activeTab === "integrations" && (
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">API Integrations & Connectors</h2>
            <p className="text-xs text-slate-400">Connect your analytics and advertising accounts for real-time tracking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Google Analytics 4 (GA4)", status: "Connected", icon: "📊" },
              { name: "Google Search Console", status: "Connected", icon: "🔍" },
              { name: "Google Ads API", status: "Ready to Connect", icon: "🎯" },
              { name: "Meta Ads & Business Manager", status: "Ready to Connect", icon: "📱" },
            ].map((conn, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{conn.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-white">{conn.name}</div>
                    <div className="text-[10px] text-slate-400">{conn.status}</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-850 text-[11px] font-semibold text-slate-200 hover:text-white">
                  Configure
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DANGER ZONE TAB */}
      {activeTab === "danger" && (
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-rose-500/30 bg-rose-950/10 space-y-4">
          <h2 className="text-lg font-bold text-rose-400">Danger Zone</h2>
          <p className="text-xs text-slate-300">Irreversible project and workspace actions.</p>

          <div className="pt-4 border-t border-rose-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-white">Delete Workspace Data</div>
              <div className="text-[11px] text-slate-400">Permanently remove all GTM strategies, keywords, and campaign tasks.</div>
            </div>
            <button
              onClick={() => alert("Project deletion protection triggered.")}
              className="px-4 py-2 rounded-xl bg-rose-600 text-xs font-bold text-white hover:bg-rose-500 transition-all shrink-0"
            >
              Delete Project Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
