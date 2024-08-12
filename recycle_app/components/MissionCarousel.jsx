import React, { useRef, memo } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { green } from '../static/colors';

const { width } = Dimensions.get('window');

const images = [
    { uri: 'https://www.shutterstock.com/shutterstock/photos/2173573427/display_1500/stock-vector-recycle-only-print-ready-sign-vector-2173573427.jpg' },
    { uri: 'https://www.shutterstock.com/image-vector/set-symbols-signs-design-packaging-260nw-1914784594.jpg' },
    { uri: 'https://c8.alamy.com/comp/2H47PY9/recycle-sign-icon-white-on-green-round-background-recyclable-waste-symbol-2H47PY9.jpg' },
    { uri: 'https://c8.alamy.com/comp/2H47PY9/recycle-sign-icon-white-on-green-round-background-recyclable-waste-symbol-2H47PY9.jpg' },
    { uri: 'https://c8.alamy.com/comp/2H47PY9/recycle-sign-icon-white-on-green-round-background-recyclable-waste-symbol-2H47PY9.jpg' },
];

const MissionCarousel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View >
            <MissionHeader />
            <View style={styles.carouselContainer}>
                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                >
                    {images.map((image, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Image source={{ uri: image.uri }} style={styles.image} />
                        </View>
                    ))}
                </Animated.ScrollView>
                <Dots scrollX={scrollX} images={images} />
            </View>
        </View>
    );
};

const MissionHeader = memo(() => (
    <View style={styles.missionContainer}>
        <Text style={styles.missionText}>Votre Mission</Text>
        <TouchableOpacity>
            <Text style={styles.viewMoreText}>voir plus</Text>
        </TouchableOpacity>
    </View>
));

const Dots = memo(({ scrollX, images }) => (
    <View style={styles.dotsContainer}>
        {images.map((_, index) => {
            const dotWidth = scrollX.interpolate({
                inputRange: [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp'
            });
            return (
                <Animated.View
                    key={index}
                    style={[styles.dot, { width: dotWidth }]}
                />
            );
        })}
    </View>
));

const styles = StyleSheet.create({

    missionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    missionText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewMoreText: {
        fontSize: 16,
        color: green,
    },
    carouselContainer: {
        marginTop: 10,
    },
    imageContainer: {
        width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '100%',
        borderRadius: 10,
        objectFit: "contain"
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: green,
        marginHorizontal: 4,
    },
});

export default MissionCarousel;
