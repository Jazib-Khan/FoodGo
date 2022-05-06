import React from "react"; 
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from "react-redux";

export default function BottomTabs({ navigation }) {
    const theme = useSelector((state) => state.themeReducer.theme);

    return (
        // Style area around icons
        <View 
            style={[styles.wrapper, styles[`wrapper${theme}`]]}
        >
            {/* Display Icons */}
            <Icon icon="cog" text="Settings" onPress={() => navigation.current.navigate("Settings")} />
            <Icon icon="home" text="Home" onPress={() => navigation.current.navigate("Home")} />
            <Icon icon="receipt" text="Orders" onPress={() => navigation.current.navigate("OrderCompleted")} />
            <Icon icon="info" text="Learn More" onPress={() => navigation.current.navigate("Information")} />   
        </View>
    );
}

const Icon = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
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
                <Text style={[styles.text, styles[`text${theme}`]]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row", 
        padding: 10,
        paddingHorizontal: 30,
        justifyContent: "space-between",
    },
    wrapperDark: {
        backgroundColor: "black"
    },
    text: {
        color: "black"
    },
    textDark: {
        color: "white"
    }
});