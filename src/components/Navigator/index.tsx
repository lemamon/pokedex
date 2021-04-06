import React from 'react'
import {useColorScheme} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {capitalize} from '../../utils/utils'
import HomeScreen from '../HomeScreen'
import DetailsScreen from '../DetailsScreen'
import {DARK_THEME} from '../../utils/constants'
import {useAppTheme} from '../../config/theme'

const Stack = createStackNavigator()

const Navigator = () => {
  const {headerTintColor, backgroundColor} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

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
