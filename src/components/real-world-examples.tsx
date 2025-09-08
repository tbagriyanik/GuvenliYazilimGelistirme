import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, ShieldOff, Target } from 'lucide-react';

const examples = [
  {
    title: "Equifax Data Breach (2017)",
    vulnerability: "Unpatched Apache Struts framework",
    impact: "Personal data of 147 million people exposed, including Social Security numbers and driver's license numbers.",
    lesson: "Timely patching of known vulnerabilities is critical. A single unpatched server can compromise an entire organization.",
  },
  {
    title: "SolarWinds Supply Chain Attack (2020)",
    vulnerability: "Compromised build server",
    impact: "Malicious code was injected into Orion software updates, affecting thousands of organizations, including parts of the US government.",
    lesson: "Securing the software development lifecycle (SDLC) and supply chain is as important as securing the application itself.",
  },
  {
    title: "Capital One Data Breach (2019)",
    vulnerability: "Misconfigured Web Application Firewall (WAF)",
    impact: "A former employee exploited a misconfigured firewall to access and exfiltrate data of over 100 million credit card applicants.",
    lesson: "Secure configuration of cloud services and infrastructure is essential. Misconfigurations are a leading cause of cloud breaches.",
  },
];


export function RealWorldExamples() {
  return (
    <section id="examples" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Real-World Examples</h2>
          <p className="mt-4 text-muted-foreground">
            Learning from the past is key to a secure future. Here are some high-profile breaches and the lessons they teach us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
             <Card key={ex.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{ex.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h3 className="font-semibold flex items-center gap-2"><ShieldOff className="h-4 w-4 text-destructive"/> Vulnerability</h3>
                  <p className="text-sm text-muted-foreground">{ex.vulnerability}</p>
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2"><Target className="h-4 w-4 text-primary"/> Impact</h3>
                  <p className="text-sm text-muted-foreground">{ex.impact}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4">
                 <div className="flex items-start gap-2">
                   <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0"/>
                   <div>
                     <h3 className="font-semibold">Key Lesson</h3>
                     <p className="text-sm text-muted-foreground">{ex.lesson}</p>
                   </div>
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
