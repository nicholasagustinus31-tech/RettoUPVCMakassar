# Retto uPVC Makassar Website

Modern, animated, SEO-ready company profile website for Retto uPVC Makassar built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/) with file-system routing for SEO-friendly pages
- [React 18](https://reactjs.org/) & [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- [Tailwind CSS](https://tailwindcss.com/) for styling and responsive layout
- [AOS](https://michalsnik.github.io/aos/) for scroll-triggered animations
- [EmailJS](https://www.emailjs.com/) & [reCAPTCHA](https://www.google.com/recaptcha/about/) for the contact form

## 📦 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the website locally.

## 🔑 Environment Variables

Create a `.env.local` file to store integration keys:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 🛠️ Available Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm start` – start production server
- `npm run lint` – run ESLint checks

## 📁 Project Structure

- `pages/` – application pages (Home, About, Products, Projects, Contact)
- `components/` – shared UI components (layout, header, footer, etc.)
- `data/` – structured data for products, projects, testimonials
- `public/` – static assets (favicon, og-image, sitemap, robots)
- `styles/` – Tailwind and global styles

## 📄 SEO Enhancements

- Meta title & description per page via `SEOHead`
- Sitemap and robots files under `public/`
- Open Graph and Twitter meta tags
- Semantic markup and accessible UI patterns

## 📬 Contact Form

Powered by EmailJS with Google reCAPTCHA v2. Update the environment variables to enable email delivery.
