import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env';

import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
        if(!origin || !destination) return;

        // Zoom & fit to markers

        //@ts-ignore
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    }, [origin, destination]);

  return (
    <MapView
        ref={mapRef}
        style={tw`flex-1`}
        // mapType="mutedStandard"
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }}
    >
        {origin && destination && (
            <MapViewDirections 
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="#000"
            />
        )}

        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
                title="Local de Partida"
                description={origin.description}
                identifier="origin"
            />
        )}

        {destination?.location && (
            <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng,
                }}
                title="Destino"
                description={destination.description}
                identifier="destination"
            />
        )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})