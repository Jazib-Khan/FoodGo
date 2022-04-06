import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/home/restaurantDetail/About";
import MenuItems from "../components/home/restaurantDetail/MenuItems";

export default function restaurantDetail() {
    return (
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical:20 }} />
            <MenuItems />
        </View>
    );
}