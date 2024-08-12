import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MissionCarousel from '../components/MissionCarousel'
import History from '../components/History'
const Home = () => {
    return (
        <ScrollView
            style={styles.container}>
            <MissionCarousel />
            <History />

        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})