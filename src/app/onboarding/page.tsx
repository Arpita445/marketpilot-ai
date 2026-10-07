"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, ArrowLeft, Check, Rocket, Globe } from "lucide-react";
import ProgressiveAnalysisLoader from "@/components/analysis/ProgressiveAnalysisLoader";
import { useProject } from "@/lib/context/ProjectContext";

export default function OnboardingPage() {
  const router = useRouter();
  const { addProject } = useProject();
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Form State — all empty by default, user fills in their own data
  const [userRole, setUserRole] = useState("Startup");
  const [primaryGoal, setPrimaryGoal] = useState("Generate leads");

  // Project Info — no demo defaults
  const [projectName, setProjectName] = useState("");
  const [productName, setProductName] = useState("");
  const [industry, setIndustry] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [location, setLocation] = useState("");
  const [customerType, setCustomerType] = useState<"B2B" | "B2C" | "Both">("B2C");
  const [targetAge, setTargetAge] = useState("");
  const [customerInterests, setCustomerInterests] = useState("");
  const [customerPainPoints, setCustomerPainPoints] = useState("");
  const [description, setDescription] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [competitors, setCompetitors] = useState("");

  const roles = [
    "Startup",
    "Small Business",
    "Agency",
    "Marketer",
    "Freelancer",
    "Enterprise",
    "Student/Personal Project",
  ];

  const goals = [
    "Launch a product",
    "Generate leads",
    "Increase website traffic",
    "Improve SEO",
    "Increase sales",
    "Build brand awareness",
    "Understand competitors",
  ];

  const handleStartAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add the new project to context (generates AI strategy based on user's input)
    await addProject({
      name: projectName,
      productName,
      industry,
      websiteUrl,
      location,
      description,
      customerType,
      targetAge,
      customerInterests,
      customerPainPoints,
      primaryGoal,
      budgetRange,
      timeline,
    });
    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    router.push("/dashboard");
  };

  if (isAnalyzing) {
    return (
      <ProgressiveAnalysisLoader
        projectName={projectName}
        websiteUrl={websiteUrl}
        onComplete={handleAnalysisComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-full max-w-7xl bg-hero-glow" />

      <div className="w-full max-w-2xl">

        {/* Progress Indicator */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-white">MarketPilot AI</span>
          </div>

          <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
            <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-brand-500" : "bg-slate-800"}`} />
            <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-brand-500" : "bg-slate-800"}`} />
            <div className={`h-2 flex-1 rounded-full ${step >= 3 ? "bg-brand-500" : "bg-slate-800"}`} />
          </div>
          <p className="text-xs text-slate-400 mt-2 font-medium">Step {step} of 3</p>
        </div>

        {/* STEP 1: USER ROLE */}
        {step === 1 && (
          <div className="glass-card p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-bold text-white text-center mb-2">What best describes you?</h2>
            <p className="text-xs text-slate-400 text-center mb-8">This helps MarketPilot tailor AI prompts and channel recommendations</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setUserRole(role)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                    userRole === role
                      ? "border-brand-500 bg-brand-500/10 text-white font-semibold shadow-lg ring-1 ring-brand-500/40"
                      : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span className="text-sm">{role}</span>
                  {userRole === role && <Check className="h-4 w-4 text-brand-400" />}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
            >
              <span>Continue to Primary Goal</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* STEP 2: PRIMARY GOAL */}
        {step === 2 && (
          <div className="glass-card p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-bold text-white text-center mb-2">What is your primary goal?</h2>
            <p className="text-xs text-slate-400 text-center mb-8">We will structure your GTM action plan around this core metric</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setPrimaryGoal(goal)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                    primaryGoal === goal
                      ? "border-brand-500 bg-brand-500/10 text-white font-semibold shadow-lg ring-1 ring-brand-500/40"
                      : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span className="text-sm">{goal}</span>
                  {primaryGoal === goal && <Check className="h-4 w-4 text-brand-400" />}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 text-sm font-medium hover:bg-slate-850"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
              >
                <span>Continue to Project Details</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CREATE FIRST PROJECT */}
        {step === 3 && (
          <div className="glass-card p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">Create Your First Project</h2>
              <p className="text-xs text-slate-400">Tell us about your product — our AI will generate a full GTM + SEO strategy.</p>
            </div>

            <form onSubmit={handleStartAnalysis} className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Name *</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                    placeholder="e.g. Apex Fitness"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product / Service Name *</label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                    placeholder="e.g. Online Fitness Coaching"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Industry *</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                    placeholder="e.g. Health & Fitness"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Target Location *</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    placeholder="e.g. Mumbai, India"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Website URL (Optional — for SEO Audit)</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Customer Type</label>
                  <select
                    value={customerType}
                    onChange={(e) => setCustomerType(e.target.value as any)}
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
                  >
                    <option value="B2C">B2C</option>
                    <option value="B2B">B2B</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Target Age Range</label>
                  <input
                    type="text"
                    value={targetAge}
                    onChange={(e) => setTargetAge(e.target.value)}
                    placeholder="e.g. 25-45"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Range</label>
                  <input
                    type="text"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    placeholder="e.g. $1,000 - $5,000"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Target Customer Interests</label>
                <input
                  type="text"
                  value={customerInterests}
                  onChange={(e) => setCustomerInterests(e.target.value)}
                  placeholder="e.g. Fitness, Weight Loss, Nutrition, Wellness"
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Customer Pain Points</label>
                <input
                  type="text"
                  value={customerPainPoints}
                  onChange={(e) => setCustomerPainPoints(e.target.value)}
                  placeholder="e.g. Lack of motivation, no personalized plan, expensive gym memberships"
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Short Product Description *</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Briefly describe what your product/service does and who it's for..."
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Competitor URLs (Optional, comma separated)</label>
                <input
                  type="text"
                  value={competitors}
                  onChange={(e) => setCompetitors(e.target.value)}
                  placeholder="https://competitor1.com, https://competitor2.com"
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none text-xs font-mono"
                />
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 text-sm font-medium hover:bg-slate-850"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/30 hover:from-brand-500 hover:to-indigo-500 transition-all"
                >
                  <Rocket className="h-5 w-5" />
                  <span>Generate My Strategy</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
