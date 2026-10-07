import { Project } from "../types";

export const DEFAULT_USER = {
  id: "user-1",
  name: "User",
  email: "",
  role: "Growth Lead",
  plan: "PRO",
};

// No pre-loaded demo projects — users create their own
export const INITIAL_PROJECTS: Project[] = [];
