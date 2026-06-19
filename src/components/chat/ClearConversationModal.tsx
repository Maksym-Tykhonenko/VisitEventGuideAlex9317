import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

import {GradientActionButton} from '../dining/GradientActionButton';
import {OutlineActionButton} from '../dining/OutlineActionButton';
import {colors, fonts} from '../../constants/theme';

type ClearConversationModalProps = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ClearConversationModal({
  visible,
  onConfirm,
  onCancel,
}: ClearConversationModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}>
      <Pressable style={styles.ClearConversationModalOverlay} onPress={onCancel}>
        <Pressable style={styles.ClearConversationModalSheet} onPress={() => {}}>
          <View style={styles.ClearConversationModalIconRing}>
            <Text style={styles.ClearConversationModalIconFiligree}>🗑</Text>
          </View>

          <Text style={styles.ClearConversationModalTitleFiligree}>
            Clear Conversation?
          </Text>
          <Text style={styles.ClearConversationModalDescriptionFiligree}>
            This will remove the current guide conversation.{'\n'}
            You can start a new one at any time.
          </Text>

          <View style={styles.ClearConversationModalActions}>
            <GradientActionButton
              label="Clear Conversation"
              onPress={onConfirm}
            />
            <OutlineActionButton label="Cancel" onPress={onCancel} />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  ClearConversationModalOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(3, 8, 7, 0.92)',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  ClearConversationModalSheet: {
    alignItems: 'center',
    maxWidth: 360,
    width: '100%',
  },
  ClearConversationModalIconRing: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 32,
    borderWidth: 1,
    height: 64,
    justifyContent: 'center',
    marginBottom: 18,
    width: 64,
  },
  ClearConversationModalIconFiligree: {
    fontSize: 28,
  },
  ClearConversationModalTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  ClearConversationModalDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 23.1,
    marginBottom: 32,
    textAlign: 'center',
  },
  ClearConversationModalActions: {
    alignSelf: 'stretch',
    gap: 9,
    width: '100%',
  },
});
