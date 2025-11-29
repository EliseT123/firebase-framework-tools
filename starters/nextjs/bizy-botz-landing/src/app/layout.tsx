import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIZY BOTZ - AI Automation for Australian SMBs",
  description: "Australian-made AI automation that saves time, cuts costs, and scales your business. Stop drowning in busy work and let AI run your business.",
  keywords: ["AI automation", "Australian SMB", "business automation", "workflow automation", "AI tools"],
  authors: [{ name: "BIZY BOTZ" }],
  openGraph: {
    title: "BIZY BOTZ - AI Automation for Australian SMBs",
    description: "Stop drowning in busy work. Let AI run your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
