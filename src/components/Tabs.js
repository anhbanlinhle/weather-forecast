import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import CityDetail from '../screens/CityDetail'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        }
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? 'blue' : 'black'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Upcoming" 
        options={{
          tabBarIcon: ({ focused }) =>
            <Feather
              name="clock"
              size={25}
              color={focused ? 'blue' : 'black'}
            />
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen 
        name="City" 
        options={{
          tabBarIcon: ({ focused }) =>
            <Feather
              name="home"
              size={25}
              color={focused ? 'blue' : 'black'}
            />
        }}
      >
        {() => <CityDetail weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs