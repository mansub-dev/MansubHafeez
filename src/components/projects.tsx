"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Filter,
  Star,
  Calendar,
  Folder,
} from "lucide-react";
import Image from "next/image";

const projects = {
  projects: [
    {
      name: "Beutron",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Prisma",
        "Inventory",
        "Full Stack",
      ],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/beutron.png?updatedAt=1747252584371",
      ],
      short_description:
        "A full-featured inventory management system built with Next.js, Tailwind, Supabase, and Prisma.",
      long_description:
        "Beutron is a robust, full-stack inventory management system that enables users to handle selling, returns, expense tracking, and more. It features dynamic dashboards with charts, transaction history, and CRUD operations, all backed by Supabase and Prisma. The UI is crafted using Tailwind CSS and powered by the performance of Next.js.",
      try_link: "https://beutron.vercel.app/",
      source_link: "https://github.com/najmiter/beutron",
      start_date: "January, 2025",
      featured: false,
      category: "Full Stack",
    },
    {
      name: "Leadflow CRM",
      tags: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Socket.io",
        "TypeScript",
        "Tailwind CSS",
        "CRM",
        "Real-time",
      ],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/leadflow.png?updatedAt=1747252686006",
      ],
      short_description:
        "A full-stack CRM system with real-time collaboration, reporting, and customer lifecycle management.",
      long_description:
        "Leadflow CRM is a complete customer relationship management system built as a Final Year Project. It features task and deal tracking, customer records, analytics dashboards, PDF report generation, and real-time chat using Socket.io. The stack includes Next.js for the frontend, NestJS for the backend, PostgreSQL for storage, and Tailwind CSS for responsive styling — all written in TypeScript.",
      try_link: "https://leadflowcrm.vercel.app/",
      source_link: "https://github.com/mansub-dev/Leadflow",
      start_date: "November, 2024",
      featured: false,
      category: "Full Stack",
    },
    {
      name: "Wallpaper Studio",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Image Generation",
        "UI/UX",
      ],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/FireShot%20Capture%20079%20-%20Wallpaper%20Studio%20-%20wallpaperstudio.netlify.app.png?updatedAt=1754771065595",
      ],
      short_description:
        "A stylish desktop wallpaper generator built with modern frontend tech—upload an image, tweak style settings, and download instantly.",
      long_description:
        "Wallpaper Studio is a web app that lets users create beautiful desktop wallpapers from their own photos. It supports uploading background and optional foreground images, and features adjustable settings like blur, zoom, saturation, brightness, tint, and film grain, making it perfect for ultrawide or standard desktop resolutions. Built with a focus on responsive design and intuitive controls.",
      try_link: "https://wallpaperstudio.netlify.app/",
      source_link: "https://github.com/mansub-dev/wallpaper-studio",
      start_date: "2025",
      featured: false,
      category: "Frontend",
    },
    {
      name: "PhoSate",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Restaurant",
        "Framer Motion",
      ],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/phosate.png?updatedAt=1747252753356",
      ],
      short_description:
        "A restaurant website built with Next.js, Tailwind CSS, framer motion, and shadcn.",
      long_description:
        "A restaurant website built with Next.js, Tailwind CSS, framer motion, and shadcn. It features a modern design with smooth animations and a responsive layout. The site showcases the restaurant's menu, location, and contact information, providing an engaging user experience.",
      try_link: "https://phosate.vercel.app/",
      source_link: "https://github.com/mansub-dev/phosate",
      start_date: "May, 2024",
      featured: false,
      category: "Frontend",
    },

    {
      name: "Code Snippet Saver",
      tags: ["JavaScript", "HTML", "CSS", "Productivity", "Tooling"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/codesaver.png?updatedAt=1747251758803",
      ],
      short_description:
        "A simple snippet manager to save, view, and delete code snippets.",
      long_description:
        "Code Snippet Saver is a lightweight web application built with HTML, CSS, and JavaScript that allows users to create, store, view, and delete code snippets. It uses localStorage to persist data between sessions, making it a useful tool for developers to manage frequently used code blocks.",
      try_link: "https://code-saver.netlify.app/",
      source_link: "https://github.com/mansub-dev/CodeSnippetManager",
      start_date: "July, 2024",
      featured: false,
      category: "Frontend",
    },
    {
      name: "Connectify",
      tags: ["React", "JavaScript", "Tailwind CSS", "Social Media", "Frontend"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/conectify.png?updatedAt=1747252115140",
      ],
      short_description:
        "A social media platform built with React and Tailwind CSS, featuring posts, likes, and comments.",
      long_description:
        "Connectify is a social media web app built using React and styled with Tailwind CSS. It allows users to create posts, like and comment on them, and engage in a simplified social networking experience. The project focuses on clean UI design, responsive layout, and smooth client-side interactions to demonstrate modern frontend capabilities.",
      try_link: "https://connectiffi.netlify.app/",
      source_link: "https://github.com/mansub-dev/SocialApp",
      start_date: "August, 2024",
      featured: false,
      category: "Full Stack",
    },
    {
      name: "SalaryPredictor",
      tags: [
        "Python",
        "Streamlit",
        "NumPy",
        "Pandas",
        "Machine Learning",
        "Data Science",
      ],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/salaryPredictor.png?updatedAt=1747252294445",
      ],
      short_description:
        "An AI-powered tool to predict developer salaries based on 2020 data and country selection.",
      long_description:
        "SalaryPredictor is a machine learning web app built with Streamlit, NumPy, and Pandas. It leverages a dataset from 2020 to predict software developer salaries based on inputs like country and education level. The project demonstrates how data preprocessing and model inference can be integrated into a user-friendly frontend with Streamlit.",
      try_link: "https://salarypredictory.streamlit.app",
      source_link: "https://github.com/mansub-dev/SalaryPredictor",
      start_date: "September, 2024",
      featured: false,
      category: "AI/ML",
    },
    {
      name: "Expensr",
      tags: [
        "Redux",
        "React js",
        "JavaScript",
        "Shadcn",
        "Framer Motion",
        "Tailwind CSS",
        "ExpenseTracker",
      ],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/expensr.png?updatedAt=1751052214461",
      ],
      short_description:
        "A project just build for the practice of Redux, this app tracks the expenses.",
      long_description:
        "A project just build for the practice of Redux, this app tracks the expenses. It allows users to add, edit, and delete expenses, providing a clear overview of their financial activities. The app features a modern UI built with React and Tailwind CSS, utilizing Redux for state management and Shadcn for UI components.",
      try_link: "https://expensr.vercel.app/",
      source_link: "https://github.com/mansub-dev/expensr",
      start_date: "June, 2025",
      featured: false,
      category: "Frontend",
    },
    {
      name: "Taseeb Counter",
      tags: ["JavaScript", "HTML", "CSS", "Utility", "Islamic"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/tasbeeh.png?updatedAt=1747251540273",
      ],
      short_description:
        "A digital Tasbeeh counter to keep track of your dhikr (remembrance of Allah).",
      long_description:
        "Taseeb Counter is a simple web application designed to help users digitally count their tasbeeh (a form of dhikr or remembrance of Allah). It enables users to track the number of times they’ve recited specific ayaat or phrases. The interface is clean, easy to use, and works well across devices.",
      try_link: "https://prayer-beads.netlify.app/",
      source_link: "https://github.com/mansub-dev/TasbeehCounter",
      start_date: "May, 2024",
      featured: false,
      category: "Frontend",
    },
    {
      name: "Gazbo",
      tags: ["JavaScript", "HTML", "CSS", "E-commerce"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/gazbo.png?updatedAt=1747252842090",
      ],
      short_description:
        "A responsive men's fashion e-commerce website clone with core shopping functionalities.",
      long_description:
        "Gazbo is a clone of a popular menswear e-commerce website, developed to demonstrate modern front-end development skills. It features a sleek, user-friendly interface with full responsiveness. Core e-commerce functionalities include product listing, search and filter options, shopping cart, and a seamless checkout experience.",
      try_link: "https://menbo.netlify.app/",
      source_link: "https://github.com/mansub-dev/MenWearClone",
      start_date: "June, 2024",
      featured: false,
      category: "Frontend",
    },

    {
      name: "Calculator",
      tags: ["JavaScript", "HTML", "CSS", "Utility"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/calculator.png?updatedAt=1747252389262",
      ],
      short_description:
        "A basic calculator web app for performing standard arithmetic operations.",
      long_description:
        "Calculator is a simple web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The project focuses on clear layout, responsive design, and functional precision.",
      try_link: "https://calcualtori.netlify.app/",
      source_link: "https://github.com/mansub-dev/Claculator",
      start_date: "August, 2024",
      featured: false,
      category: "Frontend",
    },
    {
      name: "FrontFrame",
      tags: ["HTML", "CSS", "Responsive Design", "Practice"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/landingPage.png?updatedAt=1747252945258",
      ],
      short_description:
        "A simple, responsive landing page built to practice HTML and CSS layout techniques.",
      long_description:
        "FrontFrame is a clean and minimal landing page created to improve HTML and CSS skills. It features a structured layout with sections for headers, calls to action, and responsive design patterns. Ideal as a beginner-friendly project to refine front-end fundamentals.",
      try_link: "https://the-land-page.netlify.app/",
      source_link: "https://github.com/mansub-dev/LandingPage",
      start_date: "March, 2024",
      featured: false,
      category: "Frontend",
    },

    {
      name: "Age Calculator",
      tags: ["JavaScript", "HTML", "CSS", "Utility"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/agecalculator.png?updatedAt=1747251844334",
      ],
      short_description:
        "A simple web app that calculates a person's age based on their date of birth.",
      long_description:
        "Age Calculator is a straightforward utility tool that allows users to input their date of birth and get their current age in years, months, and days. Built using HTML, CSS, and JavaScript, it's a clean example of working with dates and real-time UI updates.",
      try_link: "https://ageclaculate.netlify.app/",
      source_link: "https://github.com/mansub-dev/AgeCalculator",
      start_date: "September, 2024",
      featured: false,
      category: "Frontend",
    },
    {
      name: "To Do App",
      tags: ["JavaScript", "HTML", "CSS", "Productivity"],
      thumbnail: "",
      previews: [
        "https://ik.imagekit.io/c3l9vc9yj/todo.png?updatedAt=1747251970072",
      ],
      short_description:
        "A simple and functional to-do list app with add, edit, and delete capabilities.",
      long_description:
        "To Do App is a straightforward task management web application that allows users to create, update, and delete their to-do items. Built using HTML, CSS, and JavaScript, it features a clean UI and uses localStorage to retain task data between sessions, making it a useful productivity tool.",
      try_link: "https://listi.netlify.app/",
      source_link: "https://github.com/mansub-dev/To-Do-App",
      start_date: "August, 2024",
      featured: false,
      category: "Frontend",
    },
  ],
};

const categories = ["All", "Full Stack", "Frontend", "AI/ML"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [showAll, setShowAll] = React.useState(false);

  const filteredProjects = projects.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ? true : project.category === selectedCategory;
    return matchesCategory;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-sm text-slate-300 mb-4">
              <Folder className="w-4 h-4 text-purple-400" />
              Featured Work
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Selected
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A showcase of my recent work, featuring full-stack applications,
              AI-powered tools, and modern web experiences.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                      : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.name}
                className={`group hover:-translate-y-2 transition-all duration-300 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <Card className="relative bg-slate-800/30 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.previews[0] || "/placeholder.svg"}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="bg-white/90 text-slate-900 hover:bg-white"
                        asChild
                      >
                        <a
                          href={project.try_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/10"
                        asChild
                      >
                        <a
                          href={project.source_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-1 text-slate-500 text-xs">
                            <Calendar className="w-3 h-3" />
                            {project.start_date}
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {project.short_description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-slate-700/50 text-slate-300"
                          >
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && filteredProjects.length > 6 && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3"
              >
                Show More Projects ({filteredProjects.length - 6} more)
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
