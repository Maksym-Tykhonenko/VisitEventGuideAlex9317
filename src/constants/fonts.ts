import {Platform} from 'react-native';

const playfair = {
  regular: 'PlayfairDisplay-Regular',
  medium: 'PlayfairDisplay-Medium',
  semiBold: 'PlayfairDisplay-SemiBold',
  bold: 'PlayfairDisplay-Bold',
  extraBold: 'PlayfairDisplay-ExtraBold',
  black: 'PlayfairDisplay-Black',
};

const ios = {
  serifRegular: playfair.regular,
  serifBold: playfair.bold,
  serifSemiBold: playfair.semiBold,
  sansRegular: 'System',
  sansMedium: 'System',
  sansSemiBold: 'System',
  sansBold: 'System',
};

const android = {
  serifRegular: playfair.regular,
  serifBold: playfair.bold,
  serifSemiBold: playfair.semiBold,
  sansRegular: 'sans-serif',
  sansMedium: 'sans-serif-medium',
  sansSemiBold: 'sans-serif-medium',
  sansBold: 'sans-serif',
};

const platformFonts = Platform.OS === 'ios' ? ios : android;

export const fonts = {
  serifRegular: platformFonts.serifRegular,
  serifBold: platformFonts.serifBold,
  serifSemiBold: platformFonts.serifSemiBold,
  sansRegular: platformFonts.sansRegular,
  sansMedium: platformFonts.sansMedium,
  sansSemiBold: platformFonts.sansSemiBold,
  sansBold: platformFonts.sansBold,
};

export const playfairFonts = playfair;
