import React from 'react';
import {Pressable, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {colors, fonts} from '../../constants/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  fullWidth?: boolean;
};

export function PrimaryButton({
  label,
  onPress,
  style,
  fullWidth = false,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[fullWidth && styles.PrimaryButtonButtonWide, style]}>
      {({pressed}) => (
        <LinearGradient
          colors={[colors.buttonGradientStart, colors.buttonGradientEnd]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[
            styles.PrimaryButtonBtnPortico,
            pressed && styles.PrimaryButtonButtonPressedDim,
          ]}>
          <View style={styles.PrimaryButtonInnerEnclave}>
            <Text style={styles.PrimaryButtonLabelFiligree}>{label}</Text>
          </View>
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PrimaryButtonBtnPortico: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  PrimaryButtonInnerEnclave: {
    alignItems: 'center',
    height: 43,
    justifyContent: 'center',
  },
  PrimaryButtonButtonWide: {
    width: '100%',
  },
  PrimaryButtonButtonPressedDim: {
    opacity: 0.85,
  },
  PrimaryButtonLabelFiligree: {
    color: colors.buttonText,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
});
