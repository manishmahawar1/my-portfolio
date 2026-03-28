import { ArrowUpRight } from "lucide-react";
import AnimatedBorder from "../Components/AnimatedBorder";
// const projects = [
//   {
//     title: "Fintech Dashboard",
//     description:
//       "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
//     image: "/projects/project1.png",
//     tags: ["React", "Typescript", "NodeJS"],
//     link: "#",

//   },
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
//     image: "/projects/project2.png",
//     tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
//     link: "#",

//   },
//   {
//     title: "AI Writing Assistant",
//     description:
//       "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
//     image: "/projects/project3.png",
//     tags: ["React", "OpenAI", "Python", "FastAPI"],
//     link: "#",

//   },
//   {
//     title: "Project Management Tool",
//     description:
//       "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
//     image: "/projects/project4.png",
//     tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
//     link: "#",

//   },
// ];



const projects = [
  {
    title: "Tamato Food Delivery (E-commerce)",
    description:
      "A full-stack food delivery web application inspired by Zomato. Features include product listing, add to cart, admin panel, and secure payment integration using Stripe. Built complete backend with RESTful APIs, image upload using Multer, and email notifications via Nodemailer.",
    image: "/projects/my-project1.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Multer",
      "Nodemailer",
      "REST APIs"
    ],
    link: "https://my-tamoto-frontend.onrender.com/",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application with instant messaging functionality using Socket.io. Includes user communication, image upload via Cloudinary, and a clean responsive UI built with Tailwind CSS.",
    image: "/projects/my-project2.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS"
    ],
    link: "#",
  },
  {
    title: "YouTube Clone",
    description:
      "A frontend YouTube clone built using React that fetches and displays dynamic video data using APIs. Focused on UI design, video listing, search functionality, and efficient data fetching.",
    image: "/projects/my-project3.png",
    tags: [
      "React",
      "Tailwind CSS",
      "API Integration",
      "JavaScript",
      "Data Fetching"
    ],
    link: "https://youtube-pj4d.onrender.com/",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix clone built with React, focusing on modern UI design and smooth user experience. Implemented React hooks for state management and dynamic content rendering.",
    image: "/projects/my-project4.png",
    tags: [
      "React",
      "React Hooks",
      "Tailwind CSS",
      "JavaScript",
      "UI/UX"
    ],
    link: "https://netmyflix.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img

                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div
                  className="absolute inset-0 
                        bg-gradient-to-t 
                 from-[var(--color-card)] 
                  via-[var(--color-card)]/60 
                      to-transparent"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary)]-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-[var(--color-primary)]
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-muted-foreground hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorder>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorder>
        </div>
      </div>
    </section>
  );
};

export default Projects;