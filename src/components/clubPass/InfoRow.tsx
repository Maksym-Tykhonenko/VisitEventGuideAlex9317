import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type InfoRowProps = {
  label: string;
  value: string;
  isLast?: boolean;
};

export function InfoRow({label, value, isLast = false}: InfoRowProps) {
  return (
    <View
      style={[
        styles.InfoRowFacetChassis,
        !isLast && styles.InfoRowFacetChassisBordered,
      ]}>
      <Text style={styles.InfoRowLabelFiligree}>{label}</Text>
      <Text style={styles.InfoRowValueFiligree}>{value || '—'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  InfoRowFacetChassis: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 9,
    paddingTop: 8,
  },
  InfoRowFacetChassisBordered: {
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
  },
  InfoRowLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  InfoRowValueFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansMedium,
    fontSize: 13,
  },
});
