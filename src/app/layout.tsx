import type { Metadata } from "next";

import { Providers } from "@/providers";

import "@/styles/globals.css";

import "@fontsource-variable/geist-mono";

export const metadata: Metadata = {
  title: {
    template: "%s | Media UI",
    default: "Media UI",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
