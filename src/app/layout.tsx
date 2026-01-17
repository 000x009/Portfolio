import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProfileSidebar } from "@/widgets/ProfileSidebar";
import { Navigation } from "@/shared/ui";

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
        <div className="flex h-screen overflow-hidden">
          <div className="w-full absolute top-25 z-50 left-0 border-b-1 border-separator"/>
          <div className="w-full absolute bottom-25 z-50 left-0 border-b-1 border-separator"/>
          {/* Left Sidebar - Static */}
          <aside className="w-[35%] min-w-[400px] max-w-[500px] pl-20 relative">
            <ProfileSidebar />
          </aside>

          {/* Right Content - Dynamic */}
          <main className="flex-1 overflow-auto bg-black mr-20 border-r-1 border-separator">
            <div className="min-h-screen">
              <Navigation />
              {children}
              <footer className="sticky bottom-0 h-25 bg-black z-49 text-center text-white text-sm py-4">
              </footer>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
