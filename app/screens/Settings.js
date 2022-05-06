import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Fixings from "../components/settings/Fixings";
import Title from "../components/settings/Title";

export default function Information({ route }) {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <Title route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <Fixings />
            <Divider width={1}/>
        </SafeAreaView>
    );
}