"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, ShieldOff, Target } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function RealWorldExamples() {
  const t = useTranslations('RealWorldExamples');
  
  const examples = [
    {
      title: "Equifax Data Breach (2017)",
      vulnerability: t('examples.0.vulnerability'),
      impact: t('examples.0.impact'),
      lesson: t('examples.0.lesson'),
    },
    {
      title: "SolarWinds Supply Chain Attack (2020)",
      vulnerability: t('examples.1.vulnerability'),
      impact: t('examples.1.impact'),
      lesson: t('examples.1.lesson'),
    },
    {
      title: "Capital One Data Breach (2019)",
      vulnerability: t('examples.2.vulnerability'),
      impact: t('examples.2.impact'),
      lesson: t('examples.2.lesson'),
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
             <Card key={ex.title} className="flex flex-col">
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
              </CardContent>
              <CardFooter className="bg-muted/50 p-4">
                 <div className="flex items-start gap-2">
                   <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0"/>
                   <div>
                     <h3 className="font-semibold">{t('lessonLabel')}</h3>
                     <p className="text-sm text-muted-foreground">{ex.lesson}</p>
                   </div>
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
