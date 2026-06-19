import React from 'react';
import {
  Image,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {GuideInfoCard} from '../../components/guide/GuideInfoCard';

import {OutlineActionButton} from '../../components/dining/OutlineActionButton';
import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {useGuideSaved} from '../../context/GuideSavedContext';
import {formatCoordinates, getGuideLocationById} from '../../data/guide';
import {GUIDE_IMAGES} from '../../data/guideAssets';
import {colors, fonts} from '../../constants/theme';

type GuideLocationDetailScreenProps = {
  locationId: string;
  onBack: () => void;
};

export function GuideLocationDetailScreen({
  locationId,
  onBack,
}: GuideLocationDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const {isSaved, toggleSaved} = useGuideSaved();
  const location = getGuideLocationById(locationId);

  if (!location) {
    return null;
  }

  const imageSource = GUIDE_IMAGES[location.imageKey];
  const saved = isSaved(location.id);

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
    <View style={styles.GuideLocationDetailScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.GuideLocationDetailScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader
          title={location.title}
          backLabel="Back"
          onBack={onBack}
        />

        <View style={styles.GuideLocationDetailScreenHeroEnclave}>
          {imageSource ? (
            <Image
              source={imageSource}
              style={styles.GuideLocationDetailScreenHero}
            />
          ) : (
            <LinearGradient
              colors={['#08141e', '#0e1e2e']}
              style={styles.GuideLocationDetailScreenHero}
            />
          )}
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.55)']}
            style={styles.GuideLocationDetailScreenHeroOverlay}
          />
          <Text style={styles.GuideLocationDetailScreenHeroLabelFiligree}>
            {location.title.toUpperCase()}
          </Text>
        </View>

        <View style={styles.GuideLocationDetailScreenBody}>
          <View style={styles.GuideLocationDetailScreenTagPortico}>
            <Text style={styles.GuideLocationDetailScreenTagFiligree}>
              {location.tag}
            </Text>
          </View>

          <Text style={styles.GuideLocationDetailScreenTitleFiligree}>
            {location.title}
          </Text>
          <Text style={styles.GuideLocationDetailScreenCoordinatesFiligree}>
            {formatCoordinates(location.latitude, location.longitude)}
          </Text>

          <GuideInfoCard label="About" body={location.about} />
          <GuideInfoCard label="Visitor Tips" body={location.visitorTips} />
          <GuideInfoCard label="Good For" body={location.goodFor} />

          <View style={styles.GuideLocationDetailScreenActions}>
            <OutlineActionButton
              label={saved ? 'Saved Location' : 'Save Location'}
              onPress={() => toggleSaved(location.id)}
            />
            <OutlineActionButton
              label="Share with Friends"
              onPress={handleShare}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideLocationDetailScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  GuideLocationDetailScreenScrollContent: {
    flexGrow: 1,
  },
  GuideLocationDetailScreenHeroEnclave: {
    height: 155,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  GuideLocationDetailScreenHero: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  GuideLocationDetailScreenHeroOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  GuideLocationDetailScreenHeroLabelFiligree: {
    color: 'rgba(240,200,200,0.4)',
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 0.54,
    textTransform: 'uppercase',
  },
  GuideLocationDetailScreenBody: {
    gap: 13,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  GuideLocationDetailScreenTagPortico: {
    alignSelf: 'flex-start',
    backgroundColor: colors.cardElevated,
    borderColor: colors.progressTrack,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  GuideLocationDetailScreenTagFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },

  GuideLocationDetailScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 21,
  },
  GuideLocationDetailScreenCoordinatesFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    letterSpacing: 0.48,
    paddingBottom: 4,
  },

  GuideLocationDetailScreenActions: {
    alignSelf: 'stretch',
    gap: 10,
    width: '100%',
  },
});
