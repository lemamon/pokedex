import React from 'react'
import {Text, useColorScheme} from 'react-native'
import {SimpleListProps} from '../../types'
import {useAppTheme} from '../../config/theme'
import {DARK_THEME} from '../../utils/constants'

const SimpleList = ({data, title}: SimpleListProps) => {
  const {color} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

  return (
    <>
      <Text style={{color, fontSize: 14, marginTop: 10}}>{title}</Text>
      {data.map((el: string) => (
        <Text key={el} style={{color, fontSize: 12}}>
          * {el}
        </Text>
      ))}
    </>
  )
}

export default SimpleList
