# Portfolio Anurag 🚀

A modern, high-performance, and easily customizable portfolio engineered with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Pre-configured with full **custom domain compliance** (Privacy Policy, Terms of Service, Cookie Policy, Robots.txt, Dynamic Sitemap, and Security Headers).

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 🎨 How to Customize (Zero-Hassle Design & Content)

All content, skills, projects, and contact info are centrally managed in:
👉 [`src/config/site.ts`](file:///D:/anurag/programmer/main_project/portfolio-anurag/src/config/site.ts)

- **Change Your Name / Bio / Email**: Update `siteConfig.name`, `siteConfig.author`, `siteConfig.contactEmail`.
- **Add / Remove Skills**: Modify `siteConfig.skills`.
- **Add / Edit Projects**: Modify `siteConfig.projects`.
- **Add / Edit Services**: Modify `siteConfig.services`.
- **Customize Styling**: Global styles and colors can be tuned in `src/app/globals.css` and `tailwind.config.ts`.

---

## 🌐 Custom Domain & Policy Setup Guide

When you attach your custom domain (e.g. `anuragdev.com`):

### 1. Update Domain in Code or Environment
Set your domain in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```
or edit `siteConfig.siteUrl` in `src/config/site.ts`.

### 2. Auto-Configured Compliance & SEO
This repository automatically handles:
- **Privacy Policy**: Accessible at `/privacy` (required for Google verification, AdSense, payment processors, and GDPR).
- **Terms of Service**: Accessible at `/terms`.
- **Cookie Policy**: Accessible at `/cookies` with an interactive, compliant cookie consent banner.
- **Sitemap**: Generated dynamically at `/sitemap.xml`.
- **Robots Directives**: Configured at `/robots.txt`.
- **Canonical URLs & OpenGraph Tags**: Automatically update to point to your new domain.
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy in `next.config.mjs`.

### 3. DNS Configuration for Hosting Providers

#### **If deploying to Vercel (Recommended):**
1. Push this project to GitHub.
2. Import repository in [Vercel](https://vercel.com).
3. Go to **Settings > Domains**, type `yourdomain.com`.
4. At your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.), configure:
   - **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
   - **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`

---

## 📦 Build for Production

```bash
npm run build
npm run start
```
