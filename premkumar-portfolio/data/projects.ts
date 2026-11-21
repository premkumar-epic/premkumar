export type CategoryType = "Web App" | "AI/ML" | "Mobile" | "Hackathon" | "Academic" | "Tool" | "Hardware";

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    category: CategoryType[];
    technologies: string[];
    github?: string;
    demo?: string;
    image?: string;
    status: "Complete" | "In Progress" | "Archived" | "Planning" | "Researching";
    featured: boolean;
    completionPercentage?: number;
}

export const projects: Project[] = [
    // 1. BrowseMCP (Featured)
    {
        id: "browsermcp",
        title: "BrowseMCP",
        description: "Open-source Gemini CLI extension and Model Context Protocol (MCP) server providing AI agents browser automation control via Playwright. Uses a token-efficient accessibility-tree approach (~80 tokens/step) with 27 MCP tools, flow recorder, and session persistence.",
        category: ["Tool", "AI/ML"],
        technologies: ["Python", "TypeScript", "Playwright", "MCP", "Gemini CLI", "Automation"],
        github: "https://github.com/premkumar-epic/browsermcp",
        status: "Complete",
        featured: true
    },

    // 2. Epic-Drive (Featured)
    {
        id: "epic-drive",
        title: "Epic-Drive",
        description: "Zero-backend S3 cloud file manager that runs entirely in your browser. User AWS keys never leave the device — no servers, no tracking, pure client-side cloud storage interaction.",
        category: ["Web App", "Tool"],
        technologies: ["HTML5", "AWS SDK", "JavaScript", "Client-Side Storage", "Cryptography"],
        github: "https://github.com/premkumar-epic/Epic-Drive",
        status: "Complete",
        completionPercentage: 100,
        featured: true
    },

    // 3. M2i-LMS (Featured)
    {
        id: "m2i-lms",
        title: "M2i-LMS",
        description: "Student tracking and learning platform featuring automated AI quiz generation from video curriculum content. Designed full REST APIs, robust PostgreSQL schemas with Prisma ORM, and authored 22 architectural specifications.",
        category: ["Web App", "AI/ML"],
        technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma ORM", "AI Pipelines"],
        status: "Complete",
        featured: true
    },

    // 4. Hermes Pipeline & Knowledge Archiver (Featured)
    {
        id: "hermes-pipeline",
        title: "Hermes Pipeline & Knowledge Archiver",
        description: "Local-first AI conversation archiver that ingests, deduplicates, and organizes chats from Gemini, ChatGPT, Claude, and Grok into a unified SQLite database and Obsidian vault with vector indexing for privacy-preserving semantic retrieval.",
        category: ["Tool", "AI/ML"],
        technologies: ["Python", "SQLite", "Obsidian", "RAG", "Data Pipelines", "Local AI"],
        status: "Complete",
        featured: true
    },

    // 5. Greenhouse IoT System (Dual-Layer LoRa Agriculture) (Featured)
    {
        id: "greenhouse-iot",
        title: "Greenhouse IoT (Dual-Layer LoRa)",
        description: "Dual-layer smart agriculture IoT system bridging 433MHz LoRa field sensing (ESP32 deep sleep) with localized greenhouse automation (Raspberry Pi Pico W autonomous relay controller) and Firebase cloud telemetry.",
        category: ["Hardware", "AI/ML"],
        technologies: ["ESP32", "Raspberry Pi Pico W", "LoRa (SX1278)", "Firebase", "C++", "Sensors"],
        github: "https://github.com/premkumar-epic/Greenhouse_Iot_LoRa",
        status: "Complete",
        featured: true
    },

    // 6. AI-Powered Meeting Assistant (Major Capstone Project) (Featured)
    {
        id: "ai-meeting-assistant",
        title: "AI-Powered Meeting Assistant",
        description: "Privacy-focused, local-first meeting intelligence system that transcribes speech using faster-whisper (CTranslate2, 4x-8x CPU speedup), generates recursive summaries with BART, and extracts action items with spaCy. 100% CPU execution with zero data leakage.",
        category: ["AI/ML", "Academic", "Web App"],
        technologies: ["Python", "FastAPI", "React", "faster-whisper", "CTranslate2", "BART", "spaCy", "SQLite"],
        github: "https://github.com/premkumar-epic/AI-Powered-Meeting_Assistant",
        status: "Complete",
        featured: true
    },

    // 7. RetroCam (Handheld Digital Camera) (Featured)
    {
        id: "retrocam",
        title: "RetroCam",
        description: "Handheld digital camera firmware in C++ for ESP32-CAM. Features live viewfinder, SD photo storage, interactive settings menu, on-device photo gallery, persistent EEPROM settings, and a 4-button single-pin resistor ladder.",
        category: ["Hardware"],
        technologies: ["C++", "ESP32-CAM", "Embedded Systems", "Hardware", "EEPROM"],
        github: "https://github.com/premkumar-epic/RetroCam_ESP32_Cam",
        status: "Complete",
        featured: true
    },

    // 8. IVK Garments ERP & Batch Ledger
    {
        id: "ivk-garments-erp",
        title: "IVK Garments ERP & Batch Ledger",
        description: "Production ERP system engineered for garment manufacturing: automated GST-compliant PDF invoicing, batch cost analytics, dispatch tracking, and ledger reconciliation between IVK Garments and export buyers.",
        category: ["Web App", "Tool"],
        technologies: ["Node.js", "Supabase", "PostgreSQL", "React", "PDF Generation", "GST Billing"],
        status: "Complete",
        featured: false
    },

    // 9. Custom 12-Key Macropad
    {
        id: "12-key-macropad",
        title: "Custom 12-Key Macropad",
        description: "Custom productivity macropad powered by Seeed Studio XIAO RP2350 and CircuitPython. Integrates 0.96-inch OLED display, rotary encoder, 74HC165 shift register matrix, and custom register-level MPR121 capacitive touch sensing.",
        category: ["Hardware", "Tool"],
        technologies: ["CircuitPython", "RP2350", "Hardware Design", "I2C/SPI", "74HC165", "MPR121"],
        status: "Complete",
        featured: false
    },

    // 10. Benchtop Variable Lab Power Supply
    {
        id: "benchtop-power-supply",
        title: "Benchtop Lab Power Supply",
        description: "Custom benchtop workstation power supply integrating a modified ATX power supply, ZK-5KX precision buck-boost voltage regulator, SW3518S multi-protocol fast charging module, and integrated workbench illumination controls.",
        category: ["Hardware"],
        technologies: ["Hardware", "Power Electronics", "ATX PSU", "ZK-5KX", "SW3518S"],
        status: "Complete",
        featured: false
    },

    // 11. DIY T12/C245 Soldering Station
    {
        id: "diy-soldering-iron",
        title: "DIY Active-Cartridge Soldering Station",
        description: "Smart temperature-controlled soldering station supporting T12 and C245 active cartridges running custom firmware with real-time thermocouple feedback, PID thermal regulation, sleep standby mode, and OLED status display.",
        category: ["Hardware"],
        technologies: ["MicroPython", "C++", "Embedded Systems", "Hardware", "PID Control"],
        github: "https://github.com/premkumar-epic/DIY_Soldering_Iron_T12",
        status: "Complete",
        featured: false
    },

    // 12. HomeLab Virtualization & Hermes Agent
    {
        id: "homelab-infrastructure",
        title: "HomeLab Virtualization & Local LLMs",
        description: "Self-hosted Proxmox VE virtualization cluster managed with automated systemd services, automated SSL certificate lifecycle management, Ollama local LLM serving, and custom Python monitoring agents.",
        category: ["Tool"],
        technologies: ["Linux", "Proxmox VE", "Python", "Systemd", "SSL/TLS", "Ollama"],
        status: "Complete",
        featured: false
    },

    // 13. Blood Cell Detection
    {
        id: "blood-cell-detection",
        title: "Blood Cell Detection",
        description: "Deep learning computer vision system that classifies microscopic blood cell types to assist pathologists and reduce human screening error.",
        category: ["AI/ML", "Academic"],
        technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "OpenCV"],
        github: "https://github.com/premkumar-epic/Blood_Cell_Detection",
        status: "Complete",
        featured: false
    },

    // 14. Pregnancy Exercise Monitor
    {
        id: "pregnancy-monitor",
        title: "Pregnancy Exercise Monitor",
        description: "Real-time pose detection system to guide safe exercises during pregnancy. Built with TensorFlow.js to analyze body positioning and provide instant feedback on posture and form safety.",
        category: ["AI/ML", "Academic"],
        technologies: ["React", "Flask", "TensorFlow.js", "Pose Detection"],
        github: "https://github.com/premkumar-epic/pregnancy-exercise-monitor",
        status: "Complete",
        featured: false
    },

    // 15. FocusPilot
    {
        id: "focus-pilot",
        title: "FocusPilot",
        description: "AI-powered productivity application combining smart task prioritization with Pomodoro focus sessions, habit analytics, and OpenAI API integration.",
        category: ["Web App", "AI/ML"],
        technologies: ["React", "Firebase", "OpenAI API", "Tailwind CSS"],
        github: "https://github.com/premkumar-epic/FocusPilot",
        status: "Complete",
        completionPercentage: 100,
        featured: false
    },

    // 16. TrackWise (EPIC_MoneyTracker)
    {
        id: "trackwise",
        title: "TrackWise (Money Tracker)",
        description: "Personal finance and expense tracking application with Google authentication, auto-categorized expenses, and interactive Chart.js visualizations.",
        category: ["Web App"],
        technologies: ["Supabase", "PostgreSQL", "JavaScript", "Chart.js"],
        github: "https://github.com/premkumar-epic/EPIC_MoneyTracker",
        status: "Complete",
        featured: false
    },

    // 17. Smartcrop
    {
        id: "smartcrop",
        title: "Smartcrop",
        description: "Crop disease diagnosis system combining field image capture using ESP32-CAM and on-device disease classification using MobileNetV2 and PyTorch.",
        category: ["Hardware", "AI/ML"],
        technologies: ["ESP32-CAM", "Flask", "PyTorch", "IoT"],
        status: "Complete",
        featured: false
    },

    // 18. AI Patient Record Analyser
    {
        id: "ai-patient-analyser",
        title: "AI Patient Record Analyser",
        description: "Clinical record analysis system utilizing machine learning to flag patient health risks and suggest early diagnostic indicators. Winner at the internal SEACET Hackathon.",
        category: ["AI/ML", "Hackathon"],
        technologies: ["React", "Flask", "TensorFlow", "Python"],
        github: "https://github.com/premkumar-epic/ai-patient-record-analyser",
        status: "Complete",
        featured: false
    },

    // 19. Rec&Post
    {
        id: "rec-post",
        title: "Rec&Post",
        description: "Built in 24 hours at the Code Carnage Hackathon — a community video curation platform focused on content recommendations and discussion.",
        category: ["Hackathon"],
        technologies: ["React", "Flask", "MongoDB", "Express"],
        github: "https://github.com/premkumar-epic/Rec-Post",
        status: "Complete",
        featured: false
    },

    // 20. EPIC_Scraper_TBot
    {
        id: "epic-scraper-tbot",
        title: "EPIC Scraper & Telegram Bot",
        description: "Containerized automated Telegram intake bot and web scraper with scheduled cron automation, transcript compilation, and robust background worker processing.",
        category: ["Tool"],
        technologies: ["Python", "Docker", "Telegram API", "Cron", "Web Scraping"],
        github: "https://github.com/premkumar-epic/EPIC_Scraper_TBot",
        status: "Complete",
        featured: false
    },

    // 21. EPIC_Downloader
    {
        id: "epic-downloader",
        title: "EPIC_Downloader",
        description: "Download YouTube videos and full playlists in up to 4K resolution. Features real-time download and conversion progress streaming via WebSockets with FFmpeg.",
        category: ["Tool"],
        technologies: ["FastAPI", "Next.js", "FFmpeg", "WebSockets"],
        github: "https://github.com/premkumar-epic/EPIC_Downloader",
        status: "Complete",
        featured: false
    },

    // 22. Job Portal
    {
        id: "job-portal",
        title: "Job Portal",
        description: "End-to-end employment platform connecting job seekers with recruiters, featuring profile management, faceted search, and application tracking.",
        category: ["Web App"],
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/premkumar-epic/job_portal_frontend",
        status: "Complete",
        featured: false
    }
];

export const featuredProjects = projects.filter(p => p.featured);
export const projectsByCategory = (category: CategoryType) =>
    projects.filter(p => p.category.includes(category));
