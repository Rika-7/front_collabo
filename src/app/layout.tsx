import type { Metadata } from "next";
import "./globals.css";
import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "研Q",
  description: "研究者と企業をつなぐプラットフォーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
