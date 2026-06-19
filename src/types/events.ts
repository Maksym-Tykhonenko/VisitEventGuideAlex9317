export type EventsOverlay = 'detail' | null;

export type WeekDay = {
  key: string;
  label: string;
  date: number;
  month: number;
  year: number;
  weekdayIndex: number;
};

export type VenueEvent = {
  id: string;
  title: string;
  tag: string;
  time: string;
  timeSort: number;
  location: string;
  weekdayIndex: number;
  about: string;
  whatToExpect: string;
  guestNote: string;
  listDescription: string;
};
