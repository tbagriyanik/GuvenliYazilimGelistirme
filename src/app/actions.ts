'use server';

import { generateCodeSnippet, type GenerateCodeSnippetInput } from "@/ai/flows/generate-code-snippets";
import { z } from "zod";

const inputSchema = z.object({
  securityPrinciple: z.string().min(1, "Security principle is required."),
  programmingLanguage: z.string().min(1, "Programming language is required."),
});

export async function generateSnippetAction(input: GenerateCodeSnippetInput) {
  try {
    const validatedData = inputSchema.parse(input);

    const result = await generateCodeSnippet(validatedData);
    return { success: true, codeSnippet: result.codeSnippet };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid input. Please select both a principle and a language." };
    }
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
