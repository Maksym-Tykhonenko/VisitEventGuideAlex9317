import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {GuestInfo} from '../../types/clubPass';
import {InfoRow} from './InfoRow';

type GuestInfoSectionProps = {
  guest: GuestInfo;
  onPress?: () => void;
};

export function GuestInfoSection({guest, onPress}: GuestInfoSectionProps) {
  const content = (
    <View style={styles.GuestInfoSectionFacetChassis}>
      <Text style={styles.GuestInfoSectionTitleFiligree}>Guest Information</Text>
      <InfoRow label="Guest Name" value={guest.guestName} />
      <InfoRow label="Visit Type" value={guest.visitType} />
      <InfoRow label="Preferred Contact" value={guest.preferredContact} />
      <InfoRow label="Notes" value={guest.notes} isLast />
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.GuestInfoSectionPressable}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  GuestInfoSectionPressable: {
    width: '100%',
  },
  GuestInfoSectionFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  GuestInfoSectionTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 15,
    marginBottom: 10,
  },
});
