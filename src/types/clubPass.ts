export type ClubPassTab = 'guestPass' | 'myStatus';

export type MainTab = 'pass' | 'dining' | 'events' | 'guide' | 'chat';

export type MainOverlay = 'fullView' | 'editGuest' | null;

export type GuestInfo = {
  guestName: string;
  visitType: string;
  clubCardId: string;
  accessLevel: string;
  visitDate: string;
  preferredContact: string;
  notes: string;
};

export type MembershipTier = {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  status: 'active' | 'locked';
  statusDescription?: string;
  discount?: string;
  benefits?: string[];
  footerNote?: string;
};
