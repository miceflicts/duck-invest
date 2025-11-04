import { Manrope, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// --- Fontes ---
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// --- Metadata ---
export const metadata = {
  title: "Duck.Invest - Títulos Públicos do Tesouro Direto",
  description:
    "Planejamento e organização de investimentos pessoais. Consulte em tempo real os títulos públicos disponíveis no Tesouro Direto.",
  keywords: [
    "investimentos",
    "tesouro direto",
    "títulos públicos",
    "renda fixa",
    "planejamento financeiro",
  ],
};

// --- Viewport ---
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="br" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${manrope.variable} ${poppins.variable} ${inter.variable} font-inter h-full antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
