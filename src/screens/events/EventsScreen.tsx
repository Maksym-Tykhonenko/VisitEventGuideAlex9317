import React, {useMemo, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {EventCard} from '../../components/events/EventCard';
import {EventsHeader} from '../../components/events/EventsHeader';
import {WeekDayPicker} from '../../components/events/WeekDayPicker';
import {
  getCurrentWeekDays,
  getDefaultWeekdayIndex,
  getEventsForWeekday,
} from '../../data/events';
import {colors, fonts} from '../../constants/theme';

type EventsScreenProps = {
  onOpenEvent: (eventId: string) => void;
};

export function EventsScreen({onOpenEvent}: EventsScreenProps) {
  const weekDays = useMemo(() => getCurrentWeekDays(), []);
  const [selectedWeekdayIndex, setSelectedWeekdayIndex] = useState(() =>
    getDefaultWeekdayIndex(weekDays),
  );

  const events = getEventsForWeekday(selectedWeekdayIndex);

  return (
    <View style={styles.EventsScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={styles.EventsScreenScrollContent}
        showsVerticalScrollIndicator={false}>
        <EventsHeader />
        <WeekDayPicker
          weekDays={weekDays}
          selectedWeekdayIndex={selectedWeekdayIndex}
          onSelect={setSelectedWeekdayIndex}
        />

        <View style={styles.EventsScreenList}>
          {events.length > 0 ? (
            events.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={() => onOpenEvent(event.id)}
              />
            ))
          ) : (
            <View style={styles.EventsScreenEmpty}>
              <Text style={styles.EventsScreenEmptyFiligree}>
                No events scheduled for this day.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventsScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  EventsScreenScrollContent: {
    paddingBottom: 16,
  },
  EventsScreenList: {
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  EventsScreenEmpty: {
    alignItems: 'center',
    paddingVertical: 32,
  },

  EventsScreenEmptyFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    textAlign: 'center',
  },
});
