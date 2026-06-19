import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../../data/assets';
import {colors, fonts} from '../../constants/theme';

type ClubPassHeaderProps = {
  subtitle: string;
};

export function ClubPassHeader({subtitle}: ClubPassHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.ClubPassHeaderFacetChassis,
        {paddingTop: insets.top + 14},
      ]}>
      <View style={styles.ClubPassHeaderCopy}>
        <Text style={styles.ClubPassHeaderTitleFiligree}>Club Pass</Text>
        <View style={styles.ClubPassHeaderSubtitleRow}>
          <View style={styles.ClubPassHeaderDividerLintel} />
          <Text style={styles.ClubPassHeaderSubtitleFiligree}>{subtitle}</Text>
        </View>
      </View>
      <Image source={icons.jacksCasino} style={styles.ClubPassHeaderLogoSigil} />
    </View>
  );
}

const styles = StyleSheet.create({
  ClubPassHeaderFacetChassis: {
    alignItems: 'flex-end',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  ClubPassHeaderCopy: {
    flex: 1,
    gap: 4,
  },
  ClubPassHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 20,
    letterSpacing: 0.4,
  },
  ClubPassHeaderSubtitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  ClubPassHeaderDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    width: 22,
  },
  ClubPassHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  ClubPassHeaderLogoSigil: {
    borderRadius: 9,
    height: 34,
    width: 34,
  },
});
