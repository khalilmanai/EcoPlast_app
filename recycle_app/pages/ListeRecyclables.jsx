import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { recyclablesData } from '../static/RecyclableData';
import { green } from '../static/colors';
import Button from '../static/Button';


const ListeRecyclables = ({ navigation }) => {
    const [selectedRecyclables, setSelectedRecyclables] = useState([]);

    const toggleSelection = (recyclable) => {
        const isSelected = selectedRecyclables.includes(recyclable.name);
        const updatedSelection = isSelected
            ? selectedRecyclables.filter((name) => name !== recyclable.name)
            : [...selectedRecyclables, recyclable.name];
        setSelectedRecyclables(updatedSelection);
    };

    const getBorderWidth = (recyclable) => {
        return selectedRecyclables.includes(recyclable.name) ? 4 : 1;
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.recyclablesContainer}>
                {recyclablesData.map((recyclable) => (
                    <TouchableOpacity
                        key={recyclable.id}
                        style={[
                            styles.recyclableSquare,
                            { borderColor: green, borderWidth: getBorderWidth(recyclable) },
                        ]}
                        onPress={() => toggleSelection(recyclable)}
                    >
                        <FontAwesome5 name={recyclable.icon} size={24} color={green} />
                        <Text style={styles.recyclableName}>{recyclable.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Button text="Suivant" action={() => {
                if (selectedRecyclables.length != 0) {
                    navigation.navigate('PicturingScreen');
                    console.log(selectedRecyclables);
                } else {
                    Alert.alert('EcoPlast', "Probléme , Veuiller selectionner un type au minimum")
                }
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recyclablesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10, // Add margin to bring squares closer vertically
    },
    recyclableSquare: {
        width: '30%',
        aspectRatio: 1, // Maintain a square aspect ratio
        backgroundColor: 'transparent', // Set background to transparent
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10, // Add margin to bring squares closer vertically
    },
    recyclableName: {
        color: green,
        marginTop: 5,
    },

});

export default ListeRecyclables;
