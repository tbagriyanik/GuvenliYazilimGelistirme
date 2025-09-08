
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, ShieldOff, Target, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

// Define a type for the example objects to ensure type safety
type RealWorldExample = {
  id: string;
  title: string;
  vulnerability: string;
  impact: string;
  lesson: string;
  modalContent: {
    paragraph: string;
    imageUrl: string;
    imageHint: string;
  };
};

export function RealWorldExamples() {
  const t = useTranslations('RealWorldExamples');
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
  
  // Use t.raw to get the entire array of examples from the JSON file
  const examples: RealWorldExample[] = t.raw('examples');

  const activeModal = searchParams.get('modal');

  return (
    <section id="examples" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <Dialog key={ex.id} open={activeModal === ex.id} onOpenChange={(open) => handleOpenChange(open, ex.id)}>
              <Card className="glass-card flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>{ex.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                    <h3 className="font-semibold flex items-center gap-2"><ShieldOff className="h-4 w-4 text-destructive"/> {t('vulnerabilityLabel')}</h3>
                    <p className="text-sm text-muted-foreground">{ex.vulnerability}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold flex items-center gap-2"><Target className="h-4 w-4 text-primary"/> {t('impactLabel')}</h3>
                    <p className="text-sm text-muted-foreground">{ex.impact}</p>
                  </div>
                  <div className="pt-4">
                     <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg">
                       <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0"/>
                       <div>
                         <h3 className="font-semibold text-sm">{t('lessonLabel')}</h3>
                         <p className="text-sm text-muted-foreground">{ex.lesson}</p>
                       </div>
                     </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full" onClick={() => handleOpenChange(true, ex.id)}>
                    {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <DialogContent className={cn("sm:max-w-[625px]", "glass-card")}>
                <DialogHeader>
                  <DialogTitle>{ex.title}</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-4">
                   <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                     <Image
                      src={ex.modalContent.imageUrl}
                      alt={ex.title}
                      fill
                      className="object-cover"
                      data-ai-hint={ex.modalContent.imageHint}
                    />
                   </div>
                  <p className="text-muted-foreground">
                    {ex.modalContent.paragraph}
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
