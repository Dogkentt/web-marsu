import type { Metadata } from "next";
import '@/shared/assets/styles/index.scss'
import AppLayout from "@/shared/layouts/AppLayout";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";

export const metadata: Metadata = {
  title: "NEXT-GEN AI SUMMIT 2026 - nexus",
  description: "Join us at the Next-Gen AI Summit 2026, where innovation meets insight. Explore the future of artificial intelligence with industry leaders, visionaries, and experts. Discover cutting-edge technologies, groundbreaking research, and transformative applications that are shaping the AI landscape. Don't miss this opportunity to connect, learn, and be inspired at the premier event for AI enthusiasts and professionals.",
  authors: {
    name: "Ilya Vahonin",
    url: "https://github.com/Dogkentt/web-marsu",
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <Header />

        { children }

        <Footer />
      </body>
    </html>
  );
}
