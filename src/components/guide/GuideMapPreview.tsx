import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {GUIDE_LOCATIONS, GUIDE_MAP_REGION} from '../../data/guide';
import {colors, fonts} from '../../constants/theme';

type GuideMapPreviewProps = {
  selectedLocationId?: string | null;
  onSelectLocation: (locationId: string) => void;
};

const DARK_MAP_STYLE = [
  {elementType: 'geometry', stylers: [{color: '#0d1117'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#7a6060'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#0d1117'}]},
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#132033'}],
  },
  {featureType: 'road', elementType: 'geometry', stylers: [{color: '#1a222d'}]},
  {featureType: 'poi', stylers: [{visibility: 'off'}]},
];

export function GuideMapPreview({
  selectedLocationId,
  onSelectLocation,
}: GuideMapPreviewProps) {
  return (
    <View style={styles.GuideMapPreviewFacetChassis}>
      <Text style={styles.GuideMapPreviewLabelFiligree}>Map Preview</Text>
      <View style={styles.GuideMapPreviewMapEnclave}>
        <MapView
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          style={styles.GuideMapPreviewMap}
          initialRegion={GUIDE_MAP_REGION}
          userInterfaceStyle="dark"
          customMapStyle={
            Platform.OS === 'android' ? DARK_MAP_STYLE : undefined
          }
          rotateEnabled={false}
          pitchEnabled={false}>
          {GUIDE_LOCATIONS.map(location => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              pinColor={
                selectedLocationId === location.id
                  ? colors.primary
                  : colors.primaryDark
              }
              onPress={() => onSelectLocation(location.id)}
            />
          ))}
        </MapView>
      </View>
      <Text style={styles.GuideMapPreviewHintFiligree}>
        Tap a marker to view location details
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  GuideMapPreviewFacetChassis: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    gap: 6,
    paddingHorizontal: 13,
    paddingVertical: 11,
  },
  GuideMapPreviewLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  GuideMapPreviewMapEnclave: {
    borderRadius: 10,
    height: 151,
    overflow: 'hidden',
  },
  GuideMapPreviewMap: {
    height: '100%',
    width: '100%',
  },
  GuideMapPreviewHintFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
  },
});
