"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const experience = {
  company: "Knoctal",
  position: "Front End Developer",
  period: "Jul 2024 – Present",
  location: "Remote",
  projects: [
    {
      projectName: "Beutron (Web App)",
      details:
        "Beutron is a robust, full-stack inventory management system that enables users to handle selling, returns, expense tracking, and more. It features dynamic dashboards with charts, transaction history, and CRUD operations, all backed by Supabase and Prisma. The UI is crafted using Tailwind CSS and powered by the performance of Next.js.",
      technologies:
        "Next.js with TypeScript, Tailwind CSS, Shadcn, NextUI (HeroUI), Supabase, Prisma",
      contributions: [
        "Developed a responsive and user-friendly web application using Next.js and TypeScript",
        "Implemented dynamic dashboards with charts and transaction history using Supabase and Prisma",
        "Collaborated with the team to integrate inventory management features with product, sales, returns, and expense tracking modules",
        "Ensured responsive design across desktop, tablet, and mobile views to maintain consistency with companion mobile app",
      ],
    },
    {
      projectName: "Knoctal Company Website",
      details:
        "Redesigned and developed the official company website using modern UI practices",
      contributions: [
        "Implemented dynamic animations using Framer Motion in Next.js",
        "Built a responsive and accessible user interface",
      ],
    },
  ],
};

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm text-slate-300 mb-4">
              <Briefcase className="w-4 h-4 text-green-400" />
              Professional Experience
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Work
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Professional experience building scalable web applications and
              leading frontend development projects.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

            <Card className="bg-slate-800/20 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-950 hidden md:block"></div>

              <CardContent className="p-8 lg:p-12">
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                          {experience.company}
                        </h3>
                        <p className="text-lg font-medium text-blue-400">
                          {experience.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {experience.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-lg">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-12">
                  {experience.projects.map((project, index) => (
                    <div key={project.projectName} className="relative">
                      <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl lg:text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                              {project.projectName}
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                              {project.details}
                            </p>
                          </div>

                          {project.technologies && (
                            <div>
                              <h5 className="font-medium text-white mb-3 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Technologies Used:
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies
                                  .split(", ")
                                  .map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="secondary"
                                      className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-colors text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h5 className="font-medium text-white mb-4 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              Key Contributions:
                            </h5>
                            <ul className="space-y-3">
                              {project.contributions.map(
                                (contribution, contribIndex) => (
                                  <li
                                    key={contribIndex}
                                    className="flex items-start gap-3 group"
                                  >
                                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                                      {contribution}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
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
