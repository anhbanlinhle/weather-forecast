import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import CityDetail from '../screens/CityDetail'

const Tab = createBottomTabNavigator()

const Tabs = () => {
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
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => 
            <Feather
              name="droplet" 
              size={25}
              color={focused ? 'blue' : 'black'}
            />
        }}
      />
      <Tab.Screen 
        name="Upcoming" 
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) =>
            <Feather
              name="clock"
              size={25}
              color={focused ? 'blue' : 'black'}
            />
        }}
      />
      <Tab.Screen 
        name="City" 
        component={CityDetail} 
        options={{
          tabBarIcon: ({ focused }) =>
            <Feather
              name="home"
              size={25}
              color={focused ? 'blue' : 'black'}
            />
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs