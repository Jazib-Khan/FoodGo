import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

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
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style= {styles.menuItemStyle}>
                        <BouncyCheckbox 
                            iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                            fillColor="green"    
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider 
                        width={0.5} 
                        orientation='vertical' 
                        style={{ marginHorizontal: 20 }} 
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image 
            source={{uri: props.food.image}} 
            style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
);
