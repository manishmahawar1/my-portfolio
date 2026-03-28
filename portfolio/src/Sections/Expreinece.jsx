// const experiences = [
//   {
//     period: "2023 — School",
//     role: "CBSE BOARD",
//     company: "Science",
//     description:
//       "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
//     technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
//     current: true,
//   },
//   {
//     period: "2020 — 2022",
//     role: "Frontend Engineer",
//     company: "Digital Solutions Co.",
//     description:
//       "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
//     technologies: ["React", "Redux", "Jest", "Cypress"],
//     current: false,
//   },
//   {
//     period: "2019 — 2020",
//     role: "Junior Developer",
//     company: "StartUp Labs",
//     description:
//       "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
//     technologies: ["React", "Node.js", "MongoDB", "AWS"],
//     current: false,
//   },
//   {
//     period: "2018 — 2019",
//     role: "Freelance Developer",
//     company: "Self-Employed",
//     description:
//       "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
//     technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
//     current: false,
//   },
// ];



const experiences = [
  {
    period: "2024 — Present",
    role: "MERN Stack Developer (Diploma)",
    company: "IFDA Institute",
    description:
      "Focused on learning and building full-stack web applications using the MERN stack. Developed strong understanding of frontend and backend development by working on real-world projects.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    current: true,
  },
  {
    period: "2025",
    role: "Full Stack E-commerce Project",
    company: "Personal Project",
    description:
      "Built a complete e-commerce application with product listing, cart functionality, and checkout flow. Implemented REST APIs and designed a responsive user interface.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    current: false,
  },
  {
    period: "2025",
    role: "Food Delivery Web App (Tamato)",
    company: "Personal Project",
    description:
      "Developed a food delivery web application inspired by platforms like Zomato. Implemented features like product listing, cart system, and dynamic UI for browsing food items. Focused on responsive design and smooth user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "ExpressJs"],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "Bachelor of Arts (DU SOL)",
    company: "Delhi University",
    description:
      "Currently pursuing graduation while consistently improving web development skills and building practical projects alongside studies.",
    technologies: ["Learning", "Development", "Consistency"],
    current: false,
  },
  {
    period: "Open to Work",
    role: "Fresher Developer",
    company: "Looking for Opportunities",
    description:
      "Actively seeking internship or entry-level opportunities to start my professional journey and contribute to real-world projects.",
    technologies: ["Quick Learner", "Team Player", "Problem Solving"],
    current: false,
  },
];


export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-[var(--color-secondary-foreground)] text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-[var(--color-secondary-foreground)]"
          >
            My Journey
            <span className="font-serif italic font-normal text-white">
              {" "}
              as a Developer
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A journey of learning, building projects, and growing as a MERN stack developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] rounded-full -translate-x-1/2 ring-4 ring-[var(--color-primary)]/30 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-[var(--color-primary)] font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-[var(--color-muted-foreground)]">{exp.company}</p>
                    <p className="text-sm text-[var(--color-muted-foreground)] mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-[var(--color-muted-foreground)] border border-border/50 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Experience;