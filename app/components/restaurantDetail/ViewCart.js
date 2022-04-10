import React, { useState } from "react";
import { View , Text, TouchableOpacity, Modal, StyleSheet} from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantNames } = useSelector((state) => state.cartReducer.selectedItems);

    const total = items
        .map((item) => Number(item.price.replace("£", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalGBP = total.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    const styles = StyleSheet.create( {
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },

        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantNames: {
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 18,
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
        },

        subtotalText: {
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantNames}>{restaurantNames}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>£{totalGBP}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}></View>
                                <TouchableOpacity 
                                    style={{
                                        marginTop: 240,
                                        marginLeft: -30,
                                        marginRight: 30,
                                        backgroundColor: 'black',
                                        alignItems: 'center',
                                        padding: 13,
                                        borderRadius: 30,
                                        width: 300,
                                        position: 'relative',
                                    }}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={{ color:'white', fontSize: 20 }}>Checkout</Text>
                                    <Text 
                                        style={{
                                            position: 'absolute', 
                                            right: 20, color: 'white', 
                                            fontSize: 19, 
                                            top: 17,
                                        }}>
                                            
                                        £{total ? totalGBP : ""}
                                    </Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal 
                animationType='slide' 
                visible={modalVisible}
                transparent={true}
                onRequestClose={()=> setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
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
                            onPress={() => setModalVisible(true)}
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