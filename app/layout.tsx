import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // faster text render
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ================= SEO METADATA =================

export const metadata: Metadata = {
  title: {
    default: "CodeGeniusDev — Full Stack Web Developer",
    template: "%s | Abdullah ABbad",
  },
  description:
    "I'm Abdullah Abbad and I'm a full-stack web developer specializing in modern, fast, and user-friendly websites. Expert in React, Next.js, Tailwind CSS, UI/UX design, and scalable web applications.",
  keywords: [
    "Abdullah Abbad",
    "portfolio",
    "CodeGeniusDev",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "UI UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Pakistan Web Developer",
  ],
  authors: [{ name: "Abdullah Abbad" }],
  creator: "Abdullah Abbad",
  openGraph: {
    title: "CodeGeniusDev — Full Stack Web Developer",
    description:
      "Portfolio of Abdullah Abbad — building fast, modern, and scalable web applications with React, Next.js, and clean UI/UX.",
    siteName: "CodeGeniusDev Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeGeniusDev — Full Stack Web Developer",
    description:
      "Explore the portfolio of Abdullah Abbad, a full-stack developer creating high-performance and beautifully designed web apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ================= ROOT LAYOUT =================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
