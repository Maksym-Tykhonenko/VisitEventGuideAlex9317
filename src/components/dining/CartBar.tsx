import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {formatEuro} from '../../data/dining';
import {colors, fonts} from '../../constants/theme';

type CartBarProps = {
  itemCount: number;
  total: number;
  onPress: () => void;
};

export function CartBar({itemCount, total, onPress}: CartBarProps) {
  if (itemCount === 0) {
    return null;
  }

  return (
    <View style={styles.CartBarFacetChassis}>
      <Pressable onPress={onPress} style={styles.CartBarPressable}>
        <View style={styles.CartBarInnerEnclave}>
          <View style={styles.CartBarBadge}>
            <Text style={styles.CartBarBadgeFiligree}>{itemCount}</Text>
          </View>
          <Text style={styles.CartBarLabelFiligree}>View Request Cart</Text>
          <Text style={styles.CartBarTotalFiligree}>{formatEuro(total)}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  CartBarFacetChassis: {
    backgroundColor: colors.cartBarBg,
    borderTopColor: colors.cartBarBorder,
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  CartBarPressable: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  CartBarInnerEnclave: {
    alignItems: 'center',
    backgroundColor: colors.gold,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
  CartBarBadge: {
    alignItems: 'center',
    backgroundColor: '#111118',
    borderRadius: 12,
    height: 21,
    justifyContent: 'center',
    minWidth: 21,
    paddingHorizontal: 4,
  },
  CartBarBadgeFiligree: {
    color: '#e8e8f0',
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
  CartBarLabelFiligree: {
    color: colors.goldDark,
    flex: 1,
    fontFamily: fonts.sansBold,
    fontSize: 14,
    textAlign: 'center',
  },
  CartBarTotalFiligree: {
    color: colors.goldDark,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
});
