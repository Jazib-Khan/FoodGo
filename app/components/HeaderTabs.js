import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function HeaderTabs() {
        const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={{flexDirection: "row", alignSelf: "center", paddingVertical: 6 }}>
            <HeaderButton 
            text="Delivery" 
            backgroundColor="black" 
            color="white" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />
            <HeaderButton 
            text="Pickup" 
            backgroundColor="white" 
            color="black" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />           
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress = {() => props.setActiveTab(props.text)}
    >
        <Text 
            style={{ 
                color: props.activeTab === props.text ? "white" : "black", 
                fontSize: 15, 
                fontWeight: "900",
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);