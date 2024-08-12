import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LOGO from '../assets/Logo.png';
import Button from '../static/Button';

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


    },
    imageBox: {
        alignItems: 'center',
        margin: 100,
    },
    logoImage: {
        width: 200,
        height: 200,
    }
});

export default AddRequest;
