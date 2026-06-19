import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {ClubPassTab} from '../../types/clubPass';

type ClubPassTabsProps = {
  activeTab: ClubPassTab;
  onTabChange: (tab: ClubPassTab) => void;
};

const TABS: {id: ClubPassTab; label: string}[] = [
  {id: 'guestPass', label: 'Guest Pass'},
  {id: 'myStatus', label: 'My Status'},
];

export function ClubPassTabs({activeTab, onTabChange}: ClubPassTabsProps) {
  return (
    <View style={styles.ClubPassTabsFacetChassis}>
      {TABS.map(tab => {
        const isActive = tab.id === activeTab;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onTabChange(tab.id)}
            style={[
              styles.ClubPassTabsTabPortico,
              isActive && styles.ClubPassTabsTabPorticoActive,
            ]}>
            <Text
              style={[
                styles.ClubPassTabsLabelFiligree,
                isActive && styles.ClubPassTabsLabelFiligreeActive,
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
  ClubPassTabsFacetChassis: {
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  ClubPassTabsTabPortico: {
    alignItems: 'center',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    flex: 1,
    paddingBottom: 13,
    paddingTop: 11,
  },
  ClubPassTabsTabPorticoActive: {
    borderBottomColor: colors.primary,
  },
  ClubPassTabsLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  ClubPassTabsLabelFiligreeActive: {
    color: colors.primary,
    fontFamily: fonts.sansBold,
  },
});
