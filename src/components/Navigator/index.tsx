import React from 'react'
import {useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {capitalize} from '../../utils/utils'
import HomeScreen from '../HomeScreen'
import DetailsScreen from '../DetailsScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const headerTintColor = isDarkMode ? Colors.white : Colors.black
  const backgroundColor = isDarkMode ? Colors.black : Colors.white

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Pokedex',
            headerStyle: {
              backgroundColor,
            },
            headerTintColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={({route}: any) => ({
            title: capitalize(route.params.name),
            headerStyle: {
              backgroundColor,
            },
            headerTintColor,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigator
