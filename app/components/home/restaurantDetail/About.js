import React from "react";
import { View, Text, Image } from "react-native";


const yelpRestaurantInfo ={
    name: 'Dorsia',
    image: 'https://etimg.etb2bimg.com/photo/75161189.cms',
    price: '$$',
    reviews: '3200',
    rating: 5,
    categories: [
        { title: "Sea Food"}, 
        { title: "Great sea urchin ceviche"},
    ],
};

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style= {{ width: "100%", height:180 }}/>
);

const RestaurantName = (props) => (
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