import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../../data/assets';
import {colors, fonts} from '../../constants/theme';

export function GuideHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.GuideHeaderFacetChassis, {paddingTop: insets.top + 14}]}>
      <View style={styles.GuideHeaderCopy}>
        <Text style={styles.GuideHeaderTitleFiligree}>Guide</Text>
        <View style={styles.GuideHeaderSubtitleRow}>
          <View style={styles.GuideHeaderDividerLintel} />
          <Text style={styles.GuideHeaderSubtitleFiligree}>
            Club Guest · Event Visitor
          </Text>
        </View>
      </View>
      <Image source={icons.jacksCasino} style={styles.GuideHeaderIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  GuideHeaderFacetChassis: {
    alignItems: 'flex-end',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  GuideHeaderCopy: {
    flex: 1,
    gap: 4,
  },
  GuideHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 20,
    letterSpacing: 0.4,
  },
  GuideHeaderSubtitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  GuideHeaderDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    width: 22,
  },
  GuideHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  GuideHeaderIcon: {
    borderRadius: 9,
    height: 34,
    width: 34,
  },
});
