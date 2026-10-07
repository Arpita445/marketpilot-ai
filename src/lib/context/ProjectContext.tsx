"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Project,
  ProductPositioning,
  CustomerPersona,
  SEOAuditResult,
  KeywordItem,
  CompetitorInsight,
  ContentOpportunity,
  ActionTask,
} from "../types";
import { generateMockStrategyForProject } from "../ai/mock-engine";
import { INITIAL_PROJECTS } from "../db/storage";

interface StrategyData {
  positioning: ProductPositioning;
  personas: CustomerPersona[];
  seoAudit: SEOAuditResult;
  keywords: KeywordItem[];
  competitors: CompetitorInsight[];
  contentOpportunities: ContentOpportunity[];
  actionPlan: ActionTask[];
}

interface ProjectContextType {
  projects: Project[];
  currentProject: Project | null;
  strategyData: StrategyData | null;
  hasProjects: boolean;
  selectProject: (project: Project) => void;
  addProject: (newProject: Partial<Project>) => Promise<Project>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [currentProject, setCurrentProject] = useState<Project | null>(
    INITIAL_PROJECTS.length > 0 ? INITIAL_PROJECTS[0] : null
  );
  const [strategyData, setStrategyData] = useState<StrategyData | null>(null);

  // Whenever currentProject changes, generate strategy from user's real data
  useEffect(() => {
    if (!currentProject) {
      setStrategyData(null);
      return;
    }
    const generated = generateMockStrategyForProject(currentProject);
    setStrategyData(generated);
  }, [currentProject]);

  const selectProject = (project: Project) => {
    setCurrentProject(project);
  };

  const addProject = async (projInput: Partial<Project>): Promise<Project> => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      name: projInput.name || "New Project",
      productName: projInput.productName || "My Product",
      industry: projInput.industry || "General",
      websiteUrl: projInput.websiteUrl || "",
      location: projInput.location || "Global",
      description: projInput.description || "",
      customerType: projInput.customerType || "B2C",
      targetAge: projInput.targetAge || "25-45",
      customerInterests: projInput.customerInterests || "",
      customerPainPoints: projInput.customerPainPoints || "",
      primaryGoal: projInput.primaryGoal || "Lead Generation",
      budgetRange: projInput.budgetRange || "Not specified",
      timeline: projInput.timeline || "3 Months",
      healthScore: Math.floor(Math.random() * 15) + 75,
      gtmScore: Math.floor(Math.random() * 15) + 80,
      seoScore: Math.floor(Math.random() * 15) + 70,
      contentScore: Math.floor(Math.random() * 15) + 80,
      presenceScore: Math.floor(Math.random() * 15) + 65,
      createdAt: new Date().toISOString(),
    };

    setProjects((prev) => [newProj, ...prev]);
    setCurrentProject(newProj);
    return newProj;
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        currentProject,
        strategyData,
        hasProjects: projects.length > 0,
        selectProject,
        addProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
