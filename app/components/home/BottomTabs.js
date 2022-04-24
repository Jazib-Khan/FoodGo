import React from "react"; 
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
    return (
        // Style area around icons
        <View 
            style={{ 
                flexDirection: "row", 
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between",
            }}
        >
            {/* Display Icons */}
            <Icon icon="search" text="Browse" />
            <Icon icon="home" text="Home" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="info" text="Learn More" />            
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 
                name={props.icon} 
                size={25} 
                // Style icons
                style={{
                    marginBottom: 3, 
                    alignSelf: "center",
                    color: "green"
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);