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
