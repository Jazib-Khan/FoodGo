import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const styles = StyleSheet.create({
    summaryStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    }
});

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
            <Text>Switch Theme</Text>
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