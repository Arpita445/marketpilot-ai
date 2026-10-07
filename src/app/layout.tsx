import type { Metadata } from "next";
import "./globals.css";
import { ProjectProvider } from "@/lib/context/ProjectContext";

export const metadata: Metadata = {
  title: "MarketPilot AI — Your AI Command Center for GTM, SEO & Digital Growth",
  description: "MarketPilot AI combines GTM strategy, SEO intelligence, competitor research and AI-powered content generation into one intelligent growth platform.",
  keywords: ["GTM strategy", "SEO analyzer", "AI marketing", "competitor analysis", "keyword intelligence", "content generator"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen selection:bg-brand-500 selection:text-white">
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}
