"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Language, languageList } from "@/lib/i18n";
import { ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  currentLang: Language;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter();

  const handleLanguageChange = (lang: Language) => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const newPath = `/${lang}${currentSearch}`;
    router.push(newPath);
  };

  const currentLanguage = languageList.find((lang) => lang.value === currentLang);

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium"
          >
            <Globe className="h-4 w-4" />
            {currentLanguage?.label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languageList.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              className={currentLang === lang.value ? "font-medium" : ""}
              onClick={() => handleLanguageChange(lang.value)}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}