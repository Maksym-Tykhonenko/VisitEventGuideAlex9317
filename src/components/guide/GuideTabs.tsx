import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {GuideTab} from '../../types/guide';

type GuideTabsProps = {
  activeTab: GuideTab;
  onChange: (tab: GuideTab) => void;
};

const TABS: {id: GuideTab; label: string}[] = [
  {id: 'explore', label: 'Explore Places'},
  {id: 'saved', label: 'Saved Locations'},
];

export function GuideTabs({activeTab, onChange}: GuideTabsProps) {
  return (
    <View style={styles.GuideTabsFacetChassis}>
      {TABS.map(tab => {
        const isActive = tab.id === activeTab;

        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={[styles.GuideTabsItem, isActive && styles.GuideTabsItemActive]}>
            <Text
              style={[
                styles.GuideTabsLabelFiligree,
                isActive && styles.GuideTabsLabelFiligreeActive,
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  GuideTabsFacetChassis: {
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  GuideTabsItem: {
    alignItems: 'center',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    flex: 1,
    paddingBottom: 13,
    paddingTop: 11,
  },
  GuideTabsItemActive: {
    borderBottomColor: colors.primary,
  },
  GuideTabsLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    textAlign: 'center',
  },
  GuideTabsLabelFiligreeActive: {
    color: colors.primary,
    fontFamily: fonts.sansBold,
  },
});
