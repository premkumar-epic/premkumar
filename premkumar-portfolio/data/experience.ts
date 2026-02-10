export interface Experience {
    company: string;
    role: string;
    type: "Full-time" | "Part-time" | "Internship" | "Contract";
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    responsibilities: string[];
    technologies?: string[];
    logo?: string;
}

export const experiences: Experience[] = [
    {
        company: "SAP Lab India (via Edunet Foundation)",
        role: "Technical Intern - Code Unnati Program",
        type: "Internship",
        location: "Offline",
        startDate: "2025",
        endDate: "Present",
        current: true,
        description: "Part of SAP India's flagship CSR initiative focused on Industry 4.0 technologies including AI, ML, Cloud Computing, and IoT. Received hands-on training with SAP B1P, ABAP, and Analytics technologies.",
        responsibilities: [
            "Trained in AI/ML, Cloud Computing, and Computer Vision technologies",
            "Worked with SAP B1P and ABAP platforms",
            "Participated in Faculty Development Programs (FDPs)",
            "Engaged with international certifications in SAP ABAP and Analytics"
        ],
        technologies: ["AI/ML", "Cloud Computing", "SAP B1P", "ABAP", "Analytics"]
    },
    {
        company: "Netpy (Startup)",
        role: "Technical Intern",
        type: "Internship",
        location: "Hybrid",
        startDate: "2025",
        endDate: "Present",
        current: true,
        description: "Working with an innovative startup on cutting-edge projects involving modern web technologies and AI solutions.",
        responsibilities: [
            "Developing full-stack applications using MERN stack",
            "Implementing AI/ML features in production applications",
            "Collaborating with cross-functional teams",
            "Contributing to product development and feature design"
        ],
        technologies: ["Django", "DevOps", "Jira"]
    },
    {
        company: "Zetpeak",
        role: "Assistant Manager",
        type: "Full-time",
        location: "Bangalore, India",
        startDate: "March 2023",
        endDate: "January 2025",
        current: false,
        description: "Managed AICTE internship programs, organized awareness sessions, and handled technical aspects for institutional events while collaborating with SEA Group of Institutions.",
        responsibilities: [
            "Assigned jobs to interns and managed AICTE internship program",
            "Organized and conducted multiple awareness sessions",
            "Collaborated with SEA Group of Institutions for advertising and event organization",
            "Managed all technical aspects for institutional functions and events",
            "Oversawand managed social media pages for various initiatives",
            "Developed and managed websites for the organization and partners",
            "Initiated and implemented new events and programs"
        ],
        technologies: ["React", "Node.js", "WordPress", "Social Media Management", "Event Tech"]
    }
];
