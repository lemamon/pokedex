import React, {useEffect, useState} from 'react'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'

import {useAppTheme} from '../../config/theme'
import {getData} from '../../service/api'
import {Pokemon, Props} from '../../types'
import {DARK_THEME, PATH_URL} from '../../utils/constants'
import List from '../List'

const HomeScreen = ({navigation}: Props) => {
  const [url, setUrl] = useState(PATH_URL)
  const [list, setList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(false)
  const [maxItems, setMaxItems] = useState(1)

  const {backgroundColor, barStyle, homeStyles} = useAppTheme({
    isDarkMode: useColorScheme() === DARK_THEME,
  })

  const loadData = async () => {
    if (list.length >= maxItems) return

    setLoading(true)

    if (loading) return
    setLoading(true)
    const data = await getData(url)
    const pokemons: Pokemon[] = await Promise.all(
      data.results.map(async (el: Pokemon) => {
        const pokeInfo = await getPokemonInfo(el.url)
        return {...el, ...pokeInfo}
      }),
    )

    setList([...list, ...pokemons])
    setUrl(data.next)
    setMaxItems(data.count)
    setLoading(false)
  }

  const getPokemonInfo = async (mUrl: string) => {
    const data = await getData(mUrl)
    return {
      image: data?.sprites?.front_default,
      abilities: data?.abilities?.map((el: any) => el.ability.name),
      type: data?.types?.map((el: any) => el.type.name),
      id: data.id,
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const onPress = (pokemon: Pokemon) => {
    navigation.navigate('Details', {
      pokemon: pokemon,
      name: pokemon.name,
    })
  }

  return (
    <SafeAreaView style={[backgroundColor, homeStyles.container]}>
      <StatusBar barStyle={barStyle} />
      <List data={list} fetchData={loadData} onPressItem={onPress} />
    </SafeAreaView>
  )
}

export default HomeScreen
