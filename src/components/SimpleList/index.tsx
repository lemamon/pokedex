import React from 'react'
import {Text, useColorScheme} from 'react-native'
import {SimpleListProps} from '../../types'
import {useAppTheme} from '../../config/theme'
import {DARK_THEME} from '../../utils/constants'

const SimpleList = ({data, title}: SimpleListProps) => {
  const {color, simpleListStyle} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

  return (
    <>
      <Text style={[simpleListStyle.title, {color}]}>{title}</Text>
      {data.map((el: string) => (
        <Text key={el} style={[simpleListStyle.item, {color}]}>
          * {el}
        </Text>
      ))}
    </>
  )
}

export default SimpleList
