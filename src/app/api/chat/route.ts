import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { SYSTEM_PROMPT } from "./prompt";
import { getContact } from "./tools/getContact";
import { getInternship } from "./tools/getIntership";
import { getPresentation } from "./tools/getPresentation";
import { getProjects } from "./tools/getProjects";
import { getResume } from "./tools/getResume";
import { getSkills } from "./tools/getSkills";

export const maxDuration = 30;

// Initialize providers
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Choose model based on available API Keys (OpenAI preferred)
    let model: any;
    if (process.env.OPENAI_API_KEY) {
      console.log("[CHAT-API] Using OpenAI (gpt-4o-mini)");
      model = openai("gpt-4o-mini");
    } else if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.log("[CHAT-API] Using Google Gemini fallback");
      model = google("gemini-2.0-flash-exp");
    } else {
      return new Response(
        "No API Key configured. Please add OPENAI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY to your .env file.",
        { status: 500 },
      );
    }

    // Add system prompt
    messages.unshift(SYSTEM_PROMPT);

    // Add tools
    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getInternship,
    };

    const result = await streamText({
      model,
      messages,
      tools,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    console.error(
      "Error details:",
      error instanceof Error ? error.message : "Unknown error",
    );
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack trace",
    );

    // Handle specific error types
    if (error instanceof Error && error.message?.includes("quota")) {
      return new Response("API quota exceeded. Please try again later.", {
        status: 429,
      });
    }

    if (error instanceof Error && error.message?.includes("network")) {
      return new Response(
        "Network error. Please check your connection and try again.",
        { status: 503 },
      );
    }

    return new Response(
      `Internal Server Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 },
    );
  }
}
