import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { green } from '../static/colors';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const hours = new Date().getHours();
const HeaderComponent = ({ loggedUser, notificationCount = 3 }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <View style={styles.textBox}>
                    {hours > 12 ? <Text style={styles.salut}> Bonsoir,</Text> : <Text style={styles.salut}>Bonjour,</Text>}
                    <Text style={styles.user}>{loggedUser}</Text>
                </View>
                <TouchableOpacity style={styles.notificationIcon} onPress={() => {
                    navigation.navigate('notifications');
                }}>
                    <Ionicons name="notifications-outline" size={width * 0.07} color="black" />
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
        height: height * 0.12, // Responsive height based on screen height
        justifyContent: 'center',
        paddingHorizontal: '4%', // Responsive horizontal padding
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height * 0.01, // Space between headerContent and subtitle
    },
    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    salut: {
        fontSize: width * 0.06, // Responsive font size
        fontWeight: '600',
    },
    user: {
        fontSize: width * 0.06, // Responsive font size
        fontWeight: '600',
        color: green,
        marginLeft: width * 0.01, // Space between "Salut," and the user's name
    },
    subtitle: {
        fontSize: width * 0.04, // Responsive font size for subtitle
        color: 'grey',
    },
    notificationIcon: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        right: -width * 0.02, // Position relative to screen width
        top: -width * 0.02,
        backgroundColor: 'red',
        borderRadius: width * 0.02, // Adjusted to be relative to screen width
        width: width * 0.04,
        height: width * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationCount: {
        color: 'white',
        fontSize: width * 0.025, // Responsive font size
        fontWeight: 'bold',
    },
});
