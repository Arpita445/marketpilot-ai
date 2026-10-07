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
import {
  DEMO_PROJECT,
  DEMO_POSITIONING,
  DEMO_PERSONAS,
  DEMO_SEO_AUDIT,
  DEMO_KEYWORDS,
  DEMO_COMPETITORS,
  DEMO_CONTENT_OPPORTUNITIES,
  DEMO_ACTION_PLAN,
  generateMockStrategyForProject,
} from "../ai/mock-engine";
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
  currentProject: Project;
  strategyData: StrategyData;
  selectProject: (project: Project) => void;
  addProject: (newProject: Partial<Project>) => Promise<Project>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [currentProject, setCurrentProject] = useState<Project>(INITIAL_PROJECTS[0]);
  const [strategyData, setStrategyData] = useState<StrategyData>({
    positioning: DEMO_POSITIONING,
    personas: DEMO_PERSONAS,
    seoAudit: DEMO_SEO_AUDIT,
    keywords: DEMO_KEYWORDS,
    competitors: DEMO_COMPETITORS,
    contentOpportunities: DEMO_CONTENT_OPPORTUNITIES,
    actionPlan: DEMO_ACTION_PLAN,
  });

  // Whenever currentProject changes, update strategyData
  useEffect(() => {
    if (currentProject.id === "demo-urbannest" || currentProject.name.toLowerCase().includes("urbannest")) {
      setStrategyData({
        positioning: DEMO_POSITIONING,
        personas: DEMO_PERSONAS,
        seoAudit: DEMO_SEO_AUDIT,
        keywords: DEMO_KEYWORDS,
        competitors: DEMO_COMPETITORS,
        contentOpportunities: DEMO_CONTENT_OPPORTUNITIES,
        actionPlan: DEMO_ACTION_PLAN,
      });
    } else {
      const generated = generateMockStrategyForProject(currentProject);
      setStrategyData(generated);
    }
  }, [currentProject]);

  const selectProject = (project: Project) => {
    setCurrentProject(project);
  };

  const addProject = async (projInput: Partial<Project>): Promise<Project> => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      name: projInput.name || "New Project",
      productName: projInput.productName || "Product Service",
      industry: projInput.industry || "General Industry",
      websiteUrl: projInput.websiteUrl || "https://example.com",
      location: projInput.location || "Global",
      description: projInput.description || "Created in MarketPilot AI",
      customerType: projInput.customerType || "B2C",
      targetAge: projInput.targetAge || "25-45",
      customerInterests: projInput.customerInterests || "",
      customerPainPoints: projInput.customerPainPoints || "",
      primaryGoal: projInput.primaryGoal || "Lead Generation",
      budgetRange: projInput.budgetRange || "$5,000 - $15,000",
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
