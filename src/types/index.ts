import {StackNavigationProp} from '@react-navigation/stack'
import {StatusBarStyle} from 'react-native'

export type Pokemon = {
  name: string
  url: string
  image?: string
  id?: Number
  type?: string[]
  abilities?: string[]
}

export type ListProps = {
  data: Pokemon[]
  fetchData: Function
  onPressItem: Function
}

export type ItemProps = {
  item: Pokemon
  onPressItem: Function
}

export enum AppScreens {
  Home = 'Home',
  Details = 'Details',
}

export type Props = {
  navigation: StackNavigationProp<any, any>
  route: any
}

export type ThemeProps = {
  isDarkMode: boolean
}

export type SimpleListProps = {
  data: string[]
  title: string
}

export type AppThemeProps = {
  backgroundColor: string
  color: string
  borderColor: string
  headerTintColor: string
  barStyle: StatusBarStyle
  homeStyles: any
  itemStyle: any
  detailsStyle: any
  simpleListStyle: any
}
