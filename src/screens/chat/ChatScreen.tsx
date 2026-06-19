import React, {useCallback, useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {ChatHeader} from '../../components/chat/ChatHeader';
import {ChatMessageBubble} from '../../components/chat/ChatMessageBubble';
import {ChatQuestionChip} from '../../components/chat/ChatQuestionChip';
import {ClearConversationModal} from '../../components/chat/ClearConversationModal';
import {CHAT_FAQS} from '../../data/chatFaqs';
import {colors, fonts} from '../../constants/theme';
import type {ChatMessage} from '../../types/chat';

function createMessageId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ChatScreen() {
  const listRef = useRef<ScrollView>(null);
  const [messagesToDisplay, setMessagesToDisplay] = useState<ChatMessage[]>([]);
  const [showClearModal, setShowClearModal] = useState(false);

  const handleAskQuestion = useCallback((question: string, answer: string) => {
    setMessagesToDisplay(current => [
      ...current,
      {id: createMessageId(), role: 'user', text: question},
      {id: createMessageId(), role: 'assistant', text: answer},
    ]);

    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({animated: true});
    });
  }, []);

  const handleClearConversation = () => {
    setMessagesToDisplay([]);
    setShowClearModal(false);
  };

  return (
    <View style={styles.ChatScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ChatHeader onClearPress={() => setShowClearModal(true)} />

      <ScrollView
        ref={listRef}
        contentContainerStyle={styles.ChatScreenMessagesContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          listRef.current?.scrollToEnd({animated: true})
        }>
        {messagesToDisplay.map(message => (
          <ChatMessageBubble key={message.id} message={message} />
        ))}
      </ScrollView>

      <View style={styles.ChatScreenQuestionsFacetChassis}>
        <Text style={styles.ChatScreenQuestionsLabelFiligree}>
          Tap a question
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ChatScreenQuestionsWrap}>
          {CHAT_FAQS.map(faq => (
            <ChatQuestionChip
              key={faq.id}
              label={faq.question}
              onPress={() => handleAskQuestion(faq.question, faq.answer)}
            />
          ))}
        </ScrollView>
      </View>

      <ClearConversationModal
        visible={showClearModal}
        onConfirm={handleClearConversation}
        onCancel={() => setShowClearModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ChatScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  ChatScreenMessagesContent: {
    flexGrow: 1,
    gap: 12,
    paddingBottom: 12,
    paddingTop: 14,
  },

  ChatScreenQuestionsFacetChassis: {
    backgroundColor: colors.background,
    gap: 3,
    maxHeight: 240,
    paddingBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 7,
  },

  ChatScreenQuestionsLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    paddingBottom: 4,
    textTransform: 'uppercase',
  },
  ChatScreenQuestionsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingBottom: 4,
  },
});
