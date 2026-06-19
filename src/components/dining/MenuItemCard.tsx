import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {formatEuro} from '../../data/dining';
import {colors, fonts} from '../../constants/theme';
import type {MenuItem} from '../../types/dining';
import {DishImage} from './DishImage';

type MenuItemCardProps = {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onIncrement: () => void;
};

export function MenuItemCard({
  item,
  quantity,
  onAdd,
  onIncrement,
}: MenuItemCardProps) {
  const inCart = quantity > 0;

  return (
    <View style={styles.MenuItemCardFacetChassis}>
      <View style={styles.MenuItemCardImageEnclave}>
        <DishImage imageKey={item.imageKey} gradient={item.gradient} />
      </View>

      <View style={styles.MenuItemCardBody}>
        <View style={styles.MenuItemCardTopRow}>
          <View style={styles.MenuItemCardTitleBlock}>
            <Text style={styles.MenuItemCardNameFiligree}>{item.name}</Text>
            <Text style={styles.MenuItemCardTagFiligree}>{item.tag}</Text>
          </View>
          <View style={styles.MenuItemCardPriceBlock}>
            <Text style={styles.MenuItemCardPriceFiligree}>
              {formatEuro(item.price)}
            </Text>
            <Text style={styles.MenuItemCardPrepFiligree}>
              {item.prepMinutes} min
            </Text>
          </View>
        </View>

        <Text style={styles.MenuItemCardDescriptionFiligree}>
          {item.description}
        </Text>

        <View style={styles.MenuItemCardActionRow}>
          <Pressable
            onPress={inCart ? onIncrement : onAdd}
            style={[
              styles.MenuItemCardActionPortico,
              inCart && styles.MenuItemCardActionPorticoInCart,
            ]}>
            <Text
              style={[
                styles.MenuItemCardActionFiligree,
                inCart && styles.MenuItemCardActionFiligreeInCart,
              ]}>
              {inCart ? `In Cart ( ${quantity} )  +` : '+ Add'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuItemCardFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },
  MenuItemCardImageEnclave: {
    height: 86,
    overflow: 'hidden',
  },
  MenuItemCardBody: {
    gap: 4,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  MenuItemCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MenuItemCardTitleBlock: {
    flex: 1,
    gap: 2,
    paddingRight: 8,
  },
  MenuItemCardNameFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
  },
  MenuItemCardTagFiligree: {
    color: colors.primary,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
  },
  MenuItemCardPriceBlock: {
    alignItems: 'flex-end',
    gap: 2,
  },
  MenuItemCardPriceFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 15,
  },
  MenuItemCardPrepFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
  },
  MenuItemCardDescriptionFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    lineHeight: 16.5,
  },
  MenuItemCardActionRow: {
    alignItems: 'flex-end',
    paddingTop: 4,
  },
  MenuItemCardActionPortico: {
    backgroundColor: colors.card,
    borderColor: colors.gold,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  MenuItemCardActionPorticoInCart: {
    backgroundColor: colors.cardElevated,
    borderColor: colors.primary,
  },
  MenuItemCardActionFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 12,
  },
  MenuItemCardActionFiligreeInCart: {
    color: colors.gold,
    fontFamily: fonts.sansSemiBold,
  },
});
