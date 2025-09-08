"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTranslations } from 'next-intl';
import { BadgeHelp } from "lucide-react";

type ChecklistItem = {
  text: string;
  description: string;
};

type ChecklistCategory = {
  title: string;
  items: ChecklistItem[];
};

export function SecurityChecklist() {
  const t = useTranslations('SecurityChecklist');

  const checklistCategories: ChecklistCategory[] = [
    {
      title: t('categories.0.title'),
      items: t.raw('categories.0.items'),
    },
    {
      title: t('categories.1.title'),
      items: t.raw('categories.1.items'),
    },
    {
      title: t('categories.2.title'),
      items: t.raw('categories.2.items'),
    },
    {
      title: t('categories.3.title'),
      items: t.raw('categories.3.items'),
    },
    {
      title: t('categories.4.title'),
      items: t.raw('categories.4.items'),
    }
  ];
  
  return (
    <section id="checklist" className="py-16 md:py-24 bg-card border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" className="w-full">
            {checklistCategories.map((category, index) => (
              <AccordionItem value={`item-${index}`} key={category.title}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline justify-center text-center">{category.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <Checkbox id={`item-${index}-${itemIndex}`} className="mt-1" />
                        <div className="grid gap-1.5">
                          <Label htmlFor={`item-${index}-${itemIndex}`} className="text-base font-normal text-muted-foreground">
                            {item.text}
                          </Label>
                           <p className="flex items-start gap-2 text-sm text-green-700 italic">
                             <BadgeHelp className="h-4 w-4 mt-0.5 flex-shrink-0" />
                             <span>{item.description}</span>
                           </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
