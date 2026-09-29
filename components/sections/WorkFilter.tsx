"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards";

export function WorkFilter() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section-py" aria-label="Portfolio filter and grid">
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
              className={`px-5 py-2.5 min-h-[42px] rounded-full text-sm font-medium transition-all duration-200 border
                ${
                  active === f.value
                    ? "bg-[#4F46E5] text-white border-[#4F46E5] shadow-sm"
                    : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#4F46E5] hover:text-[#4F46E5]"
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
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-lg text-[#94A3B8]">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
