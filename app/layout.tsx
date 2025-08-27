import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday to My Dear Garfield Mao",
  description: "毛曉鶴的生日祝賀卡",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
