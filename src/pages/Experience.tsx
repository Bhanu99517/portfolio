import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of cloud-native applications serving millions of users globally.",
      achievements: [
        "Architected microservices platform reducing deployment time by 60%",
        "Led team of 5 engineers to deliver critical infrastructure components",
        "Implemented ML-powered recommendation system increasing user engagement by 25%",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["Go", "Kubernetes", "GCP", "TensorFlow", "gRPC"]
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed features for Azure cloud services and developer tools.",
      achievements: [
        "Built real-time collaboration features for VS Code",
        "Optimized database queries reducing latency by 40%",
        "Contributed to open-source SDK used by 10K+ developers",
        "Received 'Star Performer' award for Q3 2021"
      ],
      technologies: ["TypeScript", "React", "C#", ".NET", "Azure"]
    },
    {
      title: "Software Engineering Intern",
      company: "Amazon",
      location: "Seattle, WA",
      period: "Summer 2020",
      type: "Internship",
      description: "Worked on AWS Lambda infrastructure improvements.",
      achievements: [
        "Developed automated testing framework for serverless functions",
        "Reduced cold start times by 15% through optimization",
        "Received return offer for full-time position"
      ],
      technologies: ["Python", "AWS Lambda", "DynamoDB", "CloudFormation"]
    }
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <span className="font-mono text-primary">// experience</span>
            </div>
            <h1 className="section-title">Work Experience</h1>
            <p className="section-subtitle">My professional journey in tech</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} animate-fade-up opacity-0`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 md:translate-x-1/2 hidden md:block glow-effect" />

                  <div className="card-elevated p-8 hover:border-primary/30 transition-all">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
