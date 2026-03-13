import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, Github, Linkedin, CheckCircle2, Zap, Brain, Globe, Code2, Database, Palette, BarChart3, Cpu, Cloud, Award } from "lucide-react";

/**
 * Design Philosophy: Premium Tech Portfolio
 * - Dark mode with vibrant cyan/blue accents for tech credibility
 * - Strategic use of whitespace and visual hierarchy
 * - Animated elements and smooth transitions
 * - Circular profile picture styling for modern aesthetic
 * - Comprehensive skill showcase for IT organization appeal
 * - Natural human language without emojis
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
    "Skilled at conducting research, competitor analysis, and report preparation for executive-level decisions",
    "Proficient in designing and maintaining automation pipelines and structured datasets",
    "Excellent customer service and support capabilities with focus on satisfaction and resolution",
    "Mastery of Microsoft Office Suite including Word, Excel, PowerPoint, and Outlook",
    "Strong communication skills in written and verbal English at C1 and C2 proficiency levels"
  ];

  const skillsProficiency = [
    { category: "Programming Languages", skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 92 },
      { name: "Java", level: 85 },
      { name: "TypeScript", level: 88 }
    ]},
    { category: "Frontend Development", skills: [
      { name: "React", level: 93 },
      { name: "HTML5 and CSS3", level: 94 },
      { name: "Tailwind CSS", level: 91 },
      { name: "Responsive Design", level: 92 },
      { name: "Vue.js", level: 80 }
    ]},
    { category: "Data and AI", skills: [
      { name: "Data Automation", level: 94 },
      { name: "Machine Learning", level: 88 },
      { name: "Statistical Analysis", level: 90 },
      { name: "Data Pipeline Design", level: 92 },
      { name: "AI Model Evaluation", level: 89 }
    ]},
    { category: "Microsoft Office and Tools", skills: [
      { name: "Microsoft Excel", level: 96 },
      { name: "Microsoft Word", level: 95 },
      { name: "Microsoft PowerPoint", level: 94 },
      { name: "Microsoft Outlook", level: 93 },
      { name: "Google Workspace", level: 91 }
    ]},
    { category: "Customer Service and Support", skills: [
      { name: "Customer Support Excellence", level: 94 },
      { name: "Issue Resolution", level: 92 },
      { name: "Ticket Management", level: 91 },
      { name: "Communication Skills", level: 96 },
      { name: "Service Quality Management", level: 93 }
    ]},
    { category: "Design and Graphics", skills: [
      { name: "Figma", level: 88 },
      { name: "UI and UX Design", level: 89 },
      { name: "Adobe Photoshop", level: 87 },
      { name: "Graphic Design", level: 90 },
      { name: "Visual Communication", level: 91 }
    ]}
  ];

  const certifications = [
    {
      category: "Academic Qualifications",
      items: [
        "Bachelor of Business Administration from Pace University with focus on Technology",
        "Bachelor of Science in Information Technology from New York Institute of Technology"
      ]
    },
    {
      category: "Customer Service Excellence",
      items: [
        "Professional Customer Service Excellence Certification",
        "Advanced Customer Support and Issue Resolution Training",
        "Customer Satisfaction and Service Quality Management Certification",
        "Help Desk Operations and Ticket Management Certification"
      ]
    },
    {
      category: "Microsoft Office Advanced Skills",
      items: [
        "Microsoft Excel Advanced Certification including Pivot Tables and Data Analysis",
        "Microsoft Word Advanced Certification including Mail Merge and Template Design",
        "Microsoft PowerPoint Advanced Certification including Animation and Design Mastery",
        "Microsoft Outlook Advanced Certification including Calendar and Email Management"
      ]
    },
    {
      category: "Technical and Professional Development",
      items: [
        "Advanced Data and AI Certifications from leading technical institutions",
        "Remote Work Excellence and Global Collaboration Certification",
        "Professional Communication Skills Certification at C1 and C2 English Levels",
        "Project Management and Agile Methodology Certification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            GAD BAHATI
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#expertise" className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">Expertise</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">Skills</a>
            <a href="#hiring" className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">For IT Organizations</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 text-sm font-semibold">AI Specialist, Data Engineer, Tech Professional</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Business with AI</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                I am a full-stack technical professional combining AI expertise, data science, and design excellence. I help organizations scale operations, automate workflows, and unlock insights through intelligent systems and strategic support.
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm">Python and SQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm">AI and Machine Learning</span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm">Data Science</span>
                  <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-300 text-sm">Design and Development</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:gadbahati7@gmail.com">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-cyan-500/20">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </a>
                <a href="https://wa.me/254791085514" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Profile Image - Circular */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-25 group-hover:opacity-40 transition duration-500 w-64 h-64 mx-auto"></div>
              <div className="relative w-64 h-64 bg-slate-800 border-4 border-cyan-500/50 rounded-full overflow-hidden shadow-2xl group-hover:border-cyan-400 transition">
                <img 
                  src={profileImage} 
                  alt="Gad Bahati - AI Specialist and Data Engineer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Specialized capabilities that drive innovation and operational excellence across organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreExpertise.map((item, idx) => (
              <Card key={idx} className="bg-slate-700/50 border-slate-600 hover:border-cyan-500/50 hover:bg-slate-700/80 transition duration-300 p-8 group">
                <div className="text-cyan-400 mb-4 group-hover:scale-125 group-hover:text-blue-400 transition duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16">Proven Track Record</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition" />
                <p className="text-slate-300 text-lg group-hover:text-white transition">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-xl text-slate-300">Comprehensive skill set across multiple domains and technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technicalSkills).map(([category, items]) => (
              <Card key={category} className="bg-slate-700/50 border-slate-600 p-8 hover:border-cyan-500/50 transition">
                <h3 className="text-lg font-bold text-cyan-400 mb-6">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                      <span className="text-slate-300 hover:text-cyan-300 transition">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IT Organizations Section */}
      <section id="hiring" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why IT Organizations Should Hire Me</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Enterprise-ready expertise that delivers immediate value and measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {itOrganizationSkills.map((item, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600 p-8 hover:border-cyan-500/50 transition">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <Cpu className="w-6 h-6" />
                  {item.category}
                </h3>
                <ul className="space-y-3">
                  {item.skills.map((skill, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300">
                      <span className="text-cyan-400">-</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-white mb-6">What I Bring to Your Organization</h3>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Immediate Productivity</p>
                    <p className="text-sm">Hit the ground running with enterprise-level technical expertise and proven methodologies</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Cost Reduction</p>
                    <p className="text-sm">Automate processes and optimize workflows for significant operational savings</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Administrative Excellence</p>
                    <p className="text-sm">Master inbox, calendar, and task management with precision and attention to detail</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Scalable Solutions</p>
                    <p className="text-sm">Build systems that grow with your organization's needs and market demands</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Global Collaboration</p>
                    <p className="text-sm">Seamless remote work across time zones and distributed teams worldwide</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Customer Service Excellence</p>
                    <p className="text-sm">Deliver professional support and resolution with focus on customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education and Certifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Education and Certifications</h2>
            <p className="text-xl text-slate-300">Comprehensive professional credentials and specialized training</p>
          </div>
          
          <div className="space-y-12">
            {certifications.map((certGroup, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 pb-3 border-b border-cyan-500/30">{certGroup.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {certGroup.items.map((cert, certIdx) => (
                    <Card key={certIdx} className="bg-slate-700/50 border-slate-600 p-6 hover:border-cyan-500/50 hover:bg-slate-700/80 transition">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-300 leading-relaxed">{cert}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Proficiency Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Skills Proficiency</h2>
            <p className="text-xl text-slate-300">Expertise levels across key technologies and tools</p>
          </div>

          <div className="space-y-12">
            {skillsProficiency.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-8">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Work Excellence */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16">Remote Work Excellence</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600 p-10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Global Collaboration and Administrative Excellence
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Coordinated multiple remote teams across different time zones with consistent results</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Proficient in all major productivity tools including Slack, Teams, Zoom, Jira, and Trello</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Expert in inbox and calendar management, ensuring timely scheduling and task coordination</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Mastery of Microsoft Office Suite including Word, Excel, PowerPoint, and Outlook</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Experienced at managing sensitive information with discretion and security</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Proven ability to deliver on time, every time, across all time zones and regions</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-slate-600 p-10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Technical Advantage and Research Expertise
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Advanced data and AI skills for workflow automation and process optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Implement AI tools and dashboards to simplify complex tasks and decisions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Skilled at conducting research, competitor analysis, and report preparation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Leverage automation for increased efficiency and actionable business insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Full-stack technical capability across frontend, backend, and data layers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400">-</span>
                  <span>Excellent documentation and reporting skills for executive-level decisions</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-white">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            I am enthusiastic about joining forward-thinking IT organizations and am ready to contribute immediately with full professionalism, technical excellence, and proven results that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:gadbahati7@gmail.com">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-cyan-500/20">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kulundu-gad-557aa138b" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/gadbahati" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
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
                <li><a href="#hiring" className="hover:text-cyan-400 transition">For IT Organizations</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
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
              <h4 className="text-white font-bold mb-4">Proficiency Levels</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#skills" className="hover:text-cyan-400 transition">Skills Proficiency</a></li>
                <li><a href="#expertise" className="hover:text-cyan-400 transition">Core Expertise</a></li>
                <li><a href="#hiring" className="hover:text-cyan-400 transition">For IT Organizations</a></li>
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
