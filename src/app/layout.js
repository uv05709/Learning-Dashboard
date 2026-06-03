import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A highly animated, responsive, premium education platform dashboard built with Next.js, Framer Motion, and Supabase.",
};

import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div className="flex h-screen bg-transparent overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth pb-16 md:pb-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
