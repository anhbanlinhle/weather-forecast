import React from "react"
import { 
  View,
  Text,
  StyleSheet
} from "react-native"
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { container, textTheme } = styles
  const { 
    iconName, 
    iconSize, 
    iconColor, 
    bodyText,
    bodyTextStyle
  } = props
  return (
    <View style={container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
  }
})

export default IconText