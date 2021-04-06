import React from 'react'
import {Image, Text, TouchableOpacity, useColorScheme, View} from 'react-native'

import {useAppTheme} from '../../config/theme'
import {ItemProps} from '../../types'
import {DARK_THEME} from '../../utils/constants'

const Item = ({item, onPressItem}: ItemProps) => {
  const {color, borderColor, itemStyle} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={[
        itemStyle.item,
        {
          borderColor,
        },
      ]}>
      <Image style={itemStyle.image} source={{uri: item.image}} />
      <View>
        <Text
          style={[
            itemStyle.title,
            {
              color,
            },
          ]}>
          {`${item.id}#${item.name}`}
        </Text>
        <Text
          style={[
            itemStyle.subtitle,
            {
              color,
            },
          ]}>
          * {item.type?.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Item
