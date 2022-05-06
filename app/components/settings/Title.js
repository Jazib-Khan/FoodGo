import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const image=
    'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBzaGFyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
const title = 'Settings'
const description = 'Food Go: The food sharing app'

export default function LearnMore() {
    return (
        <View>
            <InformationImage image={image} />
            <InformationTitle title={title} />
            <InformationDescription description={description} />
        </View>
    );
}

const InformationImage = (props) => (
    <Image source={{uri: props.image }} style={{ width: "100%", height: 180}} />
);

const InformationTitle = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <Text 
            style={[styles.infoTitle, styles[`infoTitle${theme}`]]}
        >
            {props.title}
        </Text>
    );
}

const InformationDescription = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <Text
            style={[styles.infoDescription, styles[`infoDescription${theme}`]]}
        >{props.description}</Text>
    );
}

const styles = StyleSheet.create({
    infoTitle: {
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
        color: 'black'
    },
    infoTitleDark: {
        color: 'white',
    },
    infoDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
        color: 'black'
    },
    infoDescriptionDark: {
        color: 'white',
    },
});
