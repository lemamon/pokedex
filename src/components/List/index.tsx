import React from 'react'
import {FlatList} from 'react-native'

import {ListProps} from '../../types'
import Item from '../Item'

import FooterLoading from '../FooterLoading'

const List = ({data, fetchData, onPressItem}: ListProps) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.name}
      onEndReached={() => fetchData()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={FooterLoading}
      renderItem={({item}) => <Item item={item} onPressItem={onPressItem} />}
    />
  )
}

export default List
