"use client";

import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/Header";
import { INITIAL_PROJECTS } from "@/lib/db/storage";
import { Project } from "@/lib/types";
import { X, Plus, Rocket, Globe } from "lucide-react";
import ProgressiveAnalysisLoader from "@/components/analysis/ProgressiveAnalysisLoader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [currentProject, setCurrentProject] = useState<Project>(INITIAL_PROJECTS[0]);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [isAnalyzingNew, setIsAnalyzingNew] = useState(false);

  // New Project Form State
  const [newProjName, setNewProjName] = useState("");
  const [newProdName, setNewProdName] = useState("");
  const [newIndustry, setNewIndustry] = useState("");
  const [newWebsite, setNewWebsite] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newGoal, setNewGoal] = useState("Generate leads");

  const handleCreateProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzingNew(true);
  };

  const handleNewProjectAnalysisDone = () => {
    const newCreated: Project = {
      id: `proj-${Date.now()}`,
      name: newProjName || "New Startup",
      productName: newProdName || "Growth Solution",
      industry: newIndustry || "Tech & SaaS",
      websiteUrl: newWebsite || "https://example.com",
      location: newLocation || "Remote",
      description: "Custom project created via MarketPilot AI dashboard.",
      customerType: "B2C",
      targetAge: "25-45",
      primaryGoal: newGoal,
      healthScore: 78,
      gtmScore: 82,
      seoScore: 75,
      contentScore: 84,
      presenceScore: 70,
      createdAt: new Date().toISOString(),
    };

    setProjects([newCreated, ...projects]);
    setCurrentProject(newCreated);
    setIsAnalyzingNew(false);
    setShowNewProjectModal(false);

    // Reset form
    setNewProjName("");
    setNewProdName("");
    setNewIndustry("");
    setNewWebsite("");
    setNewLocation("");
  };

  if (isAnalyzingNew) {
    return (
      <ProgressiveAnalysisLoader
        projectName={newProjName || "New Project"}
        websiteUrl={newWebsite}
        onComplete={handleNewProjectAnalysisDone}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      {/* Sidebar Navigation */}
      <DashboardSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <DashboardHeader
          projects={projects}
          currentProject={currentProject}
          onSelectProject={setCurrentProject}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onNewProject={() => setShowNewProjectModal(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h3 className="text-lg font-bold text-white">Create New Project</h3>
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProjectSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Fitness App"
                  value={newProjName}
                  onChange={(e) => setNewProjName(e.target.value)}
                  required
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Product / Service</label>
                  <input
                    type="text"
                    placeholder="e.g. Personal AI Trainer"
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Industry</label>
                  <input
                    type="text"
                    placeholder="e.g. HealthTech"
                    value={newIndustry}
                    onChange={(e) => setNewIndustry(e.target.value)}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Website URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={newWebsite}
                    onChange={(e) => setNewWebsite(e.target.value)}
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. New York, USA"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    required
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2 px-3 text-sm text-white focus:border-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all"
              >
                <Rocket className="h-4 w-4" />
                <span>Analyze & Launch Strategy</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
