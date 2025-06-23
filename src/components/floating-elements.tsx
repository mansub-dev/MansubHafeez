"use client";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiShadcnui,
  SiHeroku,
} from "react-icons/si";

const techIcons = [
  {
    icon: <SiReact />,
    position: "top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8",
    color: "text-cyan-400 hover:text-cyan-300",
    bg: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    icon: <SiNextdotjs />,
    position: "bottom-8 sm:bottom-10 lg:bottom-12 left-4 sm:left-6 lg:left-8",
    color: "text-white hover:text-gray-200",
    bg: "bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40",
  },
  {
    icon: <SiTailwindcss />,
    position: "top-1/2 -right-3 sm:-right-4 lg:-right-6",
    color: "text-sky-400 hover:text-sky-300",
    bg: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20 hover:border-sky-500/40",
  },
  {
    icon: <SiSupabase />,
    position: "bottom-4 sm:bottom-6 lg:bottom-8 -left-3 sm:-left-4 lg:-left-6",
    color: "text-emerald-400 hover:text-emerald-300",
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    icon: <SiCss3 />,
    position: "top-8 sm:top-10 lg:top-12 left-8 sm:left-12 lg:left-16",
    color: "text-blue-400 hover:text-blue-300",
    bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: <SiJavascript />,
    position: "top-16 sm:top-20 lg:top-24 right-12 sm:right-16 lg:right-20",
    color: "text-yellow-400 hover:text-yellow-300",
    bg: "bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/20 hover:border-yellow-500/40",
  },
  {
    icon: <SiTypescript />,
    position:
      "bottom-12 sm:bottom-16 lg:bottom-20 right-16 sm:right-20 lg:right-24",
    color: "text-blue-500 hover:text-blue-400",
    bg: "bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20 hover:border-blue-600/40",
  },
  {
    icon: <SiShadcnui />,
    position: "top-1/3 left-12 sm:left-16 lg:left-20",
    color: "text-slate-300 hover:text-white",
    bg: "bg-slate-500/10 hover:bg-slate-500/20 border-slate-500/20 hover:border-slate-500/40",
  },
  {
    icon: <SiHeroku />,
    position: "bottom-1/4 left-8 sm:left-12 lg:left-16",
    color: "text-purple-400 hover:text-purple-300",
    bg: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20 hover:border-purple-500/40",
  },
];

type Dot = {
  top: string;
  left: string;
  delay: string;
  duration: string;
};

export default function HeroIcons() {
  const [dots, setDots] = React.useState<Dot[]>([]);

  React.useEffect(() => {
    const numDots = 10;
    const newDots = Array.from({ length: numDots }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setDots(newDots);
  }, []);
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-fade-in-up">
      {/* Central Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Rotating Ring */}
      <div className="absolute inset-0 border border-slate-700/30 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-2 sm:inset-4 border border-slate-600/20 rounded-full animate-spin-reverse-slow"></div>

      {/* Central Avatar Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700/50 rounded-full flex items-center justify-center shadow-2xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MH
            </span>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons - Hidden on mobile for better performance */}
      <div className="hidden sm:block">
        {techIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} group cursor-pointer z-10`}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${item.bg} backdrop-blur-sm border rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-lg lg:text-xl ${item.color} shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-float group-hover:animate-bounce`}
            >
              {item.icon}
            </div>

            {/* Tooltip - Hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 whitespace-nowrap">
                {item.icon.type.name?.replace("Si", "") || "Tech"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-float"
          style={{
            top: dot.top,
            left: dot.left,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        ></div>
      ))}
    </div>
  );
}
