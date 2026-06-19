export type ChatMessageRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatMessageRole;
  text: string;
};

export type ChatFaq = {
  id: string;
  question: string;
  tag: string;
  answer: string;
};
