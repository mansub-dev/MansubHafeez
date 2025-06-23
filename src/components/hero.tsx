"use client";

import React from "react";
import HeroIcons from "./floating-elements";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Code,
  Palette,
  Zap,
} from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs - responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Mouse follower effect - only on larger screens */}
        <div
          className="hidden lg:block absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Grid pattern - responsive size */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full text-xs sm:text-sm font-medium">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-emerald-300">
                Available for new opportunities
              </span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-5xl font-black leading-none tracking-tight">
                  <span className="block text-white/90 mb-1 sm:mb-2">
                    Hi, I&rsquo;m
                  </span>
                  <span className="block text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    Mansub Hafeez
                  </span>
                  {/* <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x"></span> */}
                </h1>
              </div>

              {/* Role & Status */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-slate-300 font-medium text-sm sm:text-base">
                      Frontend Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                    <Palette className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-slate-300 font-medium text-sm sm:text-base">
                      UI/UX Enthusiast
                    </span>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-slate-300 font-medium">
                  Crafting Digital Experiences with Passion
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I specialize in building exceptional digital experiences that
                  combine beautiful design with powerful functionality.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                    (tech, index) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-xs sm:text-sm text-slate-300 font-medium animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <a href="mailto:mansubsheikh4@gmail.com">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  Let&rsquo;s Collaborate
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-slate-600/50 bg-slate-800/30 backdrop-blur-sm text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <a href="#projects">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:text-yellow-400 transition-colors" />
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 sm:pt-8">
              <span className="text-slate-500 text-xs sm:text-sm font-medium">
                Connect:
              </span>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mansub-hafeez-91125b21b/",
                    color:
                      "hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:mansubsheikh4@gmail.com",
                    color:
                      "hover:bg-emerald-600/20 hover:border-emerald-500/50 hover:text-emerald-400",
                    label: "Email",
                  },
                  {
                    icon: Phone,
                    href: "tel:+92-310-3302763",
                    color:
                      "hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-400",
                    label: "Phone",
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`group p-3 sm:p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="hidden relative md:flex justify-center lg:justify-end order-first lg:order-last">
            <HeroIcons />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-1 sm:gap-2 text-slate-500 hover:text-slate-300 transition-all duration-300"
          >
            <span className="text-xs sm:text-sm font-medium">
              Discover More
            </span>
            <div className="p-1.5 sm:p-2 border border-slate-700/50 rounded-full group-hover:border-slate-600 transition-colors">
              <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce group-hover:text-blue-400 transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
