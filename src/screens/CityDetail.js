import React from "react"
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  ImageBackground,
  StatusBar
} from "react-native"
import IconText from "../components/IconText"
import moment from "moment"

const CityDetail = ({ weatherData}) => {
  const { 
    container, 
    imageLayout,
    cityText,
    cityName,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  const {
    name,
    country,
    population,
    sunrise,
    sunset
  } = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpeg')}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"users"}
            iconSize={50}
            iconColor="pink"
            bodyText={population.toString()}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconSize={50}
            iconColor="white"
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyle={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconSize={50}
            iconColor="white"
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 20,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 20,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 10,
    color: 'pink',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default CityDetail