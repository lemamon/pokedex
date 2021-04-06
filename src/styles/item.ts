import {StyleSheet} from 'react-native'

const itemStyle = StyleSheet.create({
  item: {
    width: '45%',
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 20,
    flex: 0.5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 9,
    textTransform: 'uppercase',
  },
})

export {itemStyle}
