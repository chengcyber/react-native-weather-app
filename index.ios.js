/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import RNweather from './src';

AppRegistry.registerComponent('RNweather', () => RNweather);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   StatusBar
// } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
// import Highlighter from 'react-native-highlight-words';
// import { fetchWeather, iconName, phrase } from './weatherAPI';


// class App extends Component {

//   componentWillMount() {
//     this.state = {
//       temperature: '-',
//       weather: 'Default'
//     }
//   }


//   componentDidMount() {
//     this.getLocation();
//   }
  

//   getLocation () {
//     navigator.geolocation.getCurrentPosition(
//       (posData) => 
//         fetchWeather(posData.coords.latitude, posData.coords.longitude)
//           .then(res => 
//             this.setState(res)
//           ),
//       (error) => alter(error),
//       {timeout: 10000}
//     )
//   }

//   render() {
//     const { weather, temperature } = this.state;
//     return (
//       <View style={[styles.container, {backgroundColor: phrase[weather].background}]}>
//         <StatusBar hidden={true} />

//         <View style={styles.header}>
//           <Icon name={iconName[weather]} size={80} color={'white'}/>
//           <Text style={styles.temperature}>{temperature}°</Text>
//         </View>
//         <View style={styles.body}>
//           <Highlighter style={styles.h1}
//             highlightStyle={{color: phrase[weather].color}}
//             searchWords={[phrase[weather].highlight]}
//             textToHighlight={phrase[weather].title}
//           />
//           <Text style={styles.h2}>{phrase[weather].subtitle}</Text>
//         </View>

//       </View>
//     )
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFD016'
//   },
//   header: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     // backgroundColor: 'blue'
//   },
//   temperature: {
//     fontFamily: 'HelveticaNeue-Bold',
//     fontSize: 45,
//     color: 'white'
//   },
//   body: {
//     margin: 10,
//     flex: 5,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-end',
//     // backgroundColor: 'red'
//   },
//   h1: {
//     fontFamily: 'HelveticaNeue-Bold',
//     fontSize: 70,
//     color: 'white',
//     marginBottom: 5
//   },
//   h2: {
//     fontFamily: 'HelveticaNeue-Medium',
//     fontSize: 18,
//     color: 'white'
//   },
// })

// AppRegistry.registerComponent('RNweather', () => App);

/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RNweather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNweather', () => RNweather);

*/