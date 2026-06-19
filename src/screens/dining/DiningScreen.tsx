import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {CartBar} from '../../components/dining/CartBar';
import {DiningHeader} from '../../components/dining/DiningHeader';
import {MenuItemCard} from '../../components/dining/MenuItemCard';
import {MENU_ITEMS, useDiningCart} from '../../context/DiningCartContext';
import {colors} from '../../constants/theme';

type DiningScreenProps = {
  onOpenCart: () => void;
  onOpenOrders: () => void;
};

export function DiningScreen({onOpenCart, onOpenOrders}: DiningScreenProps) {
  const {getQuantity, addItem, incrementItem, totals} = useDiningCart();

  return (
    <View style={styles.DiningScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        contentContainerStyle={[
          styles.DiningScreenScrollContent,
          totals.itemCount > 0 && styles.DiningScreenScrollContentWithCart,
        ]}
        showsVerticalScrollIndicator={false}>
        <DiningHeader onOrdersPress={onOpenOrders} />

        <View style={styles.DiningScreenList}>
          {MENU_ITEMS.map(item => (
            <MenuItemCard
              key={item.id}
              item={item}
              quantity={getQuantity(item.id)}
              onAdd={() => addItem(item.id)}
              onIncrement={() => incrementItem(item.id)}
            />
          ))}
        </View>
      </ScrollView>

      <CartBar
        itemCount={totals.itemCount}
        total={totals.subtotal}
        onPress={onOpenCart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  DiningScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },

  DiningScreenScrollContent: {
    paddingBottom: 16,
  },
  DiningScreenScrollContentWithCart: {
    paddingBottom: 8,
  },
  DiningScreenList: {
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});
