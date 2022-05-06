import React, { useState } from "react";
import { View , Text, TouchableOpacity, Modal, StyleSheet} from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

    const total = items.map((item) => Number(item.price.replace("£", ""))).reduce((prev, curr) => prev + curr, 0);

    const totalGBP = total.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    const addOrderToFirebase = () => {
        setLoading(true);
        const db = firebase.firestore();
        db.collection("orders").add({
            items:items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            setTimeout(() => {
                setLoading(false);
                navigation.navigate("OrderCompleted");
            }, 2500);
        });
    };

    

    const checkoutModalContent = () => {
        const theme = useSelector((state) => state.themeReducer.theme);
        return (
            <>
                <View style={[styles.modalContainer, styles[`modalContainer${theme}`]]}>
                    <View style={[styles.modalCheckoutContainer, styles[`modalCheckoutContainer${theme}`]]}>
                        <Text style={[styles.restaurantName, styles[`restaurantName${theme}`]]}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={[styles.subtotalContainer, styles[`subtotalContainer${theme}`]]}>
                            <Text style={[styles.subtotalText, styles[`subtotalText${theme}`]]}>Subtotal</Text>
                            <Text style={[styles.price, styles[`price${theme}`]]}>£{totalGBP}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity 
                                style={[styles.checkoutButton, styles[`checkoutButton${theme}`]]}
                                onPress={() => {
                                    addOrderToFirebase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color:'white', fontSize: 20 }}>Checkout</Text>
                                <Text 
                                    style={{
                                        position: 'absolute', 
                                        right: 20, 
                                        color: 'white', 
                                        fontSize: 19, 
                                        top: 17,
                                    }}
                                >
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
                onRequestClose={() => setModalVisible(false)}
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
                        top: 50,
                        zIndex: 999,
                    }}
                >
                    <View 
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
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
            {loading ? (
                <View 
                    style={{
                        backgroundColor: 'white', 
                        position: 'absolute', 
                        opacity: 0.6,
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: "100%",
                        width: "100%",
                    }}
                >   
                    <LottieView 
                        style={{ height: 200 }}
                        source={require('../../assets/animations/scanner.json')}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : ( 
                <></>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContainerDark: {
        color: 'white'
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    modalCheckoutContainerDark: {
        backgroundColor: 'black',
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
    },
    restaurantNameDark: {
        color: 'white'
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subtotalContainerDark: {
        color: 'white'
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
    },
    subtotalTextDark: {
        color: 'white'
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },
    checkoutButtonDark: {
        backgroundColor: "grey",
    },
    price: {
        color: 'black'
    },
    priceDark: {
        color: 'white'
    },
});