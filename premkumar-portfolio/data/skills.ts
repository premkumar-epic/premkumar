export interface Skill {
    name: string;
    category: string;
    level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Programming Languages", level: "Advanced" },
    { name: "TypeScript", category: "Programming Languages", level: "Advanced" },
    { name: "JavaScript", category: "Programming Languages", level: "Advanced" },
    { name: "C++", category: "Programming Languages", level: "Intermediate" },
    { name: "C Programming", category: "Programming Languages", level: "Intermediate" },
    { name: "MicroPython", category: "Programming Languages", level: "Advanced" },
    { name: "CircuitPython", category: "Programming Languages", level: "Advanced" },
    { name: "Embedded C", category: "Programming Languages", level: "Intermediate" },
    { name: "SQL", category: "Programming Languages", level: "Advanced" },
    { name: "Bash / Shell", category: "Programming Languages", level: "Advanced" },

    // AI & Agents
    { name: "MCP Servers", category: "AI & Agents", level: "Advanced" },
    { name: "RAG Pipelines", category: "AI & Agents", level: "Advanced" },
    { name: "Gemini CLI (`agy`)", category: "AI & Agents", level: "Advanced" },
    { name: "Claude Code", category: "AI & Agents", level: "Advanced" },
    { name: "faster-whisper", category: "AI & Agents", level: "Advanced" },
    { name: "CTranslate2", category: "AI & Agents", level: "Advanced" },
    { name: "BART Summarization", category: "AI & Agents", level: "Advanced" },
    { name: "spaCy NER", category: "AI & Agents", level: "Advanced" },
    { name: "Ollama / Local LLM", category: "AI & Agents", level: "Advanced" },
    { name: "PyTorch", category: "AI & Agents", level: "Intermediate" },
    { name: "TensorFlow", category: "AI & Agents", level: "Intermediate" },
    { name: "OpenCV", category: "AI & Agents", level: "Intermediate" },

    // Web & Backend
    { name: "Node.js", category: "Web & Backend", level: "Advanced" },
    { name: "Express.js", category: "Web & Backend", level: "Advanced" },
    { name: "PostgreSQL", category: "Web & Backend", level: "Advanced" },
    { name: "Prisma ORM", category: "Web & Backend", level: "Advanced" },
    { name: "MongoDB", category: "Web & Backend", level: "Advanced" },
    { name: "Supabase", category: "Web & Backend", level: "Advanced" },
    { name: "SQLite", category: "Web & Backend", level: "Advanced" },
    { name: "FastAPI", category: "Web & Backend", level: "Advanced" },
    { name: "Flask", category: "Web & Backend", level: "Intermediate" },
    { name: "Django", category: "Web & Backend", level: "Intermediate" },
    { name: "Firebase", category: "Web & Backend", level: "Intermediate" },

    // Frontend
    { name: "React", category: "Frontend", level: "Advanced" },
    { name: "Next.js", category: "Frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
    { name: "Framer Motion", category: "Frontend", level: "Intermediate" },
    { name: "Shadcn/ui", category: "Frontend", level: "Intermediate" },

    // Hardware & Embedded
    { name: "Seeed XIAO RP2350", category: "Hardware & Embedded", level: "Advanced" },
    { name: "ESP32 / ESP32-CAM", category: "Hardware & Embedded", level: "Advanced" },
    { name: "Raspberry Pi Pico / Pico W", category: "Hardware & Embedded", level: "Advanced" },
    { name: "LoRa (SX1278)", category: "Hardware & Embedded", level: "Advanced" },
    { name: "74HC165 / MPR121", category: "Hardware & Embedded", level: "Advanced" },
    { name: "I2C / SPI Protocols", category: "Hardware & Embedded", level: "Advanced" },
    { name: "Industrial PCB Diagnostics", category: "Hardware & Embedded", level: "Intermediate" },
    { name: "Servo Drives & Inverters", category: "Hardware & Embedded", level: "Intermediate" },
    { name: "Micro-soldering & Bench Gear", category: "Hardware & Embedded", level: "Advanced" },

    // Infrastructure & DevOps
    { name: "Linux (Fedora, Debian)", category: "Infrastructure & DevOps", level: "Advanced" },
    { name: "Proxmox VE", category: "Infrastructure & DevOps", level: "Advanced" },
    { name: "Docker", category: "Infrastructure & DevOps", level: "Intermediate" },
    { name: "Playwright", category: "Infrastructure & DevOps", level: "Advanced" },
    { name: "Git & GitHub", category: "Infrastructure & DevOps", level: "Advanced" },
    { name: "Systemd & SSH", category: "Infrastructure & DevOps", level: "Advanced" },
    { name: "AWS (S3 / SDK)", category: "Infrastructure & DevOps", level: "Intermediate" },
    { name: "Vercel", category: "Infrastructure & DevOps", level: "Advanced" },
    { name: "Jira / Agile", category: "Infrastructure & DevOps", level: "Advanced" }
];

export const skillCategories = [
    "Programming Languages",
    "AI & Agents",
    "Web & Backend",
    "Frontend",
    "Hardware & Embedded",
    "Infrastructure & DevOps"
];
