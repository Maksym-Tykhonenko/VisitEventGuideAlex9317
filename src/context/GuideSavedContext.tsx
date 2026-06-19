import React, {createContext, useContext, useMemo, useState} from 'react';

type GuideSavedContextValue = {
  savedIds: string[];
  isSaved: (locationId: string) => boolean;
  toggleSaved: (locationId: string) => void;
};

const GuideSavedContext = createContext<GuideSavedContextValue | null>(null);

export function GuideSavedProvider({children}: {children: React.ReactNode}) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const value = useMemo<GuideSavedContextValue>(
    () => ({
      savedIds,
      isSaved: locationId => savedIds.includes(locationId),
      toggleSaved: locationId => {
        setSavedIds(current =>
          current.includes(locationId)
            ? current.filter(id => id !== locationId)
            : [...current, locationId],
        );
      },
    }),
    [savedIds],
  );

  return (
    <GuideSavedContext.Provider value={value}>
      {children}
    </GuideSavedContext.Provider>
  );
}

export function useGuideSaved() {
  const context = useContext(GuideSavedContext);
  if (!context) {
    throw new Error('useGuideSaved must be used within GuideSavedProvider');
  }
  return context;
}
