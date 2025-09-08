import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { ShieldCheck, Lock, KeyRound, ShieldAlert, DatabaseZap, Settings, UserMinus, type LucideIcon } from 'lucide-react';

const principles: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Input Validation",
    description: "Ensure that all data from external sources is validated, sanitized, and encoded to prevent injection attacks like SQLi and XSS.",
    Icon: ShieldCheck,
  },
  {
    title: "Authentication & Authorization",
    description: "Verify the identity of users and systems (authentication) and ensure they only have access to the resources they are permitted to use (authorization).",
    Icon: Lock,
  },
  {
    title: "Cryptography",
    description: "Protect data in transit and at rest using strong, industry-standard encryption algorithms and protocols. Never roll your own crypto.",
    Icon: KeyRound,
  },
  {
    title: "Error Handling & Logging",
    description: "Implement robust error handling that fails securely without leaking sensitive information. Maintain detailed logs for monitoring and forensics.",
    Icon: ShieldAlert,
  },
  {
    title: "Data Protection",
    description: "Classify data based on sensitivity and apply appropriate security controls to protect it from unauthorized access, disclosure, or modification.",
    Icon: DatabaseZap,
  },
  {
    title: "Secure Configuration",
    description: "Harden all components of your application stack, including servers, frameworks, and libraries. Remove default credentials and disable unnecessary features.",
    Icon: Settings,
  },
  {
    title: "Principle of Least Privilege",
    description: "Grant users and processes the minimum level of access (permissions) necessary to perform their required functions.",
    Icon: UserMinus,
  },
];

export function SecurityPrinciples() {
  return (
    <section id="principles" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Core Security Principles</h2>
          <p className="mt-4 text-muted-foreground">
            These foundational concepts are the building blocks of secure software development. Understanding and applying them is crucial for protecting your applications and users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => (
            <Card key={p.title} className="flex flex-col text-center items-center transition-transform hover:-translate-y-2 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
                  <p.Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{p.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
