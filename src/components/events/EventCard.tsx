import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {VenueEvent} from '../../types/events';

type EventCardProps = {
  event: VenueEvent;
  onViewDetails: () => void;
};

export function EventCard({event, onViewDetails}: EventCardProps) {
  return (
    <View style={styles.EventCardFacetChassis}>
      <View style={styles.EventCardBody}>
        <View style={styles.EventCardMetaRow}>
          <View style={styles.EventCardTagPortico}>
            <Text style={styles.EventCardTagFiligree}>{event.tag}</Text>
          </View>
          <Text style={styles.EventCardTimeFiligree}>{event.time}</Text>
        </View>

        <Text style={styles.EventCardTitleFiligree}>{event.title}</Text>
        <Text style={styles.EventCardLocationFiligree}>
          <Text style={styles.EventCardPinFiligree}>📍 </Text>
          {event.location}
        </Text>
        <Text style={styles.EventCardDescriptionFiligree}>
          {event.listDescription}
        </Text>

        <Pressable onPress={onViewDetails} style={styles.EventCardActionPortico}>
          <Text style={styles.EventCardActionFiligree}>View Details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  EventCardFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 15,
    borderWidth: 1,
    overflow: 'hidden',
  },
  EventCardBody: {
    gap: 3,
    paddingBottom: 21,
    paddingHorizontal: 13,
    paddingTop: 11,
  },
  EventCardMetaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  EventCardTagPortico: {
    backgroundColor: colors.cardElevated,
    borderColor: colors.progressTrack,
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  EventCardTagFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
  },
  EventCardTimeFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  EventCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    paddingTop: 2,
  },
  EventCardLocationFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  EventCardPinFiligree: {
    color: colors.primary,
  },
  EventCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    lineHeight: 16.5,
    paddingBottom: 6,
    paddingTop: 3,
  },
  EventCardActionPortico: {
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
  EventCardActionFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    textAlign: 'center',
  },
});
