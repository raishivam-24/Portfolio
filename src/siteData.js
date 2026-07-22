// ============================================================
// SITE DATA — Shivam Rai
// Edit everything in this file to update your portfolio content.
// No need to touch any component files for text/content changes.
//
// A few fields are marked TODO because the source resume PDF only
// contained hyperlink *labels* ("Live", "GitHub") with the actual
// URLs stripped out during text extraction. Paste the real links in.
// ============================================================
import {FaGithub, FaLinkedin, FaChartBar, FaCode} from "react-icons/fa";
const siteData = {
  brand: {
    name: "SHIVAM RAI",
  },

  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Hire Me",
    ctaHref: "#contact",
  },

  hero: {
    status: "AVAILABLE FOR FULL-STACK ROLES // OPEN TO WORK",
    education: "B.Tech CSE, KIET Group of Institutions (CGPA 8.4)",
    internBadge: "Full Stack Developer Intern @ SN Verse Software Solution",
    headlineLine1: "Building Production-Grade",
    headlineLine2: "MERN Applications",
    subtitle:
      "Full-stack developer with a strong foundation in Data Structures & Algorithms (500+ problems solved) and hands-on experience shipping React/Node.js applications, including AI-integrated systems built on the OpenAI API.",
    primaryCta: { label: "View My Work", href: "#projects", icon: "code" },
    secondaryCta: { label: "Let's Talk", href: "#contact", icon: "chat" },
    terminal: {
      title: "bash -- shivam_dev",
      command: "./initialize_portfolio.sh",
      lines: [
        "> Loading modules... [OK]",
        "> Compiling assets... [OK]",
        "> Connecting to MongoDB...",
      ],
      readyMessage: "[ SYSTEM READY. AWAITING COMMAND. ]",
    },
    codeSnippet: `const initShivam = () => {
    let dev = new FullStackDev({
        stack: 'MERN',
        dsa: '500+ problems',
        aiIntegration: true
    });

    dev.bridge(
        new ReactFrontend(),
        new ExpressBackend()
    );

    return dev.deploy();
};`,
  },

  about: {
    eyebrow: "B.Tech CSE // KIET Group of Institutions",
    headlinePart1: "The",
    headlineHighlight: "Developer",
    headlinePart2: "Behind the Code",
    description:
      "Full-stack developer with a strong foundation in Data Structures and Algorithms (500+ problems solved across LeetCode and Codeforces) and hands-on experience building and deploying production-grade MERN applications. Experienced in building responsive, scalable web applications using React.js, Node.js, Express, and MongoDB, with practical exposure to AI-integrated systems via the OpenAI API.",
    ctaLabel: "View Stack",
    ctaHref: "#skills",
    image: {
      // Drop your photo at public/assets/profile.jpg
      src: "/assets/profile.jpg",
      alt: "Shivam Rai, Full-Stack Developer",
    },
    philosophy: {
      title: "Core Philosophy",
      cards: [
        {
          icon: "speed",
          title: "DSA-First Thinking",
          description:
            "500+ problems solved across LeetCode and Codeforces. Every feature starts with the right data structure and the cleanest algorithm, not just the first one that works.",
        },
        {
          icon: "architecture",
          title: "Componentized Architecture",
          description:
            "Fully componentized frontends with centralized, code-free content management (siteData.js pattern) and RESTful backends following strict MVC architecture.",
        },
        {
          icon: "accessibility_new",
          title: "Ship to Production",
          description:
            "From centralized fleet data to bilingual checkout flows, I take projects from local dev to live, custom-domain production deployments — not just demos.",
        },
      ],
    },
    timeline: {
      title: "Experience",
      items: [
        {
          role: "Full Stack Developer Intern",
          org: "SN VERSE SOFTWARE SOLUTION // JUNE 2026 - PRESENT",
          description:
            "Built RoadTech Rentals, a production website for a road construction machinery rental client managing a 70+ unit fleet across major brands (Wirtgen, SANY, Bomag, XCMG), with a fully componentized architecture, centralized fleet data, and a B2B enquiry flow — deployed live on Vercel. Also built Desi Kalewaa, a bilingual (Hindi/English) production site for a 15-branch restaurant chain, with a multi-step checkout flow (UPI, Card, Net Banking, COD) and dynamic location-based UI. Maintained strict component/CSS separation and centralized siteData.js files across both projects for fast, code-free content updates.",
          tags: ["React", "Vite", "React Router DOM", "Vercel"],
          current: true,
        },
        {
          role: "Web Development Mentor & Java Coordinator",
          org: "DSTL-KIET / CPBYTE-KIET // OCT 2024 - PRESENT",
          description:
            "Mentoring students in Web Development (JavaScript, React.js) and UI/UX fundamentals at DSTL-KIET, and leading Java & Data Structures sessions as Java Coordinator at CPBYTE-KIET, running coding discussions and supporting collaborative technical learning.",
          tags: ["JavaScript", "React.js", "Java", "DSA"],
          current: false,
        },
      ],
    },
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "KIET Group of Institutions, Ghaziabad",
      duration: "2024 – Present",
      cgpa: "CGPA: 8.4",
    },
  },

  projects: {
    heading: "Projects",
    subheading:
      "A selection of production websites and full-stack applications — from client-facing MERN builds to an AI-integrated hiring platform.",
    items: [
      {
        title: "SkillBridge AI",
        status: "Active",
        // Drop your screenshot at public/assets/projects/skillbridge.png
        image: "/assets/projects/skillbridge.png",
        alt: "SkillBridge AI — intelligent skill-based hiring platform",
        tags: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
        description:
          "Intelligent skill-based hiring system automating candidate screening through AI-driven skill assessment. Integrated the OpenAI API to analyze resumes and extract structured technical skills with confidence scoring, built a dynamic test-generation module for personalized assessments, RESTful MVC backend with JWT + bcrypt auth, and a weighted job recommendation engine — deployed on Vercel (frontend) and Render (backend).",
        links: [
          { label: "Live Demo", href: "https://skill-bridge-ai-chi.vercel.app/", icon: "open_in_new" },
          { label: "GitHub Repository", href: "https://github.com/raishivam-24/SkillBridgeAI", icon: "code" },
        ],
        size: "wide",
      },
      {
        title: "RoadTech Rentals",
        status: "Active",
        // Drop your screenshot at public/assets/projects/roadtech.png
        image: "/assets/projects/roadtech.png",
        alt: "RoadTech Rentals — road construction machinery rental platform",
        tags: ["React", "Vite", "React Router DOM"],
        description:
          "Production website for a road construction machinery rental client managing a 70+ unit fleet across major brands (Wirtgen, SANY, Bomag, XCMG). Fully componentized architecture with centralized fleet data and a B2B enquiry flow for industrial clients, deployed live on Vercel.",
        links: [
          { label: "Live Demo", href: "https://roadtech-rentals.vercel.app/", icon: "open_in_new" },
          { label: "GitHub Repository", href: "https://github.com/raishivam-24/Roadtech_Rentals", icon: "code" },
          // TODO: add the live URL once you have it handy.
        ],
        size: "normal",
      },
      {
        title: "Desi Kalewaa",
        status: "Active",
        // Drop your screenshot at public/assets/projects/desikalewaa.png
        image: "/assets/projects/desikalewaa.png",
        alt: "Desi Kalewaa — bilingual restaurant chain website",
        tags: ["React", "Vite", "Custom CSS Animations"],
        description:
          "Bilingual (Hindi/English) production website for a 15-branch Chhattisgarhi restaurant chain. Multi-step checkout flow supporting UPI, Card, Net Banking, and COD, plus dynamic location-based UI elements — deployed to production on a custom domain.",
        links: [
          { label: "Live Demo", href: "https://www.desikalewaa.com/", icon: "open_in_new" },
          { label: "GitHub Repository", href: "https://github.com/raishivam-24/Desi_Kalewaa", icon: "code" },
        ],
        size: "normal",
      },
      {
        title: "Makeover",
        status: "Active",
        // Drop your screenshot at public/assets/projects/makeover.png
        image: "/assets/projects/makeover.png",
        alt: "Makeover — React front-end redesign project",
        tags: ["React", "Vite", "CSS", "JavaScript"],
        description:
          "A React + Vite front-end project focused on a clean visual redesign and modern component architecture, built with Oxlint tooling and deployed live on Vercel.",
        links: [
          { label: "Live Demo", href: "https://makeover-dusky.vercel.app", icon: "open_in_new" },
          { label: "GitHub Repository", href: "https://github.com/raishivam-24/makeover", icon: "code" },
        ],
        size: "normal",
      },
    ],
  },

  skills: {
    heading: "TECHNICAL_STACK",
    subheading:
      "Languages, frameworks, and tools I build with — plus a snapshot of my competitive programming track record.",
    stackTitle: "Technology Stack",
    stack: [
      {
        icon: "web",
        title: "Frontend",
        items: ["React.js", "React Router DOM", "Vite", "HTML", "CSS", "JavaScript"],
      },
      {
        icon: "dns",
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
      },
      {
        icon: "cloud",
        title: "Database & Tools",
        items: ["MongoDB", "Git", "GitHub", "Postman"],
      },
      {
        icon: "chart-bar",
        title: "Data Analytics",
        items: ["Python", "Excel", "Tableau", "Power BI"],
      }
    ],
    proficiencyTitle: "Coding Track Record",
    // Sourced live from Codolio (https://codolio.com/profile/raishivam86), 22 Jul 2026.
    proficiency: [
      { label: "LeetCode — Rating 1566 (max 1617)", value: 78 },
      { label: "CodeChef — Rating 1404, 2★", value: 70 },
      { label: "Codeforces — Newbie, Rating 633", value: 32 },
      { label: "Total DSA Solved — 395 (183 Easy / 197 Med / 15 Hard)", value: 90 },
    ],
    codingStats: [
      { label: "Total Questions", value: "531" },
      { label: "Active Days", value: "226" },
      { label: "Max Streak", value: "50" },
      { label: "Total Contests", value: "43" },
      { label: "Global Rank", value: "12,364" },
      { label: "Awards", value: "4" },
    ],
    methodologiesTitle: "Core Concepts",
    methodologies: [
      { icon: "sync", title: "MVC Architecture", description: "RESTful backends structured for clarity & scale." },
      { icon: "bug_report", title: "Data Structures & Algorithms", description: "500+ problems solved, DSA-first problem solving." },
      { icon: "rocket_launch", title: "Git & Deployment", description: "Vercel / Render deployments with custom domains." },
    ],
  },

  contact: {
    heading: "Get In Touch",
    subheading: "Open to full-stack and MERN developer roles — reach out below.",
    email: "shivamrai1716@gmail.com",
    phone: "+91-9236932756",
    location: "Ghaziabad, Uttar Pradesh, India",
    mapQuery: "Ghaziabad, Uttar Pradesh, India",
    socials: [
      { name: "GitHub", icon: FaGithub , href: "https://github.com/raishivam-24", label: "GitHub" },
      { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/shivamrai024/", label: "LinkedIn" }, // TODO: add LinkedIn URL
      { name: "Codolio", icon: FaCode, href: "https://codolio.com/profile/raishivam86", label: "Codolio" },
    ],
    form: {
      nameLabel: "NAME",
      namePlaceholder: "Enter your name",
      emailLabel: "EMAIL",
      emailPlaceholder: "Enter your email",
      subjectLabel: "SUBJECT",
      subjectPlaceholder: "What's this about?",
      messageLabel: "MESSAGE",
      messagePlaceholder: "Write your message...",
      submitLabel: "SEND MESSAGE",
    },
  },

  footer: {
    copyright: "© 2026 Shivam Rai. All rights reserved.",
    links: [
      { label: "GitHub", href: "https://github.com/raishivam-24" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shivamrai024/" }, // TODO: add LinkedIn URL
      { label: "Codolio", href: "https://codolio.com/profile/raishivam86" },
    ],
  },
};

export default siteData;