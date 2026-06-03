<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/graduation-cap.svg" width="80" alt="Logo" />
  <h1>Next-Gen Learning Dashboard</h1>
  <p>A high-fidelity, highly animated student dashboard prototype built with Next.js App Router, Supabase, and Framer Motion.</p>

  <p>
    <a href="https://learning-dashboard-theta-nine.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
  </p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>
</div>

<br />

## 🌟 Overview

The **Next-Gen Learning Dashboard** is a premium educational platform interface designed to deliver a buttery-smooth user experience. Developed as part of a rigorous Frontend Intern Challenge, it demonstrates advanced architectural patterns in React, strict component modularity, and hardware-accelerated animations with zero layout shifts.

Live data is securely fetched from a PostgreSQL database using Server Components, offering an immediate Time-to-Interactive (TTI) and robust SEO benefits.

---

## 🎨 Features & UI/UX

*   **Bento Grid Architecture:** A modern, fully responsive dashboard layout that dynamically scales from mobile to ultrawide displays.
*   **Zero Layout Shift Animations:** Utilizing Framer Motion's `layoutId` and strict CSS `transform` physics to ensure hover states and entrance staggers never trigger browser repaints.
*   **Interactive Activity Matrix:** A GitHub-style contribution graph that visualizes learning streaks and user engagement dynamically.
*   **Hardware-Accelerated Physics:** Silky smooth spring animations for hovering, scaling, and state transitions across the application.
*   **Premium Glassmorphism:** Deep dark-mode aesthetics utilizing glowing neon gradients, translucent borders, and subtle background noise textures.

---

## 🏗️ Architecture & Component Split

This project embraces the **Next.js App Router** paradigm, strictly dividing responsibilities to maximize security and performance.

### 🖥️ Server Components (`src/app/`, `src/lib/data.js`)
*   **Secure Data Fetching:** Supabase database queries are executed purely on the server using `@supabase/ssr`. This guarantees that `NEXT_PUBLIC_SUPABASE_ANON_KEY` and connection strings are never exposed in the client bundle.
*   **Streaming & Suspense:** The main dashboard is wrapped in a `<Suspense>` boundary (`loading.js`), rendering a subtle pulsing skeleton UI instantly while the server awaits database resolution.

### 📱 Client Components (`src/components/`)
*   **Interactive UI:** Components requiring state (`useState`, `useEffect`), event listeners, or complex Framer Motion logic are isolated as `"use client"` components at the leaves of the render tree.
*   **Optimized Bundling:** By keeping client components small and specific (e.g., `Sidebar.jsx`, `CourseTile.jsx`), the overall JavaScript payload sent to the browser is minimized.

---

## 🚧 Challenges Faced & Solutions

1.  **Dynamic Rendering & Cookies:** 
    *   *Challenge:* The `@supabase/ssr` client utilizes `cookies()` to establish server-side sessions. Next.js 14+ automatically detects `cookies()` and attempts to force static generation at build time, resulting in a `DYNAMIC_SERVER_USAGE` build error.
    *   *Solution:* Explicitly opted out of static rendering on the dashboard route by exporting `const dynamic = 'force-dynamic'` in `page.js`, aligning with the requirement for live database fetching.
2.  **Maintaining Zero Layout Shifts:**
    *   *Challenge:* Implementing the requirement where cards elevate (`scale: 1.04`) and shift on hover without pushing neighboring grid items.
    *   *Solution:* Replaced traditional `width`/`height`/`margin` transitions with Framer Motion `transform` (scale, x, y) animations. Used `position: absolute` for border glows to decouple them from the document flow.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/uv05709/Learning-Dashboard.git
cd Learning-Dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Supabase Environment
Create a `.env.local` file in the root directory based on the `.env.example` template:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

<div align="center">
  <p>Built with ❤️ by Uttam Verma for the Next-Gen Learning Frontend Challenge.</p>
</div>