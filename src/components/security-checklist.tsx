import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const checklistCategories = [
  {
    title: "Input & Data Validation",
    items: [
      "Sanitize all user inputs on the server-side.",
      "Use parameterized queries to prevent SQL injection.",
      "Validate data type, length, format, and range.",
      "Encode output to prevent Cross-Site Scripting (XSS).",
    ],
  },
  {
    title: "Authentication & Session Management",
    items: [
      "Enforce strong password policies.",
      "Implement multi-factor authentication (MFA).",
      "Generate new session IDs upon login.",
      "Securely store password hashes (e.g., using bcrypt).",
      "Implement secure password recovery mechanisms.",
    ],
  },
  {
    title: "Access Control",
    items: [
      "Enforce the Principle of Least Privilege.",
      "Implement role-based access control (RBAC).",
      "Deny access by default.",
      "Validate user permissions on every sensitive request.",
    ],
  },
  {
    title: "Cryptography & Data Protection",
    items: [
      "Use TLS/SSL for all data in transit.",
      "Encrypt sensitive data at rest.",
      "Do not store sensitive data unless absolutely necessary.",
      "Use strong, industry-standard cryptographic algorithms.",
    ],
  }
];

export function SecurityChecklist() {
  return (
    <section id="checklist" className="py-16 md:py-24 bg-card border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Interactive Security Checklist</h2>
          <p className="mt-4 text-muted-foreground">
            Use this checklist to audit your application against common security best practices. Expand each section to review the items.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" className="w-full">
            {checklistCategories.map((category, index) => (
              <AccordionItem value={`item-${index}`} key={category.title}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">{category.title}</AccordionTrigger>
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
