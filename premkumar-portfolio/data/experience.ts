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
        company: "IVK Garments & Industrial Operations",
        role: "Electronics Repair Technician & Operations",
        type: "Contract",
        location: "Bangalore, India",
        startDate: "September 2026",
        endDate: "Present",
        current: true,
        description: "Hands-on diagnostic repair of industrial electronic control boxes, servo motor drives, and variable-frequency inverter PCBs alongside a senior technician mentor, coupled with factory production batch analysis and ledger reconciliation.",
        responsibilities: [
            "Diagnose, repair, and bench-test industrial sewing machine electronic control boxes, servo motor drives, and inverter PCBs",
            "Perform board-level fault isolation using multimeters, oscilloscopes, and regulated micro-soldering stations to replace blown MOSFETs, optocouplers, and power supply rails",
            "Manage garment factory batch production cost analysis, dispatch tracking, and financial ledger reconciliation between IVK Garments and Afro Asia Exports",
            "Design and test custom workbench power supplies and diagnostic tools for rapid hardware troubleshooting"
        ],
        technologies: ["Industrial Electronics", "PCB Diagnostics", "Servo Drives", "Inverter Control", "Micro-soldering", "Financial Analysis"]
    },
    {
        company: "NetPy Technologies",
        role: "Technical Intern (Software Engineering)",
        type: "Internship",
        location: "Hybrid (Bangalore)",
        startDate: "October 2025",
        endDate: "June 2026",
        current: false,
        description: "Architected core software components for M2i LMS (NetPy's Smart Learning Management System), integrating automated AI quiz generation from video curriculum content.",
        responsibilities: [
            "Designed and built full-stack application modules using Node.js, Express, TypeScript, and Django",
            "Modeled normalized relational schemas with PostgreSQL and Prisma ORM, authoring 22 architectural specification modules",
            "Implemented automated video-to-quiz AI pipelines and REST APIs for scalable student cohort assessment",
            "Managed technical system administration, Git workflows, and sprint deliverables using Jira in an agile startup environment"
        ],
        technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma ORM", "AI Integration", "Jira", "Linux"]
    },
    {
        company: "SAP Lab India (via Edunet Foundation)",
        role: "Technical Intern - Code Unnati Program",
        type: "Internship",
        location: "Offline (Bangalore)",
        startDate: "September 2025",
        endDate: "June 2026",
        current: false,
        description: "Part of SAP India's flagship CSR initiative focused on Industry 4.0 technologies including AI, Machine Learning, Cloud Computing, and Computer Vision.",
        responsibilities: [
            "Trained in enterprise AI/ML architectures, Cloud Computing, and Computer Vision technologies",
            "Worked with SAP Business One (B1P) and ABAP platforms to support enterprise workflows and business process automation",
            "Participated in Faculty Development Programs (FDPs) and institutional development workshops",
            "Engaged with international certifications in SAP ABAP and Enterprise Analytics"
        ],
        technologies: ["AI/ML", "Cloud Computing", "SAP B1P", "ABAP", "Computer Vision", "Analytics"]
    },
    {
        company: "Zetpeak",
        role: "Assistant Manager",
        type: "Full-time",
        location: "Bangalore, India",
        startDate: "March 2023",
        endDate: "January 2025",
        current: false,
        description: "Managed AICTE internship programs, organized technical awareness sessions, and led engineering teams delivering web portals for institutional partners.",
        responsibilities: [
            "Assigned deliverables and managed technical milestones for student cohorts in the AICTE internship program",
            "Led a cross-functional team of 5 developers to deliver web applications and institutional websites on schedule",
            "Collaborated with SEA Group of Institutions for event technical infrastructure and promotional portals",
            "Managed technical audiovisual setups and digital broadcast portals for annual festivals and conferences"
        ],
        technologies: ["React", "Node.js", "WordPress", "Team Leadership", "Project Management", "Event Tech"]
    }
];
