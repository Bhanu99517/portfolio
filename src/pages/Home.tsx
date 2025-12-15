import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Docker", "AWS"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Greeting */}
            <div className="flex items-center gap-3 mb-6 animate-fade-up opacity-0 stagger-1">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-muted-foreground">Hello, World! I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 stagger-2">
              <span className="text-gradient">John Doe</span>
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-up opacity-0 stagger-3">
              Full Stack Developer & <span className="text-foreground">Open Source Enthusiast</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up opacity-0 stagger-4">
              I craft elegant solutions to complex problems. Passionate about building 
              scalable applications and contributing to the open-source community. 
              Currently focused on cloud-native technologies and distributed systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-5">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/50 text-foreground rounded-lg font-medium hover:bg-muted/50 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-mono text-muted-foreground">Technologies I work with</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-muted/50 border border-border/50 rounded-lg font-mono text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Open Source Contributions" },
              { number: "10K+", label: "Lines of Code" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-up opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
