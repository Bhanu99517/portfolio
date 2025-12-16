import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Bhanu99517", label: "GitHub" },
    { icon: Github, href: "https://github.com/BhanuTechLab", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/g-bhanu-prakash-18a476340", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/bhanu9951", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/_g_bhanu_prakash_/#", label: "Instagram" },
    { icon: Mail, href: "bhanu99517@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">&lt;</span>
            <span>Crafted with passion</span>
            <span className="text-primary"> /&gt;</span>
            <span className="ml-2">© {new Date().getFullYear()}_BhanuTechLab</span>
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 rounded-md bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
