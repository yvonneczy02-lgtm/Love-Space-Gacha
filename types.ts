export type Category = 'deep-talk' | 'activity';

export interface CardData {
  id: string;
  category: Category;
  title: string;
  description: string;
  suggestion?: string; // Additional tip or fun fact
  icon: string; // Emoji or simple character
  timestamp: number;
}

export interface GeneratedContent {
  title: string;
  description: string;
  suggestion: string;
  icon: string;
}