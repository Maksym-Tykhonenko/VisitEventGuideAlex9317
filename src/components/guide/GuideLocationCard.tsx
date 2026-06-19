import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {estimateTravelTime, formatCoordinates} from '../../data/guide';
import {GUIDE_IMAGES} from '../../data/guideAssets';
import {colors, fonts} from '../../constants/theme';
import type {GuideLocation} from '../../types/guide';

type GuideLocationCardProps = {
  location: GuideLocation;
  isSaved: boolean;
  isHighlighted?: boolean;
  onToggleSave: () => void;
  onOpenDetails: () => void;
};

export function GuideLocationCard({
  location,
  isSaved,
  isHighlighted = false,
  onToggleSave,
  onOpenDetails,
}: GuideLocationCardProps) {
  const imageSource = GUIDE_IMAGES[location.imageKey];

  const handleShare = async () => {
    try {
      await Share.share({
        title: location.title,
        message: `${location.title}\n${formatCoordinates(
          location.latitude,
          location.longitude,
        )}\n\n${location.about}`,
      });
    } catch {}
  };

  return (
    <View
      style={[
        styles.GuideLocationCardFacetChassis,
        isHighlighted && styles.GuideLocationCardFacetChassisHighlighted,
      ]}>
      <View style={styles.GuideLocationCardHeroEnclave}>
        {imageSource ? (
          <Image source={imageSource} style={styles.GuideLocationCardHero} />
        ) : (
          <LinearGradient
            colors={['#08141e', '#0e1e2e']}
            style={styles.GuideLocationCardHero}
          />
        )}
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.55)']}
          style={styles.GuideLocationCardHeroOverlay}
        />
        <Text style={styles.GuideLocationCardHeroLabelFiligree}>
          {location.title.toUpperCase()}
        </Text>
      </View>

      <View style={styles.GuideLocationCardBody}>
        <View style={styles.GuideLocationCardTopRow}>
          <View style={styles.GuideLocationCardTitleBlock}>
            <Text style={styles.GuideLocationCardTitleFiligree}>
              {location.title}
            </Text>
            <View style={styles.GuideLocationCardTagPortico}>
              <Text style={styles.GuideLocationCardTagFiligree}>
                {location.tag}
              </Text>
            </View>
          </View>
          <Text style={styles.GuideLocationCardTravelFiligree}>
            {estimateTravelTime(location)}
          </Text>
        </View>

        <Text style={styles.GuideLocationCardCoordinatesFiligree}>
          {formatCoordinates(location.latitude, location.longitude)}
        </Text>

        <View style={styles.GuideLocationCardActionsRow}>
          <Pressable
            onPress={onToggleSave}
            style={styles.GuideLocationCardActionPortico}>
            <Text style={styles.GuideLocationCardActionFiligree}>
              {isSaved ? 'Saved' : '+ Save'}
            </Text>
          </Pressable>
          <Pressable
            onPress={handleShare}
            style={styles.GuideLocationCardActionPortico}>
            <Text style={styles.GuideLocationCardActionFiligree}>Share</Text>
          </Pressable>
          <Pressable
            onPress={onOpenDetails}
            style={[
              styles.GuideLocationCardActionPortico,
              styles.GuideLocationCardActionPorticoPrimary,
            ]}>
            <Text
              style={[
                styles.GuideLocationCardActionFiligree,
                styles.GuideLocationCardActionFiligreePrimary,
              ]}>
              Details
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideLocationCardFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  GuideLocationCardFacetChassisHighlighted: {
    borderColor: colors.primary,
  },
  GuideLocationCardHeroEnclave: {
    height: 76,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  GuideLocationCardHero: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  GuideLocationCardHeroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  GuideLocationCardHeroLabelFiligree: {
    color: 'rgba(240,200,200,0.4)',
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 0.54,
    textTransform: 'uppercase',
  },
  GuideLocationCardBody: {
    gap: 4,
    paddingBottom: 10,
    paddingHorizontal: 13,
    paddingTop: 10,
  },
  GuideLocationCardTopRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  GuideLocationCardTitleBlock: {
    flex: 1,
    gap: 3,
    paddingRight: 8,
  },
  GuideLocationCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
  },
  GuideLocationCardTagPortico: {
    alignSelf: 'flex-start',
    backgroundColor: colors.cardElevated,
    borderColor: colors.progressTrack,
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  GuideLocationCardTagFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
  },
  GuideLocationCardTravelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  GuideLocationCardCoordinatesFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  GuideLocationCardActionsRow: {
    flexDirection: 'row',
    gap: 7,
    paddingTop: 3,
  },
  GuideLocationCardActionPortico: {
    alignItems: 'center',
    backgroundColor: colors.cardElevated,
    borderColor: colors.progressTrack,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  GuideLocationCardActionPorticoPrimary: {
    borderColor: colors.primary,
  },
  GuideLocationCardActionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    textAlign: 'center',
  },
  GuideLocationCardActionFiligreePrimary: {
    color: colors.primary,
    fontFamily: fonts.sansSemiBold,
  },
});
