/* eslint-env jest */
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-maps', () => {
  const React = require('react');
  const {View} = require('react-native');

  const MockMap = ({children, ...props}) => (
    <View {...props}>{children}</View>
  );
  const MockMarker = props => <View {...props} />;

  return {
    __esModule: true,
    default: MockMap,
    Marker: MockMarker,
    PROVIDER_GOOGLE: 'google',
  };
});
