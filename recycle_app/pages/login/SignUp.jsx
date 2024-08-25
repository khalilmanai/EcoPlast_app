import { StyleSheet, TextInput, View, Dimensions, TouchableOpacity, Text, BackHandler, Alert } from 'react-native';
import React, { useState } from 'react';
import { green } from '../../static/colors';
import { color } from 'react-native-elements/dist/helpers';
import { useNavigation } from '@react-navigation/native';
import Button from '../../static/Button';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert(
                        'EcoPlast',
                        "Voulez vous quittez l'application",
                        [
                            { text: 'Oui', onPress: () => { BackHandler.exitApp() } },
                            { text: 'Non', onPress: () => { console.log("logout canceled") } }
                        ],
                        { cancelable: false }
                    )
                }}
                style={{ backgroundColor: "white", borderRadius: 50, padding: 8, position: "absolute", left: 10, top: 10 }}>
                <Ionicons name='close' size={32} color="black" />
            </TouchableOpacity>

            <View style={styles.flexBox}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Bienvenue,</Text>
                    <Text style={styles.instructionText}>Veuillez ajouter les informations relatives a votre compte!</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <View style={styles.passwordInputContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder='Mot de passe'
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
                        <Text style={styles.toggleText}>
                            {isPasswordVisible ? 'Cacher' : 'Afficher'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.createAccountText}>
                    <Text>Vous n'avez pas un compte ? </Text><TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignIn')
                        }}
                    >
                        <Text style
                            ={{ color: "blue" }}>Créer un compte</Text></TouchableOpacity>
                </View>
                <Button text='Se connecter' />

            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingVertical: '10%',
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        alignItems: 'center',


    },
    textContainer: {
        marginBottom: height * 0.05,
        alignItems: 'flex-start',
    },
    welcomeText: {
        fontSize: width * 0.15,
        fontWeight: 'bold',
        color: green,
    },
    instructionText: {
        fontSize: width * 0.09,
        fontWeight: 'bold',
        color: '#333',
    },
    flexBox: {
        width: '100%',
        alignItems: 'center',
        marginTop: height * 0.1,
        gap: 10
    },
    input: {
        width: '90%',
        paddingVertical: height * 0.02, // Adjust padding based on screen height
        paddingHorizontal: '5%',
        borderRadius: 5,
        borderColor: green,
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    passwordInputContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderColor: green,
        borderWidth: 1,
        paddingHorizontal: '5%',
        backgroundColor: '#fff',
    },
    passwordInput: {
        flex: 1,
        paddingVertical: height * 0.02,
    },
    toggleText: {
        fontWeight: 'bold',
        color: green,
    },
    createAccountText: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
