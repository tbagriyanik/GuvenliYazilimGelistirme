import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="py-24 md:py-32 bg-card border-b">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary font-headline">
          Build Software, Securely.
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
          Welcome to SecureBase, your comprehensive guide to understanding and implementing fundamental software security principles.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <Link href="#principles">Explore Principles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
