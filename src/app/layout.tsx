import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mathias Ledesma - Frontend Engineer | Professional Portfolio",
    template: "%s | Mathias Ledesma Portfolio"
  },
  description: "Professional portfolio of Mathias Anibal Ledesma - Frontend Engineer. 25+ automation projects, and AI-powered solutions. Available for internships.",
  keywords: [
    "Mathias Ledesma",
    "Full-stack Developer",
    "Python Developer",
    "AI Engineer",
    "Portfolio",
    "Software Developer",
    "Web Development",
    "Next.js",
    "React",
    "Automation",
    "LangChain",
    "Freelancer",
    "AI Chatbot",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "Web Scraping",
    "API Development"
  ],
  authors: [
    {
      name: "Mathias Ledesma",
      url: "https://portfolio.mathyled.tech/",
    },
  ],
  creator: "Mathias Ledesma",
  publisher: "Mathias Ledesma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.mathyled.tech/",
    title: "Mathias Ledesma - Frontend Engineer | Professional Portfolio",
    description: "Professional portfolio showcasing AI-powered projects, and full-stack development.",
    siteName: "Mathias Ledesma Portfolio",
    images: [
      {
        url: "https://portfolio.mathyled.tech/profile.png",
        width: 1200,
        height: 630,
        alt: "Mathias Ledesma - Professional Portfolio with AI Chatbot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Ledesma - Frontend Engineer",
    description: "Professional portfolio showcasing AI projects, and automation solutions.",
    creator: "@mathyled",
    site: "@mathyled",
    images: [{
      url: "https://portfolio.mathyled.tech/profile.png",
      alt: "Mathias Ledesma Professional Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://portfolio.mathyled.tech/",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://portfolio.mathyled.tech/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mathias Ledesma",
              "jobTitle": "Frontend Engineer",
              "url": "https://portfolio.mathyled.tech/",
              "image": "https://portfolio.mathyled.tech/profile.jpeg",
              "sameAs": [
                "https://github.com/mathyled",
                "https://linkedin.com/in/mathyled",
                "https://x.com/mathyled"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "SATI"
              },
              "knowsAbout": [
                "Python Development",
                "Java Development",
                "React Development",
                "AI Engineering",
                "Web Development",
                "Automation",
                "Full Stack Development"
              ],
              "description": "Frontend Engineer with expertise in building AI-powered solutions,and automation tools."
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}