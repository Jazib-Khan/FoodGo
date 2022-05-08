import * as React from "react";
import RootNavigation from "./navigation";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from './assets/constants/theme';

const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: 'Find the best restaurants and takeaways near you! Giving away surplus food at the best prices. All completely available at the click of a button. ',
    image: require('./assets/images/onboardScreen1.png')
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description: 'Select a variety of delicious dishes from a plethora of options',
    image: require('./assets/images/onboardScreen2.png')
  },
  {
    id: 3,
    title: 'Pickup or Delivery',
    description: 'Have the option to have your food delivered to you or to pick up from the selected restaurant or takeaway.',
    image: require('./assets/images/onboardScreen3.png')
  },
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return(
      <View style={{padding: 12}}>
        <Text 
          style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}
        >
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View 
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
              }}
            >
              <Image 
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400, 
                }}
                resizeMode="contain"
              />
              <Text 
                style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}
              >
                {item.title}
              </Text>
              <Text 
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color: COLORS.title,
                }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return <RootNavigation />;

  
}
