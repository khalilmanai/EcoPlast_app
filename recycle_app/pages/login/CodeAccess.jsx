import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { green } from '../../static/colors';
import Button from '../../static/Button';


const CodeAccess = ({ navigation }) => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleCodeSubmit = () => {
        if (verificationCode.trim() === '') {
            Alert.alert('Error', 'Please enter the verification code.');
        } else {
            // Perform authentication logic here (e.g., send the code to a server for verification)
            // For simplicity, we'll just log the code to the console in this example
            navigation.navigate("TabBar")
            console.log('Verification Code Submitted:', verificationCode);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veuillez entrer le code de vérification </Text>

            <TextInput
                style={styles.input}
                placeholder="Code de vérification"
                keyboardType="numeric"
                value={verificationCode}
                onChangeText={(text) => setVerificationCode(text)}
            />

            <Button text="Submit" action={() => {
                handleCodeSubmit()
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'start',
        padding: 20,
        backgroundColor: 'white',
        gap: 30,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: green,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    submitButton: {
        backgroundColor: green,
        padding: 15,
        borderRadius: 5,
        width: '100%',
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default CodeAccess;
