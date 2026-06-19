import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {GradientActionButton} from '../../components/dining/GradientActionButton';
import {OutlineActionButton} from '../../components/dining/OutlineActionButton';
import {colors, fonts} from '../../constants/theme';

type OrderReceivedScreenProps = {
  onBackToDining: () => void;
  onViewOrders: () => void;
};

const STATUS_STEPS = [
  {label: 'Order Received', state: 'done' as const},
  {label: 'Preparing Your Table', state: 'active' as const},
  {label: 'Service on the Way', state: 'pending' as const},
];

export function OrderReceivedScreen({
  onBackToDining,
  onViewOrders,
}: OrderReceivedScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.OrderReceivedScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.OrderReceivedScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.OrderReceivedScreenHeader}>
          <Text style={styles.OrderReceivedScreenHeaderFiligree}>
            Order Received
          </Text>
        </View>

        <View style={styles.OrderReceivedScreenBody}>
          <View style={styles.OrderReceivedScreenIconRing}>
            <Text style={styles.OrderReceivedScreenCheckFiligree}>✓</Text>
          </View>

          <Text style={styles.OrderReceivedScreenTitleFiligree}>
            Order Confirmed
          </Text>
          <Text style={styles.OrderReceivedScreenDescriptionFiligree}>
            Your dining order has been received by our team. A server will
            attend to your table shortly.
          </Text>

          <View style={styles.OrderReceivedScreenStatusCard}>
            {STATUS_STEPS.map((step, index) => (
              <View
                key={step.label}
                style={[
                  styles.OrderReceivedScreenStatusRow,
                  index < STATUS_STEPS.length - 1 &&
                    styles.OrderReceivedScreenStatusRowBordered,
                ]}>
                <View
                  style={[
                    styles.OrderReceivedScreenStatusDot,
                    step.state === 'done' &&
                      styles.OrderReceivedScreenStatusDotDone,
                    step.state === 'active' &&
                      styles.OrderReceivedScreenStatusDotActive,
                    step.state === 'pending' &&
                      styles.OrderReceivedScreenStatusDotPending,
                  ]}
                />
                <Text
                  style={[
                    styles.OrderReceivedScreenStatusLabelFiligree,
                    step.state === 'pending' &&
                      styles.OrderReceivedScreenStatusLabelPending,
                  ]}>
                  {step.label}
                </Text>
                {step.state === 'done' && (
                  <Text style={styles.OrderReceivedScreenStatusCheck}>✓</Text>
                )}
                {step.state === 'active' && (
                  <Text style={styles.OrderReceivedScreenStatusActive}>
                    IN PROGRESS
                  </Text>
                )}
              </View>
            ))}
          </View>

          <View style={styles.OrderReceivedScreenActions}>
            <GradientActionButton
              label="Back to Dining"
              onPress={onBackToDining}
            />
            <OutlineActionButton
              label="View My Orders"
              onPress={onViewOrders}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderReceivedScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OrderReceivedScreenScrollContent: {
    flexGrow: 1,
  },
  OrderReceivedScreenHeader: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    paddingBottom: 14,
    paddingHorizontal: 16,
    paddingTop: 67,
  },
  OrderReceivedScreenHeaderFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 18,
  },
  OrderReceivedScreenBody: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 28,
  },

  OrderReceivedScreenIconRing: {
    alignItems: 'center',
    borderColor: colors.success,
    borderRadius: 36,
    borderWidth: 2,
    height: 72,
    justifyContent: 'center',
    marginBottom: 18,
    width: 72,
  },
  OrderReceivedScreenCheckFiligree: {
    color: colors.success,
    fontFamily: fonts.sansRegular,
    fontSize: 30,
  },
  OrderReceivedScreenTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.serifRegular,
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },

  OrderReceivedScreenDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 22.75,
    marginBottom: 18,
    maxWidth: 270,
    textAlign: 'center',
  },
  OrderReceivedScreenStatusCard: {
    alignSelf: 'stretch',
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 18,
    paddingHorizontal: 17,
    paddingVertical: 7,
  },
  OrderReceivedScreenStatusRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 13,
    paddingVertical: 11,
  },

  OrderReceivedScreenStatusRowBordered: {
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
  },
  OrderReceivedScreenStatusDot: {
    borderRadius: 6,
    height: 12,
    width: 12,
  },
  OrderReceivedScreenStatusDotDone: {
    backgroundColor: colors.success,
    borderColor: colors.success,
    borderWidth: 2,
  },
  OrderReceivedScreenStatusDotActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
  },

  OrderReceivedScreenStatusDotPending: {
    backgroundColor: 'transparent',
    borderColor: colors.mutedDark,
    borderWidth: 2,
  },
  OrderReceivedScreenStatusLabelFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
  },
  OrderReceivedScreenStatusLabelPending: {
    color: colors.mutedDark,
  },
  OrderReceivedScreenStatusCheck: {
    color: colors.success,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },

  OrderReceivedScreenStatusActive: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  OrderReceivedScreenActions: {
    alignSelf: 'stretch',
    gap: 10,
    width: '100%',
  },
});
