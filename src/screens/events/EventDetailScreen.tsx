import React, {useMemo} from 'react';
import {
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {EventInfoCard} from '../../components/events/EventInfoCard';
import {OutlineActionButton} from '../../components/dining/OutlineActionButton';
import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {
  formatEventScheduleLabel,
  getCurrentWeekDays,
  getEventById,
} from '../../data/events';
import {colors, fonts} from '../../constants/theme';

type EventDetailScreenProps = {
  eventId: string;
  onBack: () => void;
};

export function EventDetailScreen({eventId, onBack}: EventDetailScreenProps) {
  const insets = useSafeAreaInsets();
  const event = getEventById(eventId);
  const weekDay = useMemo(() => {
    const weekDays = getCurrentWeekDays();
    return weekDays.find(day => day.weekdayIndex === event?.weekdayIndex);
  }, [event?.weekdayIndex]);

  if (!event || !weekDay) {
    return null;
  }

  const scheduleLabel = formatEventScheduleLabel(event.time, weekDay);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${event.title}\n${scheduleLabel}\n${event.location}\n\n${event.about}`,
        title: event.title,
      });
    } catch {
      // User dismissed share sheet.
    }
  };

  return (
    <View style={styles.EventDetailScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.EventDetailScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader
          title={event.title}
          backLabel="Back"
          onBack={onBack}
        />

        <View style={styles.EventDetailScreenBody}>
          <View style={styles.EventDetailScreenMetaRow}>
            <View style={styles.EventDetailScreenTagPortico}>
              <Text style={styles.EventDetailScreenTagFiligree}>
                {event.tag}
              </Text>
            </View>
            <Text style={styles.EventDetailScreenScheduleFiligree}>
              {scheduleLabel}
            </Text>
          </View>

          <Text style={styles.EventDetailScreenTitleFiligree}>
            {event.title}
          </Text>
          <Text style={styles.EventDetailScreenLocationFiligree}>
            <Text style={styles.EventDetailScreenPinFiligree}>📍 </Text>
            {event.location} · Jacks Event Casino
          </Text>

          <LinearGradient
            colors={['rgba(212,32,48,0)', colors.primary, 'rgba(212,32,48,0)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.EventDetailScreenDividerLintel}
          />

          <EventInfoCard label="About This Event" body={event.about} />
          <EventInfoCard label="What to Expect" body={event.whatToExpect} />
          <EventInfoCard label="Guest Note" body={event.guestNote} />

          <OutlineActionButton label="Share Event" onPress={handleShare} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventDetailScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  EventDetailScreenScrollContent: {
    flexGrow: 1,
  },
  EventDetailScreenBody: {
    gap: 13,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  EventDetailScreenMetaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  EventDetailScreenTagPortico: {
    backgroundColor: colors.cardElevated,
    borderColor: colors.progressTrack,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },

  EventDetailScreenTagFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  EventDetailScreenScheduleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },

  EventDetailScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 21,
    paddingTop: 3,
  },
  EventDetailScreenLocationFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    paddingBottom: 7,
  },
  EventDetailScreenPinFiligree: {
    color: colors.primary,
  },
  EventDetailScreenDividerLintel: {
    height: 1,
    width: '100%',
  },
});
