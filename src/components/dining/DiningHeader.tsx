import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, fonts} from '../../constants/theme';

type DiningHeaderProps = {
  onOrdersPress: () => void;
};

export function DiningHeader({onOrdersPress}: DiningHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.DiningHeaderFacetChassis,
        {paddingTop: insets.top + 14},
      ]}>
      <View style={styles.DiningHeaderCopy}>
        <Text style={styles.DiningHeaderTitleFiligree}>Venue Dining</Text>
        <View style={styles.DiningHeaderSubtitleRow}>
          <View style={styles.DiningHeaderDividerLintel} />
          <Text style={styles.DiningHeaderSubtitleFiligree}>
            Club Guest · Event Visitor
          </Text>
        </View>
      </View>
      <Pressable onPress={onOrdersPress} style={styles.DiningHeaderOrdersPortico}>
        <Text style={styles.DiningHeaderOrdersIconFiligree}>▤</Text>
        <Text style={styles.DiningHeaderOrdersFiligree}>Orders</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  DiningHeaderFacetChassis: {
    alignItems: 'flex-end',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  DiningHeaderCopy: {
    flex: 1,
    gap: 4,
  },
  DiningHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 20,
    letterSpacing: 0.4,
  },
  DiningHeaderSubtitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  DiningHeaderDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    width: 22,
  },
  DiningHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  DiningHeaderOrdersPortico: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 9,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  DiningHeaderOrdersIconFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  DiningHeaderOrdersFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
});
