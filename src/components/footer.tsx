"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          Copyleft &copy; {year} {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
