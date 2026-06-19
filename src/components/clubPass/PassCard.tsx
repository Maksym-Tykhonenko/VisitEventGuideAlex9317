import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {colors, fonts} from '../../constants/theme';
import type {GuestInfo} from '../../types/clubPass';
import {PassQRCode} from './PassQRCode';

type PassCardProps = {
  guest: GuestInfo;
  qrValue: string;
  onQrPress?: () => void;
};

type DetailField = {
  label: string;
  value: string;
};

export function PassCard({guest, qrValue, onQrPress}: PassCardProps) {
  const fields: DetailField[] = [
    {label: 'Club Card ID', value: guest.clubCardId},
    {label: 'Visit Type', value: guest.visitType},
    {label: 'Access Level', value: guest.accessLevel},
    {label: 'Visit Date', value: guest.visitDate},
  ];

  return (
    <LinearGradient
      colors={['#140f12', '#1e1620']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.PassCardFacetChassis}>
      <View style={styles.PassCardInnerEnclave}>
        <View style={styles.PassCardHeader}>
          <View>
            <Text style={styles.PassCardEyebrowFiligree}>Jacks Club Pass</Text>
            <Text style={styles.PassCardGuestFiligree}>{guest.guestName}</Text>
          </View>
        </View>

        <View style={styles.PassCardDividerLintel} />

        <View style={styles.PassCardGrid}>
          {fields.map(field => (
            <View key={field.label} style={styles.PassCardGridCell}>
              <Text style={styles.PassCardFieldLabelFiligree}>{field.label}</Text>
              <Text style={styles.PassCardFieldValueFiligree}>{field.value}</Text>
            </View>
          ))}
        </View>

        <Pressable
          onPress={onQrPress}
          style={styles.PassCardQrEnclave}
          disabled={!onQrPress}>
          <PassQRCode
            value={qrValue}
            size={130}
            backgroundColor={colors.qrBackground}
          />
          <Text style={styles.PassCardQrHintFiligree}>
            Present this pass at reception for venue access and club benefits.
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  PassCardFacetChassis: {
    borderColor: colors.borderAccent,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  PassCardInnerEnclave: {
    gap: 10,
    padding: 21,
  },
  PassCardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PassCardEyebrowFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.26,
    textTransform: 'uppercase',
  },
  PassCardGuestFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 20,
    marginTop: 3,
  },
  PassCardDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    width: '100%',
  },
  PassCardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  PassCardGridCell: {
    gap: 3,
    width: '47%',
  },
  PassCardFieldLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  PassCardFieldValueFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansMedium,
    fontSize: 12,
  },
  PassCardQrEnclave: {
    alignItems: 'center',
    backgroundColor: colors.qrBackground,
    borderRadius: 12,
    gap: 8,
    paddingBottom: 10,
    paddingTop: 18,
  },
  PassCardQrHintFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    lineHeight: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
