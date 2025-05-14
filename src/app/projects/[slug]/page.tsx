"use client";

import Link from "next/link";
import projects from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const slug = params.slug as string;
      const projectName = slug.replace(/-/g, " ");

      const foundProject = projects.projects.find(
        (p) => p.name.toLowerCase() === projectName.toLowerCase()
      );

      setProject(foundProject);
      setIsLoading(false);
    }
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            {project.name}
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            {project.long_description || project.short_description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.try_link && (
              <a
                href={project.try_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            {project.source_link && (
              <a
                href={project.source_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors px-4 py-2 rounded-md"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="w-fit mb-6">
            <h2 className="text-2xl font-semibold inline-block pb-1">
              Project Preview
            </h2>
            <div aria-hidden className="animate-underline" />
          </div>

          <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-xl">
            {project.previews && project.previews[0] ? (
              <img
                src={project.previews[0] || "/placeholder.svg"}
                alt={`${project.name} preview`}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="aspect-video flex items-center justify-center bg-zinc-800 text-zinc-600">
                <p className="text-lg">No preview available</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="w-fit mb-6">
            <h2 className="text-2xl font-semibold inline-block pb-1">
              Technologies Used
            </h2>
            <div aria-hidden className="animate-underline" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tag: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md"
                >
                  {tag}
                </motion.div>
              ))}
          </div>
        </motion.div>

        {project.start_date && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-fit mb-6">
              <h2 className="text-2xl font-semibold inline-block pb-1">
                Project Timeline
              </h2>
              <div aria-hidden className="animate-underline" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <p className="text-gray-300">Started: {project.start_date}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
