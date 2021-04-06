import React from 'react'
import {Image, SafeAreaView, Text, useColorScheme, View} from 'react-native'
import {Props} from '../../types'
import {capitalize} from '../../utils/utils'
import {useAppTheme} from '../../config/theme'
import SimpleList from '../SimpleList'
import {DARK_THEME} from '../../utils/constants'

const DetailsScreen = ({route}: Props) => {
  const {pokemon} = route.params
  const {backgroundColor, color} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

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
        <SimpleList title="Type(s):" data={pokemon.type} />
        <SimpleList title="Abilities:" data={pokemon.abilities} />
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen
