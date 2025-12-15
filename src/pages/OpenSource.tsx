import { GitPullRequest, Github, Star, GitFork, Heart, GitMerge } from "lucide-react";
import Layout from "@/components/Layout";

const OpenSource = () => {
  const contributions = [
    {
      project: "kubernetes/kubernetes",
      description: "Production-Grade Container Scheduling and Management",
      contributions: [
        { type: "PR", title: "Fix memory leak in scheduler", status: "merged" },
        { type: "PR", title: "Add support for custom metrics API", status: "merged" },
        { type: "Issue", title: "Improve documentation for CRDs", status: "closed" }
      ],
      stars: "105k",
      language: "Go"
    },
    {
      project: "microsoft/vscode",
      description: "Visual Studio Code - Open Source IDE",
      contributions: [
        { type: "PR", title: "Implement auto-import suggestions", status: "merged" },
        { type: "PR", title: "Fix TypeScript language server crash", status: "merged" }
      ],
      stars: "155k",
      language: "TypeScript"
    },
    {
      project: "facebook/react",
      description: "A declarative, component-based library for building UIs",
      contributions: [
        { type: "PR", title: "Optimize reconciliation algorithm", status: "merged" },
        { type: "Issue", title: "Memory optimization proposal", status: "closed" }
      ],
      stars: "218k",
      language: "JavaScript"
    },
    {
      project: "golang/go",
      description: "The Go programming language",
      contributions: [
        { type: "PR", title: "Add new runtime metrics", status: "merged" },
        { type: "Issue", title: "Proposal for generics syntax", status: "closed" }
      ],
      stars: "118k",
      language: "Go"
    }
  ];

  const stats = [
    { icon: GitPullRequest, label: "Pull Requests", value: "150+" },
    { icon: GitMerge, label: "Merged PRs", value: "120+" },
    { icon: Star, label: "Stars Earned", value: "5K+" },
    { icon: Heart, label: "Sponsors", value: "25" },
  ];

  const ownProjects = [
    { name: "go-taskqueue", stars: 890, forks: 124, desc: "Distributed task queue for Go" },
    { name: "react-hooks-toolkit", stars: 567, forks: 89, desc: "Collection of useful React hooks" },
    { name: "k8s-operator-sdk", stars: 445, forks: 67, desc: "SDK for building Kubernetes operators" },
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-6 h-6 text-primary" />
              <span className="font-mono text-primary">// open-source</span>
            </div>
            <h1 className="section-title">Open Source</h1>
            <p className="section-subtitle">Contributing to the developer community</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-elevated p-6 text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Major Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Major Contributions</h2>
            <div className="space-y-6">
              {contributions.map((contrib, index) => (
                <div
                  key={contrib.project}
                  className="card-elevated p-6 hover:border-primary/30 transition-all animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <a
                        href={`https://github.com/${contrib.project}`}
                        className="text-xl font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        {contrib.project}
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">{contrib.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-4 h-4" />
                        {contrib.stars}
                      </span>
                      <span className="px-2 py-1 text-xs font-mono bg-muted rounded">{contrib.language}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {contrib.contributions.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className={`px-2 py-0.5 text-xs font-mono rounded ${
                          c.type === "PR" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                        }`}>
                          {c.type}
                        </span>
                        <span className="text-muted-foreground">{c.title}</span>
                        <span className={`ml-auto px-2 py-0.5 text-xs rounded ${
                          c.status === "merged" ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"
                        }`}>
                          {c.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Own Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-8">My Open Source Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ownProjects.map((project, index) => (
                <div
                  key={project.name}
                  className="card-elevated p-6 hover:border-primary/30 transition-all group animate-fade-up opacity-0"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <h3 className="font-mono text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OpenSource;
