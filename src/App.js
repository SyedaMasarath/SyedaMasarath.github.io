import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, Code, Server, Database, Shield, Cloud, Terminal, TrendingUp, BookOpen, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'DevOps & Orchestration': ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'AWS EKS'],
    'CI/CD': ['GitHub Actions', 'GitLab CI/CD', 'AWS CodePipeline'],
    'Cloud Platforms': ['AWS', 'GCP'],
    'Monitoring & Logging': ['Prometheus', 'Grafana', 'Loki', 'Fluent Bit'],
    'Security': ['Trivy', 'SonarQube', 'IAM', 'OIDC'],
    'Databases': ['MySQL', 'PostgreSQL'],
    'Languages': ['Python', 'Bash']
  };

  const projects = [
    {
      title: 'Cloud Migration & Zero-Downtime Deployment',
      company: 'Shuru Technologies',
      description: 'Led complete GCP to AWS migration for two flagship applications using blue-green deployment strategy',
      achievements: [
        'Achieved near-zero downtime during migration',
        'Designed AWS infrastructure following Well-Architected Framework',
        'Implemented automated rollback mechanisms'
      ],
      tech: ['AWS', 'Kubernetes', 'Terraform', 'Helm']
    },
    {
      title: 'Enterprise Observability Platform',
      company: 'Shuru Technologies',
      description: 'Built comprehensive monitoring and logging infrastructure from scratch',
      achievements: [
        'Reduced MTTD by 50% with Prometheus & Grafana dashboards',
        'Decreased issue resolution time by 30% with centralized Loki logging',
        'Implemented intelligent filtering to reduce log noise'
      ],
      tech: ['Prometheus', 'Grafana', 'Loki', 'Fluent Bit']
    },
    {
      title: 'Security-First CI/CD Pipeline',
      company: 'Shuru Technologies',
      description: 'Integrated comprehensive security scanning into deployment workflows',
      achievements: [
        'Reduced critical vulnerabilities by 40% with Trivy scanning',
        'Decreased post-deployment defects by 25% with SonarQube',
        'Created reusable GitHub workflow templates'
      ],
      tech: ['GitHub Actions', 'Trivy', 'SonarQube', 'Docker']
    },
    {
      title: 'High-Availability Kubernetes Infrastructure',
      company: 'Cognizant',
      description: 'Managed and optimized production-grade EKS clusters',
      achievements: [
        'Achieved 99.99% uptime SLA',
        'Reduced cluster costs by 20% through resource optimization',
        'Implemented auto-scaling strategies for cost efficiency'
      ],
      tech: ['AWS EKS', 'Kubernetes', 'Terraform', 'Helm']
    }
  ];

  const experience = [
    {
      role: 'DevOps Engineer',
      company: 'Shuru Technologies',
      period: 'January 2025 – Present',
      location: 'Remote',
      highlights: [
        'First DevOps hire - built entire DevOps function from ground up',
        'Led GCP to AWS cloud migration with zero-downtime deployment',
        'Reduced deployment time by 40% with standardized Helm workflows',
        'Decreased critical vulnerabilities by 40% with integrated security scanning',
        'Improved MTTD by 50% with comprehensive observability platform'
      ]
    },
    {
      role: 'DevOps Engineer',
      company: 'Cognizant',
      period: 'August 2022 – December 2024',
      location: 'India',
      highlights: [
        'Reduced deployment times by 70% with optimized CI/CD pipelines',
        'Achieved 99.99% uptime on production Kubernetes clusters',
        'Cut infrastructure costs by 20% through proactive optimization',
        'Optimized Docker images, reducing size by 25%',
        'Won Best Performer Award twice for excellence'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'HashiCorp Certified: Terraform Associate',
    'Best Performer Award × 2 (Cognizant)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            SZ
          </h1>
          <div className="flex gap-6">
            {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition-colors text-sm font-medium"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              SZ
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Syeda Masarath Zaidi
          </h1>
          <h2 className="text-2xl md:text-3xl text-teal-400 font-semibold mb-6">
            DevOps Engineer
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Result-driven DevOps Engineer with 3+ years of experience designing, automating, and scaling cloud-native systems. 
            Specialized in AWS, Kubernetes, and Infrastructure as Code with proven impact on deployment velocity, security, and operational efficiency.
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <a href="https://github.com/syedamasarath" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-slate-800 hover:bg-teal-500 rounded-full transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/syeda-masarath-zaidi/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:zmasarath@gmail.com"
               className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex justify-center items-center gap-6 pt-6 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 7397888682</span>
            </div>
          </div>
          <div className="pt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-teal-400" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline-block mr-3 mb-1" size={36} />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-400">{exp.role}</h3>
                    <p className="text-xl text-slate-300">{exp.company}</p>
                  </div>
                  <div className="text-slate-400 mt-2 md:mt-0 text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <TrendingUp size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline-block mr-3 mb-1" size={36} />
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-2 text-teal-400">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.company}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-teal-400 mt-1">▸</span>
                      <span className="text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Server className="inline-block mr-3 mb-1" size={36} />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-teal-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium hover:bg-teal-500/20 hover:text-teal-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-teal-400" size={28} />
              <span>Certifications & Recognition</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-700/30 rounded-lg p-4 text-center border border-slate-600">
                  <p className="text-slate-300 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-8 bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="text-teal-400" size={28} />
              <span>Education</span>
            </h3>
            <p className="text-xl font-semibold text-slate-200">Bachelor of Computer Science Engineering</p>
            <p className="text-slate-400">MGM's JNEC • Graduated 2022 • GPA: 9.62/10</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            Open to international DevOps opportunities and exciting challenges
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:zmasarath@gmail.com" 
               className="px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/syeda-masarath-zaidi/" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/syedamasarath" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="mt-12 pt-12 border-t border-slate-700">
            <p className="text-slate-400 mb-4">
              <Terminal className="inline-block mr-2 mb-1" size={18} />
              Author of Technical Newsletter on DevOps, Kubernetes & Cloud Native
            </p>
            <a href="https://substack.com/@syedamasarath" target="_blank" rel="noopener noreferrer"
               className="text-teal-400 hover:text-teal-300 font-medium">
              Read Syeda's Substack →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Syeda Masarath Zaidi. Built with React & Deployed on GitHub Pages.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}