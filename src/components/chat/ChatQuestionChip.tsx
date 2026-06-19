import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type ChatQuestionChipProps = {
  label: string;
  onPress: () => void;
};

export function ChatQuestionChip({label, onPress}: ChatQuestionChipProps) {
  return (
    <Pressable onPress={onPress} style={styles.ChatQuestionChipFacetChassis}>
      <Text style={styles.ChatQuestionChipFiligree}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ChatQuestionChipFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  ChatQuestionChipFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
});
