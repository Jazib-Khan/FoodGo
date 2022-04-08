import React from "react";
import { View , Text, TouchableOpacity} from "react-native"
import { useSelector } from "react-redux";

export default function ViewCart() {
    const items = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const total = items
        .map((item) => Number(item.price.replace("£", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalGBP = total.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    console.log(totalGBP);

    return (
        <>
        {total ? (
            <View 
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: -100,
                    zIndex: 999,
                }}
            >
                <View 
                    style= {{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <TouchableOpacity 
                        style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            padding: 15,
                            borderRadius: 30,
                            width: 300,
                            position: 'relative',
                        }}
                    >
                        <Text style={{color: 'white', fontSize: 20, marginRight: 30 }}>View Cart</Text>
                        <Text style={{color: 'white', fontSize: 20}}>£{totalGBP}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <></>
        )}
        </>
    );
}