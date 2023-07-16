import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
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
  
  const { 
    main: { 
      temp, 
      feels_like, 
      temp_max, 
      temp_min 
    }, 
    weather 
  } = weatherData 

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="black" />
        <Text style={temperature}>{temp}°C</Text>
        <Text style={feels}>Feels like {feels_like}°C</Text>
        <RowText
          firstMessage={`High: ${temp_max}°C `}
          secondMessage={`Low: ${temp_min}°C`}
          container={highLowWrapper}
          firstMessageStyle={highLow}
          secondMessageStyle={highLow}
        />
      </View>
      <RowText
        firstMessage={weather[0]?.description}
        secondMessage={weatherType[weatherCondition]?.message}
        container={bodyWrapper}
        firstMessageStyle={description}
        secondMessageStyle={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
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
