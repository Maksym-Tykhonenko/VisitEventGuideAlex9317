import type {ImageSourcePropType} from 'react-native';

import {onboardingBackgrounds} from './assets';

export type OnboardingStep = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    image: onboardingBackgrounds.step1,
    title: 'Welcome to \nVisit Jacks',
    description:
      'Your all-in-one guide to the Jacks Event Casino. Access your club pass, explore dining, browse venue events, discover city attractions, and get instant answers from our guide assistant.',
  },
  {
    image: onboardingBackgrounds.step2,
    title: 'Club Access Pass',
    description:
      'Carry your personalized club pass with a scannable code, view your membership tier, and present it at reception or any venue checkpoint for seamless entry.',
  },
  {
    image: onboardingBackgrounds.step3,
    title: 'Venue Dining',
    description:
      'Browse the full dining menu with categories, descriptions and prices. Select items, adjust quantities, add notes, and submit your table request in seconds.',
  },
  {
    image: onboardingBackgrounds.step4,
    title: 'Your Jacks Experience',
    description:
      'This guide is designed to enhance every step of your visit to Jacks Event Casino — from arrival to dining, entertainment and city exploration. Enjoy your time at the venue.',
  },
];
