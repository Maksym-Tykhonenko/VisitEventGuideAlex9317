import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type GuideInfoCardProps = {
  label: string;
  body: string;
};

export function GuideInfoCard({label, body}: GuideInfoCardProps) {
  return (
    <View style={styles.GuideInfoCardFacetChassis}>
      <Text style={styles.GuideInfoCardLabelFiligree}>{label}</Text>
      <Text style={styles.GuideInfoCardBodyFiligree}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideInfoCardFacetChassis: {
    alignSelf: 'stretch',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    gap: 5,
    paddingBottom: 15,
    paddingHorizontal: 17,
    paddingTop: 18,
    width: '100%',
  },
  GuideInfoCardLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  GuideInfoCardBodyFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 19.8,
  },
});
