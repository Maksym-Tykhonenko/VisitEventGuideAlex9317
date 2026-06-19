import type {ImageSourcePropType} from 'react-native';

export type DiningOverlay =
  | 'cart'
  | 'summary'
  | 'received'
  | 'orders'
  | null;

export type MenuItem = {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: number;
  prepMinutes: number;
  imageKey: string;
  gradient: [string, string];
};

export type CartLine = {
  itemId: string;
  quantity: number;
};

export type PlacedOrderItem = {
  name: string;
  quantity: number;
  lineTotal: number;
  prepMinutes: number;
};

export type PlacedOrder = {
  id: number;
  guestName: string;
  status: 'received';
  placedAt: string;
  items: PlacedOrderItem[];
  subtotal: number;
  total: number;
  prepMinutes: number;
  notes?: string;
};

export type DiningImageMap = Record<string, ImageSourcePropType>;
