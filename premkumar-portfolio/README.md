# 🚀 Prem Kumar V - Portfolio

A modern, responsive portfolio website built with Next.js 16, showcasing my projects, experience, and skills in AI/ML and Full-Stack Development.

**🌐 Live Site:** [https://premkumar.pro](https://premkumar.pro)

---

## ✨ Features

- **Modern Design** - Clean, professional UI with smooth animations
- **Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode** - Full dark mode support with smooth transitions
- **Contact Form** - Integrated with EmailJS for direct messaging
- **Resume Download** - One-click PDF resume download
- **SEO Optimized** - Sitemap, robots.txt, and comprehensive meta tags
- **Fast Performance** - Static generation for optimal load times

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Deployment:** Vercel
- **Domain:** Hostinger DNS

---

## 📂 Project Structure

```
premkumar-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with profile
│   │   ├── About.tsx       # About me & education
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Experience.tsx  # Work experience
│   │   └── Contact.tsx     # Contact form
│   ├── ProjectCard.tsx     # Reusable project card
│   └── Providers.tsx       # Theme provider
├── data/
│   ├── personal.ts         # Personal information
│   ├── projects.ts         # Project data
│   ├── experience.ts       # Work experience data
│   └── skills.ts           # Skills data
└── public/
    ├── images/             # Images and assets
    └── resume.pdf          # Downloadable resume
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/premkumar-epic/premkumar.git
   cd premkumar/premkumar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

---

## 📧 EmailJS Setup

The contact form uses EmailJS for email delivery:

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail recommended)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Add them to `.env.local`

---

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with a custom domain from **Hostinger**.

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Set root directory to `premkumar-portfolio`
4. Add environment variables
5. Deploy!

### Custom Domain Setup

1. Add domain in Vercel (Settings → Domains)
2. Configure DNS records in Hostinger:
   - A Record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation (15-60 minutes)
4. SSL certificate auto-issued by Vercel

---

## 📊 Key Sections

### Hero Section
- Profile image with animations
- Stats showcase (12+ Projects, 2 Internships, 40+ Skills)
- "Available for Opportunities" badge
- Call-to-action buttons

### About Section
- Personal introduction
- Education details (SRMIST)
- Technical skills grid
- Resume download

### Projects Section
- Filterable project cards
- Live demo and GitHub links
- Technology tags
- Responsive grid layout

### Experience Section
- SAP Lab India (Current Intern)
- Netpy Startup
- Zetpeak
- Timeline with descriptions

### Contact Section
- EmailJS-powered contact form
- Email and location display
- Social media links
- "Buy Me a Coffee" support

---

## 🎨 Customization

### Update Personal Information

Edit `data/personal.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@gmail.com",
  // ... other details
}
```

### Add Projects

Edit `data/projects.ts`:
```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Description",
    // ... other fields
  }
]
```

### Modify Theme Colors

Edit `tailwind.config.ts` or `app/globals.css`

---

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Build Time:** ~4.4 seconds
- **All Routes:** Static (pre-rendered)
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic

---

## 🔒 Environment Variables

Required for production:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Prem Kumar V**

- Website: [premkumar.pro](https://premkumar.pro)
- Email: premkumar.dev25@gmail.com
- GitHub: [@premkumar-epic](https://github.com/premkumar-epic)
- LinkedIn: [Prem Kumar V](https://linkedin.com/in/premkumar)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- EmailJS for contact form functionality
- Lucide for beautiful icons
- Framer Motion for smooth animations

---

**⭐ If you like this portfolio, please give it a star!**
