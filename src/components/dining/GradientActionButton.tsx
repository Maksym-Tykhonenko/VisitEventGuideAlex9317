import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {colors, fonts} from '../../constants/theme';

type GradientActionButtonProps = {
  label: string;
  onPress: () => void;
};

export function GradientActionButton({label, onPress}: GradientActionButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.GradientActionButtonPressable}>
      <LinearGradient
        colors={[colors.buttonGradientStart, colors.buttonGradientEnd]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.GradientActionButtonFacetChassis}>
        <View style={styles.GradientActionButtonInnerEnclave}>
          <Text style={styles.GradientActionButtonLabelFiligree}>{label}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  GradientActionButtonPressable: {
    alignSelf: 'stretch',
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
  },
  GradientActionButtonFacetChassis: {
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
  },
  GradientActionButtonInnerEnclave: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
  },
  GradientActionButtonLabelFiligree: {
    color: colors.buttonText,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
});
