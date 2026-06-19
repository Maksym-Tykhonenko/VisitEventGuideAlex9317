import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {TAB_ICONS} from '../../data/tabIcons';
import {colors, fonts} from '../../constants/theme';
import type {MainTab} from '../../types/clubPass';

type BottomTabBarProps = {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
};

const TABS: {id: MainTab; label: string}[] = [
  {id: 'pass', label: 'Pass'},
  {id: 'dining', label: 'Dining'},
  {id: 'events', label: 'Events'},
  {id: 'guide', label: 'Guide'},
  {id: 'chat', label: 'Chat'},
];

export function BottomTabBar({activeTab, onTabChange}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.BottomTabBarFacetChassis,
        {paddingBottom: Math.max(insets.bottom, 8)},
      ]}>
      {TABS.map(tab => {
        const isActive = tab.id === activeTab;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onTabChange(tab.id)}
            style={styles.BottomTabBarTabPortico}>
            {isActive && <View style={styles.BottomTabBarActiveLintel} />}
            <Image
              source={TAB_ICONS[tab.id]}
              style={styles.BottomTabBarIconFiligree}
              tintColor={isActive ? colors.primary : colors.body}
            />
            <Text
              style={[
                styles.BottomTabBarLabelFiligree,
                isActive && styles.BottomTabBarLabelFiligreeActive,
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
  BottomTabBarFacetChassis: {
    backgroundColor: colors.background,
    borderTopColor: colors.progressTrack,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 7,
  },
  BottomTabBarTabPortico: {
    alignItems: 'center',
    flex: 1,
    gap: 3,
    paddingVertical: 6,
  },
  BottomTabBarActiveLintel: {
    backgroundColor: colors.primary,
    borderRadius: 1,
    height: 2,
    position: 'absolute',
    top: 0,
    width: 28,
  },
  BottomTabBarIconFiligree: {
    height: 22,
    width: 22,
  },
  BottomTabBarLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.4,
  },
  BottomTabBarLabelFiligreeActive: {
    color: colors.primary,
    fontFamily: fonts.sansBold,
  },
});
