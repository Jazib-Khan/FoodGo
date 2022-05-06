import React from "react"; 
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs({ navigation }) {
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
            <Icon icon="cog" text="Settings" onPress={() => navigation.current.navigate("Settings")} />
            <Icon icon="home" text="Home" onPress={() => navigation.current.navigate("Home")} />
            <Icon icon="receipt" text="Orders" onPress={() => navigation.current.navigate("OrderCompleted")} />
            <Icon icon="info" text="Learn More" onPress={() => navigation.current.navigate("Information")} />   
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity onPress={props.onPress}>
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