import React from 'react'
import {Image, SafeAreaView, Text, useColorScheme, View} from 'react-native'
import {Props} from '../../types'
import {capitalize} from '../../utils/utils'
import {useAppTheme} from '../../config/theme'
import SimpleList from '../SimpleList'
import {DARK_THEME} from '../../utils/constants'

const DetailsScreen = ({route}: Props) => {
  const {pokemon} = route.params
  const {backgroundColor, color, detailsStyle, borderColor} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

  return (
    <SafeAreaView
      style={[
        detailsStyle.container,
        {
          backgroundColor,
          borderColor,
        },
      ]}>
      <Image
        source={{uri: pokemon.image}}
        style={[
          detailsStyle.image,
          {
            borderColor,
          },
        ]}
      />
      <View
        style={[
          detailsStyle.textWrapper,
          {
            borderColor,
          },
        ]}>
        <Text
          style={[
            detailsStyle.title,
            {
              color,
            },
          ]}>
          Name: {capitalize(pokemon.name)}
        </Text>
        <SimpleList title="Type(s):" data={pokemon.type} />
        <SimpleList title="Abilities:" data={pokemon.abilities} />
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen
