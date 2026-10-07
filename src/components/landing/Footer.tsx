import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-white">MarketPilot AI</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              "From Product Idea to Market Growth."<br />
              Your AI-powered command center for GTM, SEO and digital growth.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Product Modules</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/dashboard/gtm" className="hover:text-white">GTM Strategy Engine</Link></li>
              <li><Link href="/dashboard/personas" className="hover:text-white">Customer Personas</Link></li>
              <li><Link href="/dashboard/seo" className="hover:text-white">SEO Page Analyzer</Link></li>
              <li><Link href="/dashboard/keywords" className="hover:text-white">Keyword Intelligence</Link></li>
              <li><Link href="/dashboard/content" className="hover:text-white">AI Content Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-white">Documentation & Guide</a></li>
              <li><a href="#features" className="hover:text-white">API Architecture</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing Plans</a></li>
              <li><Link href="/dashboard" className="hover:text-white">Live Demo Mode</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Security Architecture</a></li>
              <li><a href="#" className="hover:text-white">Robots.txt Scraping Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MarketPilot AI Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with Next.js, Tailwind CSS, TypeScript & OpenAI Provider Abstraction.</p>
        </div>
      </div>
    </footer>
  );
}
