import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, fonts} from '../../constants/theme';

export function EventsHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.EventsHeaderFacetChassis,
        {paddingTop: insets.top + 14},
      ]}>
      <View style={styles.EventsHeaderCopy}>
        <Text style={styles.EventsHeaderTitleFiligree}>Events</Text>
        <View style={styles.EventsHeaderSubtitleRow}>
          <View style={styles.EventsHeaderDividerLintel} />
          <Text style={styles.EventsHeaderSubtitleFiligree}>
            Club Guest · Event Visitor
          </Text>
        </View>
      </View>
      <View style={styles.EventsHeaderSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  EventsHeaderFacetChassis: {
    alignItems: 'flex-end',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  EventsHeaderCopy: {
    flex: 1,
    gap: 4,
  },
  EventsHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifSemiBold,
    fontSize: 20,
    letterSpacing: 0.4,
  },
  EventsHeaderSubtitleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  EventsHeaderDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    width: 22,
  },
  EventsHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  EventsHeaderSpacer: {
    height: 34,
    width: 34,
  },
});
