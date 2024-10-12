import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cathedrals of Australia",
  description: "Quiz your knowledge on the Australian Cathedrals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=''>
      <body 
        className="relative w-full h-dvh min-h-dvh font-serif bg-paper-texture"
      >
        {children}
      </body>
    </html>
  );
}
