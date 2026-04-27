import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./react-query-provider";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atomity | Cloud Cost Optimization",
  description: "Automate your cloud savings with real-time intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            <div className="pt-16">
              {children}
            </div>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
