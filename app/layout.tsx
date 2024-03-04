import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "또북 - 아이들이 주인공인 교실",
  description: "아이들이 스스로 만드는 맞춤 영어 학습 콘텐츠",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
