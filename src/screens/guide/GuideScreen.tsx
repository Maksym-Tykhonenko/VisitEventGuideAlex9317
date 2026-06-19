import React, {useMemo, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {GuideCategoryFilters} from '../../components/guide/GuideCategoryFilters';
import {GuideHeader} from '../../components/guide/GuideHeader';
import {GuideLocationCard} from '../../components/guide/GuideLocationCard';
import {GuideMapPreview} from '../../components/guide/GuideMapPreview';
import {GuideSearchBar} from '../../components/guide/GuideSearchBar';
import {GuideTabs} from '../../components/guide/GuideTabs';
import {useGuideSaved} from '../../context/GuideSavedContext';
import {filterGuideLocations} from '../../data/guide';
import {colors, fonts} from '../../constants/theme';
import type {GuideCategory, GuideTab} from '../../types/guide';

type GuideScreenProps = {
  onOpenLocation: (locationId: string) => void;
};

export function GuideScreen({onOpenLocation}: GuideScreenProps) {
  const {savedIds, isSaved, toggleSaved} = useGuideSaved();
  const [guideTab, setGuideTab] = useState<GuideTab>('explore');
  const [category, setCategory] = useState<GuideCategory>('all');
  const [query, setQuery] = useState('');
  const [highlightedLocationId, setHighlightedLocationId] = useState<
    string | null
  >(null);

  const locations = useMemo(
    () =>
      filterGuideLocations({
        query,
        category: guideTab === 'saved' ? 'all' : category,
        savedIds,
        tab: guideTab,
      }),
    [category, guideTab, query, savedIds],
  );

  return (
    <View style={styles.GuideScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={styles.GuideScreenScrollContent}
        showsVerticalScrollIndicator={false}>
        <GuideHeader />
        <GuideTabs activeTab={guideTab} onChange={setGuideTab} />

        <View style={styles.GuideScreenBody}>
          <GuideSearchBar value={query} onChangeText={setQuery} />

          {guideTab === 'explore' && (
            <>
              <GuideCategoryFilters
                activeCategory={category}
                onChange={setCategory}
              />
              <GuideMapPreview
                selectedLocationId={highlightedLocationId}
                onSelectLocation={locationId => {
                  setHighlightedLocationId(locationId);
                  onOpenLocation(locationId);
                }}
              />
            </>
          )}

          <View style={styles.GuideScreenList}>
            {locations.length > 0 ? (
              locations.map(location => (
                <GuideLocationCard
                  key={location.id}
                  location={location}
                  isSaved={isSaved(location.id)}
                  isHighlighted={highlightedLocationId === location.id}
                  onToggleSave={() => toggleSaved(location.id)}
                  onOpenDetails={() => onOpenLocation(location.id)}
                />
              ))
            ) : (
              <View style={styles.GuideScreenEmpty}>
                <Text style={styles.GuideScreenEmptyFiligree}>
                  {guideTab === 'saved'
                    ? 'No saved locations yet. Tap + Save on any place to keep it here.'
                    : 'No places match your search.'}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  GuideScreenScrollContent: {
    paddingBottom: 16,
  },
  GuideScreenBody: {
    gap: 9,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  GuideScreenList: {
    gap: 10,
    paddingTop: 3,
  },
  GuideScreenEmpty: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  GuideScreenEmptyFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
  },
});
