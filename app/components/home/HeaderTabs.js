import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs(props) {
    // Rendering Header button and stylising 
    return (
        // React native by default shows things in columns
        // flex Direction row is to align the buttons how I want them to
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton 
                text="Delivery" 
                btnColor="green" 
                textColor="white" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black" 
                activeTab={props.activeTab} 
                setActiveTab={props.setActiveTab}
            />           
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.text ? "green" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
    // Picks up which tab is active and can switch between coloured 
    //indicators to highlight which tab is currently active
        onPress = {() => props.setActiveTab(props.text)}
    >
        <Text 
            style={{ 
                color: props.activeTab === props.text ? "white" : "green", 
                fontSize: 15, 
                fontWeight: "900",
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);