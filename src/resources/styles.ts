import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 22,
  },
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
  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
})

export default styles
