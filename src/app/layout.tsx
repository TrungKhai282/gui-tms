import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/common/styles/global.scss";
import "@/common/styles/animate.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/mainifest.json",
  title: "",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
