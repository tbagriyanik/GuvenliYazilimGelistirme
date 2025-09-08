"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslations } from 'next-intl';

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const t = useTranslations('CopyButton');

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost" onClick={handleCopy} aria-label="Copy code">
            {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isCopied ? t('copied') : t('copy')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
