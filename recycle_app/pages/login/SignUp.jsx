import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import { green } from '../../static/colors';
import Button from '../../static/Button';

const SignUp = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');

    const handlePhoneInputChange = (number, formatted) => {
        setPhoneNumber(number);
        setFormattedPhoneNumber(formatted);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Text style={styles.headerText}>Veuillez entrer votre numéro de téléphone</Text>

            <View style={styles.phoneInputContainer}>
                <PhoneInput
                    defaultValue={phoneNumber}

                    layout="first"
                    onChangeFormattedText={handlePhoneInputChange}
                    containerStyle={styles.phoneInput}
                    textContainerStyle={styles.phoneInputTextContainer}
                    textInputStyle={styles.phoneInputText}
                    codeTextStyle={styles.phoneInputCodeText}
                />
            </View>

            <Button
                text="S'inscrire"

                action={() => navigation.navigate("codeAccess")}
            />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    phoneInputContainer: {
        marginBottom: 20,
    },
    phoneInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    phoneInputTextContainer: {
        paddingVertical: 0,
    },
    phoneInputText: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    phoneInputCodeText: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    submitButton: {
        backgroundColor: green,
        borderRadius: 5,
        paddingVertical: 15,
    },
});

export default SignUp;
