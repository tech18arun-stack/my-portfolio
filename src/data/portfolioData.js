export const portfolioData = {
  name: "Arun",
  title: "Principal Full Stack Engineer | Scalable System Architect",
  tagline: "I design and build production-grade applications that scale from 0 → 100K users, combining robust backend architectures with high-fidelity mobile & web experiences.",
  email: "tech18arun@gmail.com",
  socials: {
    github: "https://github.com/tech18arun-stack",
    linkedin: "https://www.linkedin.com/in/arun-c-209547343/",
    whatsapp: "8608630388",
    instagram: "https://www.instagram.com/_arun_tech_freelance?igsh=cGtqbXU4cWRicDBm",
    arattai: "8608630388",
  },
  metrics: [
    { label: "Projects Completed", value: "24+" },
    { label: "APIs Architected", value: "85+" },
    { label: "Years of Experience", value: "4+" },
    { label: "Uptime Guaranteed", value: "99.9%" },
  ],
  about: {
    positioning: "I specialize in bridging the gap between product vision and technical excellence. With a focus on performance optimization and scalable system design, I help startups and established corporations build digital products that aren't just functional, but market-leading.",
    currentlyAt: "Websitescorporation & Edizo",
    process: [
      { step: "01", title: "Analyze", desc: "Deep-dive into the core problem and business goals." },
      { step: "02", title: "Architect", desc: "Design a scalable, future-proof system hierarchy." },
      { step: "03", title: "Build", desc: "Develop high-performance features with MVP speed." },
      { step: "04", title: "Optimize", desc: "Refine every millisecond for maximum efficiency." },
      { step: "05", title: "Scale", desc: "Deploy on robust Linux infrastructures with zero-downtime." }
    ]
  },
  techStack: [
    { 
      category: "Mobile & Core", 
      items: [
        { name: "Flutter", context: "Material 3 & Dual-language (Tamil/English) Apps" },
        { name: "React.js", context: "Admin dashboards & modern web portals" },
        { name: "Next.js", context: "High-performance SSR & SEO-heavy apps" }
      ] 
    },
    { 
      category: "Backend & Cloud", 
      items: [
        { name: "Node.js", context: "Event-driven microservices & REST APIs" },
        { name: "Appwrite", context: "Unified Auth & Database for rapid mobile scaling" },
        { name: "Nginx", context: "Subdomain routing & SSL configuration" }
      ] 
    },
    { 
      category: "Big Data & AI", 
      items: [
        { name: "MongoDB", context: "Distributed document data for real-time apps" },
        { name: "Smart Mandi Engine", context: "Predictive agricultural pricing logic" },
        { name: "Linux Server", context: "Full server root management & CI/CD" }
      ] 
    }
  ],
  projects: [
    {
      id: 1,
      title: "AgriFlow Tamil Nadu",
      subtitle: "Bilingual Agricultural Marketplace",
      description: "A specialized Flutter application serving the Tamil Nadu farming community with real-time मंडी (mandi) pricing and direct merchant connectivity.",
      image: "/images/agriflow.png",
      problem: "Language barriers and delayed price information causing significant losses for local Tamil-speaking farmers.",
      solution: "Developed a Material 3 mobile app with full Tamil localization, integrated with a custom 'Smart Mandi' API for live crop trends.",
      architecture: [
        "Flutter (Adaptive Material 3)",
        "Appwrite Cloud (Auth & NoSQL)",
        "Nginx Reverse Proxy",
        "Predictive Pricing Engine"
      ],
      impact: [
        "Full support for 200+ local Tamil agricultural strings",
        "Sub-second price updates across 15+ crop categories",
        "Multi-role access for Farmers, Merchants, and Admins"
      ],
      techStack: ["Flutter", "Appwrite", "Smart Mandi API", "Nginx"],
      category: "Mobile App"
    },
    {
      id: 2,
      title: "LifeSync Sanctuary",
      subtitle: "Unified Family Hub & Analytics",
      description: "A premium privacy-focused application for managing family health, scheduling, and digital asset security with integrated ad-blocker detection.",
      image: "/images/lifesync.png",
      problem: "Fragmented health data and lack of unified family monitoring systems leading to uncoordinated care.",
      solution: "Engineered a 'Clinical Sanctuary' UI in Flutter with advanced vitals tracking, a secure credential vault, and a shared calendar system.",
      architecture: [
        "Flutter (Riverpod State MGMT)",
        "Appwrite Backend Services",
        "Family-based RBAC",
        "Integrated Web Control Panel"
      ],
      impact: [
        "Real-time family vital synchronization",
        "99% prevention of unauthorized ad-tracking",
        "Scalable to multi-tenant family pods"
      ],
      techStack: ["Flutter", "Appwrite", "Riverpod", "Material UI"],
      category: "Mobile App"
    },
    {
      id: 3,
      title: "FinancialHub Cloud",
      subtitle: "Data-Driven Wealth Management",
      description: "A professional-grade financial tracking system focusing on visual analytics and predictive spending models.",
      image: "/images/ecommerce.png",
      problem: "Basic finance apps lack the depth for complex asset tracking and predictive trend visualization.",
      solution: "Built a high-fidelity data visualization dashboard with automated expense categorization and portfolio snapshotting.",
      architecture: [
        "React.js (D3.js Visualization)",
        "Node.js Backend",
        "PostgreSQL (Relation Data)",
        "Secure JWT Multi-Factor Auth"
      ],
      impact: [
        "Automated 95% of expense categorization",
        "Real-time portfolio growth visualization",
        "Bank-grade security encryption for all data"
      ],
      techStack: ["React.js", "D3.js", "PostgreSQL", "Node.js"],
      category: "Dashboard"
    },
    {
      id: 4,
      title: "OmniTracker Elite",
      subtitle: "Fleet & Logistics Engine",
      description: "Enterprise-grade real-time tracking engine with sub-meter accuracy for large scale logistics operations.",
      image: "/images/tracker.png",
      problem: "GPS latency and unreliable background services leading to inefficient routing.",
      solution: "Implemented an optimized background sync protocol with Google Maps API and custom geofencing logic.",
      architecture: [
        "Flutter (Native Background Services)",
        "Firebase Real-time Bridge",
        "Linux Cron Dispatcher",
        "Google Maps SDK"
      ],
      impact: [
        "Reduced fleet operational costs by 20%",
        "99.8% precision in geofencing alerts",
        "Handled 500+ active fleet units per node"
      ],
      techStack: ["Flutter", "Firebase", "Maps API", "Linux"],
      category: "Mobile App"
    }
  ],
  experience: [
    {
      company: "Websitescorporation",
      role: "Full Stack Developer",
      period: "Present",
      description: "Leading development of scalable web and mobile solutions for diverse clients, focusing on high-performance architectures."
    },
    {
      company: "Edizo",
      role: "Backend & Mobile Engineer",
      period: "Present",
      description: "Specializing in API design, mobile app development using Flutter, and ensuring seamless deployment on Linux servers."
    }
  ],
  skills: [
    "RESTful API Architecture",
    "Scalable System Design",
    "Cross-platform Development",
    "Database Optimization",
    "Microservices Basics",
    "Agile Development",
    "CI/CD Fundamentals"
  ]
};
