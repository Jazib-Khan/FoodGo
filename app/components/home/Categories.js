import React from "react";
import { View, Text, Image, ScrollView, StyleSheet} from "react-native";
import { useSelector } from "react-redux";

// Array of image items for the categories
const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: "Pick-up",
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: "Soft Drinks",
    },
    {
        image: require('../../assets/images/bread.png'),
        text: "Bakery Items",
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: "Fast Foods",
    },
    {
        image: require('../../assets/images/deals.png'),
        text: "Deals",
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: "Coffee & Tea",
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: "Desserts",
    },
];

export default function Categories() {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <View 
		style={[styles.container, styles[`container${theme}`] ]}
        >
            {/* Displays items horizontally and makes the itemsc scrollable */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Loop begins here 
                Loops through each item in the array and displays them and styles them*/}
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                    <Image 
                        source={item.image} 
                        style= {{
                            width: 50,
                            height: 40,
                            resizeMode: "contain",
                        }} 
                    />
                    <Text style={[styles.containerTitle, styles[`containerTitle${theme}`]]}>{item.text}</Text>
                </View>
                ))}
                {/* Loop ends here */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    },
    containerDark: {
        backgroundColor: "black"
    },
    containerTitle: {
        fontSize: 13, 
        fontWeight: "bold",
        color: "#000",
    },
    containerTitleDark: {
        color: "#fff"
    }
});