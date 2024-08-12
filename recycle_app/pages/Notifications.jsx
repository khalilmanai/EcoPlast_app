import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { green } from '../static/colors'

const Notifications = () => {
    const notifications = [
        {
            id: 1,
            title: "Notification",
            description: "description of the notification"
        },
        {
            id: 2,
            title: "Notification",
            description: "description of the notification"
        },
        {
            id: 3,
            title: "Notification",
            description: "description of the notification"
        },
    ]
    const renderNotification = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={renderNotification}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        margin: 10,
    },
    item: {

        height: 70,
        borderRadius: 10,
        backgroundColor: "#B2BEB5",
        padding: 10,
        marginVertical: 5,
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff"
    },
    description: {
        fontSize: 14,
        color: "#fff"
    }
})