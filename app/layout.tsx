import type { Metadata } from "next";
import { Instrument_Serif, Outfit, Source_Sans_3, Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Moch. Anang Ardiansyah",
    template: "%s · Moch. Anang Ardiansyah",
  },
  description:
    "Portofolio Moch. Anang Ardiansyah: quality assurance, pengembangan frontend, dan jaringan komputer.",
  openGraph: {
    title: "Moch. Anang Ardiansyah",
    description:
      "Quality assurance, pengembangan frontend, dan jaringan komputer.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-type="service"
      data-radius="sharp"
      data-buttons="solid"
      data-motion="quiet"
      className={cn("h-full", sans.variable, serif.variable, display.variable, "font-sans", geist.variable)}
    >
      <head>
        <meta name="page-type" content="service" />
        <meta name="site-kind" content="other" />
      </head>
      <body className="min-h-full bg-paper text-ink antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
