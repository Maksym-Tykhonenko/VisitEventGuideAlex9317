import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {GUEST_STATUS_INTRO} from '../../data/clubPass';
import {colors, fonts} from '../../constants/theme';
import type {MembershipTier} from '../../types/clubPass';

type MembershipTiersSectionProps = {
  tiers: MembershipTier[];
};

function TierBenefitsBlock({
  benefits,
  footerNote,
  locked = false,
}: {
  benefits: string[];
  footerNote?: string;
  locked?: boolean;
}) {
  return (
    <View style={styles.MembershipTiersSectionBenefitsBlock}>
      <Text style={styles.MembershipTiersSectionBenefitsLabelFiligree}>
        Benefits
      </Text>
      {benefits.map(benefit => (
        <View key={benefit} style={styles.MembershipTiersSectionBenefitRow}>
          <Text
            style={[
              styles.MembershipTiersSectionCheckFiligree,
              locked && styles.MembershipTiersSectionCheckFiligreeLocked,
            ]}>
            ✓
          </Text>
          <Text
            style={[
              styles.MembershipTiersSectionBenefitFiligree,
              locked && styles.MembershipTiersSectionBenefitFiligreeLocked,
            ]}>
            {benefit}
          </Text>
        </View>
      ))}
      {footerNote && (
        <View style={styles.MembershipTiersSectionFooterNote}>
          <Text style={styles.MembershipTiersSectionFooterNoteFiligree}>
            {footerNote}
          </Text>
        </View>
      )}
    </View>
  );
}

export function MembershipTiersSection({tiers}: MembershipTiersSectionProps) {
  const activeTier = tiers.find(tier => tier.status === 'active');
  const lockedTiers = tiers.filter(tier => tier.status === 'locked');

  return (
    <View style={styles.MembershipTiersSectionFacetChassis}>
      <Text style={styles.MembershipTiersSectionTitleFiligree}>
        Guest Status Tiers
      </Text>
      <Text style={styles.MembershipTiersSectionDescriptionFiligree}>
        {GUEST_STATUS_INTRO}
      </Text>

      {activeTier && (
        <>
          <View style={styles.MembershipTiersSectionSummaryCard}>
            <View style={styles.MembershipTiersSectionIconBox}>
              <Text style={styles.MembershipTiersSectionIconFiligree}>
                {activeTier.icon}
              </Text>
            </View>
            <View style={styles.MembershipTiersSectionSummaryCopy}>
              <Text style={styles.MembershipTiersSectionEyebrowFiligree}>
                Current Status
              </Text>
              <Text style={styles.MembershipTiersSectionTierNameFiligree}>
                {activeTier.name}
              </Text>
              <Text style={styles.MembershipTiersSectionStatusFiligree}>
                {activeTier.statusDescription ?? activeTier.subtitle}
              </Text>
            </View>
            <View style={styles.MembershipTiersSectionDiscountBox}>
              <Text style={styles.MembershipTiersSectionDiscountLabelFiligree}>
                Discount
              </Text>
              <Text style={styles.MembershipTiersSectionDiscountValueFiligree}>
                {activeTier.discount ?? '—'}
              </Text>
            </View>
          </View>

          <View style={styles.MembershipTiersSectionActiveCard}>
            <View style={styles.MembershipTiersSectionActiveTopLine} />
            <View style={styles.MembershipTiersSectionActiveHeader}>
              <View style={styles.MembershipTiersSectionActiveIconBox}>
                <Text style={styles.MembershipTiersSectionIconFiligree}>
                  {activeTier.icon}
                </Text>
              </View>
              <View style={styles.MembershipTiersSectionActiveCopy}>
                <View style={styles.MembershipTiersSectionActiveTitleRow}>
                  <Text style={styles.MembershipTiersSectionActiveNameFiligree}>
                    {activeTier.name}
                  </Text>
                  <View style={styles.MembershipTiersSectionActiveBadge}>
                    <Text style={styles.MembershipTiersSectionActiveBadgeFiligree}>
                      ACTIVE
                    </Text>
                  </View>
                </View>
                <Text style={styles.MembershipTiersSectionActiveSubtitleFiligree}>
                  {activeTier.subtitle}
                </Text>
              </View>
            </View>

            {activeTier.benefits && (
              <TierBenefitsBlock
                benefits={activeTier.benefits}
                footerNote={activeTier.footerNote}
              />
            )}
          </View>
        </>
      )}

      {lockedTiers.map(tier => (
        <View key={tier.id} style={styles.MembershipTiersSectionLockedCard}>
          <View style={styles.MembershipTiersSectionLockedHeader}>
            <View style={styles.MembershipTiersSectionLockedIconBox}>
              <Text style={styles.MembershipTiersSectionLockedIconFiligree}>
                {tier.icon}
              </Text>
            </View>
            <View style={styles.MembershipTiersSectionLockedCopy}>
              <View style={styles.MembershipTiersSectionLockedTitleRow}>
                <Text style={styles.MembershipTiersSectionLockedNameFiligree}>
                  {tier.name}
                </Text>
                <View style={styles.MembershipTiersSectionLockedBadge}>
                  <Text style={styles.MembershipTiersSectionLockedBadgeFiligree}>
                    LOCKED
                  </Text>
                </View>
              </View>
              <Text style={styles.MembershipTiersSectionLockedSubtitleFiligree}>
                {tier.subtitle}
              </Text>
            </View>
          </View>

          {tier.benefits && (
            <TierBenefitsBlock
              benefits={tier.benefits}
              footerNote={tier.footerNote}
              locked
            />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  MembershipTiersSectionFacetChassis: {
    gap: 12,
    paddingBottom: 16,
  },
  MembershipTiersSectionTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 17,
  },
  MembershipTiersSectionDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 19.2,
    marginBottom: 4,
  },
  MembershipTiersSectionSummaryCard: {
    alignItems: 'center',
    backgroundColor: colors.cardElevated,
    borderColor: colors.borderAccent,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  MembershipTiersSectionIconBox: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.primaryDark,
    borderRadius: 11,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  MembershipTiersSectionIconFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 20,
  },
  MembershipTiersSectionSummaryCopy: {
    flex: 1,
    gap: 2,
  },
  MembershipTiersSectionEyebrowFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  MembershipTiersSectionTierNameFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 15,
  },
  MembershipTiersSectionStatusFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  MembershipTiersSectionDiscountBox: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  MembershipTiersSectionDiscountLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 0.63,
    textTransform: 'uppercase',
  },
  MembershipTiersSectionDiscountValueFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansBold,
    fontSize: 17,
  },
  MembershipTiersSectionActiveCard: {
    backgroundColor: colors.card,
    borderColor: colors.primaryDark,
    borderRadius: 15,
    borderWidth: 1,
    overflow: 'hidden',
    paddingBottom: 14,
    paddingHorizontal: 16,
    paddingTop: 19,
  },
  MembershipTiersSectionActiveTopLine: {
    backgroundColor: colors.primary,
    height: 2,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 5,
  },
  MembershipTiersSectionActiveHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 11,
  },
  MembershipTiersSectionActiveIconBox: {
    alignItems: 'center',
    backgroundColor: colors.cardElevated,
    borderColor: colors.primaryDark,
    borderRadius: 10,
    borderWidth: 1,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  MembershipTiersSectionActiveCopy: {
    flex: 1,
    gap: 3,
  },
  MembershipTiersSectionActiveTitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  MembershipTiersSectionActiveNameFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 14,
  },
  MembershipTiersSectionActiveBadge: {
    backgroundColor: colors.activeBadge,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  MembershipTiersSectionActiveBadgeFiligree: {
    color: colors.activeBadgeText,
    fontFamily: fonts.sansBold,
    fontSize: 9,
    letterSpacing: 0.63,
  },
  MembershipTiersSectionActiveSubtitleFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansBold,
    fontSize: 12,
  },
  MembershipTiersSectionBenefitsBlock: {
    borderTopColor: colors.progressTrack,
    borderTopWidth: 1,
    gap: 4,
    marginTop: 11,
    paddingTop: 11,
  },
  MembershipTiersSectionBenefitsLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  MembershipTiersSectionBenefitRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 7,
    paddingTop: 2,
  },
  MembershipTiersSectionCheckFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    marginTop: 2,
  },
  MembershipTiersSectionCheckFiligreeLocked: {
    color: colors.mutedDark,
  },
  MembershipTiersSectionBenefitFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 16.8,
  },
  MembershipTiersSectionBenefitFiligreeLocked: {
    color: colors.body,
  },
  MembershipTiersSectionFooterNote: {
    backgroundColor: colors.qrBackground,
    borderRadius: 10,
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  MembershipTiersSectionFooterNoteFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    lineHeight: 16.5,
  },
  MembershipTiersSectionLockedCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 15,
    borderWidth: 1,
    paddingBottom: 14,
    paddingHorizontal: 16,
    paddingTop: 17,
  },
  MembershipTiersSectionLockedHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 11,
  },
  MembershipTiersSectionLockedIconBox: {
    alignItems: 'center',
    backgroundColor: colors.qrBackground,
    borderColor: colors.progressTrack,
    borderRadius: 10,
    borderWidth: 1,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  MembershipTiersSectionLockedIconFiligree: {
    color: colors.mutedDark,
    fontFamily: fonts.sansRegular,
    fontSize: 18,
  },
  MembershipTiersSectionLockedCopy: {
    flex: 1,
    gap: 3,
  },
  MembershipTiersSectionLockedTitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  MembershipTiersSectionLockedNameFiligree: {
    color: colors.body,
    fontFamily: fonts.serifRegular,
    fontSize: 14,
  },
  MembershipTiersSectionLockedBadge: {
    backgroundColor: colors.qrBackground,
    borderColor: colors.progressTrack,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  MembershipTiersSectionLockedBadgeFiligree: {
    color: colors.mutedDark,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 0.63,
  },
  MembershipTiersSectionLockedSubtitleFiligree: {
    color: colors.mutedDark,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
});
