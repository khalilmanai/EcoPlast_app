import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Counter from '../components/Counter';
import { green } from '../static/colors';
import { useNavigation, useRoute } from '@react-navigation/native';

const OrderDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [counterValue, setCounterValue] = useState(0);
    const [selectVehicle, setSelectVehicle] = useState('Moto'); // Default value is 'Moto'
    const [noteForDriver, setNoteForDriver] = useState('');
    const [address, setAddress] = useState('Home');
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (route.params?.selectedCity) {
            setAddress(route.params.selectedCity);
        }
        if (route.params?.selectedLocation) {
            setLocation(route.params.selectedLocation);
        }
    }, [route.params?.selectedCity, route.params?.selectedLocation]);

    const handleVehicleSelection = (vehicleType) => {
        setSelectVehicle(vehicleType);
    };

    const handleNoteForDriverChange = (text) => {
        setNoteForDriver(text);
    };

    const sendOrderToDatabase = () => {

        const orderData = {
            address,
            location,
            noteForDriver,
            numberOfSachets: counterValue,
            vehicle: selectVehicle,
        };

        // Replace this with your actual logic for sending data to the database
        console.log('Sending order data to the database:', orderData);

        // Example API call:
        // fetch('your-api-endpoint', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(orderData),
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch(error => console.error('Error:', error));

        navigation.navigate('confirmation')
    };

    const renderBox = (title, subTitle, onPress, children) => (
        <View style={styles.boxContainer}>
            <View style={styles.box}>
                <View style={styles.littleBanner} />
                <Text style={styles.headerTitle}>{title}</Text>
                {subTitle && (
                    <View style={styles.banner}>
                        <Text style={styles.headerTitle}>{subTitle}</Text>
                        {onPress && (
                            <TouchableOpacity onPress={onPress}>
                                <Text style={styles.changeText}>Change</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>
            {children && <View style={styles.banner}>{children}</View>}
        </View>
    );

    const renderVehicleButton = (vehicleType) => (
        <TouchableOpacity
            style={[styles.vehicleButton, selectVehicle === vehicleType && styles.selectedVehicle]}
            onPress={() => handleVehicleSelection(vehicleType)}
        >
            <Text style={styles.headerTitle}>{vehicleType}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {renderBox('Adresse de livraison', address, () => navigation.navigate('map'))}
            {renderBox('Note pour le chauffeur', null, null, (
                <TextInput
                    style={styles.input}
                    placeholder="Note pour Chauffeur"
                    value={noteForDriver}
                    onChangeText={handleNoteForDriverChange}
                />
            ))}
            {renderBox('Nombre de sachets', null, null, (
                <Counter counterValue={counterValue} setCounterValue={setCounterValue} />
            ))}
            {renderBox('Véhicule demandée', null, null, (
                <View style={styles.vehicleButtons}>
                    {renderVehicleButton('Camion')}
                    {renderVehicleButton('Moto')}
                </View>
            ))}
            <TouchableOpacity style={styles.placeOrderButton} onPress={sendOrderToDatabase}>
                <Text style={{ fontSize: 16, color: 'white' }}>Confirmer </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    boxContainer: {
        marginTop: 10,
        borderRadius: 10,
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        elevation: 3,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    littleBanner: {
        height: 40,
        width: 10,
        borderRadius: 50,
        backgroundColor: green,
        marginRight: 10,
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    changeText: {
        color: green,
        fontWeight: 'bold',
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        width: '100%',
        padding: 16,
        borderColor: green,
        borderRadius: 10,
    },
    vehicleButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    vehicleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        padding: 16,
        width: '48%', // Adjusted width to fit two buttons in a row
    },
    selectedVehicle: {
        borderWidth: 2,
        borderColor: green,
    },
    placeOrderButton: {
        width: '90%',
        marginTop: 20,
        padding: 16,
        backgroundColor: green,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default OrderDetails;
