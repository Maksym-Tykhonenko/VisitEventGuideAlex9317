import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import {hasEventsOnWeekday} from '../../data/events';
import {colors, fonts} from '../../constants/theme';
import type {WeekDay} from '../../types/events';

type WeekDayPickerProps = {
  weekDays: WeekDay[];
  selectedWeekdayIndex: number;
  onSelect: (weekdayIndex: number) => void;
};

export function WeekDayPicker({
  weekDays,
  selectedWeekdayIndex,
  onSelect,
}: WeekDayPickerProps) {
  return (
    <View style={styles.WeekDayPickerFacetChassis}>
      <Text style={styles.WeekDayPickerLabelFiligree}>This Week</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.WeekDayPickerRow}>
        {weekDays.map(day => {
          const isSelected = day.weekdayIndex === selectedWeekdayIndex;
          const hasEvents = hasEventsOnWeekday(day.weekdayIndex);

          return (
            <Pressable
              key={day.key}
              onPress={() => onSelect(day.weekdayIndex)}
              style={[
                styles.WeekDayPickerChip,
                isSelected && styles.WeekDayPickerChipSelected,
              ]}>
              <Text
                style={[
                  styles.WeekDayPickerDayFiligree,
                  isSelected && styles.WeekDayPickerDayFiligreeSelected,
                ]}>
                {day.label}
              </Text>
              <Text
                style={[
                  styles.WeekDayPickerDateFiligree,
                  isSelected && styles.WeekDayPickerDateFiligreeSelected,
                ]}>
                {day.date}
              </Text>
              <View
                style={[
                  styles.WeekDayPickerDot,
                  hasEvents
                    ? isSelected
                      ? styles.WeekDayPickerDotSelected
                      : styles.WeekDayPickerDotActive
                    : styles.WeekDayPickerDotInactive,
                ]}
              />
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  WeekDayPickerFacetChassis: {
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    gap: 9,
    paddingBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 11,
  },
  WeekDayPickerLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  WeekDayPickerRow: {
    gap: 7,
  },
  WeekDayPickerChip: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 11,
    borderWidth: 1,
    gap: 3,
    minWidth: 46,
    paddingHorizontal: 1,
    paddingVertical: 10,
  },
  WeekDayPickerChipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  WeekDayPickerDayFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 0.36,
    textTransform: 'uppercase',
  },
  WeekDayPickerDayFiligreeSelected: {
    color: 'rgba(255,255,255,0.8)',
  },
  WeekDayPickerDateFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 16,
  },
  WeekDayPickerDateFiligreeSelected: {
    color: colors.white,
  },
  WeekDayPickerDot: {
    borderRadius: 2.5,
    height: 5,
    width: 5,
  },
  WeekDayPickerDotActive: {
    backgroundColor: colors.primary,
  },
  WeekDayPickerDotSelected: {
    backgroundColor: colors.white,
  },
  WeekDayPickerDotInactive: {
    backgroundColor: colors.progressTrack,
  },
});
