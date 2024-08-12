import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import { View, StyleSheet } from "react-native";
import Home from "../pages/Home";
import Gifts from "../pages/Gifts";
import AddRequest from "../pages/AddRequest";
import HeaderComponent from "../components/HeaderComponent";
import { green } from "../static/colors";

const BottomTabs = () => {
    const loggedUser = "Robert";
    const Tab = createBottomTabNavigator();

    const tabBarOptions = {

        tabBarActiveTintColor: "#1A9435",
        tabBarStyle: {
            height: 80,
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,

        },
        tabBarLabelStyle: {
            display: "none",
        },
    };

    const screenOptions = (iconName, color) => ({
        tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? iconName : `${iconName}-outline`} size={32} color={color} />
        ),
    });

    const addScreenOptions = {
        tabBarIcon: ({ size }) => (
            <View style={styles.Tab}>
                <Ionicons name="add" size={size + 10} color="white" />
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
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: green,
        justifyContent: "center",
        alignItems: "center",
        top: -30,
    },
});

export default BottomTabs;
