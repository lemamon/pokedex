import React, {useEffect, useState} from 'react'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {getData} from '../../service/api'
import {Pokemon} from '../../types'
import List from '../List'

const HomeScreen = ({navigation}: any) => {
  const [url, setUrl] = useState("pokemon?limit=30'")
  const [list, setList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(1)

  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  }

  const loadData = async () => {
    if (list.length >= count) return

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
    setCount(data.count)
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
    <SafeAreaView style={[backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <List data={list} fetchData={loadData} onPressItem={onPress} />
    </SafeAreaView>
  )
}

export default HomeScreen
