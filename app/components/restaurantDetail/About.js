import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
    //plugged in information form API
    const {name, image, price, reviews, rating, categories} = 
        props.route.params;

    //
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        //Display the sub components
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

//Retrieves restaurant image and stylises the image
const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

//Retrieves restaurant name and stylises the name
const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
    </Text>
);

//Retrieves restaurant description and stylises the name
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
);