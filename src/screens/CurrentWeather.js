import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const { 
    wrapper,
    container,
    temperature,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temperature}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          firstMessage="High: 8"
          secondMessage="Low: 6"
          container={highLowWrapper}
          firstMessageStyle={highLow}
          secondMessageStyle={highLow}
        />
      </View>
      <RowText
        firstMessage="Cloudy"
        secondMessage={weatherType.Clouds.message}
        container={bodyWrapper}
        firstMessageStyle={description}
        secondMessageStyle={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  temperature: {
    color: 'black',
    fontSize: 49,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems : 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 24,
  }
})

export default CurrentWeather
