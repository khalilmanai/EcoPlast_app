import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const MapComponent = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    const handleMapPress = useCallback(async (event) => {
        const coordinate = event.nativeEvent.coordinate;
        setSelectedLocation(coordinate);
        const [address] = await Location.reverseGeocodeAsync(coordinate);
        if (address) {
            setSelectedCity(address.city || 'Unknown city');
        }
    }, []);

    const handleConfirmLocation = useCallback(() => {
        if (selectedLocation) {
            navigation.navigate('orderDetails', { selectedLocation, selectedCity });
        }
    }, [navigation, selectedLocation, selectedCity]);

    const mapInitialRegion = useMemo(() => location ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    } : null, [location]);

    const mapStyles = useMemo(() => ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
        confirmButton: {
            position: 'absolute',
            bottom: 20,
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 5,
        },
        confirmButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
    }), []);

    return (
        <View style={mapStyles.container}>
            {location ? (
                <MapView
                    style={mapStyles.map}
                    onPress={handleMapPress}
                    initialRegion={mapInitialRegion}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title={"You are here"}
                    />
                    {selectedLocation && (
                        <Marker
                            coordinate={selectedLocation}
                            pinColor="blue"
                            title={selectedCity || 'Selected Location'}
                        />
                    )}
                </MapView>
            ) : (
                <Text>{errorMsg ? errorMsg : 'En attente...'}</Text>
            )}
            {selectedLocation && (
                <TouchableOpacity style={mapStyles.confirmButton} onPress={handleConfirmLocation}>
                    <Text style={mapStyles.confirmButtonText}>Confirm Location</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MapComponent;
