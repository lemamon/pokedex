import React from 'react'
import {Image, SafeAreaView, Text, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {capitalize} from '../../utils/utils'

const DetailsScreen = ({route}: {route: any}) => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter
  const color = isDarkMode ? Colors.white : Colors.black
  const {pokemon} = route.params
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        borderWidth: 3,
        borderColor: color,
      }}>
      <Image
        source={{uri: pokemon.image}}
        style={{
          width: '80%',
          height: '50%',
          borderWidth: 10,
          borderColor: color,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          width: '80%',
          borderWidth: 10,
          borderTopWidth: 0,
          borderColor: color,
          borderBottomWidth: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <Text
          style={{
            color,
            fontSize: 20,
            marginBottom: 10,
          }}>
          Name: {capitalize(pokemon.name)}
        </Text>
        <Text style={{color, fontSize: 14}}>Type(s):</Text>
        {pokemon.type.map((el: string) => (
          <Text key={el} style={{color, fontSize: 12}}>
            * {el}
          </Text>
        ))}
        <Text style={{color, fontSize: 14, marginTop: 10}}>Abilities:</Text>
        {pokemon.abilities.map((el: string) => (
          <Text key={el} style={{color, fontSize: 12}}>
            * {el}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen
