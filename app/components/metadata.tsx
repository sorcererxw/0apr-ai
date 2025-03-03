import { Metadata } from "next";
import { translations, Language, languageList } from "@/lib/i18n";

interface GenerateMetadataProps {
  lang: Language;
}

export function generateMetadata({ lang }: GenerateMetadataProps): Metadata {
  const t = translations[lang];
  const alternates: { [key: string]: string } = {};

  // 生成所有语言版本的 hreflang
  languageList.forEach((l) => {
    alternates[`${l.value}-${l.value.toUpperCase()}`] = `/${l.value}`;
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