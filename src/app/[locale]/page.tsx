import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SecurityPrinciples } from '@/components/security-principles';
import { CodeSnippetGenerator } from '@/components/code-snippet-generator';
import { RealWorldExamples } from '@/components/real-world-examples';
import { SecurityChecklist } from '@/components/security-checklist';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <SecurityPrinciples />
        <CodeSnippetGenerator />
        <RealWorldExamples />
        <SecurityChecklist />
      </main>
      <Footer />
    </div>
  );
}
