import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const { container } = styles
  const [loading, errorMsg, weather] = useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
        {/* <Counter /> */}
      </NavigationContainer>
    )
  }

  return (
    <View style={container}>
      <ActivityIndicator size={'large'} color={'pink'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
