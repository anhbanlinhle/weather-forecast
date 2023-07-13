import React from 'react'
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp } = Styles
  return (
    <View style={item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 20
  },
  temp: {
    fontSize: 20,
    color: 'red'
  },
  date: {
    fontSize: 20,
    color: 'cyan'
  },
})
export default ListItem