import React from "react";
import { translations } from "@/lib/i18n";
import { LanguagePage } from "../components/language-page";
import { generateMetadata as generatePageMetadata } from "../components/metadata";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Language = "zh" | "en" | "ja" | "ko" | "fr" | "es" | "de" | "ru";

type PageParams = { lang: Language };

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

export async function generateMetadata(
  { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  return generatePageMetadata({ lang });
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  if (!translations[lang]) {
    notFound();
  }
  return <LanguagePage lang={lang} />;
}
