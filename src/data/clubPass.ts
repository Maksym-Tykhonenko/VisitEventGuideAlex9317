import type {GuestInfo, MembershipTier} from '../types/clubPass';

export const DEFAULT_GUEST_INFO: GuestInfo = {
  guestName: 'Club Guest',
  visitType: 'Event Visitor Pass',
  clubCardId: 'JACKS-VISIT-2026',
  accessLevel: 'Club Showcase',
  visitDate: 'June 2026',
  preferredContact: '',
  notes: '',
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'jacks-guest',
    name: "Jack's Guest",
    icon: '♦',
    subtitle: 'Standard Access',
    statusDescription: 'Visitor Access · Standard Visitor',
    status: 'active',
    discount: '—',
    benefits: [
      'Venue navigation access',
      'Visitor QR guest pass',
      'Events calendar view',
      'Dining menu preview',
      "Jack's visitor guide",
      'Chat with guest support',
      'Basic service request access',
    ],
    footerNote: 'Default visitor status — active on arrival.',
  },
  {
    id: 'silver-select',
    name: 'Silver Select',
    icon: '◈',
    subtitle: '5% Dining Discount',
    status: 'locked',
    benefits: [
      "All Jack's Guest benefits",
      '5% discount on selected dining items',
      'Priority dining request review',
      'Saved favorite menu items',
      'Event reminder access',
      'Guest guide quick tips',
    ],
    footerNote:
      'Unlock by scanning your QR pass at the reception counter during your visit.',
  },
  {
    id: 'gold-reserve',
    name: 'Gold Reserve',
    icon: '★',
    subtitle: '10% Venue Services',
    status: 'locked',
    benefits: [
      'All Silver Select benefits',
      '10% discount on selected guest services',
      'Priority service booking request',
      'Reserved event interest list',
      'Faster chat support response',
      'Saved visit plan access',
      'Comfort and relaxation service suggestions',
    ],
    footerNote: 'Unlock after guest verification by venue staff.',
  },
  {
    id: 'platinum-elite',
    name: 'Platinum Elite',
    icon: '✦',
    subtitle: '15% All + Lounge',
    status: 'locked',
    benefits: [
      'All Gold Reserve benefits',
      '15% discount on selected dining and guest services',
      'Lounge access request option',
      'Premium event recommendations',
      'Priority support in guest chat',
      'Personalized visit path suggestions',
      'Special comfort service request access',
      'Early access to selected venue announcements',
    ],
    footerNote:
      'Highest guest tier — available after full pass activation during an in-person visit.',
  },
];

export const GUEST_STATUS_INTRO =
  'Scan your QR pass at the reception counter during your visit to activate your guest status, unlock higher tiers, and receive selected benefits for dining, events, guide access, and venue services.';

export const getPassQrValue = (guest: GuestInfo) =>
  `${guest.clubCardId}|${guest.guestName}|${guest.visitType}`;
