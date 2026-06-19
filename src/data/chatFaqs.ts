import type {ChatFaq} from '../types/chat';

export const CHAT_FAQS: ChatFaq[] = [
  {
    id: 'activate-guest-pass',
    question: 'How do I activate my guest pass?',
    tag: 'Pass',
    answer:
      'Your guest pass can be activated during your in-person visit. Please show your QR pass at the reception counter, and venue staff can verify it to unlock the full app features.',
  },
  {
    id: 'use-app-before-visit',
    question: 'Can I use the app before visiting the venue?',
    tag: 'Access',
    answer:
      'Yes, you can browse basic venue information, preview events, view dining options, and explore the guide. Full guest features become available only after staff activation during your visit.',
  },
  {
    id: 'qr-not-activated',
    question: 'Why is my QR pass not activated yet?',
    tag: 'Pass',
    answer:
      'Your pass has not been verified at the venue yet. Visit the reception counter and ask staff to activate your guest access.',
  },
  {
    id: 'after-pass-activated',
    question: 'What can I do after my pass is activated?',
    tag: 'Pass',
    answer:
      'After activation, you can access more guest features, use service requests, unlock status benefits, view personalized visit information, and receive selected venue-related options.',
  },
  {
    id: 'guest-status-tiers',
    question: 'How do guest status tiers work?',
    tag: 'Status',
    answer:
      'Guest status tiers show different access levels and selected benefits. Higher tiers may include dining discounts, service benefits, event reminders, lounge request options, and priority guest support.',
  },
  {
    id: 'unlock-tiers',
    question: 'How do I unlock Silver Select, Gold Reserve, or Platinum Elite?',
    tag: 'Status',
    answer:
      'Higher tiers can be unlocked after your QR pass is scanned and verified by venue staff. Some tiers may depend on visit conditions, availability, or guest confirmation at the venue.',
  },
  {
    id: 'discounts-automatic',
    question: 'Are discounts applied automatically?',
    tag: 'Status',
    answer:
      'Discounts are shown as guest benefits inside the app, but they may need to be confirmed by venue staff before use. Always check with reception or service staff during your visit.',
  },
  {
    id: 'view-todays-events',
    question: "Can I view today's events in the app?",
    tag: 'Events',
    answer:
      'Yes, open the Events screen to see available activities, times, locations, and event details such as what to expect and guest notes.',
  },
  {
    id: 'reserve-events',
    question: 'Do I need to reserve a place for events?',
    tag: 'Events',
    answer:
      'Some events may be open to all guests, while others may have limited space. If an event has a guest note about seating or requests, it is best to check early or ask staff.',
  },
  {
    id: 'order-food',
    question: 'Can I order food through the app?',
    tag: 'Dining',
    answer:
      'The app can help you prepare a dining request, but final ordering or confirmation may depend on venue staff and the dining section during your visit.',
  },
  {
    id: 'service-booking',
    question: 'Is service booking confirmed instantly?',
    tag: 'Services',
    answer:
      'Not always. A request may be sent for review first, and staff confirmation may be required before the service is considered approved.',
  },
  {
    id: 'features-not-unlock',
    question: 'What should I do if the app does not unlock my features?',
    tag: 'Support',
    answer:
      'Make sure your QR pass has been scanned by venue staff. If the issue continues, ask reception to check your guest activation status.',
  },
  {
    id: 'offline-use',
    question: 'Can I use the app without an internet connection?',
    tag: 'Support',
    answer:
      'Some saved or basic information may still be visible, but live updates, requests, pass activation, and current event information may require an internet connection.',
  },
  {
    id: 'jacks-casino-only',
    question: 'Is the app only for guests visiting Jacks Casino?',
    tag: 'General',
    answer:
      'The app is designed as a visitor companion for guests who want to explore events, dining, guide information, pass access, and guest services connected with their visit.',
  },
  {
    id: 'check-first-arrival',
    question: 'What should I check first when I arrive?',
    tag: 'Visit',
    answer:
      'Start with the Pass screen and show your QR pass at reception. After activation, check Events, Dining, and Guide to plan your visit more comfortably.',
  },
  {
    id: 'plan-evening',
    question: 'What is the best way to plan my evening?',
    tag: 'Visit',
    answer:
      'First activate your pass, then choose an event, review dining options, check nearby or inside guide locations, and prepare any service request you may need.',
  },
];

export function getChatFaqById(faqId: string): ChatFaq | undefined {
  return CHAT_FAQS.find(faq => faq.id === faqId);
}

export function getChatFaqByQuestion(question: string): ChatFaq | undefined {
  return CHAT_FAQS.find(faq => faq.question === question);
}
