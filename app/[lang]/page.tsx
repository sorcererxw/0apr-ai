import React from "react";
import { translations } from "@/lib/i18n";
import { LanguagePage } from "../components/language-page";
import { generateMetadata } from "../components/metadata";
import { notFound } from "next/navigation";

type Language = "zh" | "en" | "ja" | "ko" | "fr" | "es" | "de" | "ru";

type Props = {
  params: { lang: string };
};

export function generateStaticParams() {
  return [
    { lang: "zh" },
    { lang: "en" },
    { lang: "ja" },
    { lang: "ko" },
    { lang: "fr" },
    { lang: "es" },
    { lang: "de" },
    { lang: "ru" },
  ];
}

export function getPageMetadata({ params }: Props) {
  const lang = params.lang as Language;
  return generateMetadata({ lang });
}

export default async function Page({ params }: Props) {
  const { lang } = await Promise.resolve(params);
  const typedLang = lang as Language;
  if (!translations[typedLang]) {
    notFound();
  }
  return <LanguagePage lang={typedLang} />;
}
