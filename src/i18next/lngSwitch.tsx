// src/components/LanguageSwitcher.tsx
"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdTranslate } from "react-icons/md";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="px-4 py-2 rounded-xl font-medium shadow-md bg-background transition-colors flex items-center gap-2">
          <MdTranslate className="text-lg" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent className="w-36 rounded-xl  shadow-lg border border-gray-200">
          <DropdownMenuItem onClick={() => changeLang("en")}>🇬🇧 English</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLang("ru")}>🇷🇺 Русский</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLang("uz")}>🇺🇿 O‘zbekcha</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLang("zh")}>🇨🇳 中文</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLang("tr")}>🇹🇷 Türkçe</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
