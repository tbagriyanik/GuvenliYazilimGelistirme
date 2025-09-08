"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateSnippetAction } from '@/app/actions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CopyButton } from './copy-button';
import { useTranslations } from 'next-intl';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const securityPrinciples = [
  "Input Validation",
  "Authentication & Authorization",
  "Cryptography",
  "Error Handling & Logging",
  "Data Protection",
  "Secure Configuration",
  "Principle of Least Privilege",
  "SQL Injection Prevention",
  "Cross-Site Scripting (XSS) Prevention",
];

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Go",
  "TypeScript",
  "PHP",
];

export function CodeSnippetGenerator() {
  const [isPending, startTransition] = useTransition();
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { toast } = useToast();
  const t = useTranslations('CodeSnippetGenerator');

  const FormSchema = z.object({
    securityPrinciple: z.string({
      required_error: t('form.securityPrinciple.required'),
    }),
    programmingLanguage: z.string({
      required_error: t('form.programmingLanguage.required'),
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setGeneratedCode('');
    setSelectedLanguage(data.programmingLanguage.toLowerCase());
    startTransition(async () => {
      const result = await generateSnippetAction(data);
      if (result.success && result.codeSnippet) {
        setGeneratedCode(result.codeSnippet);
      } else {
        toast({
          variant: 'destructive',
          title: t('toast.title'),
          description: result.error || t('toast.description'),
        });
      }
    });
  }

  return (
    <section id="generator" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="securityPrinciple"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('form.securityPrinciple.label')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('form.securityPrinciple.placeholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {securityPrinciples.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="programmingLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('form.programmingLanguage.label')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('form.programmingLanguage.placeholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {programmingLanguages.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={isPending} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isPending ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('form.button.generating')}</>
                    ) : (
                      <><Sparkles className="mr-2 h-4 w-4" /> {t('form.button.generate')}</>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {(isPending || generatedCode) && (
            <div className="mt-8">
              <h3 className="font-semibold mb-2 text-center">{t('generatedCodeTitle')}</h3>
              <Card className="bg-card/80 text-gray-100 font-mono text-sm relative glass-card overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    <CopyButton text={generatedCode} />
                  </div>
                <CardContent className="p-0">
                  {isPending && !generatedCode && <div className="flex items-center justify-center h-48"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
                  {generatedCode && (
                     <SyntaxHighlighter
                      language={selectedLanguage}
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
                      codeTagProps={{ style: { fontFamily: 'inherit' } }}
                      showLineNumbers
                    >
                      {generatedCode}
                    </SyntaxHighlighter>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
