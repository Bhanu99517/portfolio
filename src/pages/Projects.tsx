import { FolderKanban, Github, ExternalLink, Star, GitFork } from "lucide-react";
import Layout from "@/components/Layout";

const Projects = () => {
  const projects = [
    {
      title: "CloudScale",
      description: "A Kubernetes-native autoscaling solution that uses ML to predict traffic patterns and scale applications proactively.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Go", "Kubernetes", "TensorFlow", "Prometheus"],
      github: "#",
      demo: "#",
      stars: 1200,
      forks: 234
    },
    {
      title: "DevFlow",
      description: "Visual CI/CD pipeline builder with drag-and-drop interface. Supports GitHub Actions, GitLab CI, and Jenkins.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      stars: 856,
      forks: 142
    },
    {
      title: "CodeReview AI",
      description: "AI-powered code review assistant that provides intelligent suggestions and catches potential bugs before they reach production.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Python", "GPT-4", "FastAPI", "Redis"],
      github: "#",
      demo: "#",
      stars: 2340,
      forks: 456
    },
    {
      title: "SecureVault",
      description: "End-to-end encrypted password manager with zero-knowledge architecture. Available on web, mobile, and desktop.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      technologies: ["Rust", "React Native", "SQLite", "Argon2"],
      github: "#",
      demo: "#",
      stars: 678,
      forks: 89
    },
    {
      title: "DataStream",
      description: "Real-time data processing pipeline for IoT devices. Handles millions of events per second with sub-millisecond latency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Apache Kafka", "Flink", "Scala", "ClickHouse"],
      github: "#",
      demo: "#",
      stars: 445,
      forks: 67
    },
    {
      title: "MockAPI Studio",
      description: "Visual tool for creating and managing mock APIs. Perfect for frontend development and API prototyping.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "MongoDB", "Docker"],
      github: "#",
      demo: "#",
      stars: 923,
      forks: 178
    }
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
