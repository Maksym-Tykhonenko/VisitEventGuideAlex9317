import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  APP_BRAND_LINE,
  APP_LOADER_STATUS,
  APP_TITLE_LINE_1,
  APP_TITLE_LINE_2,
} from '../constants/brand';
import {icons} from '../data/assets';
import {colors, fonts} from '../constants/theme';
import {PaginationDots} from '../components/nav/PaginationDots';

const LOADER_DURATION_MS = 5000;
const LOADER_DOT_COUNT = 3;

type LoaderScreenProps = {
  onComplete?: () => void;
};

export function LoaderScreen({onComplete}: LoaderScreenProps) {
  const progress = useRef(new Animated.Value(0)).current;
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const listenerId = progress.addListener(({value}) => {
      const nextIndex = Math.min(
        LOADER_DOT_COUNT - 1,
        Math.floor(value * LOADER_DOT_COUNT),
      );
      setActiveDotIndex(nextIndex);
    });

    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: LOADER_DURATION_MS,
      useNativeDriver: false,
    });

    animation.start(({finished}) => {
      if (finished) {
        onComplete?.();
      }
    });

    return () => {
      progress.removeListener(listenerId);
      animation.stop();
    };
  }, [onComplete, progress]);

  return (
    <View style={styles.LoaderScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ImageBackground
        source={icons.loaderBg}
        style={styles.LoaderScreenBackground}
        resizeMode="cover">
        <View style={styles.LoaderScreenOverlayVeil} />
        <View style={styles.LoaderScreenContent}>
          <Image
            source={icons.loaderLogo}
            style={styles.LoaderScreenLogoSigil}
            resizeMode="contain"
          />

          <Text style={styles.LoaderScreenBrandFiligree}>{APP_BRAND_LINE}</Text>
          <Text style={styles.LoaderScreenTitleFiligree}>
            {APP_TITLE_LINE_1}
          </Text>
          <Text style={styles.LoaderScreenTitleFiligree}>
            {APP_TITLE_LINE_2}
          </Text>

          <View style={styles.LoaderScreenDividerLintel} />

          <Text style={styles.LoaderScreenStatusFiligree}>
            {APP_LOADER_STATUS}{' '}
            <Text style={styles.LoaderScreenStatusAccentFiligree}>· · ·</Text>
          </Text>

          <View style={styles.LoaderScreenDotsEnclave}>
            <PaginationDots
              total={LOADER_DOT_COUNT}
              activeIndex={activeDotIndex}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  LoaderScreenFacetChassis: {
    backgroundColor: colors.black,
    flex: 1,
  },
  LoaderScreenBackground: {
    flex: 1,
  },

  LoaderScreenOverlayVeil: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.loaderOverlay,
  },
  LoaderScreenContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  LoaderScreenLogoSigil: {
    height: 152,
    marginBottom: 28,
    width: 255,
  },
  LoaderScreenBrandFiligree: {
    color: colors.body,
    fontFamily: fonts.serifRegular,
    fontSize: 11,
    letterSpacing: 2.2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  LoaderScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 24,
    letterSpacing: 0.48,
    lineHeight: 28.8,
    textAlign: 'center',
  },
  LoaderScreenDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    marginTop: 14,
    marginBottom: 14,
    width: 52,
  },

  LoaderScreenStatusFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 1.32,
    marginBottom: 36,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  LoaderScreenStatusAccentFiligree: {
    color: colors.primary,
  },
  LoaderScreenDotsEnclave: {
    marginTop: 4,
  },
});
