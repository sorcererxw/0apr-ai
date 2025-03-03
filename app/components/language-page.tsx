import { translations } from "@/lib/i18n";
import { CalculatorForm } from "./calculator-form";
import { LanguageSwitcher } from "./language-switcher";

import { Language } from "@/lib/i18n";

interface LanguagePageProps {
  lang: Language;
}

export function LanguagePage({ lang }: LanguagePageProps) {
  const t = translations[lang];

  return (
    <main className="min-h-screen pt-20 p-6 bg-background flex flex-col">
      <LanguageSwitcher currentLang={lang} />
      <div className="container mx-auto lg:max-w-4xl flex-1">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3">{t.title}</h1>
          <p className="text-neutral-600 text-sm mb-4">{t.description}</p>
          <div className="text-xs font-mono text-muted-foreground bg-muted inline-block px-4 py-2 rounded-lg">
            {t.formula}
          </div>
        </div>

        <div className="mt-8">
          <CalculatorForm lang={lang} />
        </div>
      </div>
      <footer className="text-center text-muted-foreground text-xs mt-12">
        {t.footer.replace('sorcererxw', '')}
        <a
          href="https://github.com/sorcererxw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          sorcererxw
        </a>
      </footer>
    </main>
  );
}