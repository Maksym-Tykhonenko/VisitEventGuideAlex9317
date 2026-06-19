import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type GuideSearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
};

export function GuideSearchBar({value, onChangeText}: GuideSearchBarProps) {
  return (
    <View style={styles.GuideSearchBarFacetChassis}>
      <Text style={styles.GuideSearchBarIconFiligree}>⌕</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Akersloot places…"
        placeholderTextColor={colors.mutedDark}
        style={styles.GuideSearchBarInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  GuideSearchBarFacetChassis: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 13,
    paddingVertical: 11,
  },
  GuideSearchBarIconFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
  },
  GuideSearchBarInput: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    padding: 0,
  },
});
