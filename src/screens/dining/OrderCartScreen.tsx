import React from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {DishImage} from '../../components/dining/DishImage';
import {GradientActionButton} from '../../components/dining/GradientActionButton';
import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {formatEuro} from '../../data/dining';
import {useDiningCart} from '../../context/DiningCartContext';
import {colors, fonts} from '../../constants/theme';

type OrderCartScreenProps = {
  onBack: () => void;
  onReview: () => void;
};

export function OrderCartScreen({onBack, onReview}: OrderCartScreenProps) {
  const insets = useSafeAreaInsets();
  const {
    getCartItems,
    notes,
    setNotes,
    incrementItem,
    decrementItem,
    removeItem,
  } = useDiningCart();
  const cartItems = getCartItems();

  return (
    <View style={styles.OrderCartScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.OrderCartScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader title="Order Cart" backLabel="Menu" onBack={onBack} />

        <View style={styles.OrderCartScreenBody}>
          {cartItems.map(entry => (
            <View key={entry.item.id} style={styles.OrderCartScreenItemCard}>
              <DishImage
                imageKey={entry.item.imageKey}
                gradient={entry.item.gradient}
                size={60}
              />
              <View style={styles.OrderCartScreenItemCopy}>
                <Text style={styles.OrderCartScreenItemNameFiligree}>
                  {entry.item.name}
                </Text>
                <Text style={styles.OrderCartScreenItemPriceFiligree}>
                  {formatEuro(entry.lineTotal)}
                </Text>
                <View style={styles.OrderCartScreenQtyRow}>
                  <Pressable
                    onPress={() => decrementItem(entry.item.id)}
                    style={styles.OrderCartScreenQtyButton}>
                    <Text style={styles.OrderCartScreenQtySymbol}>−</Text>
                  </Pressable>
                  <Text style={styles.OrderCartScreenQtyFiligree}>
                    {entry.quantity}
                  </Text>
                  <Pressable
                    onPress={() => incrementItem(entry.item.id)}
                    style={styles.OrderCartScreenQtyButton}>
                    <Text style={styles.OrderCartScreenQtySymbol}>+</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => removeItem(entry.item.id)}
                    style={styles.OrderCartScreenRemovePortico}>
                    <Text style={styles.OrderCartScreenRemoveFiligree}>
                      Remove
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}

          <View style={styles.OrderCartScreenNotesCard}>
            <Text style={styles.OrderCartScreenNotesLabelFiligree}>
              Special Notes
            </Text>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Add dietary notes or special requests…"
              placeholderTextColor={colors.body}
              multiline
              style={styles.OrderCartScreenNotesInput}
            />
          </View>

          <GradientActionButton label="Review Order" onPress={onReview} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderCartScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  OrderCartScreenScrollContent: {
    flexGrow: 1,
  },
  OrderCartScreenBody: {
    gap: 9,
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  OrderCartScreenItemCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 13,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 11,
    padding: 14,
  },
  OrderCartScreenItemCopy: {
    flex: 1,
    gap: 2,
  },

  OrderCartScreenItemNameFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
  },
  OrderCartScreenItemPriceFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
  OrderCartScreenQtyRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingTop: 6,
  },

  OrderCartScreenQtyButton: {
    alignItems: 'center',
    backgroundColor: colors.cardElevated,
    borderColor: colors.progressTrack,
    borderRadius: 7,
    borderWidth: 1,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  OrderCartScreenQtySymbol: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 18,
    lineHeight: 20,
  },
  OrderCartScreenQtyFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    minWidth: 20,
    textAlign: 'center',
  },

  OrderCartScreenRemovePortico: {
    flex: 1,
    alignItems: 'flex-end',
  },
  OrderCartScreenRemoveFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  OrderCartScreenNotesCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    gap: 3,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },

  OrderCartScreenNotesLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  OrderCartScreenNotesInput: {
    backgroundColor: colors.qrBackground,
    borderColor: colors.progressTrack,
    borderRadius: 9,
    borderWidth: 1,
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    height: 60,
    paddingHorizontal: 12,
    paddingTop: 10,
    textAlignVertical: 'top',
  },
});
