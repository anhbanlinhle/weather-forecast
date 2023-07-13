import React from "react"
import { 
  View, 
  Text, 
  Button, 
  StyleSheet 
} from "react-native"

const Counter = () => {
  const { container, title, button } = styles
  let count = 0 
  return (
    <View style={container}>
      <Text style={title}>{`Counting: ${count}`}</Text>
      <View style={button} >
        <Button
          color='red'
          title="Increase"
          onPress={() => {
            count++
            console.log(count)
          }}
        />
      </View>
      <View style={button} >
        <Button
          color={'blue'}
          title="Decrease"
          onPress={() => {
            count--
            console.log(count)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'pink',
  },
  title: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: 20,
  },
  button: {
    borderWidth: 5,
    borderColor: 'purple',
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'white',
    
  }
})

export default Counter