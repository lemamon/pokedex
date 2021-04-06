import {Colors} from 'react-native/Libraries/NewAppScreen'
import {AppThemeProps, ThemeProps} from '../types'
import {homeStyles, itemStyle, detailsStyle, simpleListStyle} from '../styles'

const useAppTheme = ({isDarkMode}: ThemeProps): AppThemeProps => {
  return {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.white : Colors.black,
    borderColor: isDarkMode ? Colors.white : Colors.black,
    headerTintColor: isDarkMode ? Colors.white : Colors.black,
    barStyle: isDarkMode ? 'light-content' : 'dark-content',
    homeStyles,
    itemStyle,
    detailsStyle,
    simpleListStyle,
  }
}

export {useAppTheme}
