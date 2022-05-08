import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import { useSelector } from 'react-redux';

const foods = [
    {
        title: "Tofu Pad Thai",
        description: "An easy, plant-based alternative to classic pad Thai, this version combines tofu and asparagus with crispy beansprouts, onions, noodles and a zingy sauce.",
        price: "£12",
        image: "https://minimalistbaker.com/wp-content/uploads/2019/01/Easy-Vegan-Pad-Thai-SQUARE.jpg"
    },
    {
        title: "Chicken tenders",
        description: "Crispy baked chicken tenders soaked in lemon garlic flavours. coated in golden parmesan pank crumb.",
        price: "8",
        image: "https://adamliaw.com/app/uploads/2019/03/Shandong-Chicken-Small-1-of-1.jpg"
    },
    {
        title: "Smoothie",
        description: "Delicious Smoothie which contains one of your five a day!",
        price: "£6",
        image: "https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png"
    },      
];

export default function RestaurantDetail({ route, navigation }) {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <View style={[styles.back, styles[`back${theme}`]]}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#eee", 
        flex: 1
    },
    pageDark: {
        backgroundColor: "#2c2c2c", 
    },
    back: {
        backgroundColor: "white"
    },
    backDark: {
        backgroundColor: "black"
    },
});