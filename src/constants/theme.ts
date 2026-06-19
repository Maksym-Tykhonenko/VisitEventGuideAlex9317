import {Platform} from 'react-native';

import {fonts} from './fonts';

export const DESIGN_WIDTH = 393;
export const DESIGN_HEIGHT = 852;

export const colors = {
  background: '#08070c',
  surface: '#030807',
  primary: '#d42030',
  primaryDark: '#8c1420',
  cream: '#f0e8e0',
  body: '#7a6060',
  progressTrack: '#2c1c20',
  black: '#000000',
  white: '#ffffff',
  loaderOverlay: 'rgba(8, 7, 12, 0.89)',
  skip: '#7a6060',
  buttonText: '#ffffff',
  buttonGradientStart: '#8c1420',
  buttonGradientEnd: '#d42030',
  card: '#140f12',
  cardElevated: '#1e1620',
  qrBackground: '#0e0b10',
  borderAccent: '#3e2830',
  mutedDark: '#3a2828',
  activeBadge: '#8c1420',
  activeBadgeText: '#ffddd8',
  gold: '#e0a830',
  goldDark: '#07050a',
  success: '#2a7a48',
  cartBarBg: '#06060a',
  cartBarBorder: '#26262e',
};

export const spacing = {
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 28,
};

export const radius = {
  card: 18,
  button: 12,
  chip: 8,
  pill: 100,
};

export const fontSize = {
  brand: 11,
  caption: 11,
  body: 13,
  button: 14,
  title: 24,
  hero: 32,
};

export const layout = {
  screenPadding: 22,
  buttonHeightDefault: 52,
  onboardingHeroRatio: 430 / DESIGN_HEIGHT,
};

export const topInset = (value: number) =>
  Platform.OS === 'android' ? Math.max(value, 30) : value;

export {fonts};
