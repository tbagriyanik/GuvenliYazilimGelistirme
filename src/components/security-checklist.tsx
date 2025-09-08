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

export function SecurityChecklist() {
  const t = useTranslations('SecurityChecklist');

  const checklistCategories = [
    {
      title: t('categories.0.title'),
      items: [
        t('categories.0.items.0'),
        t('categories.0.items.1'),
        t('categories.0.items.2'),
        t('categories.0.items.3'),
      ],
    },
    {
      title: t('categories.1.title'),
      items: [
        t('categories.1.items.0'),
        t('categories.1.items.1'),
        t('categories.1.items.2'),
        t('categories.1.items.3'),
        t('categories.1.items.4'),
      ],
    },
    {
      title: t('categories.2.title'),
      items: [
        t('categories.2.items.0'),
        t('categories.2.items.1'),
        t('categories.2.items.2'),
        t('categories.2.items.3'),
      ],
    },
    {
      title: t('categories.3.title'),
      items: [
        t('categories.3.items.0'),
        t('categories.3.items.1'),
        t('categories.3.items.2'),
        t('categories.3.items.3'),
      ],
    },
    {
      title: t('categories.4.title'),
      items: [
        t('categories.4.items.0'),
        t('categories.4.items.1'),
        t('categories.4.items.2'),
        t('categories.4.items.3'),
      ],
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
                <AccordionTrigger className="text-lg font-semibold hover:no-underline justify-center">{category.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <Checkbox id={`item-${index}-${itemIndex}`} />
                        <Label htmlFor={`item-${index}-${itemIndex}`} className="text-base font-normal text-muted-foreground">
                          {item}
                        </Label>
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
