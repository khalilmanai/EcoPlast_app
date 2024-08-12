import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { green } from '../static/colors';

const Counter = ({ counterValue, setCounterValue }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setCounterValue((prevCounter) => prevCounter - 1);
                }}
                style={styles.box}
            >
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="0"
                value={counterValue.toString()} // Convert counterValue to string
                keyboardType="numeric"
                onChangeText={(text) => setCounterValue(parseInt(text) || 0)} // Ensure a valid number
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => {
                    setCounterValue((prevCounter) => prevCounter + 1);
                }}
                style={styles.box}
            >
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        width: 40,
        height: 40,
        backgroundColor: green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        borderWidth: 1,
        width: 40,
        textAlign: 'center',
        borderRadius: 5,
        borderColor: green,
        marginHorizontal: 10,
    },
});

export default Counter;
