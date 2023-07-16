import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const ErrorItem = () => {
  const { container, errMsg } = styles

  return (
    <View style={container}>
      <Text style={errMsg}>Something went wrong</Text>
      <Feather name="alert-circle" size={100} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  errMsg: {
    fontSize: 30,
    color: "black",
    marginHorizontal: 20,
    textAlign: "center"
  }
})

export default ErrorItem
