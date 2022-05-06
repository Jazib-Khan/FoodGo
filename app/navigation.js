import React, { useRef } from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider} from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import Information from "./screens/Information";
import BottomTabs from "./components/home/BottomTabs";
import Settings from "./screens/Settings";

const store = configureStore();

const Stack = createStackNavigator();

export default function RootNavigation() {
    const navRef = useRef();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer ref={navRef}>
                <Stack.Navigator initalRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Settings" component={Settings}/>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                    <Stack.Screen name="Information" component={Information} />
                </Stack.Navigator>
                <BottomTabs navigation={navRef}></BottomTabs>
            </NavigationContainer>
        </ReduxProvider>
    );
}