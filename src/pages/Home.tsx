import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
const Home = () => {
  const skills = ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Docker", "AWS"];
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.15),transparent_40%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: "2s"
      }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-primary/40 rounded-full animate-float" />
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float" style={{
          animationDelay: "0.5s"
        }} />
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{
          animationDelay: "1s"
        }} />
          <div className="absolute top-1/3 left-2/3 w-0.5 h-0.5 bg-primary/50 rounded-full animate-float" style={{
          animationDelay: "1.5s"
        }} />
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{
          animationDelay: "2s"
        }} />
        </div>
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,hsl(var(--background)/0.8)_100%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Greeting */}
            <div className="flex items-center gap-3 mb-6 animate-fade-up opacity-0 stagger-1">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-muted-foreground">Hello, World! I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0 stagger-2 lg:text-6xl font-serif">
              <span className="text-gradient">G Bhanu Prakash</span>
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-up opacity-0 stagger-3">
              Full Stack Developer & <span className="text-foreground">Open Source Enthusiast</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up opacity-0 stagger-4">I craft elegant solutions to complex problems. Passionate about building scalable applications and contributing to the open-source community. Currently focused on cloud-native technologies and distributed systems.</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-5">
              <Link to="/projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5">
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/50 text-foreground rounded-lg font-medium hover:bg-muted/50 transition-all hover:-translate-y-0.5">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          
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
            {skills.map((skill, index) => <span key={skill} className="px-4 py-2 bg-muted/50 border border-border/50 rounded-lg font-mono text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default animate-fade-up opacity-0" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {skill}
              </span>)}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            number: "1+",
            label: "Years Experience"
          }, {
            number: "3+",
            label: "Projects Completed"
          }, {
            number: "0+",
            label: "Open Source Contributions"
          }, {
            number: "10K+",
            label: "Lines of Code"
          }].map((stat, index) => <div key={stat.label} className="text-center animate-fade-up opacity-0" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;
