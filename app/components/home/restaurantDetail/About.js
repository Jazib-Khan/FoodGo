import React from "react";
import { View, Text, Image } from "react-native";

const image = 'https://etimg.etb2bimg.com/photo/75161189.cms';
const title = 'Dorsia'
const description = 'Great sea urchin ceviche • $$ • 5 ⭐ (3200+)';

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style= {{ width: "100%", height:180 }}/>
);

const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>    
)