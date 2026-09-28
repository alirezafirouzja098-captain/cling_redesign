import { company } from "@/data/company";

export default function HomePage() {
  return (
    <div className="space-y-16 py-8">
      <section className="hero text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Making Your <span className="text-blue-600">Ideas Happen!</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {company.description}
        </p>
      </section>

      <section className="stats grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold">{company.stats.projectsCompleted}</div>
          <div className="text-sm text-slate-500">Projects Completed</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{company.stats.happyClients}</div>
          <div className="text-sm text-slate-500">Happy Clients</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{company.stats.linesOfCode}</div>
          <div className="text-sm text-slate-500">Lines of Code</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{company.stats.coffeeWithClients}</div>
          <div className="text-sm text-slate-500">Coffee With Clients</div>
        </div>
      </section>

      {/* Placeholders for other sections (Services, Testimonials, Contact) */}
      <section className="services">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="text-slate-600">[Service Cards Placeholder]</p>
      </section>
    </div>
  );
}
