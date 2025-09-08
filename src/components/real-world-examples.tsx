"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, ShieldOff, Target, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';

export function RealWorldExamples() {
  const t = useTranslations('RealWorldExamples');
  
  const examples = [
    {
      title: "Equifax Data Breach (2017)",
      vulnerability: t('examples.0.vulnerability'),
      impact: t('examples.0.impact'),
      lesson: t('examples.0.lesson'),
      modalContent: {
        paragraph: t('examples.0.modalContent.paragraph'),
        imageHint: "server room"
      }
    },
    {
      title: "SolarWinds Supply Chain Attack (2020)",
      vulnerability: t('examples.1.vulnerability'),
      impact: t('examples.1.impact'),
      lesson: t('examples.1.lesson'),
      modalContent: {
        paragraph: t('examples.1.modalContent.paragraph'),
        imageHint: "software supply chain"
      }
    },
    {
      title: "Capital One Data Breach (2019)",
      vulnerability: t('examples.2.vulnerability'),
      impact: t('examples.2.impact'),
      lesson: t('examples.2.lesson'),
      modalContent: {
        paragraph: t('examples.2.modalContent.paragraph'),
        imageHint: "cloud security"
      }
    },
  ];

  return (
    <section id="examples" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <Dialog key={ex.title}>
              <Card className="flex flex-col">
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
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{ex.title}</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-4">
                   <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                     <Image
                      src="https://picsum.photos/600/400"
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
