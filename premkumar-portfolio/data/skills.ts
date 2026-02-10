export interface Skill {
    name: string;
    category: string;
    level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
    // Programming Languages
    { name: "JavaScript", category: "Programming Languages", level: "Advanced" },
    { name: "TypeScript", category: "Programming Languages", level: "Advanced" },
    { name: "Python", category: "Programming Languages", level: "Intermediate" },
    { name: "C Programming", category: "Programming Languages", level: "Intermediate" },

    // Frontend
    { name: "React", category: "Frontend", level: "Advanced" },
    { name: "Next.js", category: "Frontend", level: "Advanced" },
    { name: "Flutter", category: "Frontend", level: "Intermediate" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
    { name: "Bootstrap", category: "Frontend", level: "Advanced" },
    { name: "Shadcn/ui", category: "Frontend", level: "Intermediate" },
    { name: "DaisyUI", category: "Frontend", level: "Intermediate" },
    { name: "Framer Motion", category: "Frontend", level: "Intermediate" },

    // Backend
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "Express.js", category: "Backend", level: "Advanced" },
    { name: "Flask", category: "Backend", level: "Intermediate" },

    // Database
    { name: "MongoDB", category: "Database", level: "Advanced" },
    { name: "Firebase", category: "Database", level: "Intermediate" },

    // Cloud & DevOps
    { name: "AWS", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "Google Cloud", category: "Cloud & DevOps", level: "Beginner" },
    { name: "Docker", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "Dockploy", category: "Cloud & DevOps", level: "Beginner" },
    { name: "Jenkins", category: "Cloud & DevOps", level: "Beginner" },
    { name: "Vercel", category: "Cloud & DevOps", level: "Advanced" },
    { name: "Netlify", category: "Cloud & DevOps", level: "Intermediate" },
    { name: "Render", category: "Cloud & DevOps", level: "Intermediate" },

    // AI/ML
    { name: "TensorFlow", category: "AI/ML", level: "Intermediate" },
    { name: "PyTorch", category: "AI/ML", level: "Intermediate" },
    { name: "Scikit-learn", category: "AI/ML", level: "Intermediate" },
    { name: "OpenCV", category: "AI/ML", level: "Intermediate" },
];

export const skillCategories = [
    "Programming Languages",
    "Frontend",
    "Backend",
    "Database",
    "Cloud & DevOps",
    "AI/ML"
];
