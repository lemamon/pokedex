import {Colors} from 'react-native/Libraries/NewAppScreen'
import {AppThemeProps, ThemeProps} from '../types'

const useAppTheme = ({isDarkMode}: ThemeProps): AppThemeProps => {
  return {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.white : Colors.black,
    borderColor: isDarkMode ? Colors.white : Colors.black,
    headerTintColor: isDarkMode ? Colors.white : Colors.black,
    barStyle: isDarkMode ? 'light-content' : 'dark-content',
  }
}

export {useAppTheme}
