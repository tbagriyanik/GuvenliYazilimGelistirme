import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { ShieldCheck, Lock, KeyRound, ShieldAlert, DatabaseZap, Settings, UserMinus, type LucideIcon } from 'lucide-react';

const principles: { title: string; description: string; Icon: LucideIcon; details: string[] }[] = [
  {
    title: "Input Validation",
    description: "Never trust user input. Validate, sanitize, and encode all data from external sources.",
    Icon: ShieldCheck,
    details: [
      "Use allow-lists for validation, not block-lists.",
      "Prevent SQL Injection with parameterized queries.",
      "Encode output to stop Cross-Site Scripting (XSS).",
    ],
  },
  {
    title: "Authentication & Authorization",
    description: "Verify who a user is (authentication) and what they are allowed to do (authorization).",
    Icon: Lock,
    details: [
      "Enforce strong password policies and MFA.",
      "Use secure session management.",
      "Implement Role-Based Access Control (RBAC).",
    ],
  },
  {
    title: "Cryptography",
    description: "Protect data in transit and at rest using strong, industry-standard encryption.",
    Icon: KeyRound,
    details: [
      "Use TLS for all network communication.",
      "Encrypt sensitive data like PII in databases.",
      "Never create your own cryptographic algorithms.",
    ],
  },
  {
    title: "Error Handling & Logging",
    description: "Fail securely without leaking sensitive information. Log events for monitoring and forensics.",
    Icon: ShieldAlert,
    details: [
      "Avoid exposing stack traces or system info in errors.",
      "Log authentication attempts, access control failures, etc.",
      "Ensure logs are protected from tampering.",
    ],
  },
  {
    title: "Data Protection",
    description: "Classify data by sensitivity and apply appropriate security controls.",
    Icon: DatabaseZap,
    details: [
      "Minimize the data you collect and store.",
      "Protect sensitive data at rest and in transit.",
      "Have a clear data retention and disposal policy.",
    ],
  },
  {
    title: "Secure Configuration",
    description: "Harden all components of your stack, from servers to frameworks.",
    Icon: Settings,
    details: [
      "Remove default credentials and unused features.",
      "Keep all software and libraries up to date.",
      "Regularly audit configurations for weaknesses.",
    ],
  },
  {
    title: "Principle of Least Privilege",
    description: "Grant users and processes only the minimum permissions necessary to do their job.",
    Icon: UserMinus,
    details: [
      "Avoid running processes with root/admin rights.",
      "Limit database user permissions.",
      "Regularly review user access rights.",
    ],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p) => (
            <Card key={p.title} className="flex flex-col text-center items-center transition-transform hover:-translate-y-2 hover:shadow-lg">
              <CardHeader className="w-full">
                <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">
                  <p.Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription className="pt-2">{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center w-full">
                <ul className="space-y-2 text-sm text-muted-foreground list-none text-left p-0">
                  {p.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                       <ShieldCheck className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
