import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type OutlineActionButtonProps = {
  label: string;
  onPress: () => void;
};

export function OutlineActionButton({label, onPress}: OutlineActionButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.OutlineActionButtonFacetChassis}>
      <Text style={styles.OutlineActionButtonLabelFiligree}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  OutlineActionButtonFacetChassis: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.card,
    borderColor: colors.primary,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 13,
    width: '100%',
  },
  OutlineActionButtonLabelFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    textAlign: 'center',
  },
});
