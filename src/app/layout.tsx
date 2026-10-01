import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartupIdentity from "@/components/StartupIdentity";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider, themeInitScript } from "@/lib/theme";

const display = Barlow_Condensed({
  variable: "--font-board",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Curri Architect — Independent Architecture Practice",
    template: "%s — Curri Architect",
  },
  description:
    "Curri Architect is an independent architecture practice in Prishtina designing residential, commercial and cultural spaces with honesty, proportion and light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.startup-identity { display: none !important; }`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll />
            <StartupIdentity />
            <a className="skip-link" href="#main-content">
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
