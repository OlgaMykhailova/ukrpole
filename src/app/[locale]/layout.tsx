import "./globals.css";

import { Alegreya_Sans_SC, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import CookiesComponent from "@/components/shared/cookies/CookiesComponent";
import Footer from "@/components/shared/footer/Footer";
import CallBackApplicationMob from "@/components/shared/header/callBackApplication/CallBackApplicationMob";
import Header from "@/components/shared/header/Header";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";
import { generatePageMetaData } from "@/utils/generatePageMetaData";

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

const alegreya = Alegreya_Sans_SC({
  weight: ["500"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-alegreya",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  return generatePageMetaData({
    locale,
    namespace: "metadata",
    canonical: "/",
  });
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${montserrat.variable} ${alegreya.variable} flex min-h-screen flex-col antialiased text-16reg tab:text-18reg`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-[72px] laptop:pt-[160px]">{children}</main>
          <Footer />
          <CookiesComponent />
          <CallBackApplicationMob />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
