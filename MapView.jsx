import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { UrlTile, Marker, Polyline } from 'react-native-maps';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const urlTemplate = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const REGION = {
  latitude: 45.0402,
  longitude: 38.9760,
  latitudeDelta: 0.7,
  longitudeDelta: 0.7,
};

const MARKERS = [
  {
    i: 1421059,
    latitude: 45.5402,
    longitude: 39.50,
  },
  {
    i: 1007126,
    latitude: 45.0356,
    longitude: 38.9755,
  },
  {
    i: 1332648,
    latitude: 45.433,
    longitude: 38.9750,
  },
];

const NEW_GREEN_MARKERS = [
  {
    i: 2000001,
    latitude: 45.0502,
    longitude: 38.9760,
  },
  {
    i: 2000002,
    latitude: 45.0602,
    longitude: 38.9860,
  },
];

const ROUTE_COORDINATES = [
  { latitude: 45.5402, longitude: 39.50 },
  { latitude: 45.0356, longitude: 38.9755 },
  { latitude: 45.433, longitude: 38.9750 },
];

const MapViewComponent = () => {
  return (
    <MapView initialRegion={REGION} style={styles.map}>
      <UrlTile urlTemplate={urlTemplate} maximumZ={10} flipY={false} />
      {MARKERS.map((marker) => (
        <Marker
          key={marker.i}
          identifier={`${marker.i}`}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          tracksViewChanges={false}
        />
      ))}
      {NEW_GREEN_MARKERS.map((marker) => (
        <Marker
          key={marker.i}
          identifier={`${marker.i}`}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          pinColor="green"
          tracksViewChanges={false}
        />
      ))}
      <Polyline
        coordinates={ROUTE_COORDINATES}
        strokeColor="#FF0000"
        strokeWidth={2}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: SCREEN_HEIGHT,
  },
});

export default MapViewComponent;
