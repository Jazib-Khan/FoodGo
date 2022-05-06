import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from "react-redux";

export default function SearchBar({ cityHandler }) {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <View style={{ marginTop: 15, flexDirection: "row"}}>
            {/*Google Maps search component API for react native. 
            Customizable google places. (API adds locations into search bars) */}
            <GooglePlacesAutocomplete 
                query={{ key: 'AIzaSyDOL4UKTeihc58zTsr_sXqsrqN-rDNeGNE' }}
                onPress={(data, details = null) => {
                        console.log(data.description);
                        const city = data.description.split(",")[0];
                        cityHandler(city);
                }}
                // Creates the design search bar and stylisation
                placeholder="Search"
                styles={{
                        textInput: {
                            backgroundColor: theme === "Light" ? "#eee" : "#2c2c2c",
                            color: theme === "Light" ? "#000" : "#fff",
                            borderRadius: 20,
                            fontWeight: "700",
                            marginTop: 7,
                        },
                        textInputContainer: {
                            backgroundColor: theme === "Light" ? "#eee" : "#2c2c2c",
                            color: theme === "Light" ? "#000" : "#fff",
                            borderRadius: 50,
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 10,
                        },
                        predefinedPlacesDescription: {
                            color: '#fff',
                          },
                }}
            
                // Location Icon stylisation
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                            <Ionicons name ="location-sharp" size={24} style={{color: "green"}} />
                    </View>
                )}

                // Clock Icon and stylisation
                renderRightButton={() => (
                        <View
                            style={[styles.searchButton, styles[`searchButton${theme}`]]}
                        >
                            <AntDesign 
                                name='clockcircle' 
                                size={11} 
                                style={{ marginRight: 6, color: "green" }} 
                            />
                            <Text style={[styles.text, styles[`text${theme}`]]}>Search</Text>
                        </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchButton: {
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "white",
        padding: 9,
        borderRadius: 30,
        alignItems: "center",
    },
    searchButtonDark: {
        backgroundColor: "black",
    },
    text: {
        color: "black"
    },
    textDark: {
        color: "white"
    }
    
});