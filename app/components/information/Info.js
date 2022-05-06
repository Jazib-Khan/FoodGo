import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

const summary = [
    {
        title: "What Food Go aims to achieve:",
        description: "Food Go is an application system designed to target the ongoing issue of the food crisis more specifically food wastages and famine. The app is intended to be used by those who wish to consume food at more affordable prices and thus will be preventing items that would otherwise be thrown to waste. Users can view local food items by entering their location within the app and then a display of food items in the area that are being donated by these restaurants are shown and users can make an order to purchase said food items.",
        image: "https://images.unsplash.com/photo-1609796574417-09f9675bfd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMHNoYXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },  
];

export default function Info() {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <View style={[styles.summaryStyle, styles[`summaryStyle${theme}`]]}>
            <Learn summary={summary[0]} />
            <InfoImage summary={summary[0]} />
        </View>
    );
}

const Learn = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
            <Text style={[styles.titleStyle, styles[`titleStyle${theme}`]]}>{props.summary.title}</Text>
            <Text style={[styles.descriptionStyle, styles[`descriptionStyle${theme}`]]}>{props.summary.description}</Text>
        </View>
    );
}

const InfoImage = (props) => (
    <View style= {{
        flexDirection: "row",
        justifyContent: "space-between",
    }}>
        <Image 
            source={{ uri: props.summary.image }} 
            style= {{ width:120, height: 100, borderRadius: 8}}
        />
    </View>
);

const styles = StyleSheet.create({
    summaryStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    summaryStyleDark: {
        color: "white",
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    },
    titleStyleDark: {
        color: "white",
    },
    descriptionStyle: {
        color: "black"
    },
    descriptionStyleDark: {
        color: "white",
    },
});