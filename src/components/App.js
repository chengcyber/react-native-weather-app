import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Highlighter from 'react-native-highlight-words';
import { fetchWeather, iconName, phrase, fetchWeatherAtCurrentPosition } from '../weatherAPI';


export default class App extends Component {

  componentWillMount() {
    this.state = {
      temperature: '-',
      weather: 'Default'
    }
  }


  componentDidMount() {
    this.getLocation();
  }


  render() {
    const { weather, temperature } = this.state;
    return (
      <View style={[styles.container, {backgroundColor: phrase[weather].background}]}>
        <StatusBar hidden={true} />

        <View style={styles.header}>
          <Icon name={iconName[weather]} size={80} color={'white'}/>
          <Text style={styles.temperature}>{temperature}°</Text>
        </View>
        <View style={styles.body}>
          <Highlighter style={styles.h1}
            highlightStyle={{color: phrase[weather].color}}
            searchWords={[phrase[weather].highlight]}
            textToHighlight={phrase[weather].title}
          />
          <Text style={styles.h2}>{phrase[weather].subtitle}</Text>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD016'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'blue'
  },
  temperature: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  body: {
    margin: 10,
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    // backgroundColor: 'red'
  },
  h1: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 70,
    color: 'white',
    marginBottom: 5
  },
  h2: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18,
    color: 'white'
  },
})
