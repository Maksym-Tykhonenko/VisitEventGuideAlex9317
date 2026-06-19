import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type EventInfoCardProps = {
  label: string;
  body: string;
};

export function EventInfoCard({label, body}: EventInfoCardProps) {
  return (
    <View style={styles.EventInfoCardFacetChassis}>
      <Text style={styles.EventInfoCardLabelFiligree}>{label}</Text>
      <Text style={styles.EventInfoCardBodyFiligree}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  EventInfoCardFacetChassis: {
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
  EventInfoCardLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  EventInfoCardBodyFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 19.8,
  },
});
