import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

//Array of object of restaurants
export const localRestaurants = [
    {
        name:"Bistro Bazaar",
        image_url:
            "https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2019/10/seabird.jpg",
        categories: ["Cafe", "Bar"],
        price: "££",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name:"Cuisine Wave",
        image_url:
            "https://i.guim.co.uk/img/media/cb7ecc99b0a2e64b18468d655f3226b0cd71be6a/0_283_5843_3505/master/5843.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b8c3e94f82e94c2858a795ed5353a76e",
        categories: ["Cafe", "Bar"],
        price: "££",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name:"Dorsia",
        image_url:
            "https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg",
        categories: ["Cafe", "Bar"],
        price: "££",
        reviews: 12,
        rating: 5,
    },
];

export default function RestaurantItems({ navigation, ...props }) {
    return (
        // Loops beings here - Fetches the restaurant from the API
        // and loops through each index
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity 
                    key={index}
                    activeOpacity={1} 
                    style={{ marginBottom: 30 }}
                    onPress={() => 
                        //Takes user to the Restaurant Detail screen
                        navigation.navigate("RestaurantDetail", {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            price: restaurant.price,
                            reviews: restaurant.review_count,
                            rating: restaurant.rating,
                            categories: restaurant.categories,
                        })
                    }
                >
                    {/*Styles padding around image */}
                    <View 
                        style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}
                    >
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
        // Loop ends here
    );
}

const RestaurantImage = (props) => (
    <>
        <Image 
        // Displays remote image and styliastion
            source = {{
                uri: props.image,
            }} 
            style = {{ width: "100%", height: 180 }}
        />
        {/*Adds stylisation to the icon placed within the images*/}
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
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
            {/*Name of restaurant and their delivery times */}
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
            {/*Ratings of the restaurant */}
            <Text>{props.rating}</Text>
        </View>
    </View>
);