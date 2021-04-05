import React from 'react'
import {Image, Text, TouchableOpacity, useColorScheme, View} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import styles from '../../resources/styles'
import {ItemProps} from '../../types'

const Item = ({item, onPressItem}: ItemProps) => {
  const isDarkMode = useColorScheme() === 'dark'
  const borderColor = isDarkMode ? Colors.white : Colors.black
  const color = isDarkMode ? Colors.white : Colors.black

  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={[
        styles.item,
        {
          borderColor,
        },
      ]}>
      <Image
        style={{width: 36, height: 36, resizeMode: 'contain'}}
        source={{uri: item.image}}
      />
      <View>
        <Text
          style={{
            color,
            fontSize: 12,
            textTransform: 'uppercase',
          }}>
          {`${item.id}#${item.name}`}
        </Text>
        <Text
          style={{
            color,
            fontSize: 9,
            textTransform: 'uppercase',
          }}>
          * {item.type?.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Item
