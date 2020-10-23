import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MAIN_ROUTES } from './routes'

import { 
  SpriteSheetExample,
  LottieExample,
  AccordionExample,
  LayoutScreens,
  ActivityIndicatorExample,
  AnimatedFlatList,
  SquiresExample
} from '../animations';
import { Home } from '../pages/Home' ;
 
const Stack = createStackNavigator()

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={MAIN_ROUTES.MAIN} component={Home} />
    <Stack.Screen name={MAIN_ROUTES.SPRITE_SHEET} component={SpriteSheetExample} />
    <Stack.Screen name={MAIN_ROUTES.LOTTIE} component={LottieExample} />
    <Stack.Screen name={MAIN_ROUTES.ACCORDION} component={AccordionExample} />
    <Stack.Screen name={MAIN_ROUTES.LAYOUT} component={LayoutScreens} />
    <Stack.Screen name={MAIN_ROUTES.ACTIVITY} component={ActivityIndicatorExample} />
    <Stack.Screen name={MAIN_ROUTES.FLAT_LIST} component={AnimatedFlatList} />
    <Stack.Screen name={MAIN_ROUTES.SQUIRES} component={SquiresExample} />
  </Stack.Navigator>
)
