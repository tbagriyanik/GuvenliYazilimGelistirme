
"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { ShieldCheck, Lock, UserMinus, ShieldAlert, KeyRound, FileLock, Cog, Monitor, type LucideIcon, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useSearchParams } from "next/navigation";
import { useCallback } from 'react';
import { cn } from '@/lib/utils';

// Type definitions for the principle object from the JSON file
type Principle = {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  modalContent: {
    paragraph: string;
    imageUrl: string;
    imageHint: string;
  };
};

// Icon mapping to dynamically render icons based on string name
const iconMap: { [key: string]: LucideIcon } = {
  ShieldCheck,
  Lock,
  KeyRound,
  ShieldAlert,
  FileLock,
  Cog,
  UserMinus,
  Monitor,
};

export function SecurityPrinciples() {
  const t = useTranslations('SecurityPrinciples');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleOpenChange = useCallback((open: boolean, modalId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (open) {
      params.set('modal', modalId);
    } else {
      params.delete('modal');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  // Fetch the entire principles array directly from the translation file
  const principles: Principle[] = t.raw('principles');
  const activeModal = searchParams.get('modal');

  return (
    <section id="principles" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {principles.map((p) => {
            const IconComponent = iconMap[p.icon] || ShieldCheck; // Fallback icon
            return (
              <Dialog key={p.id} open={activeModal === p.id} onOpenChange={(open) => handleOpenChange(open, p.id)}>
                <DialogTrigger asChild>
                  <Card className="glass-card flex flex-col text-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                    <CardHeader className="w-full">
                      <div className="mx-auto bg-primary/20 p-3 rounded-full mb-4 w-fit">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{p.title}</CardTitle>
                      <CardDescription className="pt-2">{p.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-center w-full">
                      <ul className="space-y-2 text-sm text-muted-foreground list-none text-left p-0">
                        {p.details.map((detail: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <ShieldCheck className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="w-full">
                       <Button variant="outline" className="w-full pointer-events-none" tabIndex={-1}>
                           {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className={cn("sm:max-w-[625px]", "glass-card")}>
                  <DialogHeader>
                    <DialogTitle>{p.title}</DialogTitle>
                  </DialogHeader>
                  <div className="py-4 space-y-4">
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                      <Image
                        src={p.modalContent.imageUrl}
                        alt={p.title}
                        fill
                        className="object-cover"
                        data-ai-hint={p.modalContent.imageHint}
                      />
                    </div>
                    <p className="text-muted-foreground">
                      {p.modalContent.paragraph}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}

    