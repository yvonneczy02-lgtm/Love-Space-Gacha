
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Category, GeneratedContent } from "../types";
import { FALLBACK_TALKS, FALLBACK_ACTIVITIES } from "../constants";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    icon: { type: Type.STRING, description: "A relevant single emoji." },
    title: { type: Type.STRING, description: "Short title (2-5 Chinese characters)." },
    description: { type: Type.STRING, description: "EXTREMELY CONCISE content (Max 18 Chinese characters)." },
    suggestion: { type: Type.STRING, description: "A very short action or tip (Max 10 chars)." }
  },
  required: ["icon", "title", "description", "suggestion"]
};

export const generateCardContent = async (category: Category, count: number = 0): Promise<GeneratedContent> => {
  const client = getClient();
  
  if (!client) {
    console.warn("No API Key found, using fallback data.");
    return getRandomFallback(category);
  }

  try {
    let prompt = "";

    if (category === 'deep-talk') {
      // Progression Logic
      // Stage 1 (0-2): Sweet Connection, First Impressions, Romance
      // Stage 2 (3-5): Childhood, Life Habits, Accompaniment
      // Stage 3 (6+): Values, Future, Deep Philosophy

      let theme = "";
      let examples = "";

      if (count < 3) {
        theme = "Romantic Connection & Sweet Memories (Break the ice)";
        examples = `
          - "第一次见我时，你心里在想什么？"
          - "如果能穿越，最想回到我们哪一刻？"
          - "我做过的哪件事让你觉得最浪漫？"
        `;
      } else if (count < 6) {
        theme = "Life, Childhood & Vulnerability (Getting closer)";
        examples = `
          - "童年最快乐的一件事是什么？"
          - "最脆弱的时候，你希望我怎么陪你？"
          - "你最受不了一种什么样的生活状态？"
        `;
      } else {
        theme = "Values, Future & Philosophy (Deep bonding)";
        examples = `
          - "未来五年，你最期待的生活画面？"
          - "如果不考虑钱，你最想做什么工作？"
          - "你觉得我们之间最特别的默契是什么？"
        `;
      }

      prompt = `Generate a single conversation card for a couple.
         **Current Stage:** ${theme}
         **Language:** Simplified Chinese (Colloquial, Warm, Simple).
         **CRITICAL CONSTRAINT:** The 'description' MUST be under 18 Chinese characters. It must be a single sentence that fits perfectly in a small box.
         
         **Examples of length & tone:**
         ${examples}
         `;

    } else {
      // Activity Category
      prompt = `Generate a single interactive couple activity.
         **Language:** Simplified Chinese (Fun, Short, Actionable).
         **CRITICAL CONSTRAINT:** The 'description' MUST be under 15 Chinese characters.
         **Requirements:** Simple, low prep, fun interactions.
         
         **Examples:**
         - "互画肖像，不限画风，画完分享 🎨"
         - "一起做顿饭，全程合作不许偷懒 🍳"
         - "一起翻看三年前的旧照片 📸"
         - "对视挑战：坚持3分钟不许笑 👀"`;
    }

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 1.2, // Slightly higher for variety
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as GeneratedContent;
      return data;
    }
    
    throw new Error("Empty response from Gemini");

  } catch (error) {
    console.error("Gemini API Error:", error);
    return getRandomFallback(category);
  }
};

const getRandomFallback = (category: Category): GeneratedContent => {
  const list = category === 'deep-talk' ? FALLBACK_TALKS : FALLBACK_ACTIVITIES;
  const item = list[Math.floor(Math.random() * list.length)];
  return {
    icon: item.icon,
    title: item.title,
    description: item.description,
    suggestion: item.suggestion || ''
  };
};
