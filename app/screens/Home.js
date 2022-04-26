import React, {useEffect, useState} from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

//Connects to API to pull restaurant information
const YELP_API_KEY = "3Uep2K23NL0fyKuqbk7J6XbFW09HAxY_1mxZWp_zgXFGEX9xtdfO37EsA55sWwpDkYyVLjAR3qD_sUZVoZ-SPXYoqVxSP6o4q197BHdtkAhr0HxzWT_RZruwHoVJYnYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants); // Imports restaurant Data
    const [city, setCity] = useState("Plymouth"); // Sets the inital city where the API retrieves restaurant information from
    const [activeTab, setActiveTab] = useState("Delivery"); // Sets inital active tab

    const getRestaurantsFromYelp = () => {
        // Pulls restaurant information from their respective location
        const yelpUrl = 
            `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        
        // Passes credentials to API
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        // Calls request, pulls json from response and then sets the restaurant data to be the bussiness retrieved
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(json => 
                setRestaurantData(
                    json.businesses.filter((business) => 
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    // Call back function
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    
    return (
        // Rendering components
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                    restaurantData={restaurantData} 
                    navigation={navigation} 
                />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs 
                navigation={navigation} />
        </SafeAreaView>
    );
}