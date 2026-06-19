import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {GradientActionButton} from '../../components/dining/GradientActionButton';
import {OutlineActionButton} from '../../components/dining/OutlineActionButton';
import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {useGuestInfo} from '../../context/GuestInfoContext';
import {formatEuro} from '../../data/dining';
import {useDiningCart} from '../../context/DiningCartContext';
import {colors, fonts} from '../../constants/theme';

type OrderSummaryScreenProps = {
  onBack: () => void;
  onSubmit: () => void;
  onEdit: () => void;
};

export function OrderSummaryScreen({
  onBack,
  onSubmit,
  onEdit,
}: OrderSummaryScreenProps) {
  const insets = useSafeAreaInsets();
  const {guest} = useGuestInfo();
  const {getCartItems, totals} = useDiningCart();
  const cartItems = getCartItems();

  return (
    <View style={styles.OrderSummaryScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.OrderSummaryScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader
          title="Order Summary"
          backLabel="Cart"
          onBack={onBack}
        />

        <View style={styles.OrderSummaryScreenBody}>
          <View style={styles.OrderSummaryScreenGuestCard}>
            <Text style={styles.OrderSummaryScreenEyebrowFiligree}>Guest</Text>
            <Text style={styles.OrderSummaryScreenGuestFiligree}>
              {guest.guestName}
            </Text>
            <Text style={styles.OrderSummaryScreenGuestMetaFiligree}>
              {guest.visitType} · {guest.clubCardId}
            </Text>
          </View>

          <View style={styles.OrderSummaryScreenItemsCard}>
            <Text style={styles.OrderSummaryScreenEyebrowFiligree}>
              Selected Items
            </Text>
            {cartItems.map((entry, index) => (
              <View
                key={entry.item.id}
                style={[
                  styles.OrderSummaryScreenItemRow,
                  index < cartItems.length - 1 &&
                    styles.OrderSummaryScreenItemRowBordered,
                ]}>
                <View>
                  <Text style={styles.OrderSummaryScreenItemNameFiligree}>
                    {entry.item.name}
                  </Text>
                  <Text style={styles.OrderSummaryScreenItemMetaFiligree}>
                    Qty: {entry.quantity} · {entry.item.prepMinutes} min
                  </Text>
                </View>
                <Text style={styles.OrderSummaryScreenItemPriceFiligree}>
                  {formatEuro(entry.lineTotal)}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.OrderSummaryScreenTotalsCard}>
            <View style={styles.OrderSummaryScreenTotalRow}>
              <Text style={styles.OrderSummaryScreenTotalLabelFiligree}>
                Subtotal
              </Text>
              <Text style={styles.OrderSummaryScreenTotalValueFiligree}>
                {formatEuro(totals.subtotal)}
              </Text>
            </View>
            <View style={styles.OrderSummaryScreenTotalRow}>
              <Text style={styles.OrderSummaryScreenTotalLabelFiligree}>
                Service Fee (10%)
              </Text>
              <Text style={styles.OrderSummaryScreenTotalValueFiligree}>
                {formatEuro(totals.serviceFee)}
              </Text>
            </View>
            <View style={styles.OrderSummaryScreenTotalRow}>
              <Text style={styles.OrderSummaryScreenTotalLabelFiligree}>
                Est. Preparation
              </Text>
              <Text style={styles.OrderSummaryScreenTotalValueFiligree}>
                ~{totals.prepMinutes} min
              </Text>
            </View>
            <View style={styles.OrderSummaryScreenDividerLintel} />
            <View style={styles.OrderSummaryScreenGrandTotalRow}>
              <Text style={styles.OrderSummaryScreenGrandTotalLabelFiligree}>
                Total
              </Text>
              <Text style={styles.OrderSummaryScreenGrandTotalFiligree}>
                {formatEuro(totals.total)}
              </Text>
            </View>
          </View>

          <GradientActionButton
            label="Submit Dining Order"
            onPress={onSubmit}
          />
          <OutlineActionButton label="Edit Selection" onPress={onEdit} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderSummaryScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OrderSummaryScreenScrollContent: {
    flexGrow: 1,
  },
  OrderSummaryScreenBody: {
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  OrderSummaryScreenGuestCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    gap: 2,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  OrderSummaryScreenEyebrowFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  OrderSummaryScreenGuestFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
  },

  OrderSummaryScreenGuestMetaFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  OrderSummaryScreenItemsCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },

  OrderSummaryScreenItemRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  OrderSummaryScreenItemRowBordered: {
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    marginBottom: 1,
    paddingBottom: 8,
  },
  OrderSummaryScreenItemNameFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansMedium,
    fontSize: 13,
  },
  OrderSummaryScreenItemMetaFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    marginTop: 2,
  },
  OrderSummaryScreenItemPriceFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },

  OrderSummaryScreenTotalsCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    paddingBottom: 14,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  OrderSummaryScreenTotalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  OrderSummaryScreenTotalLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
  },
  OrderSummaryScreenTotalValueFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansMedium,
    fontSize: 13,
  },

  OrderSummaryScreenDividerLintel: {
    backgroundColor: colors.primary,
    height: 1,
    marginVertical: 8,
  },
  OrderSummaryScreenGrandTotalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  OrderSummaryScreenGrandTotalLabelFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 16,
  },

  OrderSummaryScreenGrandTotalFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 20,
  },
});
