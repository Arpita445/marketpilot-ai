"use client";

import { useState } from "react";
import { ChevronDown, Plus, Check, Building2 } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectSelectorProps {
  projects: Project[];
  currentProject: Project;
  onSelectProject: (project: Project) => void;
  onNewProject: () => void;
}

export default function ProjectSelector({
  projects,
  currentProject,
  onSelectProject,
  onNewProject,
}: ProjectSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold text-white transition-all"
      >
        <div className="h-6 w-6 rounded-lg bg-brand-600/30 border border-brand-500/40 flex items-center justify-center text-brand-400 font-bold text-[10px]">
          {currentProject.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold text-white truncate max-w-[140px]">{currentProject.name}</div>
          <div className="text-[10px] text-slate-400 truncate max-w-[140px]">{currentProject.industry}</div>
        </div>
        <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Select Active Project
          </div>

          <div className="space-y-1 mb-2 max-h-48 overflow-y-auto">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  onSelectProject(proj);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs text-left transition-all ${
                  proj.id === currentProject.id
                    ? "bg-brand-600/20 text-white font-bold border border-brand-500/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div>
                  <div className="font-semibold text-white">{proj.name}</div>
                  <div className="text-[10px] text-slate-400">{proj.location}</div>
                </div>
                {proj.id === currentProject.id && <Check className="h-4 w-4 text-brand-400" />}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              onNewProject();
            }}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl border border-dashed border-slate-700 bg-slate-850/80 text-xs font-semibold text-brand-400 hover:bg-slate-800 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Create New Project</span>
          </button>
        </div>
      )}
    </div>
  );
}
