import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export const localRestaurants = [
    {
        name:"Beachside Bar",
        image_url:
            "https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2019/10/seabird.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name:"Benihana",
        image_url:
            "https://i.guim.co.uk/img/media/cb7ecc99b0a2e64b18468d655f3226b0cd71be6a/0_283_5843_3505/master/5843.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b8c3e94f82e94c2858a795ed5353a76e",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name:"Dorsia",
        image_url:
            "https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 12,
        rating: 5,
    },
]

export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30}}>
            {props.restaurantData.map((restaurant, index) => (
                <View 
                    key={index}
                    style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}
                >
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo 
                        name={restaurant.name} 
                        rating={restaurant.rating}
                    />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image 
            source = {{
                uri: props.image,
            }} 
            style = {{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{position: "absolute", right: 29, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View 
        style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
        </View>
        <View 
            style={{
                backgroundColor: '#eee', 
                height: 30, 
                width: 30, 
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);