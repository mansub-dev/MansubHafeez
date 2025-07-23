"use client";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { AboutProjects } from "@/components/about";
import { Navigation } from "@/components/navigation";
import { Experience } from "@/components/experience";
import GitHubContributions from "@/components/github-contribution";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <AboutProjects />
        <Skills />
        <Projects />
        <Experience />
        <GitHubContributions />
        <Contact />
      </main>
    </div>
  );
}
