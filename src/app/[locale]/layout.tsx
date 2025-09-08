import { ReactNode } from 'react';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

const locales = ['en', 'tr'];

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({children, params: {locale}}: Props) {
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
