import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { green } from '../static/colors';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = ({ loggedUser, notificationCount = 3, }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <View style={styles.textBox}>
                    <Text style={styles.salut}>Salut,</Text>
                    <Text style={styles.user}>{loggedUser}</Text>
                </View>
                <TouchableOpacity style={styles.notificationIcon} onPress={() => {

                    navigation.navigate('notifications')
                }}>
                    <Ionicons name="notifications-outline" size={28} color="black" />
                    {notificationCount > 0 && (
                        <View style={styles.notificationBadge}>
                            <Text style={styles.notificationCount}>{notificationCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Allons contribuer à notre terre</Text>
        </View>
    );
};

export default HeaderComponent;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        height: 100, // Adjusted height for better spacing
        justifyContent: 'center',
        paddingHorizontal: 15, // Added padding for better alignment
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20

    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5, // Space between headerContent and subtitle
    },
    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    salut: {
        fontSize: 24,
        fontWeight: '600',
    },
    user: {
        fontSize: 24,
        fontWeight: '600',
        color: green,
        marginLeft: 5, // Space between "Salut," and the user's name
    },
    subtitle: {
        fontSize: 16,
        color: 'grey', // Adjust the color if needed
    },
    notificationIcon: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        right: -8,
        top: -8,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationCount: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
