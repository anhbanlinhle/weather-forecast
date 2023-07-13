import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demo/counter'
const App = () => {
  return (
    <NavigationContainer>  
      {/* <Tabs /> */}
      <Counter />
    </NavigationContainer>
  )
}

export default App