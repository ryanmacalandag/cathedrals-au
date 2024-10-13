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
    <html lang="en" className='scroll-smooth snap-y snap-proximity scroll-pt-12'>
      <body 
        className="w-full h-full flex flex-col justify-between min-h-dvh font-serif bg-paper-texture"
      >
        {children}
      </body>
    </html>
  );
}
