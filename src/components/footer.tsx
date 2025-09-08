"use client";

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
