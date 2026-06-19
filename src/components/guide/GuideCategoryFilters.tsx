import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {GuideCategory} from '../../types/guide';

type GuideCategoryFiltersProps = {
  activeCategory: GuideCategory;
  onChange: (category: GuideCategory) => void;
};

const FILTERS: {id: GuideCategory; label: string}[] = [
  {id: 'all', label: '⭐ All'},
  {id: 'nature', label: '🌳 Nature'},
  {id: 'waterfront', label: '🌊 Waterfront'},
  {id: 'landmarks', label: '🏛 Landmarks'},
];

export function GuideCategoryFilters({
  activeCategory,
  onChange,
}: GuideCategoryFiltersProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.GuideCategoryFiltersRow}>
      {FILTERS.map(filter => {
        const isActive = filter.id === activeCategory;

        return (
          <Pressable
            key={filter.id}
            onPress={() => onChange(filter.id)}
            style={[
              styles.GuideCategoryFiltersChip,
              isActive && styles.GuideCategoryFiltersChipActive,
            ]}>
            <Text
              style={[
                styles.GuideCategoryFiltersLabelFiligree,
                isActive && styles.GuideCategoryFiltersLabelFiligreeActive,
              ]}>
              {filter.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  GuideCategoryFiltersRow: {
    gap: 7,
  },
  GuideCategoryFiltersChip: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  GuideCategoryFiltersChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  GuideCategoryFiltersLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  GuideCategoryFiltersLabelFiligreeActive: {
    color: colors.white,
    fontFamily: fonts.sansBold,
  },
});
