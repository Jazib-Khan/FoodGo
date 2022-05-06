import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Info from "../components/information/Info";
import LearnMore from "../components/information/LearnMore";
import { useSelector } from "react-redux";

export default function Information({ route }) {
    const theme = useSelector((state) => state.themeReducer.theme);

    return (
        <SafeAreaView style={[styles.page, styles[`page${theme}`]]}>
            <LearnMore route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <Info />
            <Divider width={1}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#eee", 
        flex: 1
    },
    pageDark: {
        backgroundColor: "black", 
    }
});