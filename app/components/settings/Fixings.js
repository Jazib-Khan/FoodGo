import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function Info() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.themeReducer.theme);

    return (
        <TouchableOpacity onPress={() => {
            dispatch({
                type: 'SWITCH_THEME', 
                payload: {
                    theme: theme === "Light" ? "Dark" : "Light"
                },
            });
        }}>
            <Text style={[styles.text, styles[`text${theme}`]]}>Switch Theme</Text>
        </TouchableOpacity>
    );
}

const Learn = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.summary.title}</Text>
        <Text>{props.summary.description}</Text>
    </View>
);

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
    text: {
        color: 'black'
    },
    textDark: {
        color: 'white'
    }
});