import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/navigation/top-nav";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Pias's profile",
  description: "Pias's protfolio...",
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <section className="bg-white">
          <TopNav />
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
