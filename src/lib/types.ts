export type CustomerType = "B2B" | "B2C" | "Both";

export type UserPlan = "FREE" | "PRO" | "BUSINESS";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: UserPlan;
}

export interface Project {
  id: string;
  userId?: string;
  name: string;
  productName: string;
  industry: string;
  websiteUrl?: string;
  location: string;
  description: string;
  customerType: CustomerType;
  targetAge: string;
  customerInterests?: string;
  customerPainPoints?: string;
  primaryGoal: string;
  budgetRange?: string;
  timeline?: string;
  healthScore: number;
  gtmScore: number;
  seoScore: number;
  contentScore: number;
  presenceScore: number;
  createdAt?: string;
}

export interface ProductPositioning {
  product: string;
  targetAudience: string;
  coreProblem: string;
  valueProposition: string;
  differentiator: string;
  oneLineValProp: string;
  shortPitch: string;
  detailedPositioning: string;
  keyDifferentiators: string[];
  marketingChannels: MarketingChannelScore[];
}

export interface MarketingChannelScore {
  name: string;
  score: number; // 0 - 100
  rationale: string;
  category: "Paid" | "Organic" | "Outreach" | "Social" | "Search";
}

export interface CustomerPersona {
  id: string;
  title: string;
  type: "Primary" | "Secondary" | "Emerging";
  ageRange: string;
  location: string;
  problem: string;
  goals: string;
  painPoints: string;
  buyingTriggers: string;
  preferredChannels: string[];
  recommendedMessage: string;
}

export interface SEOAuditResult {
  url: string;
  score: number;
  categories: {
    technical: number;
    onPage: number;
    content: number;
    keywords: number;
    internalLinking: number;
    metaInfo: number;
    performance: number;
  };
  onPageAudit: {
    currentTitle: string;
    recommendedTitle: string;
    titleRationale: string;
    currentMetaDesc: string;
    recommendedMetaDesc: string;
    metaDescRationale: string;
    h1: string;
    recommendedH1: string;
    h2Count: number;
    h3Count: number;
    keywordUsage: string;
    contentLength: number;
    imagesCount: number;
    imagesWithoutAlt: number;
    internalLinksCount: number;
    externalLinksCount: number;
  };
  recommendations: Array<{
    id: string;
    category: string;
    title: string;
    impact: "High" | "Medium" | "Low";
    description: string;
    actionStep: string;
  }>;
}

export interface KeywordItem {
  id: string;
  keyword: string;
  searchIntent: "Commercial" | "Informational" | "Navigational" | "Transactional";
  competition: "High" | "Medium" | "Low";
  relevance: number; // 1-100
  priority: "High" | "Medium" | "Low";
  recommendedPage: string;
  estMonthlyVolume: number;
}

export interface CompetitorInsight {
  id: string;
  name: string;
  url: string;
  seoScore: number;
  contentScore: number;
  keywordScore: number;
  presenceScore: number;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  winStrategy: string;
}

export interface ContentOpportunity {
  id: string;
  topic: string;
  searchIntent: string;
  targetKeyword: string;
  priority: "High" | "Medium" | "Low";
  suggestedFormat: "Blog Post" | "Landing Page" | "Guide" | "Social Series" | "Video Script";
  estimatedTrafficPotential: string;
}

export interface GeneratedContent {
  id: string;
  type: string;
  topic: string;
  audience: string;
  tone: string;
  length: string;
  content: string;
  keywordsUsed: string[];
  createdAt: string;
}

export interface CampaignItem {
  id: string;
  name: string;
  goal: string;
  audience: string;
  budget: string;
  startDate: string;
  endDate: string;
  channels: string[];
  cta: string;
  objective: string;
  messaging: string;
  weeklyPlan: Array<{
    week: number;
    focus: string;
    tasks: string[];
  }>;
  kpis: string[];
}

export interface ActionTask {
  id: string;
  week: number;
  title: string;
  category: "SEO" | "Content" | "Outreach" | "Optimization";
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  status: "COMPLETED" | "PENDING" | "IN_PROGRESS";
  description: string;
}

export interface AnalyticsMetric {
  name: string;
  current: number;
  previous: number;
  unit: string;
  change: number; // percentage
  trend: "up" | "down" | "neutral";
}

export interface GrowthAnalyticsData {
  summary: AnalyticsMetric[];
  trafficTrend: Array<{ date: string; organic: number; paid: number; direct: number }>;
  leadConversions: Array<{ month: string; leads: number; signups: number }>;
  channelShare: Array<{ name: string; percentage: number }>;
  keywordRankings: Array<{ keyword: string; rank: number; change: number }>;
}

export interface FullStrategyReport {
  project: Project;
  positioning: ProductPositioning;
  personas: CustomerPersona[];
  seoAudit: SEOAuditResult;
  keywords: KeywordItem[];
  competitors: CompetitorInsight[];
  contentOpportunities: ContentOpportunity[];
  actionPlan: ActionTask[];
  executiveSummary: string;
  generatedAt: string;
}
