import { Metadata } from "next";
import { translations } from "@/lib/i18n";

type Language = "zh" | "en" | "ja" | "ko" | "fr" | "es" | "de" | "ru";

interface GenerateMetadataProps {
  lang: Language;
}

export function generateMetadata({ lang }: GenerateMetadataProps): Metadata {
  const t = translations[lang];
  const alternates: { [key: string]: string } = {};
  const languages: Language[] = ["zh", "en", "ja", "ko", "fr", "es", "de", "ru"];

  // 生成所有语言版本的 hreflang
  languages.forEach((l) => {
    alternates[`${l}-${l.toUpperCase()}`] = `/${l}`;
  });

  return {
    title: t.title,
    description: t.description,
    alternates: {
      languages: alternates,
      canonical: `/${lang}`
    },
    openGraph: {
      title: t.title,
      description: t.description,
      locale: `${lang}-${lang.toUpperCase()}`
    },
  };
}