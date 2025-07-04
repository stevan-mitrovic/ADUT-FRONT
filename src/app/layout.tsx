import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.scss";
import PageLayout from "@/layout/pageLayout";
import { fonts } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Adut.me",
  description: "Adut.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="me">
      <body className={clsx(fonts.inter)}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
