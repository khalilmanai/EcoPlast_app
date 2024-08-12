import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LOGo from '../assets/Logo.png';
import { green } from '../static/colors';
import Button from '../static/Button';

const OnboardingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={LOGo} style={styles.logo} />
            <Button text="Continuer Avec Mobile" action={() => {
                navigation.navigate('SignUp')
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "space-around",

    },
    logo: {
        width: 200,
        height: 200,
    },

});

export default OnboardingPage;
