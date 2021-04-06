import React from 'react'
import {ActivityIndicator, useColorScheme, View} from 'react-native'
import {useAppTheme} from '../../config/theme'
import {DARK_THEME} from '../../utils/constants'

const FooterLoading = () => {
  const {homeStyles} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

  return (
    <View style={homeStyles.loading}>
      <ActivityIndicator />
    </View>
  )
}

export default FooterLoading
