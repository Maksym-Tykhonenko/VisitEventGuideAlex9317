import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {formatEuro} from '../../data/dining';
import {useDiningCart} from '../../context/DiningCartContext';
import {colors, fonts} from '../../constants/theme';

type MyOrdersScreenProps = {
  onBack: () => void;
};

export function MyOrdersScreen({onBack}: MyOrdersScreenProps) {
  const insets = useSafeAreaInsets();
  const {orders} = useDiningCart();

  return (
    <View style={styles.MyOrdersScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.MyOrdersScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader title="My Orders" backLabel="Menu" onBack={onBack} />

        <View style={styles.MyOrdersScreenBody}>
          {orders.length === 0 ? (
            <Text style={styles.MyOrdersScreenEmptyFiligree}>
              No orders yet. Browse the menu to place your first dining request.
            </Text>
          ) : (
            orders.map((order, index) => (
              <View
                key={order.id}
                style={[
                  styles.MyOrdersScreenOrderCard,
                  index > 0 && styles.MyOrdersScreenOrderCardDimmed,
                ]}>
                <View style={styles.MyOrdersScreenOrderHeader}>
                  <View>
                    <Text style={styles.MyOrdersScreenOrderEyebrowFiligree}>
                      Order #{order.id}
                    </Text>
                    <Text style={styles.MyOrdersScreenGuestFiligree}>
                      {order.guestName}
                    </Text>
                  </View>
                  <View style={styles.MyOrdersScreenOrderMeta}>
                    <View style={styles.MyOrdersScreenStatusBadge}>
                      <Text style={styles.MyOrdersScreenStatusFiligree}>
                        RECEIVED
                      </Text>
                    </View>
                    {order.placedAt ? (
                      <Text style={styles.MyOrdersScreenTimeFiligree}>
                        Today, {order.placedAt}
                      </Text>
                    ) : null}
                  </View>
                </View>

                <View style={styles.MyOrdersScreenItemsBlock}>
                  {order.items.map((item, itemIndex) => (
                    <View
                      key={`${order.id}-${item.name}`}
                      style={[
                        styles.MyOrdersScreenItemRow,
                        itemIndex < order.items.length - 1 &&
                          styles.MyOrdersScreenItemRowBordered,
                      ]}>
                      <Text style={styles.MyOrdersScreenItemNameFiligree}>
                        {item.name}{' '}
                        <Text style={styles.MyOrdersScreenItemQtyFiligree}>
                          ×{item.quantity}
                        </Text>
                      </Text>
                      <Text style={styles.MyOrdersScreenItemPriceFiligree}>
                        {formatEuro(item.lineTotal)}
                      </Text>
                    </View>
                  ))}
                </View>

                <View style={styles.MyOrdersScreenFooter}>
                  <View style={styles.MyOrdersScreenFooterTotals}>
                    {order.subtotal !== order.total && (
                      <Text style={styles.MyOrdersScreenFooterMetaFiligree}>
                        Subtotal{' '}
                        <Text style={styles.MyOrdersScreenFooterValueFiligree}>
                          {formatEuro(order.subtotal)}
                        </Text>
                      </Text>
                    )}
                    <Text style={styles.MyOrdersScreenFooterMetaFiligree}>
                      Total{' '}
                      <Text style={styles.MyOrdersScreenFooterTotalFiligree}>
                        {formatEuro(order.total)}
                      </Text>
                    </Text>
                  </View>
                  <Text style={styles.MyOrdersScreenPrepFiligree}>
                    ~{order.prepMinutes} min
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MyOrdersScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  MyOrdersScreenScrollContent: {
    flexGrow: 1,
  },
  MyOrdersScreenBody: {
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  MyOrdersScreenEmptyFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
  },

  MyOrdersScreenOrderCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    gap: 9,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  MyOrdersScreenOrderCardDimmed: {
    opacity: 0.65,
  },
  MyOrdersScreenOrderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MyOrdersScreenOrderEyebrowFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  MyOrdersScreenGuestFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    marginTop: 3,
  },

  MyOrdersScreenOrderMeta: {
    alignItems: 'flex-end',
    gap: 4,
  },
  MyOrdersScreenStatusBadge: {
    backgroundColor: colors.cardElevated,
    borderColor: 'rgba(42, 122, 72, 0.27)',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  MyOrdersScreenStatusFiligree: {
    color: colors.success,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 0.6,
  },

  MyOrdersScreenTimeFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  MyOrdersScreenItemsBlock: {
    borderTopColor: colors.progressTrack,
    borderTopWidth: 1,
    paddingTop: 11,
  },
  MyOrdersScreenItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  MyOrdersScreenItemRowBordered: {
    borderBottomColor: colors.progressTrack,
    borderBottomWidth: 1,
    marginBottom: 1,
    paddingBottom: 6,
  },
  MyOrdersScreenItemNameFiligree: {
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    paddingRight: 8,
  },

  MyOrdersScreenItemQtyFiligree: {
    color: colors.body,
  },
  MyOrdersScreenItemPriceFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
  },
  MyOrdersScreenFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MyOrdersScreenFooterTotals: {
    flexDirection: 'row',
    gap: 14,
  },

  MyOrdersScreenFooterMetaFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  MyOrdersScreenFooterValueFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
  },
  MyOrdersScreenFooterTotalFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
  MyOrdersScreenPrepFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
});
