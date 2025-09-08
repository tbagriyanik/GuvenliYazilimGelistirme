'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating code snippets based on security principles.
 *
 * generateCodeSnippet - A function that generates a code snippet for a given security principle and programming language.
 * GenerateCodeSnippetInput - The input type for the generateCodeSnippet function.
 * GenerateCodeSnippetOutput - The return type for the generateCodeSnippet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCodeSnippetInputSchema = z.object({
  securityPrinciple: z
    .string()
    .describe('The security principle for which to generate a code snippet.'),
  programmingLanguage: z
    .string()
    .describe('The programming language for the code snippet.'),
});
export type GenerateCodeSnippetInput = z.infer<typeof GenerateCodeSnippetInputSchema>;

const GenerateCodeSnippetOutputSchema = z.object({
  codeSnippet: z
    .string()
    .describe('The generated code snippet for the security principle.'),
});
export type GenerateCodeSnippetOutput = z.infer<typeof GenerateCodeSnippetOutputSchema>;

export async function generateCodeSnippet(
  input: GenerateCodeSnippetInput
): Promise<GenerateCodeSnippetOutput> {
  return generateCodeSnippetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCodeSnippetPrompt',
  input: {schema: GenerateCodeSnippetInputSchema},
  output: {schema: GenerateCodeSnippetOutputSchema},
  prompt: `You are a security expert that can generate code snippets
  that demonstrate a specific security principle in a given programming language.
  Generate a code snippet for the following security principle in the following language.

  Security Principle: {{{securityPrinciple}}}
  Programming Language: {{{programmingLanguage}}}
  `,
});

const generateCodeSnippetFlow = ai.defineFlow(
  {
    name: 'generateCodeSnippetFlow',
    inputSchema: GenerateCodeSnippetInputSchema,
    outputSchema: GenerateCodeSnippetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
