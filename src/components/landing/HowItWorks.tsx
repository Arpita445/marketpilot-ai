import { MessageSquare, Sparkles, LineChart, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us about your product",
    description: "Enter your product name, target audience, location, website URL, and primary business goals.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Let AI analyze your market",
    description: "MarketPilot crawls your website, researches competitors, identifies keywords, and parses buyer personas.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Get your growth strategy",
    description: "Receive actionable GTM positioning, channel recommendations, SEO audit score, and content ideas.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "Execute and track",
    description: "Generate copy in the AI Content Studio, manage your 4-week action timeline, and monitor analytics.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-300 border border-brand-500/20 mb-3">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How MarketPilot AI Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From initial product input to market dominance in under 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="relative glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-brand-500/40 font-mono">{step.number}</span>
                    <div className="h-10 w-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
