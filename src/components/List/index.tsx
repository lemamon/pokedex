import React from 'react'
import {ActivityIndicator, FlatList, View} from 'react-native'

import styles from '../../resources/styles'
import {ListProps} from '../../types'
import Item from '../Item'

const List = ({data, fetchData, onPressItem}: ListProps) => {
  const renderFooter = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.name}
      onEndReached={() => fetchData()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
      renderItem={({item}) => <Item item={item} onPressItem={onPressItem} />}
    />
  )
}

export default List
