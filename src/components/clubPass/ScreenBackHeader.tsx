import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, fonts} from '../../constants/theme';

type ScreenBackHeaderProps = {
  title: string;
  backLabel: string;
  onBack: () => void;
};

export function ScreenBackHeader({
  title,
  backLabel,
  onBack,
}: ScreenBackHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.ScreenBackHeaderFacetChassis,
        {paddingTop: insets.top + 14},
      ]}>
      <Pressable onPress={onBack} style={styles.ScreenBackHeaderBackPortico}>
        <Text style={styles.ScreenBackHeaderChevronFiligree}>‹</Text>
        <Text style={styles.ScreenBackHeaderBackFiligree}>{backLabel}</Text>
      </Pressable>
      <Text style={styles.ScreenBackHeaderTitleFiligree}>{title}</Text>
      <View style={styles.ScreenBackHeaderSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenBackHeaderFacetChassis: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    minHeight: 52,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  ScreenBackHeaderBackPortico: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    minWidth: 90,
  },
  ScreenBackHeaderChevronFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 22,
    lineHeight: 22,
    marginTop: -2,
  },
  ScreenBackHeaderBackFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
  },
  ScreenBackHeaderTitleFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.serifRegular,
    fontSize: 17,
    textAlign: 'center',
  },
  ScreenBackHeaderSpacer: {
    minWidth: 90,
  },
});
