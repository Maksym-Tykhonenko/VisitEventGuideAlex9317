import type {VenueEvent, WeekDay} from '../types/events';

function parseTimeSort(time: string): number {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    return 0;
  }

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  }
  if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

export const VENUE_EVENTS: VenueEvent[] = [
  {
    id: 'jacks-service-preview-hour',
    title: "Jack's Service Preview Hour",
    tag: 'Guest Services',
    time: '3:30 PM',
    timeSort: parseTimeSort('3:30 PM'),
    location: 'Reception Counter',
    weekdayIndex: 0,
    about:
      'A practical guest session where visitors can learn about available services, booking options, comfort requests, dining support, and pass activation. It helps guests understand what can be arranged during their visit.',
    whatToExpect:
      'Service overview, booking explanation, guest pass help, dining request tips, and support guidance.',
    guestNote:
      'Full app features may require in-person activation by venue staff.',
    listDescription:
      'Learn about services, bookings, and pass activation with venue staff support.',
  },
  {
    id: 'quiet-lounge-reset',
    title: 'Quiet Lounge Reset',
    tag: 'Relaxation',
    time: '4:00 PM',
    timeSort: parseTimeSort('4:00 PM'),
    location: 'Relax Lounge',
    weekdayIndex: 1,
    about:
      'A slower afternoon event for guests who want a calm pause before the evening becomes busier. The space is arranged with soft seating, gentle background music, and a lighter service atmosphere.',
    whatToExpect:
      'Relaxed seating, soft music, calm lighting, warm drinks, and a quiet guest-friendly environment.',
    guestNote:
      'Ideal for guests who prefer a low-noise break. No booking required.',
    listDescription:
      'A calm afternoon pause with soft seating, gentle music, and warm drinks.',
  },
  {
    id: 'jacks-signature-plate-hour',
    title: "Jack's Signature Plate Hour",
    tag: 'Dining Highlight',
    time: '5:45 PM',
    timeSort: parseTimeSort('5:45 PM'),
    location: 'Restaurant Section',
    weekdayIndex: 3,
    about:
      'A focused dining event where guests can try one featured house plate prepared specially for the evening. Each session highlights a different dish, from seafood plates to warm comfort meals and creative desserts.',
    whatToExpect:
      'Featured chef dish, short menu presentation, paired drink suggestions, and limited-time dining offers.',
    guestNote:
      'Arrive early if you want the featured plate, as quantities may be limited.',
    listDescription:
      'Try a featured house plate with chef presentation and paired drink suggestions.',
  },
  {
    id: 'golden-hour-meet-guide',
    title: 'The Golden Hour Meet & Guide',
    tag: 'Guest Welcome',
    time: '5:30 PM',
    timeSort: parseTimeSort('5:30 PM'),
    location: 'Guide Counter',
    weekdayIndex: 2,
    about:
      'A short guest orientation moment where visitors can learn about available dining sections, event spaces, service requests, and useful locations inside the venue. It is designed to help new visitors feel more comfortable.',
    whatToExpect:
      'Venue guidance, app pass explanation, event overview, dining suggestions, and service information.',
    guestNote: 'Recommended for first-time visitors. Staff can help explain how to use the app during the visit.',
    listDescription:
      'A guest orientation with venue guidance, dining tips, and app pass help.',
  },
  {
    id: 'red-card-tasting-table',
    title: 'The Red Card Tasting Table',
    tag: 'Food Experience',
    time: '6:30 PM',
    timeSort: parseTimeSort('6:30 PM'),
    location: 'Dining Hall',
    weekdayIndex: 1,
    about:
      'A small tasting-style dining moment featuring selected chef bites inspired by bold flavors, warm spices, and elegant evening plates. Guests can discover special menu items prepared only for this event.',
    whatToExpect:
      'Mini tasting plates, chef recommendations, limited evening dishes, and relaxed table service.',
    guestNote:
      'Dining request is recommended through the app. Menu items may change depending on availability.',
    listDescription:
      'Chef tasting bites with bold flavors, warm spices, and limited evening dishes.',
  },
  {
    id: 'guide-trail-challenge',
    title: 'The Guide Trail Challenge',
    tag: 'Venue Discovery',
    time: '6:00 PM',
    timeSort: parseTimeSort('6:00 PM'),
    location: 'Starts at Main Lobby',
    weekdayIndex: 5,
    about:
      'A light discovery activity where guests follow a simple trail through key visitor sections inside the venue. It encourages guests to explore dining, lounge, event, and guide sections in a more interactive way.',
    whatToExpect:
      'Simple trail prompts, venue discovery points, guest guide tips, and a casual self-paced format.',
    guestNote: 'Use the Guide screen in the app to follow the recommended trail.',
    listDescription:
      'A self-paced trail through key venue sections with discovery prompts and guide tips.',
  },
  {
    id: 'jacks-lantern-lobby-session',
    title: "Jack's Lantern Lobby Session",
    tag: 'Acoustic Evening',
    time: '7:00 PM',
    timeSort: parseTimeSort('7:00 PM'),
    location: 'Main Lobby',
    weekdayIndex: 0,
    about:
      'A calm acoustic performance held near the main entrance foyer, designed to create a warm first impression for evening guests. Soft guitar, piano, and vocal sets bring a relaxed atmosphere before dinner or lounge time.',
    whatToExpect:
      'Live acoustic music, soft lobby lighting, comfortable standing and seating sections, and a calm arrival mood.',
    guestNote:
      'Best enjoyed before dining or while waiting for friends. No reservation required.',
    listDescription:
      'Soft acoustic sets with warm lobby lighting and a relaxed arrival atmosphere.',
  },
  {
    id: 'jacks-night-arrival-welcome',
    title: "Jack's Night Arrival Welcome",
    tag: 'Arrival Event',
    time: '7:30 PM',
    timeSort: parseTimeSort('7:30 PM'),
    location: 'Main Entrance',
    weekdayIndex: 5,
    about:
      'A short welcome moment for evening visitors with ambient music, guest guidance, and a refined arrival atmosphere. It sets the tone for guests before they continue to dining, events, or lounge sections.',
    whatToExpect:
      'Welcome music, soft lighting, quick guest directions, and a polished entrance experience.',
    guestNote:
      'Great for guests arriving for the first time or meeting friends inside the venue.',
    listDescription:
      'An elegant welcome with ambient music, soft lighting, and guest directions.',
  },
  {
    id: 'main-lounge-story-night',
    title: 'Main Lounge Story Night',
    tag: 'Spoken Evening',
    time: '8:00 PM',
    timeSort: parseTimeSort('8:00 PM'),
    location: 'Main Lounge',
    weekdayIndex: 3,
    about:
      'A hosted evening with short stories, local anecdotes, guest-friendly humor, and relaxed stage moments. The event is designed to feel personal, warm, and different from a standard music night.',
    whatToExpect:
      'Host-led storytelling, short live segments, comfortable lounge seating, and an easygoing atmosphere.',
    guestNote:
      'Best for guests who enjoy calm entertainment without loud music.',
    listDescription:
      'Hosted storytelling with humor, live segments, and comfortable lounge seating.',
  },
  {
    id: 'after-dark-piano-corner',
    title: 'After Dark Piano Corner',
    tag: 'Lounge Music',
    time: '8:15 PM',
    timeSort: parseTimeSort('8:15 PM'),
    location: 'Corner Lounge',
    weekdayIndex: 2,
    about:
      'An intimate piano session created for guests who prefer a quieter and more elegant break during their visit. The music is soft, slow, and atmospheric, making it ideal for conversation or a calm drink.',
    whatToExpect:
      'Solo piano performance, warm lounge seating, low lighting, and a peaceful evening setting.',
    guestNote:
      'Smart casual style is recommended. Seating is limited during peak hours.',
    listDescription:
      'Intimate solo piano with low lighting and a peaceful lounge atmosphere.',
  },
  {
    id: 'candlelight-dessert-moment',
    title: 'Candlelight Dessert Moment',
    tag: 'Sweet Evening',
    time: '8:45 PM',
    timeSort: parseTimeSort('8:45 PM'),
    location: 'Dining Lounge',
    weekdayIndex: 4,
    about:
      'A cozy dessert-focused evening with selected sweets, warm drinks, and a softer dining atmosphere. It is designed as a calm final part of the visit after dinner, music, or a lounge event.',
    whatToExpect:
      'Dessert plates, warm drinks, soft table lighting, relaxed seating, and a quiet evening mood.',
    guestNote:
      'Recommended for couples, small groups, or guests who prefer a slower end to the evening.',
    listDescription:
      'Cozy desserts, warm drinks, and soft lighting for a calm evening finish.',
  },
  {
    id: 'jacks-late-bite-social',
    title: "Jack's Late Bite Social",
    tag: 'Casual Dining',
    time: '9:45 PM',
    timeSort: parseTimeSort('9:45 PM'),
    location: 'Bar & Dining Section',
    weekdayIndex: 4,
    about:
      'A relaxed late-evening food event focused on small plates, warm snacks, and shareable dishes. It is made for guests who want something lighter after an event or before leaving the venue.',
    whatToExpect:
      'Small plates, late snacks, casual seating, light background music, and quick dining service.',
    guestNote:
      'Perfect for groups or guests who want a simple final stop before departure.',
    listDescription:
      'Late-evening small plates and shareable snacks with casual seating.',
  },
];

const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function getCurrentWeekDays(referenceDate = new Date()): WeekDay[] {
  const date = new Date(referenceDate);
  const day = date.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(date);
  monday.setHours(12, 0, 0, 0);
  monday.setDate(date.getDate() + mondayOffset);

  return WEEKDAY_LABELS.map((label, index) => {
    const current = new Date(monday);
    current.setDate(monday.getDate() + index);

    return {
      key: `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`,
      label,
      date: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
      weekdayIndex: index,
    };
  });
}

export function getDefaultWeekdayIndex(weekDays: WeekDay[]): number {
  const today = weekDays.find(
    day =>
      day.date === new Date().getDate() &&
      day.month === new Date().getMonth() &&
      day.year === new Date().getFullYear(),
  );

  if (today) {
    return today.weekdayIndex;
  }

  const firstWithEvents = weekDays.find(day =>
    VENUE_EVENTS.some(event => event.weekdayIndex === day.weekdayIndex),
  );

  return firstWithEvents?.weekdayIndex ?? 0;
}

export function getEventsForWeekday(weekdayIndex: number): VenueEvent[] {
  return VENUE_EVENTS.filter(event => event.weekdayIndex === weekdayIndex).sort(
    (left, right) => left.timeSort - right.timeSort,
  );
}

export function getEventById(eventId: string): VenueEvent | undefined {
  return VENUE_EVENTS.find(event => event.id === eventId);
}

export function hasEventsOnWeekday(weekdayIndex: number): boolean {
  return VENUE_EVENTS.some(event => event.weekdayIndex === weekdayIndex);
}

export function formatEventScheduleLabel(
  time: string,
  weekDay: WeekDay,
  referenceDate = new Date(),
): string {
  const isToday =
    weekDay.date === referenceDate.getDate() &&
    weekDay.month === referenceDate.getMonth() &&
    weekDay.year === referenceDate.getFullYear();

  if (isToday) {
    return `${time} — Tonight`;
  }

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return `${time} — ${dayNames[weekDay.weekdayIndex]}`;
}
