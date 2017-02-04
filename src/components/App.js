import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Highlighter from 'react-native-highlight-words';
import { iconName, phrase } from '../weatherAPI';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.fetchData();
  }
  
  componentDidUpdate() {
  }
  
  fetchData () {
    const { fetchWeather, getCoordsCurrent } = this.props;

    getCoordsCurrent()
      .then((posData) => {
        console.log(posData)
        fetchWeather(posData.coords.latitude, posData.coords.longitude)
      });
  }

  render() {
    const { weather, temperature, phrase, iconName } = this.props;
    return (
      <View style={[styles.container, {backgroundColor: phrase.background}]}>
        <StatusBar hidden={true} />

        <View style={styles.header}>
          <Icon name={iconName} size={80} color={'white'}/>
          <Text style={styles.temperature}>{temperature}°</Text>
        </View>
        <View style={styles.body}>
          <Highlighter style={styles.h1}
            highlightStyle={{color: phrase.color}}
            searchWords={[phrase.highlight]}
            textToHighlight={phrase.title}
          />
          <Text style={styles.h2}>{phrase.subtitle}</Text>
        </View>

      </View>
    )
  }

}

App = connect(
  (state) => ({
    weather: state.weather.main.weather,
    temperature: state.weather.main.temperature,
    phrase: state.phrase,
    iconName: state.iconName,
    coords: state.coords
  }),
  actions
)(App)

export default App;

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
