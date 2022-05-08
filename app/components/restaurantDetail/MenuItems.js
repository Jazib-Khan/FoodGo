import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems({ 
    restaurantName, 
    foods, 
    hideCheckbox, 
    marginLeft,
}) {
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => 
        dispatch({
            type: 'ADD_TO_CART', 
            payload: {
                ...item, 
                restaurantName: restaurantName, 
                checkboxValue: checkboxValue,
            },
        });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));
        
    const theme = useSelector((state) => state.themeReducer.theme);
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/*Loop beings here - Loops through each food item in the array 
            and concatinates checkboxes*/}
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={[styles.menuItemStyle, styles[`menuItemStyle${theme}`]]}>
                        {hideCheckbox ? (
                            <></> 
                        ) : (
                            <BouncyCheckbox 
                                iconStyle={{ borderColor: 'lightgray'}}
                                fillColor="green"
                                isChecked={isFoodInCart(food, cartItems)}
                                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            />
                        )}
                        <FoodInfo food={food} />
                        <FoodImage food={food} marginLeft={marginLeft ? marginLeft: 0} />
                    </View>
                    {/*Separate's food items */}
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


const FoodInfo = (props) => {
    const theme = useSelector((state) => state.themeReducer.theme);
        return (
        // Displays food title, description and price
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
            <Text style={[styles.titleStyle, styles[`titleStyle${theme}`]]}>{props.food.title}</Text>
            <Text style={[styles.text, styles[`text${theme}`]]}>{props.food.description}</Text>
            <Text style={[styles.text, styles[`text${theme}`]]}>{props.food.price}</Text>
        </View>
    );
}

const FoodImage = ({ marginLeft, ...props }) => (
    // Fetches and displays food image and styles the image
    <View>
        <Image 
            source={{ uri: props.food.image }} 
            style={{
                width: 100, 
                height: 100, 
                borderRadius: 8, 
                marginLeft: marginLeft
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
    menuItemStyleDark: {
        backgroundColor: 'black'
    },
    titleStyleDark: {
        color: 'white'
    },
    text: {
        color: 'black'
    },
    textDark: {
        color: 'white'
    }
});