import { Card } from "@/components/ui/card";
import profileImageAsset from "../../gpg.jpg";
import { Mail, Phone, ExternalLink, Github, Linkedin, CheckCircle2, Zap, Brain, Globe, Code2, Database, Palette, BarChart3, Cpu, Cloud, Award, Download, LayoutTemplate, MousePointer2, Layers3, FileOutput } from "lucide-react";

/**
 * Design Philosophy: Professional Tech Portfolio
 * - Clean white background with blue accents for professionalism
 * - Strategic use of whitespace and visual hierarchy
 * - Smooth transitions and modern aesthetic
 * - Circular profile picture styling for approachable feel
 * - A clear, practical portfolio for design and technical work
 * - Natural human language without emojis
 * - Enhanced with projects, testimonials, and downloadable resume
 */

export default function Home() {
  const profileImage = profileImageAsset;

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
      description: "Multi-timezone coordination, distributed teams, and steady collaboration across different time zones"
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

  const webDesignCapabilities = [
    { icon: <LayoutTemplate className="w-6 h-6" />, title: "Landing Pages and Marketing Sites", description: "Clear information architecture, persuasive messaging, and responsive layouts built to guide visitors toward one focused action." },
    { icon: <Layers3 className="w-6 h-6" />, title: "Figma Systems and Components", description: "Auto-layout thinking, reusable components, type scales, color tokens, and practical design-system foundations for consistent work." },
    { icon: <MousePointer2 className="w-6 h-6" />, title: "Conversion-Focused UX", description: "Hero sections, trust signals, benefit-led content, social proof, and calls to action arranged around user intent and clarity." },
    { icon: <FileOutput className="w-6 h-6" />, title: "Production-Ready Handoff", description: "Organized specifications, responsive states, asset guidance, and developer-friendly documentation for code, Webflow, or Framer builds." }
  ];

  const designCaseStudies = [
    { label: "Landing page concept", title: "AI Operations Launch Page", description: "A focused startup one-pager for an AI operations product, moving from a clear value proposition to proof, benefits, and a strong demo CTA.", deliverables: ["Responsive desktop and mobile layouts", "Conversion hierarchy", "CTA and trust-section patterns"] },
    { label: "Marketing site system", title: "Professional Services Website", description: "A reusable visual direction for a professional service brand with consistent sections that can scale across home, services, case studies, and contact pages.", deliverables: ["Design tokens and component logic", "Page-to-page consistency", "Content and visual hierarchy"] },
    { label: "Handoff workflow", title: "Developer-Ready Page Package", description: "A practical handoff format that keeps design intent intact from Figma to implementation, including responsive behavior, states, assets, and acceptance notes.", deliverables: ["Annotated responsive states", "Asset and type guidance", "Webflow and Framer-ready structure"] }
  ];

  const visualLandingPages = [
    { label: "01 / Startup one-pager", title: "Make complex work feel simple.", caption: "AI operations platform", theme: "bg-lime-200", panel: "bg-slate-950", text: "text-slate-950", button: "bg-slate-950 text-lime-200", accent: "bg-lime-300" },
    { label: "02 / Marketing site", title: "Built for the next chapter.", caption: "Lumen — brand and growth studio", theme: "bg-indigo-950", panel: "bg-indigo-500", text: "text-white", button: "bg-amber-300 text-indigo-950", accent: "bg-amber-300" },
    { label: "03 / Conversion page", title: "Launch with confidence.", caption: "A modern service business", theme: "bg-orange-50", panel: "bg-orange-500", text: "text-orange-950", button: "bg-orange-950 text-orange-50", accent: "bg-orange-300" }
  ];

  const otherWebsites = [
    { title: "Workly AI", type: "AI tools and productivity", description: "A bright product landing page for practical AI tools.", url: "https://worklyai-taupe.vercel.app", image: "/site-thumbnails/workly-ai.jpg", repo: "MONEY-GENARATOR" },
    { title: "Global Opportunity Hub", type: "Jobs and opportunities", description: "A clear, approachable platform for finding global work opportunities.", url: "https://canadaopportunityhub.vercel.app", image: "/site-thumbnails/canada-opportunity-hub.jpg", repo: "canadaopportunityhub" },
    { title: "Phone Master", type: "Product landing page", description: "A simple welcome page for a phone and device support product.", url: "https://phone-master-seven.vercel.app", image: "/site-thumbnails/phone-master.jpg", repo: "Phone-Master" },
    { title: "Charstine EcoTourist Resort", type: "Hospitality website", description: "An eco-luxury resort website with a strong visual first impression.", url: "https://charstineecotouristresort.vercel.app", image: "/site-thumbnails/charstine-eco.jpg", repo: "Charstine" },
    { title: "Vivian Naswa Sifuna", type: "Personal brand website", description: "A professional profile site for a public communications strategist.", url: "https://viviansifuna.vercel.app", image: "/site-thumbnails/vivian-sifuna.jpg", repo: "viviansifuna" },
    { title: "King Jesus Ministry Kenya", type: "Church website", description: "A calm, information-led website for a ministry and its community.", url: "https://king-jesus-ministry-ke.vercel.app", image: "/site-thumbnails/king-jesus-ministry.jpg", repo: "King-Jesus-Ministry-KE" },
    { title: "King Jesus Ministry — alternate build", type: "Community website", description: "A second published version of the ministry website with the same core content.", url: "https://kingjesusministrykenya.vercel.app", image: "/site-thumbnails/kingjesus-ministry-alt.jpg", repo: "Kingjesusministrykenya" },
    { title: "Charstine Royal Eco-Luxury", type: "Hospitality website", description: "A second resort direction with a more dramatic, premium visual style.", url: "https://charstineecoluxury.vercel.app", image: "/site-thumbnails/charstine-luxury.jpg", repo: "charstineecoluxury" }
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
      skills: ["System Architecture", "Enterprise Integration", "Cloud Computing", "Security Best Practices", "Scalable Infrastructure"] 
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
    "Built dashboards and reports that help people make day-to-day decisions",
    "Architected data pipelines processing millions of records with high accuracy and reliability",
    "Managed technical projects across distributed global teams with consistent on-time delivery",
    "Implemented automation solutions reducing manual work by 70 percent or more",
    "Strong background in graphic design and visual communication for user-facing applications",
    "I take a careful, practical approach to difficult problems",
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
      description: "Built a data pipeline that reduced repetitive work and made daily reporting easier to trust.",
      technologies: ["Python", "SQL", "ETL", "Apache Airflow"],
      impact: "Saved 200 hours monthly in manual processing"
    },
    {
      title: "Customer Support Dashboard",
      description: "Built a customer support dashboard with clear ticket routing, simple reporting, and an easier way to see what needed attention.",
      technologies: ["React", "Python", "Machine Learning", "PostgreSQL"],
      impact: "Improved response time by 60 percent"
    },
    {
      title: "Executive Decision Support System",
      description: "Created a business intelligence system with dashboards, KPI tracking, and straightforward reports for busy teams.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      impact: "Enabled data-driven decisions for 50 plus stakeholders"
    },
    {
      title: "Global Team Collaboration Platform",
      description: "Developed a remote collaboration platform supporting multi-timezone teams with automated scheduling, task management, and communication tools.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      impact: "Supported distributed teams across different time zones"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, technology startup",
      photo: "/testimonial-portrait-1.jpg",
      text: "Gad listened carefully, kept the work moving, and made a complicated project much easier to manage. I always knew what was happening next."
    },
    {
      name: "Michael Chen",
      role: "Operations director",
      photo: "/testimonial-portrait-2.jpg",
      text: "The work was thoughtful and practical. Gad asked good questions, paid attention to the small details, and delivered something our team could use."
    },
    {
      name: "Emma Rodriguez",
      role: "Executive assistant",
      photo: "/testimonial-portrait-3.jpg",
      text: "Gad brought a calm, organised approach to a busy project. Communication was clear, deadlines were respected, and the final result felt considered."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">GAD BAHATI</h1>
            <div className="hidden md:flex gap-8">
              <a href="#web-design" className="text-gray-700 hover:text-blue-600 transition">Web Design</a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-600 transition">Expertise</a>
              <a href="#other-websites" className="text-gray-700 hover:text-blue-600 transition">Other sites</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <a href="#web-design" className="md:hidden text-sm font-semibold text-blue-600">See work</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="absolute -right-24 -top-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 w-72 h-40 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-white/10 border border-white/15 rounded-full">
                <span className="text-amber-300 text-sm font-semibold">Web Designer · UI Specialist · Technical Professional</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.98] text-white tracking-tight">
                Design digital experiences that <span className="text-amber-300">move people to act.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                I combine responsive web design, visual communication, and technical implementation to create landing pages, marketing sites, and startup one-pagers that are clear, consistent, and ready to build.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/10 text-slate-200 border border-white/10 rounded-full text-sm font-medium">Responsive layouts</span>
                <span className="px-3 py-1 bg-white/10 text-slate-200 border border-white/10 rounded-full text-sm font-medium">Figma and design systems</span>
                <span className="px-3 py-1 bg-white/10 text-slate-200 border border-white/10 rounded-full text-sm font-medium">Conversion-focused UX</span>
                <span className="px-3 py-1 bg-white/10 text-slate-200 border border-white/10 rounded-full text-sm font-medium">Developer handoff</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#web-design" className="px-6 py-3 bg-amber-300 text-slate-950 font-semibold rounded-lg hover:bg-amber-200 transition transform hover:scale-105">
                  See landing pages
                </a>
                <a href="mailto:gadbahati7@gmail.com" className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-amber-300/20 rounded-full blur-2xl"></div>
                <img 
                  src={profileImage} 
                  alt="Gad Bahati" 
                  className="relative w-full h-full rounded-full object-cover border-8 border-white/20 shadow-2xl hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Portfolio Focus */}
      <section id="web-design" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-[0.18em] text-xs mb-3">Selected web design work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Landing pages are the portfolio.</h2>
            <p className="text-gray-700 text-lg leading-relaxed">A visual collection of startup one-pagers, marketing directions, and conversion-led page systems—designed responsively and prepared for Figma-to-build handoff.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-7 mb-16">
            {visualLandingPages.map((page, idx) => (
              <article key={idx} className="group">
                <div className={`rounded-[1.35rem] ${page.panel} p-3 shadow-xl transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                  <div className="flex items-center gap-1.5 px-2 pb-3">
                    <span className="w-2 h-2 rounded-full bg-red-300" />
                    <span className="w-2 h-2 rounded-full bg-yellow-300" />
                    <span className="w-2 h-2 rounded-full bg-green-300" />
                    <span className="ml-auto text-[9px] text-white/50 tracking-wider">LIVE PREVIEW</span>
                  </div>
                  <div className={`min-h-[310px] rounded-xl ${page.theme} ${page.text} p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative`}>
                    <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full border-[18px] border-white/20" />
                    <div className="relative">
                      <div className="flex justify-between items-center mb-10">
                        <span className="font-bold text-xs tracking-[0.18em] uppercase">{page.caption}</span>
                        <span className={`w-7 h-7 rounded-full ${page.accent} flex items-center justify-center text-xs`}>Open</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-4">{page.label}</p>
                      <h3 className="text-3xl sm:text-4xl font-black leading-[0.95] max-w-[10ch] tracking-tight">{page.title}</h3>
                    </div>
                    <div className="relative flex items-end justify-between gap-4 mt-8">
                      <a href="#contact" className={`rounded-full px-4 py-2 text-xs font-bold ${page.button}`}>Start a project</a>
                      <span className="text-[10px] font-semibold opacity-60">Explore the page</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 px-1">
                  <span className="text-sm font-semibold text-gray-900">{page.title}</span>
                  <span className="text-xs text-blue-600 font-medium">Responsive concept</span>
                </div>
              </article>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {webDesignCapabilities.map((item, idx) => (
              <Card key={idx} className="bg-white border-blue-100 hover:border-blue-300 hover:shadow-md transition p-6">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {designCaseStudies.map((study, idx) => (
              <Card key={idx} className="bg-white border-gray-200 p-7 shadow-sm hover:shadow-md hover:border-blue-300 transition">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{study.label}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-3">{study.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{study.description}</p>
                <ul className="space-y-2">
                  {study.deliverables.map((deliverable, deliverableIdx) => (
                    <li key={deliverableIdx} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Websites */}
      <section id="other-websites" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-blue-600 font-semibold uppercase tracking-[0.18em] text-xs mb-3">More work</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Other websites by Gad Bahati</h2>
              <p className="text-gray-600 text-lg leading-relaxed">A selection of live websites from my GitHub projects. Open any card to visit the published site.</p>
            </div>
            <p className="text-sm text-gray-500 md:text-right">Live links checked October 2026</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherWebsites.map((site) => (
              <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer" className="group block rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-200">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img src={site.image} alt={`${site.title} website thumbnail`} className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">{site.type}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{site.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{site.description}</p>
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-gray-500">GitHub: {site.repo}</span>
                    <span className="font-semibold text-blue-600">Visit site</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Core Expertise</h2>
            <p className="text-gray-600 text-lg">A practical mix of design, technology, and day-to-day support</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreExpertise.map((item, idx) => (
              <Card key={idx} className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-md transition p-6 group cursor-pointer">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <Card key={category} className="bg-white border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Proficiency */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Skills Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillsProficiency.map((category, idx) => (
                <Card key={idx} className="bg-white border-gray-200 p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-blue-600 mb-6">{category.category}</h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, sidx) => (
                      <div key={sidx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-blue-600 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-blue-600 h-full rounded-full transition-all duration-500"
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-gray-600 text-lg">A few projects and experiments I have worked on</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-md transition p-8">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tidx) => (
                      <span key={tidx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-blue-600 font-semibold text-sm">{project.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What people say</h2>
            <p className="text-gray-600 text-lg">A few words from people I have worked with. Portraits are illustrative placeholders; replace them with approved client photos before publishing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-white border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.photo} alt={`${testimonial.name} portrait`} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="border-l-2 border-blue-200 pl-4 text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Certifications and Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="bg-white border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" /> {cert.category}
                </h3>
                <ul className="space-y-3">
                  {cert.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
      <section id="hiring" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why IT Organizations Should Hire Me</h2>
            <p className="text-gray-600 text-lg">Useful skills, clear communication, and dependable delivery</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {itOrganizationSkills.map((item, idx) => (
              <Card key={idx} className="bg-white border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{item.category}</h3>
                <ul className="space-y-3">
                  {item.skills.map((skill, sidx) => (
                    <li key={sidx} className="flex items-center gap-3 text-gray-700">
                      <Zap className="w-4 h-4 text-blue-600" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">What you can expect from me</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working well with remote teams */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 border border-blue-300 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Working well with remote teams</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> Coordinated multiple remote teams across different time zones</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> Proficient in Slack, Microsoft Teams, Zoom, Trello, and Jira</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> Experienced at managing sensitive information with discretion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">What you can expect from me</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> I keep problems clear and work through them carefully</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> Clear written and spoken English</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> I work independently and keep people updated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Fit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">How I work</p>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">A reliable partner for remote design projects</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">Self-directed, detail-oriented, and comfortable taking a brief from concept to an organized, production-ready result.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-gray-200 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Remote and part-time ready</h3>
              <p className="text-gray-700 leading-relaxed">Available for focused project phases and flexible collaboration of approximately 10–20 hours per week when active work is scheduled.</p>
            </Card>
            <Card className="bg-white border-gray-200 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Clear English communication</h3>
              <p className="text-gray-700 leading-relaxed">Professional written and verbal English for briefs, design rationale, async updates, stakeholder feedback, and handoff documentation.</p>
            </Card>
            <Card className="bg-white border-gray-200 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Consistent across formats</h3>
              <p className="text-gray-700 leading-relaxed">A single visual language carried through web pages, PDFs, presentations, social materials, and the implementation layer.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Have a project in mind?</h2>
          <p className="text-lg text-blue-100 mb-8">Tell me what you are trying to make, and we can talk through the next step.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:gadbahati7@gmail.com" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
              Send Me an Email
            </a>
            <a href="https://wa.me/254791085514" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition">
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-blue-400 font-bold text-lg mb-4">Gad Bahati</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Web design, front-end development, and practical technical support for small teams and growing businesses.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#web-design" className="hover:text-blue-400 transition">Web Design</a></li>
                <li><a href="#other-websites" className="hover:text-blue-400 transition">Other websites</a></li>
                <li><a href="#expertise" className="hover:text-blue-400 transition">Expertise</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://github.com/gadbahati" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/kulundu-gad-557aa138b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a></li>
                <li><a href="https://wa.me/254791085514" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Information</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="mailto:gadbahati7@gmail.com" className="hover:text-blue-400 transition flex items-center gap-2">
                    <Mail className="w-4 h-4" /> gadbahati7@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+254791085514" className="hover:text-blue-400 transition flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +254 791 085 514
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>Copyright 2026 Gad Bahati. All rights reserved.</p>
            <p className="mt-2">Designed and built with care</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
