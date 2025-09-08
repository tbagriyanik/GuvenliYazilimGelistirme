
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

  const checklistCategories: ChecklistCategory[] = t.raw('categories');
  
  const defaultOpenValues = checklistCategories.map((_, index) => `item-${index}`);

  return (
    <section id="checklist" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto glass-card rounded-lg p-4 md:p-6">
          <Accordion type="multiple" defaultValue={defaultOpenValues} className="w-full">
            {checklistCategories.map((category, index) => (
              <AccordionItem value={`item-${index}`} key={category.title} className="border-b-white/10">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-center justify-center">{category.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <Checkbox id={`item-${index}-${itemIndex}`} className="mt-1" />
                        <div className="grid gap-1.5">
                          <Label htmlFor={`item-${index}-${itemIndex}`} className="text-base font-normal">
                            {item.text}
                          </Label>
                           <p className="flex items-start gap-2 text-sm text-accent/80 italic">
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
