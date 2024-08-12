import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { green } from '../static/colors';

const History = () => {
    const gainHistoriques = [
        {
            id: 1,
            image: 'https://static.vecteezy.com/system/resources/previews/022/394/392/original/man-holding-recycling-garbage-can-and-holding-money-reverse-vending-machine-recycling-and-reward-money-from-garbage-cans-bottle-plastic-glass-sale-vector.jpg',
            totalPointsGagnes: 50
        },
        {
            id: 2,
            image: 'https://static.vecteezy.com/system/resources/previews/022/394/392/original/man-holding-recycling-garbage-can-and-holding-money-reverse-vending-machine-recycling-and-reward-money-from-garbage-cans-bottle-plastic-glass-sale-vector.jpg',
            totalPointsGagnes: 30
        },
        {
            id: 3,
            image: 'https://static.vecteezy.com/system/resources/previews/022/394/392/original/man-holding-recycling-garbage-can-and-holding-money-reverse-vending-machine-recycling-and-reward-money-from-garbage-cans-bottle-plastic-glass-sale-vector.jpg',
            totalPointsGagnes: 75
        },
        {
            id: 4,
            image: 'https://static.vecteezy.com/system/resources/previews/022/394/392/original/man-holding-recycling-garbage-can-and-holding-money-reverse-vending-machine-recycling-and-reward-money-from-garbage-cans-bottle-plastic-glass-sale-vector.jpg',
            totalPointsGagnes: 60
        },
        {
            id: 5,
            image: 'https://static.vecteezy.com/system/resources/previews/022/394/392/original/man-holding-recycling-garbage-can-and-holding-money-reverse-vending-machine-recycling-and-reward-money-from-garbage-cans-bottle-plastic-glass-sale-vector.jpg',
            totalPointsGagnes: 25
        }
    ];

    const renderGrid = ({ item }) => (
        <View style={styles.gridItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.pointsText}>{item.totalPointsGagnes} points</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.missionText}>Historique</Text>
                <TouchableOpacity>
                    <Text style={styles.viewMoreText}>voir plus</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={gainHistoriques}
                renderItem={renderGrid}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                key={2} // Add a key to force re-render when numColumns changes
                contentContainerStyle={styles.gridView}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                scrollEnabled={false}

            />
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    missionText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewMoreText: {
        fontSize: 16,
        color: green,
    },
    gridView: {
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    gridItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    pointsText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
