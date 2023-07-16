import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from "react-native"

const Button = ({ }) => {
  const { container, buttonTitle } = styles

  const onPress = () => {
    console.log('hello')
  }
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Text style={buttonTitle}>hello</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1/2,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
})

export default Button