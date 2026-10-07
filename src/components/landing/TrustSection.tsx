import { Cpu, Target, Search, FileText, Swords, Calendar } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "AI-Powered Intelligence",
    description: "Deep LLM analysis customized for your product positioning and market niche.",
    color: "text-brand-400",
  },
  {
    icon: Target,
    title: "Structured GTM Strategy",
    description: "Clear customer segments, value propositions, and scored acquisition channels.",
    color: "text-emerald-400",
  },
  {
    icon: Search,
    title: "SEO Audit & Keywords",
    description: "Automated URL scraper, page tag analysis, and high-intent keyword discovery.",
    color: "text-amber-400",
  },
  {
    icon: FileText,
    title: "AI Content Studio",
    description: "Instant generation of blogs, social posts, ads, landing copy, and meta tags.",
    color: "text-purple-400",
  },
  {
    icon: Swords,
    title: "Competitor Research",
    description: "Side-by-side positioning matrices and actionable 'Where You Can Win' tactics.",
    color: "text-rose-400",
  },
  {
    icon: Calendar,
    title: "Campaign Planner",
    description: "Turn strategy into 4-week action plans with task timelines and KPI tracking.",
    color: "text-cyan-400",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 border-y border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Growth Engine Architecture</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Everything You Need to Scale From Idea to Revenue
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${item.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
