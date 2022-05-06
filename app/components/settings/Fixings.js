import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const summary = [
    {
        title: "Dark Mode",
        description: "blah blah blah",
        image: "https://images.unsplash.com/photo-1609796574417-09f9675bfd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMHNoYXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },  
];

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
    return (
        <View style={styles.summaryStyle}>
            <Learn summary={summary[0]} />
            <InfoImage summary={summary[0]} />
        </View>
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