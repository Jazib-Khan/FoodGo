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

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    textDark: {
        color: 'white'
    }
});