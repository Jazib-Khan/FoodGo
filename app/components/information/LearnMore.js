import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const image=
    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const title = 'Learn More'
const description = 'Food Go: The food sharing app'

export default function LearnMore() {
    const theme = useSelector((state) => state.themeReducer.theme);
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
            style={[styles.LearnTitle, styles[`LearnTitle${theme}`]]}
        >
            {props.title}
        </Text>
    ); 
}

const InformationDescription = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <Text
            style={[styles.LearnDescription, styles[`LearnDescription${theme}`]]}
        >{props.description}</Text>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#eee", 
        flex: 1
    },
    pageDark: {
        backgroundColor: "#2c2c2c", 
    },
    LearnDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    },
    LearnDescriptionDark: {
        color: "white"
    },
    LearnTitle: {
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    },
    LearnTitleDark: {
        color: "white"
    }
});