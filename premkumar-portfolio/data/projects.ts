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
    // FEATURED PROJECTS
    {
        id: "epic-drive",
        title: "Epic-Drive",
        description: "Zero-backend S3 file manager that runs entirely in your browser. Your AWS keys never leave your device — no servers, no tracking, just you and your cloud storage.",
        category: ["Web App"],
        technologies: ["HTML5", "AWS SDK", "JavaScript", "Client-Side Storage"],
        github: "https://github.com/premkumar-epic/Epic-Drive",
        status: "In Progress",
        completionPercentage: 85,
        featured: true
    },
    {
        id: "pregnancy-monitor",
        title: "Pregnancy Exercise Monitor",
        description: "Uses real-time pose detection to guide safe exercises during pregnancy. Built with TensorFlow.js to analyze body positioning and provide instant feedback on form and safety.",
        category: ["AI/ML", "Academic"],
        technologies: ["React", "Flask", "TensorFlow", "Pose Detection"],
        github: "https://github.com/premkumar-epic/pregnancy-exercise-monitor",
        status: "Complete",
        featured: true
    },
    {
        id: "myspace",
        title: "mySpace",
        description: "A personal command center that brings together your tasks, daily routines, and productivity metrics into a single, clean dashboard you'll actually want to use.",
        category: ["Web App"],
        technologies: ["React", "Node.js", "MongoDB", "Vite"],
        github: "https://github.com/premkumar-epic/mySpace",
        status: "Complete",
        featured: true
    },

    // HIGH PRIORITY & PRODUCTION READY
    {
        id: "focus-pilot",
        title: "FocusPilot",
        description: "Your AI-powered productivity partner — combines smart task prioritization with Pomodoro focus sessions and habit tracking to help you get more done.",
        category: ["Web App", "AI/ML"],
        technologies: ["React", "Firebase", "OpenAI API", "Tailwind CSS"],
        github: "https://github.com/premkumar-epic/FocusPilot",
        status: "In Progress",
        completionPercentage: 75,
        featured: false
    },
    {
        id: "epic-downloader",
        title: "EPIC_Downloader",
        description: "Download YouTube videos and entire playlists in up to 4K quality. Features real-time progress via WebSockets and ships as a standalone executable.",
        category: ["Tool"],
        technologies: ["FastAPI", "Next.js", "FFmpeg", "WebSockets"],
        github: "https://github.com/premkumar-epic/EPIC_Downloader",
        status: "Complete",
        featured: false
    },
    {
        id: "trackwise",
        title: "TrackWise (EPIC_MoneyTracker)",
        description: "Track every rupee effortlessly with Google login, auto-categorized expenses, and interactive charts that reveal your spending patterns at a glance.",
        category: ["Web App"],
        technologies: ["Supabase", "PostgreSQL", "Vanilla JS", "Chart.js"],
        github: "https://github.com/premkumar-epic/EPIC_MoneyTracker",
        status: "Complete",
        featured: false
    },

    // HARDWARE & IOT
    {
        id: "smart-display",
        title: "Smart Display",
        description: "A DIY smart display built from scratch for home automation — showing weather, calendar, notifications, and smart home controls on a single screen.",
        category: ["Hardware"],
        technologies: ["IoT", "Hardware", "Embedded Systems"],
        status: "Planning",
        featured: false
    },
    {
        id: "productivity-controller",
        title: "Productivity Controller",
        description: "A custom hardware controller with physical buttons and dials to control your productivity apps — mute calls, switch tasks, and manage timers without touching the keyboard.",
        category: ["Hardware"],
        technologies: ["IoT", "Hardware", "Arduino/ESP32"],
        status: "Planning",
        featured: false
    },
    {
        id: "smartcrop",
        title: "Smartcrop",
        description: "Snap a photo of a sick crop and get an instant diagnosis. Uses ESP32-CAM for field capture and MobileNetV2 for on-device disease classification.",
        category: ["Hardware", "AI/ML"],
        technologies: ["ESP32-CAM", "Flask", "PyTorch", "IoT"],
        status: "Researching",
        featured: false
    },

    // ACADEMIC & RESEARCH
    {
        id: "blood-cell-detection",
        title: "Blood Cell Detection",
        description: "Deep learning system that automatically classifies blood cell types from microscope images — helping pathologists speed up analysis and reduce human error.",
        category: ["AI/ML", "Academic"],
        technologies: ["Python", "Jupyter", "Deep Learning", "Computer Vision"],
        github: "https://github.com/premkumar-epic/Blood_Cell_Detection",
        status: "Researching",
        featured: false
    },

    // HACKATHON & INTERNSHIPS
    {
        id: "rec-post",
        title: "Rec&Post",
        description: "Built in 24 hours at Code Carnage Hackathon — a social platform focused on meaningful video content sharing and community-driven recommendations.",
        category: ["Hackathon"],
        technologies: ["React", "Flask", "MongoDB", "Express"],
        github: "https://github.com/premkumar-epic/Rec-Post",
        status: "Complete",
        featured: false
    },
    {
        id: "ai-patient-analyser",
        title: "AI Patient Record Analyser",
        description: "Analyzes patient records using ML to flag potential health risks and suggest early diagnoses. Won recognition at the internal SEACET Hackathon.",
        category: ["AI/ML", "Hackathon"],
        technologies: ["React", "Flask", "TensorFlow", "Python"],
        github: "https://github.com/premkumar-epic/ai-patient-record-analyser",
        status: "Complete",
        featured: false
    },
    {
        id: "job-portal",
        title: "Job Portal",
        description: "End-to-end job marketplace connecting seekers with employers — featuring profile management, smart search, and application tracking. Built during internship.",
        category: ["Web App"],
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/premkumar-epic/job_portal_frontend",
        status: "Complete",
        featured: false
    },

    // EMERGING & OTHER
    {
        id: "self-mastery",
        title: "SelfMastery",
        description: "A unified ecosystem (web + mobile) for building better habits, tracking goals, and measuring personal growth across every area of life.",
        category: ["Mobile"],
        technologies: ["React Native", "Next.js", "Firebase", "TypeScript"],
        github: "https://github.com/premkumar-epic/SelfMastery",
        status: "In Progress",
        featured: false
    },
    {
        id: "study-smarter",
        title: "StudySmarter",
        description: "AI-enhanced study companion with smart flashcards, spaced repetition, and progress analytics to help you retain more in less time.",
        category: ["AI/ML", "Web App"],
        technologies: ["React", "Firebase", "Tailwind CSS"],
        github: "https://github.com/premkumar-epic/StudySmarter",
        status: "Complete",
        featured: false
    },
    {
        id: "fitness-pro",
        title: "Fitness_Pro",
        description: "Personalized workout plans and real-time form feedback powered by Genkit AI — your pocket personal trainer that adapts to your fitness level.",
        category: ["AI/ML", "Web App"],
        technologies: ["Next.js 15", "Genkit AI", "Firebase", "Tailwind CSS"],
        status: "In Progress",
        featured: false
    },

    // PLANNING & CONCEPTS
    {
        id: "m2i-lms",
        title: "M2i_LMS",
        description: "An ambitious vision for an AI-driven career guidance platform — personalized learning paths, mentor matching, and industry-aligned skill mapping.",
        category: ["AI/ML"],
        technologies: ["Planning", "Product Management"],
        status: "Planning",
        featured: false
    },
    {
        id: "epic-mentoring",
        title: "EPIC Mentoring (AI-Powered)",
        description: "Uses AI to intelligently match students with mentors based on skills, goals, and learning style — making mentorship accessible and personalized.",
        category: ["AI/ML", "Web App"],
        technologies: ["AI/ML", "React", "Node.js"],
        github: "https://github.com/premkumar-epic/EPIC-Mentoring",
        status: "Planning",
        featured: false
    },
    {
        id: "plingo",
        title: "Plingo",
        description: "Learn regional Indian languages through gamified lessons, just like Duolingo — but built for languages that mainstream apps don't support.",
        category: ["AI/ML", "Web App"],
        technologies: ["React", "AI/ML", "NLP"],
        status: "Planning",
        featured: false
    },
    {
        id: "epic-reader",
        title: "EPIC Reader",
        description: "A distraction-free reading experience with smart annotations, highlights, and cross-device sync for PDFs and ebooks.",
        category: ["Tool"],
        technologies: ["React", "PDF.js"],
        status: "Planning",
        featured: false
    },
    {
        id: "epic-journaler",
        title: "EPIC Journaler",
        description: "AI-powered journaling that tracks your mood patterns over time and surfaces insights about what drives your best (and worst) days.",
        category: ["AI/ML", "Tool"],
        technologies: ["React Native", "AI/ML"],
        status: "Planning",
        featured: false
    },
    {
        id: "epic-music",
        title: "EPIC Music",
        description: "A music streaming platform focused on discovery — find new artists through AI-curated playlists and mood-based recommendations.",
        category: ["Web App"],
        technologies: ["Streaming", "Audio API"],
        status: "Planning",
        featured: false
    }
];

export const featuredProjects = projects.filter(p => p.featured);
export const projectsByCategory = (category: CategoryType) =>
    projects.filter(p => p.category.includes(category));
