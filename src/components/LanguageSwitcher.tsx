import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/hooks/LanguageContext.hooks';
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem
          onClick={() => setLanguage('ru')}
        >
          Русский
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('uz')}
        >
          O'zbekcha
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;