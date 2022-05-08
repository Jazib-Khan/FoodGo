import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        }} style={styles.buttonContainer}>
            <Text style={[styles.buttonText, styles[`buttonText${theme}`]]}>Switch Theme</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    },
    textDark: {
        color: 'white'
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        color: 'black'
    },
    buttonTextDark: {
        color: 'white'
    }
});