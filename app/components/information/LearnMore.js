import React from "react";
import { View, Text, Image } from "react-native";

const image=
    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const title = 'Learn More'
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

const InformationTitle = (props) => (
    <Text 
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);

const InformationDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >{props.description}</Text>
);