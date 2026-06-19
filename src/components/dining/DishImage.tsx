import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {diningImages} from '../../data/diningAssets';
import {colors} from '../../constants/theme';

type DishImageProps = {
  imageKey: string;
  gradient: [string, string];
  size?: number;
  rounded?: number;
};

export function DishImage({
  imageKey,
  gradient,
  size,
  rounded = 12,
}: DishImageProps) {
  const source = diningImages[imageKey];

  return (
    <LinearGradient
      colors={gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[
        styles.DishImageFacetChassis,
        size
          ? {width: size, height: size, borderRadius: rounded}
          : styles.DishImageFacetChassisFill,
        {borderRadius: rounded},
      ]}>
      <View style={styles.DishImageInnerEnclave}>
        {source ? (
          <Image
            source={source}
            style={[
              styles.DishImagePhoto,
              size
                ? {width: size, height: size, borderRadius: rounded}
                : styles.DishImagePhotoFill,
            ]}
            resizeMode="cover"
          />
        ) : null}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  DishImageFacetChassis: {
    overflow: 'hidden',
  },
  DishImageFacetChassisFill: {
    height: '100%',
    width: '100%',
  },
  DishImageInnerEnclave: {
    flex: 1,
    overflow: 'hidden',
  },
  DishImagePhoto: {
    height: '100%',
    width: '100%',
  },
  DishImagePhotoFill: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },
});
