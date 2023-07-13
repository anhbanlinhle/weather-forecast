import React from "react"
import {
  View,
  Text
} from "react-native"

const RowText = (props) => {
  const {
    firstMessage,
    secondMessage,
    container,
    firstMessageStyle,
    secondMessageStyle,
  } = props 
  return (
    <View style={container}>
      <Text style={firstMessageStyle}>{firstMessage}</Text>
      <Text style={secondMessageStyle}>{secondMessage}</Text>
    </View>
  )
}

export default RowText