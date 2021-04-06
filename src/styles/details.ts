import {StyleSheet} from 'react-native'

const detailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  image: {
    width: '80%',
    height: '50%',
    borderWidth: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textWrapper: {
    width: '80%',
    borderWidth: 10,
    borderTopWidth: 0,
    borderBottomWidth: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
})

export {detailsStyle}
