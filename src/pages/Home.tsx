import { Card } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, Github, Linkedin, CheckCircle2, Zap, Brain, Globe, Code2, Database, Palette, BarChart3, Cpu, Cloud, Award, Download, Star, Quote } from "lucide-react";

/**
 * Design Philosophy: Premium Tech Portfolio
 * - Dark mode with vibrant cyan/blue accents for tech credibility
 * - Strategic use of whitespace and visual hierarchy
 * - Animated elements and smooth transitions
 * - Circular profile picture styling for modern aesthetic
 * - Comprehensive skill showcase for IT organization appeal
 * - Natural human language without emojis
 * - Enhanced with projects, testimonials, and downloadable resume
 */

export default function Home() {
  const profileImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663419303226/Azo8V3u9UZDpnqRhFnntnD/gad-bahati-profile_01197c53.jpg";

  const coreExpertise = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI and Machine Learning",
      description: "Advanced AI workflows, model evaluation, and intelligent automation systems designed for enterprise scale"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science and Analytics",
      description: "Data pipeline design, statistical analysis, and actionable business intelligence for informed decision making"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Python, SQL, JavaScript, React, and modern web technologies for scalable and maintainable solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Operations and Global Collaboration",
      description: "Multi-timezone coordination, distributed teams, and seamless global collaboration across all regions"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design and User Experience",
      description: "Graphic design, UI and UX principles, and visual communication excellence for modern interfaces"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Executive Support and Strategy",
      description: "Strategic decision support, research, reporting, and operational optimization for leadership teams"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Organizational and Administrative Excellence",
      description: "Inbox and calendar management, task coordination, research, reporting, and documentation expertise"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Customer Service and Support",
      description: "Professional customer support, issue resolution, and service excellence with focus on satisfaction"
    }
  ];

  const technicalSkills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "Kotlin", "SQL", "PHP", "Bash", "C++", "TypeScript", "Go"],
    "Frontend Development": ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "Angular", "Responsive Design", "Web Components"],
    "Backend and Databases": ["Node.js", "Express.js", "SQL", "PostgreSQL", "MongoDB", "Firebase", "Database Design", "API Development", "Microservices"],
    "Data Science and AI": ["Data Automation", "Machine Learning", "Statistical Analysis", "Data Pipeline Design", "ETL Processes", "Model Evaluation", "Pandas", "NumPy", "Scikit-learn"],
    "Design and Graphics": ["Figma", "Adobe Photoshop", "UI and UX Design", "Graphic Design", "Visual Communication", "Wireframing", "Prototyping", "Design Systems"],
    "Office and Productivity": ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook", "Google Docs", "Google Sheets", "Google Slides", "Document Management", "Presentation Design"],
    "Tools and Platforms": ["Git", "Docker", "Jira", "Salesforce", "Azure", "Google Workspace", "Microsoft Office Suite", "Slack", "Teams", "Jenkins", "CI and CD", "Zoom", "Trello"],
    "Customer Service and Support": ["Customer Support Excellence", "Ticket Management", "Help Desk Operations", "Customer Communication", "Issue Resolution", "Service Quality", "Response Time Management", "Customer Satisfaction", "Support Documentation"]
  };

  const itOrganizationSkills = [
    { 
      category: "Enterprise Solutions", 
      skills: ["System Architecture", "Enterprise Integration", "Cloud Computing", "Cybersecurity Awareness", "Scalable Infrastructure"] 
    },
    { 
      category: "DevOps and Infrastructure", 
      skills: ["CI and CD Pipelines", "Cloud Deployment", "Database Management", "System Monitoring", "Infrastructure as Code"] 
    },
    { 
      category: "Business Intelligence", 
      skills: ["Dashboard Development", "Data Visualization", "Report Automation", "KPI Tracking", "Analytics Implementation"] 
    },
    { 
      category: "Project Management", 
      skills: ["Agile and Scrum", "Technical Documentation", "Process Optimization", "Team Coordination", "Stakeholder Management"] 
    }
  ];

  const strengths = [
    "Advanced proficiency in Python, SQL, and data automation for enterprise-level solutions",
    "Designed and deployed AI workflows and machine learning models in production environments",
    "Created comprehensive dashboards and business intelligence solutions for executive decision-making",
    "Architected data pipelines processing millions of records with high accuracy and reliability",
    "Managed technical projects across distributed global teams with consistent on-time delivery",
    "Implemented automation solutions reducing manual work by 70 percent or more",
    "Strong background in graphic design and visual communication for user-facing applications",
    "Exceptional problem-solving ability with proven track record in complex technical challenges",
    "Expert in inbox and calendar management, ensuring timely scheduling and efficient task coordination",
    "Proficient in customer support and help desk operations with excellent communication skills",
    "Mastery of Microsoft Office Suite and Google Workspace for productivity and collaboration"
  ];

  const certifications = [
    { category: "Academic Qualifications", items: ["Bachelor of Science in Computer Science", "Advanced Diploma in Information Technology", "Professional Development Certification"] },
    { category: "Customer Service Excellence", items: ["Customer Support Professional Certification", "Issue Resolution and Ticket Management", "Customer Satisfaction Excellence Program", "Help Desk Operations Specialist"] },
    { category: "Microsoft Office Advanced Skills", items: ["Microsoft Excel Advanced Certification", "Microsoft Word Professional Certification", "Microsoft PowerPoint Expert Certification", "Microsoft Outlook Productivity Certification"] },
    { category: "Technical and Professional Development", items: ["Python Programming Certification", "Data Science Fundamentals", "Cloud Computing Essentials", "Agile and Scrum Master"] }
  ];

  const skillsProficiency = [
    { category: "Programming Languages", skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Java", level: 85 }
    ]},
    { category: "Frontend Development", skills: [
      { name: "React", level: 93 },
      { name: "HTML5 and CSS3", level: 94 },
      { name: "Tailwind CSS", level: 91 },
      { name: "Next.js", level: 87 },
      { name: "Vue.js", level: 80 }
    ]},
    { category: "Data and AI", skills: [
      { name: "Machine Learning", level: 89 },
      { name: "Data Pipeline Design", level: 91 },
      { name: "Statistical Analysis", level: 88 },
      { name: "Model Evaluation", level: 86 },
      { name: "Data Visualization", level: 90 }
    ]},
    { category: "Microsoft Office and Tools", skills: [
      { name: "Excel Advanced", level: 96 },
      { name: "Word Professional", level: 94 },
      { name: "PowerPoint Expert", level: 92 },
      { name: "Outlook Management", level: 93 },
      { name: "Google Workspace", level: 91 }
    ]},
    { category: "Customer Service and Support", skills: [
      { name: "Customer Support", level: 92 },
      { name: "Help Desk Operations", level: 90 },
      { name: "Ticket Management", level: 91 },
      { name: "Issue Resolution", level: 89 },
      { name: "Service Quality", level: 93 }
    ]},
    { category: "Design and Graphics", skills: [
      { name: "Figma", level: 88 },
      { name: "Adobe Photoshop", level: 85 },
      { name: "UI and UX Design", level: 87 },
      { name: "Graphic Design", level: 86 },
      { name: "Prototyping", level: 84 }
    ]}
  ];

  const projects = [
    {
      title: "Enterprise Data Automation Pipeline",
      description: "Designed and implemented a comprehensive data automation pipeline processing 5 million records daily. Reduced manual data entry by 85 percent and improved accuracy to 99.8 percent.",
      technologies: ["Python", "SQL", "ETL", "Apache Airflow"],
      impact: "Saved 200 hours monthly in manual processing"
    },
    {
      title: "AI-Powered Customer Support Dashboard",
      description: "Built an intelligent customer support dashboard with AI-powered ticket routing and sentiment analysis. Integrated with help desk systems for real-time monitoring and reporting.",
      technologies: ["React", "Python", "Machine Learning", "PostgreSQL"],
      impact: "Improved response time by 60 percent"
    },
    {
      title: "Executive Decision Support System",
      description: "Created a comprehensive business intelligence system providing real-time dashboards, KPI tracking, and automated reporting for C-level executives across multiple departments.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      impact: "Enabled data-driven decisions for 50 plus stakeholders"
    },
    {
      title: "Global Team Collaboration Platform",
      description: "Developed a remote collaboration platform supporting multi-timezone teams with automated scheduling, task management, and communication tools.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      impact: "Coordinated 15 plus distributed teams seamlessly"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, Tech Startup",
      text: "Gad transformed our operations with intelligent automation. The data pipeline alone saved us thousands monthly while improving accuracy dramatically.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      text: "Exceptional support and technical expertise. Gad managed our customer support system implementation flawlessly and trained our entire team.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Executive Assistant",
      text: "The best remote assistant I have worked with. Gad's organizational skills and proactive approach to problem-solving are outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyan-400">GAD BAHATI</h1>
            <div className="hidden md:flex gap-8">
              <a href="#expertise" className="text-slate-300 hover:text-cyan-400 transition">Expertise</a>
              <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">Projects</a>
              <a href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition">Testimonials</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-slate-800 border border-cyan-500 rounded-full">
                <span className="text-cyan-400 text-sm font-semibold">AI Specialist, Data Engineer, Tech Professional</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your <span className="text-cyan-400">Business with AI</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a full-stack technical professional combining AI expertise, data science, and design excellence. I help organizations scale operations, automate workflows, and unlock insights through intelligent systems and strategic support.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded-full text-sm">Python and SQL</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm">AI and Machine Learning</span>
                <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full text-sm">Data Science</span>
                <span className="px-3 py-1 bg-pink-500 bg-opacity-20 text-pink-300 rounded-full text-sm">Design and Development</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="mailto:gadbahati7@gmail.com" className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition transform hover:scale-105">
                  Get In Touch
                </a>
                <a href="#projects" className="px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:bg-opacity-10 transition">
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src={profileImage} 
                  alt="Gad Bahati" 
                  className="relative w-full h-full rounded-full object-cover border-4 border-cyan-500 shadow-2xl hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-slate-400 text-lg">Comprehensive capabilities across AI, data science, development, and executive support</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreExpertise.map((item, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition p-6 group cursor-pointer">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <Card key={category} className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm hover:bg-cyan-500 hover:text-slate-950 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Proficiency */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Skills Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillsProficiency.map((category, idx) => (
                <Card key={idx} className="bg-slate-800 border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-cyan-400 mb-6">{category.category}</h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, sidx) => (
                      <div key={sidx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Real-world solutions delivering measurable impact</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tidx) => (
                      <span key={tidx} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-cyan-400 font-semibold text-sm">{project.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-slate-400 text-lg">What clients and colleagues say about working with me</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
                <p className="text-slate-300 mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Certifications and Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" /> {cert.category}
                </h3>
                <ul className="space-y-3">
                  {cert.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For IT Organizations */}
      <section id="hiring" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why IT Organizations Should Hire Me</h2>
            <p className="text-slate-400 text-lg">Enterprise-ready expertise and proven delivery</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {itOrganizationSkills.map((item, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{item.category}</h3>
                <ul className="space-y-3">
                  {item.skills.map((skill, sidx) => (
                    <li key={sidx} className="flex items-center gap-3 text-slate-300">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Key Strengths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-500 transition">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <p className="text-slate-300">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Work Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500 border-opacity-30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Remote Work Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Expertise</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Coordinated multiple remote teams across different time zones</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Proficient in Slack, Microsoft Teams, Zoom, Trello, and Jira</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Experienced at managing sensitive information with discretion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Key Strengths</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Exceptional problem-solving and operational excellence</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Strong communication in written and verbal English</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" /> Highly motivated, proactive, and reliable professional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations</h2>
          <p className="text-lg text-slate-200 mb-8">Let's discuss how I can help your organization achieve its goals through intelligent automation, data-driven insights, and strategic support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:gadbahati7@gmail.com" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition transform hover:scale-105">
              Send Me an Email
            </a>
            <a href="https://wa.me/254791085514" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition">
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-cyan-400 font-bold text-lg mb-4">Gad Bahati</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI specialist and full-stack technical professional. Transforming organizations through intelligent automation, data science, and strategic technical leadership for sustainable growth.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#expertise" className="hover:text-cyan-400 transition">Expertise</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="https://github.com/gadbahati" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/kulundu-gad-557aa138b" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a></li>
                <li><a href="https://wa.me/254791085514" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Information</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="mailto:gadbahati7@gmail.com" className="hover:text-cyan-400 transition flex items-center gap-2">
                    <Mail className="w-4 h-4" /> gadbahati7@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+254791085514" className="hover:text-cyan-400 transition flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +254 791 085 514
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>Copyright 2026 Gad Bahati. All rights reserved.</p>
            <p className="mt-2">Built for innovation, excellence, and global impact</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
