"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { ShieldCheck, Lock, KeyRound, ShieldAlert, DatabaseZap, Settings, UserMinus, type LucideIcon, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useSearchParams } from "next/navigation";
import { useCallback } from 'react';
import { cn } from '@/lib/utils';

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

  const principles: {
    id: string;
    title: string;
    description: string;
    Icon: LucideIcon;
    details: string[];
    modalContent: {
      paragraph: string;
      imageUrl: string;
      imageHint: string;
    };
  }[] = [
    {
      id: "input-validation",
      title: t('principles.0.title'),
      description: t('principles.0.description'),
      Icon: ShieldCheck,
      details: t.raw('principles.0.details'),
      modalContent: {
        paragraph: t('principles.0.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/datasecurity/600/400",
        imageHint: "data security"
      }
    },
    {
      id: "auth",
      title: t('principles.1.title'),
      description: t('principles.1.description'),
      Icon: Lock,
      details: t.raw('principles.1.details'),
      modalContent: {
        paragraph: t('principles.1.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/login/600/400",
        imageHint: "login security"
      }
    },
    {
      id: "crypto",
      title: t('principles.2.title'),
      description: t('principles.2.description'),
      Icon: KeyRound,
      details: t.raw('principles.2.details'),
       modalContent: {
        paragraph: t('principles.2.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/encryption/600/400",
        imageHint: "digital encryption"
      }
    },
    {
      id: "error-handling",
      title: t('principles.3.title'),
      description: t('principles.3.description'),
      Icon: ShieldAlert,
      details: t.raw('principles.3.details'),
      modalContent: {
        paragraph: t('principles.3.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/logs/600/400",
        imageHint: "server logs"
      }
    },
    {
      id: "data-protection",
      title: t('principles.4.title'),
      description: t('principles.4.description'),
      Icon: DatabaseZap,
      details: t.raw('principles.4.details'),
      modalContent: {
        paragraph: t('principles.4.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/database/600/400",
        imageHint: "database server"
      }
    },
    {
      id: "secure-config",
      title: t('principles.5.title'),
      description: t('principles.5.description'),
      Icon: Settings,
      details: t.raw('principles.5.details'),
      modalContent: {
        paragraph: t('principles.5.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/network/600/400",
        imageHint: "network settings"
      }
    },
    {
      id: "least-privilege",
      title: t('principles.6.title'),
      description: t('principles.6.description'),
      Icon: UserMinus,
      details: t.raw('principles.6.details'),
      modalContent: {
        paragraph: t('principles.6.modalContent.paragraph'),
        imageUrl: "https://picsum.photos/seed/access/600/400",
        imageHint: "access control"
      }
    },
  ];

  const activeModal = searchParams.get('modal');

  return (
    <section id="principles" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p) => (
             <Dialog key={p.id} open={activeModal === p.id} onOpenChange={(open) => handleOpenChange(open, p.id)}>
              <Card className="glass-card flex flex-col text-center items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="w-full">
                  <div className="mx-auto bg-primary/20 p-3 rounded-full mb-4 w-fit">
                    <p.Icon className="h-8 w-8 text-primary" />
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
                   <Button variant="outline" className="w-full" onClick={() => handleOpenChange(true, p.id)}>
                      {t('learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                </CardFooter>
              </Card>
              <DialogContent className={cn("sm:max-w-[625px]", "glass-card")}>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{p.title}</DialogTitle>
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
          ))}
        </div>
      </div>
    </section>
  );
}
