import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import {DEFAULT_GUEST_INFO} from '../data/clubPass';
import type {GuestInfo} from '../types/clubPass';

type GuestInfoContextValue = {
  guest: GuestInfo;
  updateGuest: (updates: Partial<GuestInfo>) => void;
};

const GuestInfoContext = createContext<GuestInfoContextValue | null>(null);

export function GuestInfoProvider({children}: {children: React.ReactNode}) {
  const [guest, setGuest] = useState<GuestInfo>(DEFAULT_GUEST_INFO);

  const updateGuest = useCallback((updates: Partial<GuestInfo>) => {
    setGuest(prev => ({...prev, ...updates}));
  }, []);

  const value = useMemo(
    () => ({
      guest,
      updateGuest,
    }),
    [guest, updateGuest],
  );

  return (
    <GuestInfoContext.Provider value={value}>{children}</GuestInfoContext.Provider>
  );
}

export function useGuestInfo() {
  const context = useContext(GuestInfoContext);
  if (!context) {
    throw new Error('useGuestInfo must be used within GuestInfoProvider');
  }
  return context;
}
