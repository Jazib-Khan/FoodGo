import React, {useEffect, useState} from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = "3Uep2K23NL0fyKuqbk7J6XbFW09HAxY_1mxZWp_zgXFGEX9xtdfO37EsA55sWwpDkYyVLjAR3qD_sUZVoZ-SPXYoqVxSP6o4q197BHdtkAhr0HxzWT_RZruwHoVJYnYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Plymouth");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = 
            `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

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

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    
    return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
}