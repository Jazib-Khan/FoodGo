import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

export default function OrderItem({ item }) {
    const theme = useSelector((state) => state.themeReducer.theme);
    const { title, price } = item;
    return (
        <View 
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#999",
            }}
        >
            <Text style={[styles.title, styles[`title${theme}`]]}>{title}</Text>
            <Text style={[styles.price, styles[`price${theme}`]]}>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "600", 
        fontSize: 16,
    },
    titleDark: {
        color: 'white'
    },
    price: {
        opacity: 0.7, 
        fontSize: 16
    },
    priceDark: {
        color: 'white'
    },
});