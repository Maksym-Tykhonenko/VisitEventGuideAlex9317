import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {PaginationDots} from '../components/nav/PaginationDots';
import {ONBOARDING_STEPS} from '../data/onboarding';
import {colors, fonts, layout} from '../constants/theme';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const HERO_HEIGHT = SCREEN_HEIGHT * layout.onboardingHeroRatio;

type OnboardingScreenProps = {
  onComplete: () => void;
};

export function OnboardingScreen({onComplete}: OnboardingScreenProps) {
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);

  const step = ONBOARDING_STEPS[stepIndex];
  const isLastStep = stepIndex === ONBOARDING_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
      return;
    }
    setStepIndex(prev => prev + 1);
  };

  return (
    <View style={styles.OnboardingScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={[styles.OnboardingScreenHeroEnclave, {height: HERO_HEIGHT}]}>
          <Image
            source={step.image}
            style={styles.OnboardingScreenHeroImage}
            resizeMode="cover"
          />
        </View>

        <View
          style={[
            styles.OnboardingScreenContent,
            {paddingBottom: insets.bottom + 18},
          ]}>
          <Text style={styles.OnboardingScreenTitleFiligree}>{step.title}</Text>
          <View style={styles.OnboardingScreenDividerLintel} />
          <Text style={styles.OnboardingScreenDescriptionFiligree}>
            {step.description}
          </Text>

          <View style={styles.OnboardingScreenFooter}>
            <PaginationDots
              total={ONBOARDING_STEPS.length}
              activeIndex={stepIndex}
            />

            <PrimaryButton
              label="Continue"
              onPress={handleNext}
              fullWidth
              style={styles.OnboardingScreenPrimaryAction}
            />

            <Pressable
              onPress={onComplete}
              style={styles.OnboardingScreenSkipPortico}
              hitSlop={12}>
              <Text style={styles.OnboardingScreenSkipFiligree}>Skip</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OnboardingScreenHeroEnclave: {
    backgroundColor: colors.background,
    overflow: 'hidden',
    width: '100%',
  },
  OnboardingScreenHeroImage: {
    height: '100%',
    width: '100%',
  },
  OnboardingScreenContent: {
    flex: 1,
    paddingHorizontal: layout.screenPadding,
    paddingTop: 24,
  },
  OnboardingScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 8,
  },
  OnboardingScreenDividerLintel: {
    backgroundColor: colors.primary,
    borderRadius: 1,
    height: 2,
    marginBottom: 14,
    width: 36,
  },
  OnboardingScreenDescriptionFiligree: {
    color: colors.body,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 22.1,
  },
  OnboardingScreenFooter: {
    gap: 13,
    paddingTop: 10,
  },
  OnboardingScreenPrimaryAction: {
    marginTop: 4,
  },

  OnboardingScreenSkipPortico: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
  },

  OnboardingScreenSkipFiligree: {
    color: colors.skip,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    textAlign: 'center',
  },
});
