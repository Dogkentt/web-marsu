import type { Metadata } from "next";
import '@/shared/assets/styles/index.scss'
import AppLayout from "@/shared/layouts/AppLayout";

export const metadata: Metadata = {
  title: "Hello world!",
  description: "Hi",
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
        {children}
      </body>
    </html>
  );
}
