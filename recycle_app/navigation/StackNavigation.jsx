import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Profile from '../pages/Profile';
import BottomTabs from './BottomBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import SignUp from '../pages/login/SignUp';
import CodeAccess from '../pages/login/CodeAccess';
import ListeRecyclables from '../pages/ListeRecyclables';
import PicturingScreen from '../pages/PicturingScreen';
import OrderDetails from '../pages/OrderDetails';
import { green } from '../static/colors';
import Notifications from '../pages/Notifications';
import MapComponent from '../components/MapComponent';
import Confirmation from '../components/Confirmation';
import SignIn from '../pages/login/SignIn';
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='SignUp'
        >

            <Stack.Screen name="SignUp" component={SignUp}

            />
            <Stack.Screen name="SignIn" component={SignIn}

            />
            <Stack.Screen name="TabBar" component={BottomTabs} />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: "Profile et Paramétres",
                    headerTitleStyle: {
                        color: green,
                    },
                    headerLeft: () => (
                        <TouchableOpacity

                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color="#1A9435" />
                        </TouchableOpacity>
                    ),
                    headerShown: true,
                }}
            />

            <Stack.Screen name="codeAccess" component={CodeAccess} />
            <Stack.Screen
                options={{
                    headerTitle: "Choisir les types des recyclables",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: green,
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerLeft: () => (
                        <TouchableOpacity

                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerShown: true,
                }}

                name="ListRecyclables" component={ListeRecyclables} />
            <Stack.Screen
                options={{
                    headerTitle: "Images de recyclables",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: green,
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerShown: true,
                }}
                name="PicturingScreen" component={PicturingScreen} />

            <Stack.Screen
                options={{
                    headerTitle: "Details de Commande",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: green,
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerShown: true,
                }}
                name="orderDetails" component={OrderDetails} />
            <Stack.Screen
                options={{
                    headerTitle: "Notifications",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: green,
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerShown: true,
                }}
                name="notifications" component={Notifications} />


            <Stack.Screen
                name="map" component={MapComponent}

            />

            <Stack.Screen
                name="confirmation" component={Confirmation}

            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
