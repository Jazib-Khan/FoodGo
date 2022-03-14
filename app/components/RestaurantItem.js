import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30}}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    );
}

const RestaurantImage = () => (
    <>
        <Image 
            source = {{
                uri: "https://tse3.mm.bing.net/th?id=OIP.UGs5hbo3pG_6BSdWDK2pgAHaFj&pid=Api"
            }} 
            style = {{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{position: "absolute", right: 29, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"></MaterialCommunityIcons>
        </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View 
        style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold" }}>Farmhouse Kitchen Thai Cuisine</Text>
            <Text style={{fontSize: 13, fontWeight: "gray" }}>30-45 . min</Text>
        </View>
        <View 
            style={{
                backgroundColor: '#eee', 
                height: 30, 
                width: 30, 
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}>
            <Text>4.5</Text>
        </View>
    </View>
);