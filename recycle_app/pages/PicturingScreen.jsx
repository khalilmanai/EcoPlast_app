import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { green } from '../static/colors';

const PicturingScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return (
            <View style={styles.centeredView}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    if (!permission.granted) {
        return (
            <View style={styles.centeredView}>
                <Text style={styles.text}>L'accès à l'appareil photo est requis pour prendre des photos</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.accessText}>Access Camera</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <CameraView
            style={{ flex: 1 }}
            facing='back'


        />
    )
};

export default PicturingScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        margin: 10,
        textAlign: "center"
    },
    button: {
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: green,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    accessText: {
        color: "white"
    }
});
