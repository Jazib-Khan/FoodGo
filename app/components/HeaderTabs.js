import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function HeaderTabs() {
    return (
        <View>
            <HeaderButton text="Delivery"/>
            <HeaderButton text="Pickup"/>
        </View>
    );
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    </View>
);