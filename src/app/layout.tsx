import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProfileSidebar } from "@/widgets/ProfileSidebar";
import { Navigation } from "@/shared/ui";
import { Analytics } from "@vercel/analytics/react";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: ["400"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shstr",
  description: "Full stack developer and solo-founder!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden md:h-screen md:flex-row">
          <div className="hidden md:block w-full absolute top-25 z-50 left-0 border-b-1 border-separator"/>
          <div className="hidden md:block w-full absolute bottom-25 z-50 left-0 border-b-1 border-separator"/>
          {/* Left Sidebar - Static */}
          <aside className="w-full relative border-solid px-6 pt-6 md:w-[35%] md:min-w-[400px] md:max-w-[500px] md:pl-20 md:pt-0">
            <ProfileSidebar />
          </aside>

          {/* Right Content - Dynamic */}
          <main className="flex-1 overflow-auto bg-black md:mr-20 md:border-r-1 md:border-separator">
            <div className="min-h-screen">
              <Navigation />
              {children}
              <footer className="md:sticky bottom-0 h-16 md:h-25 bg-black z-49 text-center text-white text-sm py-4">
              </footer>
            </div>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
