"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards";

export function WorkFilter() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section-py bg-[#F4EBDD]" aria-label="Portfolio filter and grid">
      <div className="container-xl">
        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              aria-pressed={active === f.value}
              className={`px-4 py-2 min-h-[38px] rounded-md text-xs md:text-sm font-semibold transition-colors duration-150 border
                ${
                  active === f.value
                    ? "bg-[#641C2D] text-[#F4EBDD] border-[#641C2D]"
                    : "bg-[#FAF6EF] text-[#665B57] border-[#D8CBB9] hover:border-[#171514] hover:text-[#171514]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                shortDescription={project.shortDescription}
                industry={project.industry}
                tags={project.tags}
                image={project.image}
                href={`/work/${project.slug}`}
                featured={project.featured}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-[#D8CBB9] rounded-md bg-[#FAF6EF] p-8">
            <p className="text-base text-[#665B57]">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
