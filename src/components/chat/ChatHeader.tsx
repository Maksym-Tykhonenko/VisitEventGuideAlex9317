import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../../data/assets';
import {colors, fonts} from '../../constants/theme';

type ChatHeaderProps = {
  onClearPress: () => void;
};

export function ChatHeader({onClearPress}: ChatHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.ChatHeaderFacetChassis, {paddingTop: insets.top + 13}]}>
      <View style={styles.ChatHeaderCopy}>
        <View style={styles.ChatHeaderLogoRing}>
          <Image source={icons.jacksCasino} style={styles.ChatHeaderLogo} />
        </View>
        <View style={styles.ChatHeaderTextBlock}>
          <Text style={styles.ChatHeaderTitleFiligree}>
            Jacks Guide Assistant
          </Text>
          <Text style={styles.ChatHeaderStatusFiligree}>
            ● Guide Assistant Online
          </Text>
        </View>
      </View>
      <Pressable onPress={onClearPress} style={styles.ChatHeaderClearPortico}>
        <Text style={styles.ChatHeaderClearFiligree}>Clear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ChatHeaderFacetChassis: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
    paddingHorizontal: 16,
  },
  ChatHeaderCopy: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  ChatHeaderLogoRing: {
    alignItems: 'center',
    borderColor: colors.primaryDark,
    borderRadius: 19,
    borderWidth: 1,
    height: 38,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 38,
  },
  ChatHeaderLogo: {
    height: 38,
    width: 38,
  },
  ChatHeaderTextBlock: {
    flex: 1,
    gap: 1,
  },
  ChatHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 15,
    lineHeight: 18,
  },
  ChatHeaderStatusFiligree: {
    color: colors.success,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.8,
  },
  ChatHeaderClearPortico: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
  ChatHeaderClearFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
});
