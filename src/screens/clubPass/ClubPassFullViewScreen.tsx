import React from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {InfoRow} from '../../components/clubPass/InfoRow';
import {PassQRCode} from '../../components/clubPass/PassQRCode';
import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {useGuestInfo} from '../../context/GuestInfoContext';
import {getPassQrValue} from '../../data/clubPass';
import {colors, fonts} from '../../constants/theme';

type ClubPassFullViewScreenProps = {
  onClose: () => void;
};

export function ClubPassFullViewScreen({onClose}: ClubPassFullViewScreenProps) {
  const insets = useSafeAreaInsets();
  const {guest} = useGuestInfo();
  const qrValue = getPassQrValue(guest);

  return (
    <View style={styles.ClubPassFullViewScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={[
          styles.ClubPassFullViewScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader
          title="Club Pass — Full View"
          backLabel="Close Pass"
          onBack={onClose}
        />

        <View style={styles.ClubPassFullViewScreenBody}>
          <Text style={styles.ClubPassFullViewScreenEyebrowFiligree}>
            Jacks Club Access Code
          </Text>
          <Text style={styles.ClubPassFullViewScreenGuestFiligree}>
            {guest.guestName}
          </Text>

          <View style={styles.ClubPassFullViewScreenQrEnclave}>
            <PassQRCode
              value={qrValue}
              size={200}
              backgroundColor={colors.qrBackground}
            />
          </View>

          <View style={styles.ClubPassFullViewScreenInfoCard}>
            <InfoRow label="Guest" value={guest.guestName} />
            <InfoRow label="Club Card ID" value={guest.clubCardId} />
            <InfoRow label="Type" value={guest.visitType} />
            <InfoRow label="Access" value={guest.accessLevel} isLast />
          </View>

          <Pressable
            onPress={onClose}
            style={styles.ClubPassFullViewScreenClosePortico}>
            <Text style={styles.ClubPassFullViewScreenCloseFiligree}>
              Close Pass
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ClubPassFullViewScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  ClubPassFullViewScreenScrollContent: {
    flexGrow: 1,
  },
  ClubPassFullViewScreenBody: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  ClubPassFullViewScreenEyebrowFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  ClubPassFullViewScreenGuestFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 20,
    marginBottom: 18,
  },

  ClubPassFullViewScreenQrEnclave: {
    backgroundColor: colors.qrBackground,
    borderColor: colors.borderAccent,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 18,
    padding: 21,
  },
  ClubPassFullViewScreenInfoCard: {
    alignSelf: 'stretch',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 14,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },

  ClubPassFullViewScreenClosePortico: {
    alignSelf: 'stretch',
    backgroundColor: colors.card,
    borderColor: colors.primary,
    borderRadius: 12,
    borderWidth: 1,
    padding: 13,
  },
  ClubPassFullViewScreenCloseFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    textAlign: 'center',
  },
});
