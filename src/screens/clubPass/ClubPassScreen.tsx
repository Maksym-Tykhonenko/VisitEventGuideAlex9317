import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {ClubPassHeader} from '../../components/clubPass/ClubPassHeader';
import {GuestInfoSection} from '../../components/clubPass/GuestInfoSection';
import {MembershipTiersSection} from '../../components/clubPass/MembershipTiersSection';
import {PassCard} from '../../components/clubPass/PassCard';
import {ClubPassTabs} from '../../components/nav/ClubPassTabs';
import {useGuestInfo} from '../../context/GuestInfoContext';
import {getPassQrValue, MEMBERSHIP_TIERS} from '../../data/clubPass';
import {colors} from '../../constants/theme';
import type {ClubPassTab} from '../../types/clubPass';

type ClubPassScreenProps = {
  onOpenFullView: () => void;
  onEditGuest: () => void;
};

export function ClubPassScreen({
  onOpenFullView,
  onEditGuest,
}: ClubPassScreenProps) {
  const {guest} = useGuestInfo();
  const [activeTab, setActiveTab] = useState<ClubPassTab>('guestPass');
  const qrValue = getPassQrValue(guest);

  return (
    <View style={styles.ClubPassScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={styles.ClubPassScreenScrollContent}
        showsVerticalScrollIndicator={false}>
        <ClubPassHeader subtitle="Club Guest · Event Visitor" />
        <ClubPassTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <View style={styles.ClubPassScreenBody}>
          {activeTab === 'guestPass' ? (
            <>
              <PassCard
                guest={guest}
                qrValue={qrValue}
                onQrPress={onOpenFullView}
              />
              <GuestInfoSection guest={guest} onPress={onEditGuest} />
            </>
          ) : (
            <MembershipTiersSection tiers={MEMBERSHIP_TIERS} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ClubPassScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  ClubPassScreenScrollContent: {
    paddingBottom: 16,
  },

  ClubPassScreenBody: {
    gap: 14,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
});
