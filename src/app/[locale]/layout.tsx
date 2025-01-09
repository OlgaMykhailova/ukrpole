import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import "./globals.css";
import { Locale } from "@/types/locale";
import { Montserrat, Alegreya_Sans_SC } from "next/font/google";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

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
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    alternates: {
      canonical: "/",
      languages: {
        uk: "/",
        en: "/en",
      },
    },
    title: t("title"),
    description: t("description"),
  };
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
