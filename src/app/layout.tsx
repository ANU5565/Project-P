import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuroop Dasari - AI OS",
  description: "Futuristic AI Operating System Portfolio of Anuroop Dasari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col selection:bg-accent/30 selection:text-accent-glow">
        {children}
      </body>
    </html>
  );
}
