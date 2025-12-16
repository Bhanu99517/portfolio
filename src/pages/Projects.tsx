import { FolderKanban, Github, ExternalLink, Star, GitFork } from "lucide-react";
import Layout from "@/components/Layout";

const Projects = () => {
  const projects = [
    {
      title: "MiraAttendance",
      description: "MIRA ATTENDANCE is a web-based facial recognition attendance platform designed for diploma / polytechnic institutes.Students can check their attendance, exam results, and application status, while admins manage everything through a role-based dashboard.",
      image: "https://image2url.com/files/1765813123543-ff761359-f8eb-4893-b5c0-53c9daa76af8.png",
      technologies: ["TypeScript", "Javascript", "React", "HTML"],
      github: "https://github.com/Bhanu99517/MIRA_FACIAL_ATTENDANCE",
      demo: "https://miraattendance.vercel.app/",
      stars: 19,
      forks: 0
    },
    {
      title: "Consultancy",
      description: "A clean, modern landing page template for consultancy and business services built with HTML, CSS, and JavaScript.",
      image: "https://image2url.com/files/1765855293210-d5b89443-0da0-4ed5-a824-5147d37e77fd.png",
      technologies: ["HTML", "CSS", "JavaSCRIPT"],
      github: "https://github.com/BhanuTechLab/Consultancy",
      demo: "https://globalnorthoverseas.vercel.app/",
      stars: 2,
      forks: 0
    },
    {
      title: "Game",
      description: "Tech-Game-2 is a simple and interactive browser-based game developed using **HTML, CSS, and JavaScript**. This project focuses on improving front-end development skills while creating an engaging user experience.",
      image: "https://image2url.com/files/1765856095508-5a564d07-54cf-4f25-862a-e25823030daf.png",
      technologies: ["HTML", "CSS", "JavaSCRIPT"],
      github: "https://github.com/BhanuTechLab/Tech-Game-2",
      demo: "https://tech-game-2.vercel.app/",
      stars: 3,
      forks: 0
    },

  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FolderKanban className="w-6 h-6 text-primary" />
              <span className="font-mono text-primary">// projects</span>
            </div>
            <h1 className="section-title">Featured Projects</h1>
            <p className="section-subtitle">Things I've built that I'm proud of</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group card-elevated overflow-hidden hover:border-primary/30 transition-all animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats & Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
