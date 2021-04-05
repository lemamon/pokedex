import React, {useEffect, useState} from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import styles from '../../resources/styles'
import {getData} from '../../service/api'
import {Pokemon} from '../../types'

const HomeScreen = ({navigation}: any) => {
  const [url, setUrl] = useState("pokemon?limit=30'")
  const [list, setList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(false)

  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  const borderColor = isDarkMode ? Colors.white : Colors.black
  const color = isDarkMode ? Colors.white : Colors.black

  const loadData = async () => {
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

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    )
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
      <FlatList
        data={list}
        numColumns={2}
        keyExtractor={item => item.name}
        onEndReached={loadData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => onPress(item)}
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
        )}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
