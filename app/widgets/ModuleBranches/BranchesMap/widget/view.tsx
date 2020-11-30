import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles, mapStyle } from './styles';
import { Palette } from 'styles';

export function BranchesMapView() {
  return (
    <View style={styles.container}>
      <MapView
        mapType="standard"
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsBuildings
        loadingEnabled={true}
        loadingIndicatorColor={Palette.blackText}
        region={{
          latitude: 41.26465,
          longitude: 69.240562,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      ></MapView>
    </View>
  )
}
