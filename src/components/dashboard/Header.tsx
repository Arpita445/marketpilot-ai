"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Bell, User, Sparkles, LogOut, Plus, ShieldCheck } from "lucide-react";
import ProjectSelector from "./ProjectSelector";
import { Project } from "@/lib/types";

interface HeaderProps {
  projects: Project[];
  currentProject: Project;
  onSelectProject: (project: Project) => void;
  onOpenMobileMenu: () => void;
  onNewProject: () => void;
}

export default function DashboardHeader({
  projects,
  currentProject,
  onSelectProject,
  onOpenMobileMenu,
  onNewProject,
}: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between">
      {/* Left: Mobile Toggle & Project Selector */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <ProjectSelector
          projects={projects}
          currentProject={currentProject}
          onSelectProject={onSelectProject}
          onNewProject={onNewProject}
        />
      </div>

      {/* Right: Notifications, Actions & Profile */}
      <div className="flex items-center gap-3">
        
        {/* Quick New Project Button */}
        <button
          onClick={onNewProject}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-500 transition-all"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>New Project</span>
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white transition-colors relative"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-brand-500" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-3 z-50">
              <div className="text-xs font-bold text-white mb-2">System Notifications</div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-slate-800/60 text-slate-300">
                  <div className="font-semibold text-white">Strategy Engine Ready</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">UrbanNest GTM analysis updated for Nagpur market.</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 text-slate-300">
                  <div className="font-semibold text-white">SEO Audit Complete</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">4 quick win recommendations identified.</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
            AG
          </div>
          <div className="hidden md:block text-left text-xs">
            <div className="font-semibold text-white leading-none">Arpita Gupta</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Pro Plan</div>
          </div>
        </div>

      </div>
    </header>
  );
}
