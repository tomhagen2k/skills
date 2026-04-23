import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "SunShield | Kem Chống Nắng Thế Hệ Mới",
  description: "Giải pháp chống nắng vô hình với công nghệ Netlock độc quyền. Kết cấu serum lai fluid mỏng nhẹ, không nâng tone giả, chống nước vượt trội.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
