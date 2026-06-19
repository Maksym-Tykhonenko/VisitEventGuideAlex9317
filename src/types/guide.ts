export type GuideOverlay = 'detail' | null;

export type GuideTab = 'explore' | 'saved';

export type GuideCategory = 'all' | 'nature' | 'waterfront' | 'landmarks';

export type GuideLocation = {
  id: string;
  title: string;
  tag: string;
  latitude: number;
  longitude: number;
  about: string;
  visitorTips: string;
  goodFor: string;
  imageKey: string;
  categories: Exclude<GuideCategory, 'all'>[];
  listDescription: string;
};
