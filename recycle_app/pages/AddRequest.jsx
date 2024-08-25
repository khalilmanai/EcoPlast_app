import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import LOGO from '../assets/Logo.png';
import Button from '../static/Button';

const { width, height } = Dimensions.get('window');

const AddRequest = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image source={LOGO} resizeMode="contain" style={styles.logoImage} />
            </View>
            <View style={styles.buttonContainer}>
                <Button text="Dépot" action={() => {
                    navigation.navigate("deposit")
                }} />
                <Button text="Ramassage" action={() => {
                    navigation.navigate("ListRecyclables")
                }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: '2%', // Responsive padding
    },
    imageBox: {
        alignItems: 'center',
        marginBottom: height * 0.05, // Margin relative to screen height
    },
    logoImage: {
        width: width * 0.5, // Responsive width (50% of screen width)
        height: height * 0.25, // Responsive height (25% of screen height)
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.02, // Space between the image and buttons
    },
});

export default AddRequest;
