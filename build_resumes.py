#!/usr/bin/env python3
"""
Generate professional, ATS-optimized resume matching Prem Kumar V's background:
Full Stack Web Developer | AI Engineer | Creator of BrowseMCP
Includes AI systems, M2i-LMS, IVK Garments ERP, embedded hardware/bench repair,
internships at NetPy & SAP Lab India, and VTU engineering graduation (First Class with Distinction).
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
        topMargin=28,
        bottomMargin=28
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
        spaceBefore=6,
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
    story.append(Paragraph("Full Stack Web Developer | AI Engineer | Creator of BrowseMCP", tagline_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("premkumar.dev25@gmail.com &nbsp;|&nbsp; +91 9986324074 &nbsp;|&nbsp; https://premkumar.pro &nbsp;|&nbsp; linkedin.com/in/premkumar-dev25 &nbsp;|&nbsp; github.com/premkumar-epic &nbsp;|&nbsp; Bangalore, India", contact_style))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=1, color=light_line, spaceBefore=1, spaceAfter=3))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    story.append(Paragraph(
        "AI/ML engineering graduate (First Class with Distinction, 73.91%) who architects practical software and hardware systems across Python, TypeScript, modern web stacks, and embedded microcontrollers. "
        "Creator of <b>BrowseMCP</b>, an open-source MCP browser automation tool enabling AI agents to control browsers with token-efficient accessibility trees. "
        "Experienced in developing enterprise full-stack platforms (Node.js, PostgreSQL, Prisma, React), local-first AI pipelines (faster-whisper, CTranslate2, BART, spaCy), and embedded firmware (RP2350, ESP32-CAM, LoRa). "
        "Proven track record across software engineering internships at Netpy Technologies and SAP Lab India, combined with hands-on industrial electronics repair and operations. Seeking a Python / AI Developer role.",
        body_style
    ))
    story.append(Spacer(1, 2))

    # 3. Technical Skills
    add_section_header("Skills")
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", body_style), Paragraph("Python, TypeScript, JavaScript, C++, C, MicroPython, CircuitPython, Embedded C, SQL, Bash", body_style)],
        [Paragraph("<b>AI &amp; Agent Systems:</b>", body_style), Paragraph("Model Context Protocol (MCP), RAG Pipelines, Gemini CLI, Claude Code, faster-whisper, CTranslate2, BART, spaCy, Ollama, PyTorch, OpenCV", body_style)],
        [Paragraph("<b>Web &amp; Backend:</b>", body_style), Paragraph("Node.js, Express.js, Next.js, React, FastAPI, Flask, Django, PostgreSQL, Prisma ORM, Supabase, MongoDB, SQLite, Tailwind CSS", body_style)],
        [Paragraph("<b>Hardware &amp; Embedded:</b>", body_style), Paragraph("Seeed XIAO RP2350, Raspberry Pi Pico/W, ESP32 / ESP32-CAM, LoRa (SX1278), 74HC165, MPR121, I2C/SPI, Industrial PCB Diagnostics", body_style)],
        [Paragraph("<b>Infrastructure &amp; DevOps:</b>", body_style), Paragraph("Linux (Fedora, Debian), Proxmox VE, Docker, Systemd, SSH, Git/GitHub, Playwright, AWS (S3), Vercel, Jira, CI/CD", body_style)],
    ]
    t_sk = Table(skills_data, colWidths=[130, 418])
    t_sk.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_sk)
    story.append(Spacer(1, 2))

    # 4. Featured Projects
    add_section_header("Projects")

    def add_pdf_project(title_html, date_text, bullets):
        t = Table([[Paragraph(title_html, item_title_style), Paragraph(date_text, item_date_style)]], colWidths=[380, 168])
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
        "<b>BrowseMCP</b> (Open Source) — <i>Python, TypeScript, Playwright, MCP, Gemini CLI</i>",
        "github.com/premkumar-epic/browsermcp",
        [
            "Built an open-source Gemini CLI extension and MCP server providing AI agents token-efficient browser automation via Playwright.",
            "Designed an accessibility-tree DOM snapshotting mechanism (~80 tokens/action step) reducing token overhead by ~90% vs screenshots.",
            "Shipped 27 MCP tools (click, type, navigate, screenshot, inspect), session state persistence, and automated user action flow recording."
        ]
    )

    # AI Meeting Assistant
    add_pdf_project(
        "<b>AI-Powered Meeting Assistant</b> — <i>faster-whisper, CTranslate2, BART, spaCy, FastAPI, React</i>",
        "github.com/premkumar-epic/AI-Powered-Meeting_Assistant",
        [
            "Engineered privacy-first meeting intelligence system executing 100% on CPU without third-party API dependencies or audio data leakage.",
            "Integrated faster-whisper (CTranslate2, 4x–8x inference speedup), recursive hierarchical BART text summarization, and spaCy NER task extraction.",
            "FastAPI backend, React dashboard, automated integration test suite with 90% coverage, and complete IEEE project documentation."
        ]
    )

    # M2i-LMS
    add_pdf_project(
        "<b>M2i-LMS</b> (Internship Flagship Project) — <i>Node.js, Express, TypeScript, PostgreSQL, Prisma</i>",
        "Enterprise Learning Platform",
        [
            "Designed core architectural components for NetPy's Smart LMS, featuring automated AI quiz generation from video curriculum content.",
            "Modeled relational PostgreSQL schemas with Prisma ORM, implemented typed REST endpoints, and authored 22 architectural documentation modules."
        ]
    )

    # IVK Garments ERP
    add_pdf_project(
        "<b>IVK Garments ERP &amp; Batch Ledger</b> — <i>Node.js, Supabase/PostgreSQL, React, PDF, GST</i>",
        "Production Garment ERP",
        [
            "Developed end-to-end production ERP system for garment manufacturing: automated GST-compliant PDF invoicing, batch cost analytics, and dispatch tracking.",
            "Built automated ledger reconciliation matching factory production runs against export dispatches with Row Level Security (RLS) on PostgreSQL."
        ]
    )

    # Custom 12-Key Macropad & Hardware Lab
    add_pdf_project(
        "<b>Custom 12-Key Macropad &amp; Hardware Lab</b> — <i>Seeed RP2350, CircuitPython, OLED, 74HC165, MPR121</i>",
        "Embedded Hardware",
        [
            "Built a 12-key programmable mechanical macropad with rotary encoders, OLED status display, 74HC165 shift register matrix, and MPR121 touch sensing.",
            "Fabricated benchtop lab equipment: variable power supply (ATX + ZK-5KX buck-boost + SW3518S charger) and smart T12/C245 PID soldering station."
        ]
    )

    # RetroCam & LoRa IoT
    add_pdf_project(
        "<b>RetroCam &amp; Greenhouse LoRa IoT</b> — <i>C++, ESP32-CAM, LoRa (SX1278), Raspberry Pi Pico W</i>",
        "IoT & Embedded Systems",
        [
            "RetroCam: C++ firmware for ESP32-CAM featuring live viewfinder, SD photo capture, on-device gallery, and single-pin 4-button resistor ladder.",
            "Greenhouse LoRa IoT: Dual-layer agricultural IoT network linking outdoor ESP32 sensors via 433MHz LoRa to an autonomous Pico W relay controller."
        ]
    )

    # Hermes Pipeline
    add_pdf_project(
        "<b>Hermes Pipeline &amp; Homelab</b> — <i>Python, SQLite, Obsidian, Proxmox VE, Ollama</i>",
        "AI Archiver & Homelab",
        [
            "Built privacy-centric AI conversation archiver ingesting and deduplicating multi-model chats (Gemini, Claude, ChatGPT) into local SQLite + Obsidian.",
            "Configured Proxmox VE homelab server with systemd automation, local Ollama LLM inference endpoints, and automated SSL certificate management."
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
            "Diagnose, repair, and test industrial sewing machine electronic control boxes, servo motor drives, and variable-frequency inverter PCBs alongside senior mentor.",
            "Conduct board-level fault isolation using MAS830L multimeter, oscilloscope, and regulated soldering stations, replacing faulty MOSFETs, optocouplers, and power rails.",
            "Oversee factory batch production costing, dispatch tracking, and financial ledger reconciliation between IVK Garments and Afro Asia Exports."
        ]
    )

    # NetPy Technologies
    add_pdf_exp(
        "<b>Technical Intern</b> · <i>NetPy Technologies</i>",
        "Bangalore, India · Oct 2025 – Jun 2026",
        [
            "Built core software components for <b>M2i LMS</b> (Smart Learning Management System), integrating automated AI quiz generation from video curriculum content.",
            "Designed relational PostgreSQL schemas with Prisma ORM, implemented typed REST endpoints in Express/TypeScript, and authored 22 architectural documentation modules.",
            "Managed technical system administration, Git workflows, and sprint deliverables using Jira in an agile startup environment."
        ]
    )

    # SAP Lab India
    add_pdf_exp(
        "<b>Technical Intern</b> · <i>SAP Lab India (via Edunet Foundation)</i>",
        "Bangalore, India · Sep 2025 – Jun 2026",
        [
            "Underwent advanced technical training in AI/ML, Cloud Computing, and Computer Vision through SAP India's flagship CSR Code Unnati program.",
            "Worked with SAP Business One (B1P) and ABAP platforms to support enterprise business workflows and data analytics.",
            "Engaged in institutional development programs and international certifications in SAP ABAP and Enterprise Analytics."
        ]
    )

    # Zetpeak
    add_pdf_exp(
        "<b>Assistant Manager</b> · <i>Zetpeak</i>",
        "Bangalore, India · Mar 2023 – Jan 2025",
        [
            "Managed AICTE internship cohorts: assigned student deliverables, tracked milestones, and ensured timely technical project completions.",
            "Directed a team of 5 developers building institutional web portals and applications using React, Node.js, and WordPress.",
            "Managed technical audiovisual infrastructure and portal operations for large-scale institutional conferences and regional fest events."
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
    story.append(Paragraph("• <b>Organizer · SEA Carnival College Fest:</b> Led the technical and audiovisual infrastructure management for the annual college fest.", bullet_style))

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

    r_tag = p_title.add_run("Full Stack Web Developer | AI Engineer | Creator of BrowseMCP\n")
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
        "AI/ML engineering graduate (First Class with Distinction, 73.91%) who architects practical software and hardware systems across Python, TypeScript, modern web stacks, and embedded microcontrollers. "
        "Creator of BrowseMCP, an open-source MCP browser automation tool enabling AI agents to control browsers with token-efficient accessibility trees. "
        "Experienced in developing enterprise full-stack platforms (Node.js, PostgreSQL, Prisma, React), local-first AI pipelines (faster-whisper, CTranslate2, BART, spaCy), and embedded firmware (RP2350, ESP32-CAM, LoRa). "
        "Proven track record across software engineering internships at Netpy Technologies and SAP Lab India, combined with hands-on industrial electronics repair and operations. Seeking a Python / AI Developer role."
    )
    r_sum.font.name = "Arial"
    r_sum.font.size = Pt(9)

    # Skills
    add_docx_heading("Skills")
    skills = [
        ("Programming Languages:", "Python, TypeScript, JavaScript, C++, C, MicroPython, CircuitPython, Embedded C, SQL, Bash"),
        ("AI & Agent Systems:", "Model Context Protocol (MCP), RAG Pipelines, Gemini CLI, Claude Code, faster-whisper, CTranslate2, BART, spaCy, Ollama, PyTorch, OpenCV"),
        ("Web & Backend:", "Node.js, Express.js, Next.js, React, FastAPI, Flask, Django, PostgreSQL, Prisma ORM, Supabase, MongoDB, SQLite, Tailwind CSS"),
        ("Hardware & Embedded:", "Seeed XIAO RP2350, Raspberry Pi Pico/W, ESP32 / ESP32-CAM, LoRa (SX1278), 74HC165, MPR121, I2C/SPI, Industrial PCB Diagnostics"),
        ("Infrastructure & DevOps:", "Linux (Fedora, Debian), Proxmox VE, Docker, Systemd, SSH, Git/GitHub, Playwright, AWS (S3), Vercel, Jira, CI/CD")
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
    add_docx_heading("Projects")

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
        "BrowseMCP (Open Source)",
        "Python, TypeScript, Playwright, MCP, Gemini CLI (github.com/premkumar-epic/browsermcp)",
        [
            "Built an open-source Gemini CLI extension and MCP server providing AI agents token-efficient browser automation via Playwright.",
            "Designed an accessibility-tree DOM snapshotting mechanism (~80 tokens/action step) reducing token overhead by ~90% vs screenshots.",
            "Shipped 27 MCP tools (click, type, navigate, screenshot, inspect), session state persistence, and automated user action flow recording."
        ]
    )

    add_proj(
        "AI-Powered Meeting Assistant",
        "faster-whisper, CTranslate2, BART, spaCy, FastAPI, React (github.com/premkumar-epic/AI-Powered-Meeting_Assistant)",
        [
            "Engineered privacy-first meeting intelligence system executing 100% on CPU without third-party API dependencies or audio data leakage.",
            "Integrated faster-whisper (CTranslate2, 4x–8x inference speedup), recursive hierarchical BART text summarization, and spaCy NER task extraction.",
            "FastAPI backend, React dashboard, automated integration test suite with 90% coverage, and complete IEEE project documentation."
        ]
    )

    add_proj(
        "M2i-LMS (Internship Flagship Project)",
        "Node.js, Express, TypeScript, PostgreSQL, Prisma",
        [
            "Designed core architectural components for NetPy's Smart LMS, featuring automated AI quiz generation from video curriculum content.",
            "Modeled relational PostgreSQL schemas with Prisma ORM, implemented typed REST endpoints, and authored 22 architectural documentation modules."
        ]
    )

    add_proj(
        "IVK Garments ERP & Batch Ledger",
        "Node.js, Supabase/PostgreSQL, React, PDF Generation, GST",
        [
            "Developed end-to-end production ERP system for garment manufacturing: automated GST-compliant PDF invoicing, batch cost analytics, and dispatch tracking.",
            "Built automated ledger reconciliation matching factory production runs against export dispatches with Row Level Security (RLS) on PostgreSQL."
        ]
    )

    add_proj(
        "Custom 12-Key Macropad & Hardware Lab",
        "Seeed RP2350, CircuitPython, OLED, 74HC165, MPR121",
        [
            "Built a 12-key programmable mechanical macropad with rotary encoders, OLED status display, 74HC165 shift register matrix, and MPR121 touch sensing.",
            "Fabricated benchtop lab equipment: variable power supply (ATX + ZK-5KX buck-boost + SW3518S charger) and smart T12/C245 PID soldering station."
        ]
    )

    add_proj(
        "RetroCam & Greenhouse LoRa IoT",
        "C++, ESP32-CAM, LoRa (SX1278), Raspberry Pi Pico W",
        [
            "RetroCam: C++ firmware for ESP32-CAM featuring live viewfinder, SD photo capture, on-device gallery, and single-pin 4-button resistor ladder.",
            "Greenhouse LoRa IoT: Dual-layer agricultural IoT network linking outdoor ESP32 sensors via 433MHz LoRa to an autonomous Pico W relay controller."
        ]
    )

    add_proj(
        "Hermes Pipeline & Homelab",
        "Python, SQLite, Obsidian, Proxmox VE, Ollama",
        [
            "Built privacy-centric AI conversation archiver ingesting and deduplicating multi-model chats (Gemini, Claude, ChatGPT) into local SQLite + Obsidian.",
            "Configured Proxmox VE homelab server with systemd automation, local Ollama LLM inference endpoints, and automated SSL certificate management."
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
            "Diagnose, repair, and test industrial sewing machine electronic control boxes, servo motor drives, and variable-frequency inverter PCBs alongside senior mentor.",
            "Conduct board-level fault isolation using MAS830L multimeter, oscilloscope, and regulated soldering stations, replacing faulty MOSFETs, optocouplers, and power rails.",
            "Oversee factory batch production costing, dispatch tracking, and financial ledger reconciliation between IVK Garments and Afro Asia Exports."
        ]
    )

    add_exp(
        "Technical Intern · NetPy Technologies",
        "Bangalore, India · Oct 2025 – Jun 2026",
        [
            "Built core software components for M2i LMS (Smart Learning Management System), integrating automated AI quiz generation from video curriculum content.",
            "Designed relational PostgreSQL schemas with Prisma ORM, implemented typed REST endpoints in Express/TypeScript, and authored 22 architectural documentation modules.",
            "Managed technical system administration, Git workflows, and sprint deliverables using Jira in an agile startup environment."
        ]
    )

    add_exp(
        "Technical Intern · SAP Lab India (via Edunet Foundation)",
        "Bangalore, India · Sep 2025 – Jun 2026",
        [
            "Underwent advanced technical training in AI/ML, Cloud Computing, and Computer Vision through SAP India's flagship CSR Code Unnati program.",
            "Worked with SAP Business One (B1P) and ABAP platforms to support enterprise business workflows and data analytics.",
            "Engaged in institutional development programs and international certifications in SAP ABAP and Enterprise Analytics."
        ]
    )

    add_exp(
        "Assistant Manager · Zetpeak",
        "Bangalore, India · Mar 2023 – Jan 2025",
        [
            "Managed AICTE internship cohorts: assigned student deliverables, tracked milestones, and ensured timely technical project completions.",
            "Directed a team of 5 developers building institutional web portals and applications using React, Node.js, and WordPress.",
            "Managed technical audiovisual infrastructure and portal operations for large-scale institutional conferences and regional fest events."
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
    add_bullet("Organizer · SEA Carnival College Fest: Led the technical and audiovisual infrastructure management for the annual college fest.")

    doc.save(output_paths[0])
    for p in output_paths[1:]:
        with open(output_paths[0], 'rb') as src, open(p, 'wb') as dst:
            dst.write(src.read())

if __name__ == "__main__":
    pdf_targets = [
        "/home/premkumar/PROJECTS/premkumar/premkumar-portfolio/public/resume.pdf",
        "/home/premkumar/PROJECTS/premkumar/resume.pdf",
        "/home/premkumar/Downloads/PremKumar_Resume.pdf"
    ]
    docx_targets = [
        "/home/premkumar/PROJECTS/premkumar/premkumar-portfolio/public/resume.docx",
        "/home/premkumar/PROJECTS/premkumar/resume.docx"
    ]
    generate_pdf(pdf_targets)
    print("PDF generated successfully at:", pdf_targets)
    generate_docx(docx_targets)
    print("DOCX generated successfully at:", docx_targets)
