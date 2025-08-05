import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { Toaster } from "react-hot-toast";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import "react-loading-skeleton/dist/skeleton.css";

import "react-phone-input-2/lib/style.css";
import UnderConstructionToast from "@/components/Nofitications/UnderConstructionToast";
import { GoogleOAuthProvider } from "@react-oauth/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.yogprerna.com";

export const metadata: Metadata = {
  title: {
    default: "Yogprerna",
    template: "%s - Yogprerna",
  },
  description:
    "Yogprerna is your source for holistic wellness and mindful living through yoga.",
  keywords: [
    "yoga",
    "meditation",
    "wellness",
    "Yogprerna",
    "mindfulness",
    "fitness",
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        <Toaster position="top-right" />
        <UnderConstructionToast />
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
