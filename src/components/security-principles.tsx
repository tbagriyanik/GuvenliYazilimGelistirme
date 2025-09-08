"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { ShieldCheck, Lock, KeyRound, ShieldAlert, DatabaseZap, Settings, UserMinus, type LucideIcon, ArrowRight } from 'lucide-react';

const principles: {
  title: string;
  description: string;
  Icon: LucideIcon;
  details: string[];
  modalContent: {
    paragraph: string;
    imageUrl: string;
    imageHint: string;
  };
}[] = [
  {
    title: "Input Validation",
    description: "Never trust user input. Validate, sanitize, and encode all data from external sources.",
    Icon: ShieldCheck,
    details: [
      "Use allow-lists for validation, not block-lists.",
      "Prevent SQL Injection with parameterized queries.",
      "Encode output to stop Cross-Site Scripting (XSS).",
    ],
    modalContent: {
      paragraph: "Input validation is the first line of defense against many common web application vulnerabilities. It involves ensuring that any data received from a user or external system conforms to expected formats, types, and lengths before it's processed. Failing to validate input can lead to code injection, buffer overflows, and other serious security flaws. Always treat external data as untrusted and validate it on the server-side, even if client-side validation is already in place.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "data security"
    }
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
    modalContent: {
      paragraph: "Authentication confirms a user's identity, typically with credentials like a password and increasingly with multi-factor authentication (MFA). Authorization determines what an authenticated user is permitted to do. A common mistake is to perform an action based only on a user's ID without checking if that user has the specific rights to perform that action. Proper authorization checks must be enforced on every sensitive request to prevent unauthorized access to data and functionality.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "login security"
    }
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
     modalContent: {
      paragraph: "Cryptography uses mathematical algorithms to transform data into a format that is unreadable without a secret key. It's essential for protecting data confidentiality and integrity. Data in transit should always be encrypted using protocols like TLS (Transport Layer Security) to prevent eavesdropping. Sensitive data at rest, such as customer information in a database, should also be encrypted. It's critical to use well-vetted, standard cryptographic libraries and to avoid inventing custom encryption schemes, which are often flawed.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "digital encryption"
    }
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
    modalContent: {
      paragraph: "Secure error handling prevents the leakage of sensitive information to attackers. Verbose error messages can reveal system paths, library versions, or database structures, which can aid an attacker. Instead, show generic error messages to users and log detailed, specific information on the server for developers. Comprehensive logging of security-relevant events is crucial for detecting attacks, investigating breaches, and understanding how a system is being used or abused.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "server logs"
    }
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
    modalContent: {
      paragraph: "Data protection involves understanding the data your application handles, classifying it based on sensitivity (e.g., public, internal, confidential), and applying security controls that are appropriate for that classification. This includes data minimization—collecting and retaining only the data that is absolutely necessary. Secure data disposal is also vital; simply deleting a file often leaves it recoverable, so proper data wiping or destruction techniques should be used when data is no longer needed.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "database server"
    }
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
    modalContent: {
      paragraph: "Many systems are insecure out-of-the-box. Secure configuration involves hardening every layer of the technology stack, including the operating system, web server, application server, and database. This means changing default passwords, disabling unnecessary services and features, and configuring security settings to be as restrictive as possible. Automated configuration management and regular security audits can help maintain a strong security posture and prevent configuration drift over time.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "network settings"
    }
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
    modalContent: {
      paragraph: "The Principle of Least Privilege dictates that any user, program, or process should have only the bare minimum privileges necessary to perform its function. For example, a web application should connect to the database with a user account that can only perform required actions (SELECT, INSERT, UPDATE) on specific tables, rather than using a high-powered administrative account. This principle limits the damage that can result from an accident, error, or exploit.",
      imageUrl: "https://picsum.photos/600/400",
      imageHint: "access control"
    }
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
             <Dialog key={p.title}>
              <Card className="flex flex-col text-center items-center transition-transform hover:-translate-y-2 hover:shadow-lg">
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
                <CardFooter className="w-full">
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{p.title}</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-4">
                   <div className="w-full aspect-video rounded-lg overflow-hidden relative">
                     <Image
                      src={p.modalContent.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover"
                      data-ai-hint={p.modalContent.imageHint}
                    />
                   </div>
                  <p className="text-muted-foreground">
                    {p.modalContent.paragraph}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
