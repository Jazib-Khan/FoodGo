import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
    {
        title: "Lasagna",
        description: "Food init",
        price: "£13",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2013%2F12%2Fgettyimages-998672040_0-2000.jpg"
    },
    {
        title: "Chicken",
        description: "Foodie face",
        price: "£20",
        image: "https://adamliaw.com/app/uploads/2019/03/Shandong-Chicken-Small-1-of-1.jpg"
    },
    {
        title: "Smoothie",
        description: "Delicious Smoothie",
        price: "£6",
        image: "https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png"
    },      
];

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
}