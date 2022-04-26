import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Info from "../components/information/Info";
import LearnMore from "../components/information/LearnMore";

export default function Information({ route }) {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <LearnMore route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <Info />
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    );
}