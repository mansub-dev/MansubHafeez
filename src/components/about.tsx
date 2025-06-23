"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Target, Zap, Code, Users } from "lucide-react";

export function AboutProjects() {
  const stats = [
    { number: "12+", label: "Projects Completed", icon: Code },
    { number: "1+", label: "Years Experience", icon: Award },
    { number: "10+", label: "Technologies", icon: Zap },
    { number: "100%", label: "Client Satisfaction", icon: Users },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm text-slate-300 mb-4">
              <Target className="w-4 h-4 text-blue-400" />
              About Me
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Crafting Digital
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="relative group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <Card className="relative bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Professional Summary */}
            <div className="space-y-8">
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Professional Journey
                    </h3>
                  </div>

                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Highly skilled{" "}
                      <span className="text-blue-400 font-semibold">
                        Front End Developer
                      </span>{" "}
                      with a strong background in building scalable,
                      high-performance web and mobile applications using modern
                      technologies.
                    </p>
                    <p>
                      Proven expertise in{" "}
                      <span className="text-purple-400 font-semibold">
                        React.js, Next.js, TypeScript
                      </span>
                      , and Node.js, with extensive experience in UI/UX design,
                      AI-driven development, and browser extensions.
                    </p>
                    <p>
                      Passionate about performance optimization, interactive
                      animations, and integrating AI models to enhance user
                      experiences. Strong problem-solving skills and a track
                      record of delivering innovative solutions.
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {[
                      "Problem Solving",
                      "Team Leadership",
                      "AI Integration",
                      "Performance Optimization",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education & Background */}
            <div className="space-y-8">
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Education
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-blue-500/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h4 className="font-semibold text-white text-lg">
                        Bachelor of Science in Computer Science
                      </h4>
                      <p className="text-slate-400 mb-2">
                        University of Gujrat
                      </p>
                      <Badge
                        variant="outline"
                        className="border-blue-500/30 text-blue-400"
                      >
                        2021 - 2025
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Key Highlights
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      "12+ Projects completed across various domains",
                      "Full-stack development experience",
                      "AI-powered application development",
                      "Performance optimization specialist",
                      "Modern animation and UI/UX expertise",
                    ].map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-slate-300 group-hover:text-white transition-colors">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
