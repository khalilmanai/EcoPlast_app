import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { green } from './colors'

const Button = ({ text, action }) => {
    return (
        <TouchableOpacity
            style={styles.nextButton}
            onPress={action}
        >
            <Text style={styles.nextButtonText}>{text} </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({

    nextButton: {
        alignSelf: 'stretch',
        backgroundColor: green,
        padding: 15, // Wider button
        borderRadius: 5,
        margin: 10

    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
})