import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const { container, title, button } = styles
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`count: ${count}`)
    return () => {
      console.log('useEffect cleanup')
    }
  }, [count])

  return (
    <View style={container}>
      <Text style={title}>{`Counting: ${count}`}</Text>
      <View style={button}>
        <Button
          color="red"
          title="Increase"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <View style={button}>
        <Button
          color={'blue'}
          title="Decrease"
          onPress={() => setCount(count - 1)}
        />
      </View>
      <View style={button}>
        <Button
          color="red"
          title="Increase"
          onPress={() => setNewCount(newCount + 1)}
        />
      </View>
      <View style={button}>
        <Button
          color={'blue'}
          title="Decrease"
          onPress={() => setNewCount(newCount - 1)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'pink'
  },
  title: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: 20
  },
  button: {
    borderWidth: 5,
    borderColor: 'purple',
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'white'
  }
})

export default Counter
