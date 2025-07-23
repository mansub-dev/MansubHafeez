"use client";

import { FaGithub } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";

export default function GitHubContributions() {
  return (
    <section
      id="github-contributions"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-16 right-20 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm text-slate-300 mb-4">
            <FaGithub className="w-4 h-4 text-green-400" />
            GitHub Contributions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Open Source
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My recent GitHub activity including contributions to personal and
            team projects.
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 rounded-2xl p-8">
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="mansub-dev"
              blockSize={14}
              blockMargin={5}
              colorScheme="dark"
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
