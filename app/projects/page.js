"use client";

import { useState } from "react";
import PageLayout from "@/app/components/pageLayout";
import Hero from "@/app/components/Hero";
import Image from "next/image";
import projectsList from "@/content/projects/projects.json";

import { FaGithub, FaLink } from "react-icons/fa";
import { LuTextCursorInput } from "react-icons/lu";

export default function ProjectsPage() {
  // State per il filtro
  const [selectedClass, setSelectedClass] = useState("All");

  // Estrai le classi uniche
  const classOptions = ["All", ...new Set(projectsList.map((p) => p.class))];

  // Applica il filtro
  const filteredProjects =
    selectedClass === "All"
      ? projectsList
      : projectsList.filter((p) => p.class === selectedClass);

  return (
    <PageLayout>
      <Hero
        title="Some Things I’ve Built"
        subtitle="I love automating things and I'm always full of ideas. Sometimes I get so excited about one that I just have to build it!"
        subtitle2="From Software Engineering to Machine Learning — and everything in between..."
        image="illustration/project1.svg"
      />

      {/* Filtro */}
      <div className="flex flex-wrap justify-center gap-3 my-6">
        {classOptions.map((cls, i) => (
          <button
            key={i}
            onClick={() => setSelectedClass(cls)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200
              ${
                selectedClass === cls
                  ? "bg-[var(--color-project-description)] text-black dark:text-white scale-105 shadow-md"
                  : "border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:scale-105 hover:border-white"
              }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Lista progetti */}
      <section className="px-4 py-6 max-w-6xl">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-2 mb-12 p-2 rounded-xl hover:scale-105 hover:border-2 border-[var(--color-project-description)] transition-all"
          >
            {/* Immagine */}
            <div className="w-full md:w-1/2 relative aspect-video">
              <Image
                src={`/projects/${project.imgPath}`}
                alt="Project Image"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            {/* Contenuto */}
            <div className="w-full md:w-1/2 flex flex-col justify-between gap-1">
              <div>
                <div className="text-sm font-mono text-right">
                  {project.class} - {project.year}
                </div>
                <h3 className="text-2xl font-semibold mb-1 text-right">
                  {project.title}
                </h3>
              </div>

              <div className="bg-[var(--color-project-description)] rounded-lg p-4 md:-translate-x-15">
                {project.description}
              </div>

              <div className="text-sm flex flex-col gap-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tag.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex gap-4 mt-1 justify-end">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-1 hover:scale-130"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.blogLink && (
                    <a
                      href={project.blogLink}
                      target="_blank"
                      className="flex items-center gap-1 hover:scale-130"
                    >
                      <LuTextCursorInput className="text-xl" />
                    </a>
                  )}
                  {project.extLink && (
                    <a
                      href={project.extLink}
                      target="_blank"
                      className="flex items-center gap-1 hover:scale-130"
                    >
                      <FaLink className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
