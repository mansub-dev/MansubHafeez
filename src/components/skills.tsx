"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Database, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Numpy",
      "Pandas",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Code,
  },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/UI",
      "HeroUI",
      "Responsive Design",
    ],
    color: "from-purple-500 to-pink-500",
    icon: Palette,
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Supabase", "Prisma", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
    icon: Database,
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "Socket.io",
      "AI Integration",
      "Performance Optimization",
    ],
    color: "from-orange-500 to-red-500",
    icon: Wrench,
  },
];

const coreSkills = [
  {
    skill: "React.js / Next.js",
    level: 95,
    color: "from-blue-500 to-cyan-500",
  },
  {
    skill: "TypeScript / JavaScript",
    level: 90,
    color: "from-yellow-500 to-orange-500",
  },
  { skill: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" },
  { skill: "Framer Motion", level: 85, color: "from-purple-500 to-pink-500" },
  { skill: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
  {
    skill: "Database Management",
    level: 85,
    color: "from-indigo-500 to-purple-500",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm text-slate-300 mb-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              Skills & Technologies
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technical
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit of modern technologies and frameworks I
              use to build exceptional web experiences.
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <Card className="relative bg-slate-800/30 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-white text-lg">
                          {category.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-all duration-300 cursor-default text-xs py-1 px-3 hover:scale-110"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Core Competencies */}
          <div className="mt-20">
            <Card className="bg-slate-800/20 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    Core Competencies
                  </h3>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                    Proficiency levels in my primary technologies, constantly
                    evolving through continuous learning and practice.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {coreSkills.map((item, index) => (
                    <div key={item.skill} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white text-lg">
                          {item.skill}
                        </span>
                        <span className="text-sm text-slate-400 font-semibold">
                          {item.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full relative animate-progress`}
                          style={{
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.2}s`,
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
