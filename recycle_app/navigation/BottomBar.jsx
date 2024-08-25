import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import { View, StyleSheet, Dimensions } from "react-native";
import Home from "../pages/Home";
import Gifts from "../pages/Gifts";
import AddRequest from "../pages/AddRequest";
import HeaderComponent from "../components/HeaderComponent";
import { green } from "../static/colors";

const { width, height } = Dimensions.get('window');

const BottomTabs = () => {
    const loggedUser = "Robert";
    const Tab = createBottomTabNavigator();

    const tabBarOptions = {
        tabBarActiveTintColor: "#1A9435",
        tabBarStyle: {
            height: height * 0.1, // Responsive height for the tab bar
            borderTopEndRadius: width * 0.05,
            borderTopLeftRadius: width * 0.05,
        },
        tabBarLabelStyle: {
            display: "none",
        },
    };

    const screenOptions = (iconName, color) => ({
        tabBarIcon: ({ focused }) => (
            <Ionicons
                name={focused ? iconName : `${iconName}-outline`}
                size={width * 0.08} // Responsive icon size
                color={color}
            />
        ),
    });

    const addScreenOptions = {
        tabBarIcon: ({ size }) => (
            <View style={styles.Tab}>
                <Ionicons name="add" size={size * 1.4} color="white" />
            </View>
        ),
        headerTitle: "",
        header: () => <HeaderComponent loggedUser={loggedUser} />,
    };

    return (
        <Tab.Navigator
            initialRouteName="Journal"
            screenOptions={tabBarOptions}
        >
            <Tab.Screen
                options={{
                    ...screenOptions("home", green),
                    header: () => <HeaderComponent loggedUser={loggedUser} />,
                }}
                name="Journal"
                component={Home}
            />
            <Tab.Screen
                options={addScreenOptions}
                name="add"
                component={AddRequest}
            />
            <Tab.Screen
                options={screenOptions("gift", green)}
                name="Codes Promos"
                component={Gifts}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    Tab: {
        width: width * 0.15, // Responsive width for the add button
        height: width * 0.15, // Responsive height for the add button
        borderRadius: (width * 0.15) / 2, // Ensures circular shape
        backgroundColor: green,
        justifyContent: "center",
        alignItems: "center",
        top: -height * 0.04, // Adjusted positioning for better alignment
    },
});

export default BottomTabs;
