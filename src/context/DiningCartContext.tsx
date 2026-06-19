import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  getMenuItemById,
  MENU_ITEMS,
  SERVICE_FEE_RATE,
} from '../data/dining';
import type {CartLine, MenuItem, PlacedOrder} from '../types/dining';

type CartTotals = {
  itemCount: number;
  subtotal: number;
  serviceFee: number;
  total: number;
  prepMinutes: number;
};

type DiningCartContextValue = {
  cart: CartLine[];
  notes: string;
  orders: PlacedOrder[];
  setNotes: (notes: string) => void;
  getQuantity: (itemId: string) => number;
  addItem: (itemId: string) => void;
  incrementItem: (itemId: string) => void;
  decrementItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  submitOrder: (guestName: string) => PlacedOrder | null;
  getCartItems: () => {item: MenuItem; quantity: number; lineTotal: number}[];
  totals: CartTotals;
};

const DiningCartContext = createContext<DiningCartContextValue | null>(null);

const buildTotals = (lines: CartLine[]): CartTotals => {
  let itemCount = 0;
  let subtotal = 0;
  let prepMinutes = 0;

  lines.forEach(line => {
    const item = getMenuItemById(line.itemId);
    if (!item) {
      return;
    }
    itemCount += line.quantity;
    subtotal += item.price * line.quantity;
    prepMinutes = Math.max(prepMinutes, item.prepMinutes);
  });

  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  return {
    itemCount,
    subtotal,
    serviceFee,
    total: subtotal + serviceFee,
    prepMinutes,
  };
};

export function DiningCartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [notes, setNotes] = useState('');
  const [orders, setOrders] = useState<PlacedOrder[]>([]);
  const [orderCounter, setOrderCounter] = useState(1);

  const getQuantity = useCallback(
    (itemId: string) => cart.find(line => line.itemId === itemId)?.quantity ?? 0,
    [cart],
  );

  const upsertLine = useCallback((itemId: string, delta: number) => {
    setCart(prev => {
      const existing = prev.find(line => line.itemId === itemId);
      if (!existing) {
        if (delta <= 0) {
          return prev;
        }
        return [...prev, {itemId, quantity: delta}];
      }

      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) {
        return prev.filter(line => line.itemId !== itemId);
      }

      return prev.map(line =>
        line.itemId === itemId ? {...line, quantity: nextQty} : line,
      );
    });
  }, []);

  const addItem = useCallback(
    (itemId: string) => upsertLine(itemId, 1),
    [upsertLine],
  );
  const incrementItem = useCallback(
    (itemId: string) => upsertLine(itemId, 1),
    [upsertLine],
  );
  const decrementItem = useCallback(
    (itemId: string) => upsertLine(itemId, -1),
    [upsertLine],
  );
  const removeItem = useCallback(
    (itemId: string) =>
      setCart(prev => prev.filter(line => line.itemId !== itemId)),
    [],
  );

  const clearCart = useCallback(() => {
    setCart([]);
    setNotes('');
  }, []);

  const getCartItems = useCallback(() => {
    return cart
      .map(line => {
        const item = getMenuItemById(line.itemId);
        if (!item) {
          return null;
        }
        return {
          item,
          quantity: line.quantity,
          lineTotal: item.price * line.quantity,
        };
      })
      .filter(
        (
          entry,
        ): entry is {item: MenuItem; quantity: number; lineTotal: number} =>
          entry !== null,
      );
  }, [cart]);

  const totals = useMemo(() => buildTotals(cart), [cart]);

  const submitOrder = useCallback(
    (guestName: string) => {
      const cartItems = getCartItems();
      if (cartItems.length === 0) {
        return null;
      }

      const currentTotals = buildTotals(cart);
      const order: PlacedOrder = {
        id: orderCounter,
        guestName,
        status: 'received',
        placedAt: new Date().toLocaleString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        items: cartItems.map(entry => ({
          name: entry.item.name,
          quantity: entry.quantity,
          lineTotal: entry.lineTotal,
          prepMinutes: entry.item.prepMinutes,
        })),
        subtotal: currentTotals.subtotal,
        total: currentTotals.total,
        prepMinutes: currentTotals.prepMinutes,
        notes: notes.trim() || undefined,
      };

      setOrders(prev => [order, ...prev]);
      setOrderCounter(prev => prev + 1);
      clearCart();
      return order;
    },
    [cart, clearCart, getCartItems, notes, orderCounter],
  );

  const value = useMemo(
    () => ({
      cart,
      notes,
      orders,
      setNotes,
      getQuantity,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
      submitOrder,
      getCartItems,
      totals,
    }),
    [
      cart,
      notes,
      orders,
      getQuantity,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
      submitOrder,
      getCartItems,
      totals,
    ],
  );

  return (
    <DiningCartContext.Provider value={value}>
      {children}
    </DiningCartContext.Provider>
  );
}

export function useDiningCart() {
  const context = useContext(DiningCartContext);
  if (!context) {
    throw new Error('useDiningCart must be used within DiningCartProvider');
  }
  return context;
}

export {MENU_ITEMS};
