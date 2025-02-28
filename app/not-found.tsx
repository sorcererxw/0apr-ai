"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Language, translations, getLanguage } from "@/lib/i18n";

export default function NotFound() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const t = translations[lang];

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="text-center">
        <div className="text-9xl font-bold mb-6">404</div>
        <h1 className="text-4xl font-bold mb-4">{t.notFound}</h1>
        <p className="text-neutral-600 mb-6">{t.notFoundDesc}</p>
        <Button asChild>
          <Link href={`/${lang}`}>{t.backHome}</Link>
        </Button>
      </div>
    </main>
  );
}