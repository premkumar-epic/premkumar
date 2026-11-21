#!/usr/bin/env python3
"""
Generate professional, ATS-optimized resume matching Prem Kumar V's background:
Tailored for Tier-1 Enterprise & California Tech referral applications:
Cisco, Walmart Global Tech, Intuit, LinkedIn, Wells Fargo, Cambium Networks.
Highlights: Software Engineering, Full Stack Web Architecture, AI & Agent Systems,
Distributed Automation, Embedded Hardware/Diagnostics, and First Class with Distinction B.E.
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

def generate_pdf(output_paths):
    margin = 32
    doc = SimpleDocTemplate(
        output_paths[0],
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    primary_color = colors.HexColor("#1e40af")
    dark_color = colors.HexColor("#0f172a")
    gray_color = colors.HexColor("#334155")
    light_line = colors.HexColor("#cbd5e1")

    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=dark_color,
        alignment=TA_CENTER
    )

    tagline_style = ParagraphStyle(
        'DocTagline',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=primary_color,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=gray_color,
        alignment=TA_CENTER
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=primary_color,
        spaceBefore=5,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_color
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_color,
        leftIndent=12,
        firstLineIndent=-8,
        spaceBefore=1,
        spaceAfter=1
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=dark_color
    )

    item_date_style = ParagraphStyle(
        'ItemDate',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=primary_color,
        alignment=TA_RIGHT
    )

    story = []

    # 1. Header
    story.append(Paragraph("Prem Kumar V", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Software Engineer | Full Stack &amp; AI Systems Developer | Creator of BrowseMCP", tagline_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("premkumar.dev25@gmail.com &nbsp;|&nbsp; +91 9986324074 &nbsp;|&nbsp; https://premkumar.pro &nbsp;|&nbsp; linkedin.com/in/premkumar-dev25 &nbsp;|&nbsp; github.com/premkumar-epic &nbsp;|&nbsp; Bangalore, India", contact_style))
    story.append(Spacer(1, 3))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=1, color=light_line, spaceBefore=1, spaceAfter=3))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    story.append(Paragraph(
        "Results-driven Software Engineer and AI/ML engineering graduate (<b>First Class with Distinction, 73.91%</b>) with demonstrated experience building scalable web architectures, local AI infrastructure, and distributed automation systems. "
        "Creator of <b>BrowseMCP</b>, an open-source Model Context Protocol server enabling AI agents to automate browser workflows with 90% token reduction via accessibility-tree parsing. "
        "Skilled in architecting typed RESTful backends (Node.js, Express, PostgreSQL, Prisma), optimizing real-time AI pipelines (faster-whisper, CTranslate2, BART, spaCy), and programming embedded hardware firmware (C++, ESP32, LoRa, RP2350). "
        "Proven engineering track record across software development internships at Netpy Technologies and SAP Lab India, complemented by industrial hardware diagnostics. Seeking a Software Engineer / Associate SDE role.",
        body_style
    ))
    story.append(Spacer(1, 2))

    # 3. Technical Skills
    add_section_header("Technical Skills")
    skills_data = [
        [Paragraph("<b>Core Languages:</b>", body_style), Paragraph("Python, TypeScript, JavaScript, C++, C, SQL, Bash, MicroPython", body_style)],
        [Paragraph("<b>Backend &amp; Cloud:</b>", body_style), Paragraph("Node.js, Express.js, FastAPI, Flask, Django, PostgreSQL, Prisma ORM, Supabase, MongoDB, SQLite, AWS (S3), Docker, Linux", body_style)],
        [Paragraph("<b>Frontend &amp; Web:</b>", body_style), Paragraph("React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3, State Management, Client-Side Cryptography", body_style)],
        [Paragraph("<b>AI &amp; Agent Systems:</b>", body_style), Paragraph("Model Context Protocol (MCP), LLM Tooling, RAG Pipelines, faster-whisper, CTranslate2, BART, spaCy, PyTorch, OpenCV", body_style)],
        [Paragraph("<b>Systems &amp; Automation:</b>", body_style), Paragraph("Playwright Automation, Git/GitHub, CI/CD, Proxmox VE, I2C/SPI Protocols, Seeed RP2350, ESP32, LoRa (SX1278)", body_style)],
    ]
    t_sk = Table(skills_data, colWidths=[120, 428])
    t_sk.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_sk)
    story.append(Spacer(1, 2))

    # 4. Featured Engineering Projects
    add_section_header("Featured Engineering Projects")

    def add_pdf_project(title_html, date_text, bullets):
        t = Table([[Paragraph(title_html, item_title_style), Paragraph(date_text, item_date_style)]], colWidths=[385, 163])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1)
        ]))
        story.append(t)
        for b in bullets:
            story.append(Paragraph("• " + b, bullet_style))
        story.append(Spacer(1, 2))

    # BrowseMCP
    add_pdf_project(
        "<b>BrowseMCP</b> (Open-Source AI Agent Automation Protocol) — <i>Python, TypeScript, Playwright, MCP</i>",
        "github.com/premkumar-epic/browsermcp",
        [
            "Architected an open-source Model Context Protocol (MCP) server providing autonomous AI agents reliable browser execution via Playwright.",
            "Engineered an accessibility-tree DOM snapshot parser (~80 tokens/step), reducing agent prompt token consumption by up to 90% vs vision models.",
            "Shipped 27 production-ready MCP tools (click, type, navigate, screenshot, inspect), session persistence, and automated action recording."
        ]
    )

    # AI Meeting Assistant
    add_pdf_project(
        "<b>AI-Powered Meeting Assistant</b> (Local-First NLP Engine) — <i>faster-whisper, BART, spaCy, FastAPI, React</i>",
        "github.com/premkumar-epic/AI-Powered-Meeting_Assistant",
        [
            "Developed enterprise-grade, privacy-first meeting intelligence engine running 100% locally on CPU without external API dependencies or data leakage.",
            "Integrated faster-whisper with CTranslate2 quantization (achieving 4x–8x inference acceleration on CPU), hierarchical BART summarization, and spaCy NER.",
            "Built asynchronous FastAPI endpoints, React dashboard, automated integration test suite with 90% code coverage, and published IEEE report."
        ]
    )

    # M2i-LMS
    add_pdf_project(
        "<b>M2i-LMS</b> (Enterprise Learning Platform) — <i>Node.js, Express, TypeScript, PostgreSQL, Prisma ORM</i>",
        "Enterprise Learning Platform",
        [
            "Engineered core backend architectural modules for NetPy's Smart LMS, serving institutional cohorts with automated AI quiz synthesis.",
            "Modeled normalized relational schemas with PostgreSQL &amp; Prisma ORM, implemented typed REST APIs, and authored 22 system architecture specifications."
        ]
    )

    # IVK Garments ERP
    add_pdf_project(
        "<b>IVK Garments ERP &amp; Financial Ledger Engine</b> — <i>Node.js, Supabase/PostgreSQL, React, PDF Generation</i>",
        "Production Garment ERP",
        [
            "Developed end-to-end production ERP system for garment manufacturing: automated GST-compliant PDF invoicing, batch costing, and dispatch tracking.",
            "Implemented Row Level Security (RLS) on PostgreSQL and engineered transaction audit logging matching factory production batches against export dispatches."
        ]
    )

    # Greenhouse LoRa IoT & RetroCam
    add_pdf_project(
        "<b>Greenhouse LoRa IoT &amp; RetroCam</b> (Distributed Embedded Systems) — <i>C++, ESP32, LoRa (SX1278), Pico W</i>",
        "Distributed IoT &amp; Hardware",
        [
            "Greenhouse IoT: Designed dual-layer telemetry network linking field sensors (ESP32 deep sleep) via 433MHz LoRa to an autonomous Pico W relay controller.",
            "RetroCam: Programmed modular C++ firmware for ESP32-CAM with live viewfinder, SPI SD photo capture, and single-pin 4-button resistor ladder ADC."
        ]
    )

    # Hermes Knowledge Pipeline
    add_pdf_project(
        "<b>Hermes Knowledge Pipeline &amp; Homelab</b> — <i>Python, SQLite, Obsidian, Proxmox VE, Ollama</i>",
        "AI Archiver &amp; Homelab",
        [
            "Built privacy-centric AI conversation archiver ingesting, deduplicating, and vector-indexing multi-model chats into SQLite and Obsidian knowledge base.",
            "Configured Proxmox VE virtualization server running automated systemd services, local Ollama LLM inference endpoints, and automated SSL lifecycle."
        ]
    )

    # 5. Professional Experience
    add_section_header("Professional Experience")

    def add_pdf_exp(title_html, date_text, bullets):
        t = Table([[Paragraph(title_html, item_title_style), Paragraph(date_text, item_date_style)]], colWidths=[360, 188])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1)
        ]))
        story.append(t)
        for b in bullets:
            story.append(Paragraph("• " + b, bullet_style))
        story.append(Spacer(1, 2))

    # Electronics Repair Technician & Garment Operations
    add_pdf_exp(
        "<b>Electronics Repair Technician &amp; Garment Operations</b> · <i>IVK Garments &amp; Industrial Operations</i>",
        "Bangalore, India · Sep 2026 – Present",
        [
            "Perform component-level troubleshooting, repair, and bench testing of industrial sewing machine electronic control units, servo drives, and inverter PCBs.",
            "Conduct board-level fault isolation using multimeters, oscilloscopes, and regulated soldering stations, replacing power MOSFETs, optocouplers, and power rails.",
            "Oversee factory batch costing, shipment dispatch tracking, and financial ledger reconciliation between IVK Garments and Afro Asia Exports."
        ]
    )

    # NetPy Technologies
    add_pdf_exp(
        "<b>Technical Intern (Software Engineering)</b> · <i>NetPy Technologies</i>",
        "Bangalore, India · Oct 2025 – Jun 2026",
        [
            "Built core software modules for <b>M2i LMS</b>, implementing automated video-to-quiz generation pipelines and structured student performance tracking.",
            "Designed relational database schemas in PostgreSQL with Prisma ORM, implemented typed RESTful APIs in Express/TypeScript, and authored 22 architectural modules.",
            "Managed technical system administration, Git branching workflows, and agile sprint deliverables using Jira."
        ]
    )

    # SAP Lab India
    add_pdf_exp(
        "<b>Technical Intern</b> · <i>SAP Lab India (via Edunet Foundation)</i>",
        "Bangalore, India · Sep 2025 – Jun 2026",
        [
            "Completed intensive technical training in AI/ML, Cloud Computing, and Computer Vision through SAP India's flagship CSR Code Unnati program.",
            "Worked with SAP Business One (B1P) and ABAP platforms to support enterprise business workflows and analytical dashboards.",
            "Engaged in institutional development programs and earned international certification credentials in SAP ABAP and Enterprise Analytics."
        ]
    )

    # Zetpeak
    add_pdf_exp(
        "<b>Assistant Manager</b> · <i>Zetpeak</i>",
        "Bangalore, India · Mar 2023 – Jan 2025",
        [
            "Managed AICTE internship cohorts: structured technical deliverables, tracked student milestones, and ensured timely technical project completions.",
            "Directed a cross-functional team of 5 developers building institutional web portals and applications using React, Node.js, and WordPress.",
            "Oversaw technical audiovisual infrastructure, streaming pipelines, and web portals for large-scale institutional conferences and regional fest events."
        ]
    )

    # 6. Education
    add_section_header("Education")
    edu_row = [
        [Paragraph("<b>Bachelor of Engineering (B.E.) · Artificial Intelligence &amp; Machine Learning</b>", item_title_style),
         Paragraph("2022 – 2026 (Graduated — July 2026)", item_date_style)]
    ]
    t_edu = Table(edu_row, colWidths=[340, 208])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1)
    ]))
    story.append(t_edu)
    story.append(Paragraph("SEA College Of Engineering &amp; Technology, Bangalore (Affiliated with Visvesvaraya Technological University - VTU)", body_style))
    story.append(Paragraph("CGPA: <b>7.39 / 10.00</b> (<b>73.91%</b>) &nbsp;|&nbsp; <b>First Class with Distinction</b> &nbsp;|&nbsp; 161/161 Credits Earned", body_style))
    story.append(Paragraph("Senior Year SGPA: Sem 7 — <b>8.00</b> &nbsp;|&nbsp; Sem 8 — <b>9.63</b> (Senior Year Average: <b>8.65</b>)", body_style))
    story.append(Paragraph("Academic Highlights: 100/100 Generative AI Lab &nbsp;·&nbsp; 196/200 (98%) Major Project Phase-II &nbsp;·&nbsp; 188/200 (94%) Industry Internship &nbsp;·&nbsp; 100 AICTE Activity Points", body_style))
    story.append(Spacer(1, 2))

    # 7. Leadership & Honors
    add_section_header("Leadership &amp; Honors")
    story.append(Paragraph("• <b>First Class with Distinction (FCD):</b> Graduated with 73.91% under VTU 2022 scheme, clearing all 161 credits.", bullet_style))
    story.append(Paragraph("• <b>Capstone &amp; Internship Excellence:</b> Perfect 10.0 grade points in Major Project (196/200) and Industry Internship (188/200).", bullet_style))
    story.append(Paragraph("• <b>Assistant Head of Cyber Security &amp; Coding Club:</b> Spearheaded campus coding hackathons, technical workshops, and developer meetups.", bullet_style))
    story.append(Paragraph("• <b>Organizer · SEA Carnival College Fest:</b> Led technical and audiovisual infrastructure management for the annual college fest.", bullet_style))

    doc.build(story)

    # Copy to all output paths
    for p in output_paths[1:]:
        with open(output_paths[0], 'rb') as src, open(p, 'wb') as dst:
            dst.write(src.read())

def generate_docx(output_paths):
    doc = docx.Document()

    for section in doc.sections:
        section.top_margin = Inches(0.4)
        section.bottom_margin = Inches(0.4)
        section.left_margin = Inches(0.45)
        section.right_margin = Inches(0.45)

    primary_hex = RGBColor(30, 64, 175)
    dark_hex = RGBColor(15, 23, 42)
    gray_hex = RGBColor(71, 85, 105)

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_name = p_title.add_run("Prem Kumar V\n")
    r_name.font.name = "Arial"
    r_name.font.size = Pt(19)
    r_name.font.bold = True
    r_name.font.color.rgb = dark_hex

    r_tag = p_title.add_run("Software Engineer | Full Stack & AI Systems Developer | Creator of BrowseMCP\n")
    r_tag.font.name = "Arial"
    r_tag.font.size = Pt(9.5)
    r_tag.font.bold = True
    r_tag.font.color.rgb = primary_hex

    r_con = p_title.add_run("premkumar.dev25@gmail.com  |  +91 9986324074  |  https://premkumar.pro\nlinkedin.com/in/premkumar-dev25  |  github.com/premkumar-epic  |  Bangalore, India")
    r_con.font.name = "Arial"
    r_con.font.size = Pt(8.5)
    r_con.font.color.rgb = gray_hex

    def add_docx_heading(title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(7)
        p.paragraph_format.space_after = Pt(2)
        run = p.add_run(title)
        run.font.name = "Arial"
        run.font.size = Pt(10.5)
        run.font.bold = True
        run.font.color.rgb = primary_hex

    def add_bullet(text):
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1)
        r = bp.add_run(text)
        r.font.name = "Arial"
        r.font.size = Pt(9)

    # Professional Summary
    add_docx_heading("Professional Summary")
    p_sum = doc.add_paragraph()
    p_sum.paragraph_format.space_before = Pt(1)
    p_sum.paragraph_format.space_after = Pt(2)
    r_sum = p_sum.add_run(
        "Results-driven Software Engineer and AI/ML engineering graduate (First Class with Distinction, 73.91%) with demonstrated experience building scalable web architectures, local AI infrastructure, and distributed automation systems. "
        "Creator of BrowseMCP, an open-source Model Context Protocol server enabling AI agents to automate browser workflows with 90% token reduction via accessibility-tree parsing. "
        "Skilled in architecting typed RESTful backends (Node.js, Express, PostgreSQL, Prisma), optimizing real-time AI pipelines (faster-whisper, CTranslate2, BART, spaCy), and programming embedded hardware firmware (C++, ESP32, LoRa, RP2350). "
        "Proven engineering track record across software development internships at Netpy Technologies and SAP Lab India, complemented by industrial hardware diagnostics. Seeking a Software Engineer / Associate SDE role."
    )
    r_sum.font.name = "Arial"
    r_sum.font.size = Pt(9)

    # Technical Skills
    add_docx_heading("Technical Skills")
    skills = [
        ("Core Languages:", "Python, TypeScript, JavaScript, C++, C, SQL, Bash, MicroPython"),
        ("Backend & Cloud:", "Node.js, Express.js, FastAPI, Flask, Django, PostgreSQL, Prisma ORM, Supabase, MongoDB, SQLite, AWS (S3), Docker, Linux"),
        ("Frontend & Web:", "React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3, State Management, Client-Side Cryptography"),
        ("AI & Agent Systems:", "Model Context Protocol (MCP), LLM Tooling, RAG Pipelines, faster-whisper, CTranslate2, BART, spaCy, PyTorch, OpenCV"),
        ("Systems & Automation:", "Playwright Automation, Git/GitHub, CI/CD, Proxmox VE, I2C/SPI Protocols, Seeed RP2350, ESP32, LoRa (SX1278)")
    ]
    for category, items in skills:
        p_sk = doc.add_paragraph()
        p_sk.paragraph_format.space_before = Pt(0)
        p_sk.paragraph_format.space_after = Pt(1)
        rcat = p_sk.add_run(f"{category} ")
        rcat.bold = True
        rcat.font.name = "Arial"
        rcat.font.size = Pt(9)
        rit = p_sk.add_run(items)
        rit.font.name = "Arial"
        rit.font.size = Pt(9)

    # Projects
    add_docx_heading("Featured Engineering Projects")

    def add_proj(name, stack, bullets):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(3)
        p.paragraph_format.space_after = Pt(1)
        rn = p.add_run(f"{name} — ")
        rn.bold = True
        rn.font.name = "Arial"
        rn.font.size = Pt(9.5)
        rs = p.add_run(stack)
        rs.italic = True
        rs.font.name = "Arial"
        rs.font.size = Pt(8.5)
        rs.font.color.rgb = gray_hex
        for b in bullets:
            add_bullet(b)

    add_proj(
        "BrowseMCP (Open-Source AI Agent Automation Protocol)",
        "Python, TypeScript, Playwright, MCP (github.com/premkumar-epic/browsermcp)",
        [
            "Architected an open-source Model Context Protocol (MCP) server providing autonomous AI agents reliable browser execution via Playwright.",
            "Engineered an accessibility-tree DOM snapshot parser (~80 tokens/step), reducing agent prompt token consumption by up to 90% vs vision models.",
            "Shipped 27 production-ready MCP tools (click, type, navigate, screenshot, inspect), session persistence, and automated action recording."
        ]
    )

    add_proj(
        "AI-Powered Meeting Assistant (Local-First NLP Engine)",
        "faster-whisper, BART, spaCy, FastAPI, React (github.com/premkumar-epic/AI-Powered-Meeting_Assistant)",
        [
            "Developed enterprise-grade, privacy-first meeting intelligence engine running 100% locally on CPU without external API dependencies or data leakage.",
            "Integrated faster-whisper with CTranslate2 quantization (achieving 4x–8x inference acceleration on CPU), hierarchical BART summarization, and spaCy NER.",
            "Built asynchronous FastAPI endpoints, React dashboard, automated integration test suite with 90% code coverage, and published IEEE report."
        ]
    )

    add_proj(
        "M2i-LMS (Enterprise Learning Platform)",
        "Node.js, Express, TypeScript, PostgreSQL, Prisma ORM",
        [
            "Engineered core backend architectural modules for NetPy's Smart LMS, serving institutional cohorts with automated AI quiz synthesis.",
            "Modeled normalized relational schemas with PostgreSQL & Prisma ORM, implemented typed REST APIs, and authored 22 system architecture specifications."
        ]
    )

    add_proj(
        "IVK Garments ERP & Financial Ledger Engine",
        "Node.js, Supabase/PostgreSQL, React, PDF Generation",
        [
            "Developed end-to-end production ERP system for garment manufacturing: automated GST-compliant PDF invoicing, batch costing, and dispatch tracking.",
            "Implemented Row Level Security (RLS) on PostgreSQL and engineered transaction audit logging matching factory production batches against export dispatches."
        ]
    )

    add_proj(
        "Greenhouse LoRa IoT & RetroCam (Distributed Embedded Systems)",
        "C++, ESP32, LoRa (SX1278), Pico W",
        [
            "Greenhouse IoT: Designed dual-layer telemetry network linking field sensors (ESP32 deep sleep) via 433MHz LoRa to an autonomous Pico W relay controller.",
            "RetroCam: Programmed modular C++ firmware for ESP32-CAM with live viewfinder, SPI SD photo capture, and single-pin 4-button resistor ladder ADC."
        ]
    )

    add_proj(
        "Hermes Knowledge Pipeline & Homelab",
        "Python, SQLite, Obsidian, Proxmox VE, Ollama",
        [
            "Built privacy-centric AI conversation archiver ingesting, deduplicating, and vector-indexing multi-model chats into SQLite and Obsidian knowledge base.",
            "Configured Proxmox VE virtualization server running automated systemd services, local Ollama LLM inference endpoints, and automated SSL lifecycle."
        ]
    )

    # Professional Experience
    add_docx_heading("Professional Experience")

    def add_exp(comp_role, date_loc, bullets):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(3)
        p.paragraph_format.space_after = Pt(1)
        rc = p.add_run(comp_role)
        rc.bold = True
        rc.font.name = "Arial"
        rc.font.size = Pt(9.5)
        rd = p.add_run(f"  |  {date_loc}")
        rd.font.name = "Arial"
        rd.font.size = Pt(8.5)
        rd.font.color.rgb = gray_hex
        for b in bullets:
            add_bullet(b)

    add_exp(
        "Electronics Repair Technician & Garment Operations · IVK Garments & Industrial Operations",
        "Bangalore, India · Sep 2026 – Present",
        [
            "Perform component-level troubleshooting, repair, and bench testing of industrial sewing machine electronic control units, servo drives, and inverter PCBs.",
            "Conduct board-level fault isolation using multimeters, oscilloscopes, and regulated soldering stations, replacing power MOSFETs, optocouplers, and power rails.",
            "Oversee factory batch costing, shipment dispatch tracking, and financial ledger reconciliation between IVK Garments and Afro Asia Exports."
        ]
    )

    add_exp(
        "Technical Intern (Software Engineering) · NetPy Technologies",
        "Bangalore, India · Oct 2025 – Jun 2026",
        [
            "Built core software modules for M2i LMS, implementing automated video-to-quiz generation pipelines and structured student performance tracking.",
            "Designed relational database schemas in PostgreSQL with Prisma ORM, implemented typed RESTful APIs in Express/TypeScript, and authored 22 architectural modules.",
            "Managed technical system administration, Git branching workflows, and agile sprint deliverables using Jira."
        ]
    )

    add_exp(
        "Technical Intern · SAP Lab India (via Edunet Foundation)",
        "Bangalore, India · Sep 2025 – Jun 2026",
        [
            "Completed intensive technical training in AI/ML, Cloud Computing, and Computer Vision through SAP India's flagship CSR Code Unnati program.",
            "Worked with SAP Business One (B1P) and ABAP platforms to support enterprise business workflows and analytical dashboards.",
            "Engaged in institutional development programs and earned international certification credentials in SAP ABAP and Enterprise Analytics."
        ]
    )

    add_exp(
        "Assistant Manager · Zetpeak",
        "Bangalore, India · Mar 2023 – Jan 2025",
        [
            "Managed AICTE internship cohorts: structured technical deliverables, tracked student milestones, and ensured timely technical project completions.",
            "Directed a cross-functional team of 5 developers building institutional web portals and applications using React, Node.js, and WordPress.",
            "Oversaw technical audiovisual infrastructure, streaming pipelines, and web portals for large-scale institutional conferences and regional fest events."
        ]
    )

    # Education
    add_docx_heading("Education")
    p_edu = doc.add_paragraph()
    p_edu.paragraph_format.space_before = Pt(2)
    p_edu.paragraph_format.space_after = Pt(1)
    re1 = p_edu.add_run("Bachelor of Engineering (B.E.) · Artificial Intelligence & Machine Learning  |  2022 – 2026 (Graduated — July 2026)\n")
    re1.bold = True
    re1.font.name = "Arial"
    re1.font.size = Pt(9.5)
    re2 = p_edu.add_run("SEA College Of Engineering & Technology, Bangalore (Affiliated with Visvesvaraya Technological University - VTU)\n")
    re2.font.name = "Arial"
    re2.font.size = Pt(9)
    re3 = p_edu.add_run("CGPA: 7.39 / 10.00 (73.91%)  |  First Class with Distinction  |  161/161 Credits Earned\n")
    re3.font.name = "Arial"
    re3.font.size = Pt(9)
    re3.bold = True
    re4 = p_edu.add_run("Senior Year SGPA: Sem 7 — 8.00  |  Sem 8 — 9.63 (Senior Year Avg: 8.65)\nAcademic Highlights: 100/100 Generative AI Lab · 196/200 (98%) Major Project · 188/200 (94%) Industry Internship · 100 AICTE Activity Points")
    re4.font.name = "Arial"
    re4.font.size = Pt(8.5)

    # Leadership & Honors
    add_docx_heading("Leadership & Honors")
    add_bullet("First Class with Distinction (FCD): Graduated with 73.91% under VTU 2022 scheme, clearing all 161 credits.")
    add_bullet("Capstone & Internship Excellence: Perfect 10.0 grade points in Major Project (196/200) and Industry Internship (188/200).")
    add_bullet("Assistant Head of Cyber Security & Coding Club: Spearheaded campus coding hackathons, technical workshops, and developer meetups.")
    add_bullet("Organizer · SEA Carnival College Fest: Led technical and audiovisual infrastructure management for the annual college fest.")

    doc.save(output_paths[0])
    for p in output_paths[1:]:
        with open(output_paths[0], 'rb') as src, open(p, 'wb') as dst:
            dst.write(src.read())

if __name__ == "__main__":
    pdf_targets = [
        "/home/premkumar/PROJECTS/premkumar/premkumar-portfolio/public/resume.pdf",
        "/home/premkumar/PROJECTS/premkumar/resume.pdf",
        "/home/premkumar/Downloads/PremKumar_Resume.pdf",
        "/home/premkumar/.gemini/antigravity-cli/brain/d0e2c4fb-3f5b-43f1-9bce-1663baf2ba8b/PremKumar_Resume.pdf"
    ]
    docx_targets = [
        "/home/premkumar/PROJECTS/premkumar/premkumar-portfolio/public/resume.docx",
        "/home/premkumar/PROJECTS/premkumar/resume.docx",
        "/home/premkumar/.gemini/antigravity-cli/brain/d0e2c4fb-3f5b-43f1-9bce-1663baf2ba8b/PremKumar_Resume.docx"
    ]
    generate_pdf(pdf_targets)
    print("PDF generated successfully at:", pdf_targets)
    generate_docx(docx_targets)
    print("DOCX generated successfully at:", docx_targets)
