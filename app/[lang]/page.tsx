import React from "react";
import { translations, languageList } from "@/lib/i18n";
import { LanguagePage } from "../components/language-page";
import { generateMetadata as generatePageMetadata } from "../components/metadata";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { Language } from "@/lib/i18n";

type PageParams = { lang: Language };

export function generateStaticParams() {
  return languageList.map((lang) => ({
    lang: lang.value
  }));
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
