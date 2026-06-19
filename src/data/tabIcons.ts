import type {ImageSourcePropType} from 'react-native';

import type {MainTab} from '../types/clubPass';

export const TAB_ICONS: Record<MainTab, ImageSourcePropType> = {
  pass: require('../assets/images/tabs/tabPass.png'),
  dining: require('../assets/images/tabs/tabDining.png'),
  events: require('../assets/images/tabs/tabEvents.png'),
  guide: require('../assets/images/tabs/tabGuide.png'),
  chat: require('../assets/images/tabs/tabChat.png'),
};
