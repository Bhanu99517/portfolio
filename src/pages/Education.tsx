import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import Layout from "@/components/Layout";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "California, USA",
      period: "2019 - 2021",
      gpa: "3.9/4.0",
      highlights: [
        "Specialized in Distributed Systems and Machine Learning",
        "Published 2 research papers on cloud computing",
        "Teaching Assistant for Advanced Algorithms",
        "Dean's List - All Semesters"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Mumbai, India",
      period: "2015 - 2019",
      gpa: "9.2/10.0",
      highlights: [
        "First Class with Distinction",
        "Led the college coding club",
        "Winner - National Hackathon 2018",
        "Undergraduate Research Assistant"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
    { name: "Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2022" },
    { name: "Google Cloud Professional Data Engineer", issuer: "Google", year: "2022" },
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-mono text-primary">// education</span>
            </div>
            <h1 className="section-title">Academic Background</h1>
            <p className="section-subtitle">My educational journey and certifications</p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-20">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-elevated p-8 hover:border-primary/30 transition-all animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left */}
                  <div className="lg:w-1/3">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-3">{edu.institution}</p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:w-2/3 lg:border-l lg:border-border lg:pl-6">
                    <h4 className="text-sm font-mono text-muted-foreground mb-4">Highlights:</h4>
                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-elevated p-6 hover:border-primary/30 transition-all animate-fade-up opacity-0"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-primary font-mono mt-2">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
