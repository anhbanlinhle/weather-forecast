import React from 'react'
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTexWrapper } = Styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="white" />
      <View style={dateTexWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
      
      <Text style={temp}>{Math.round(min)}°C - {Math.round(max)}°C</Text>
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
    color: 'white'
  },
  date: {
    fontSize: 20,
    color: 'white'
  },
  dateTexWrapper: {
    flexDirection: 'column',
  }
})
export default ListItem