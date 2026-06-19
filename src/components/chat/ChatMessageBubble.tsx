import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {icons} from '../../data/assets';
import {colors, fonts} from '../../constants/theme';
import type {ChatMessage} from '../../types/chat';

type ChatMessageBubbleProps = {
  message: ChatMessage;
};

export function ChatMessageBubble({message}: ChatMessageBubbleProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <View style={styles.ChatMessageBubbleUserRow}>
        <View style={styles.ChatMessageBubbleUserFacetChassis}>
          <Text style={styles.ChatMessageBubbleUserFiligree}>{message.text}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.ChatMessageBubbleAssistantRow}>
      <View style={styles.ChatMessageBubbleAvatarRing}>
        <Image source={icons.jacksCasino} style={styles.ChatMessageBubbleAvatar} />
      </View>
      <View style={styles.ChatMessageBubbleAssistantFacetChassis}>
        <Text style={styles.ChatMessageBubbleAssistantFiligree}>
          {message.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ChatMessageBubbleUserRow: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  ChatMessageBubbleUserFacetChassis: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxWidth: '82%',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  ChatMessageBubbleUserFiligree: {
    color: colors.white,
    fontFamily: fonts.sansMedium,
    fontSize: 13,
    lineHeight: 21.45,
  },
  ChatMessageBubbleAssistantRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
  },
  ChatMessageBubbleAvatarRing: {
    borderColor: colors.primaryDark,
    borderRadius: 14,
    borderWidth: 1,
    height: 28,
    overflow: 'hidden',
    width: 28,
  },
  ChatMessageBubbleAvatar: {
    height: 28,
    width: 28,
  },
  ChatMessageBubbleAssistantFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 16,
    borderWidth: 1,
    flex: 1,
    maxWidth: '82%',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  ChatMessageBubbleAssistantFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 21.45,
  },
});
