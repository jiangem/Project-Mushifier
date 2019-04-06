import React from 'react';
import {
  Blink,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class SearchScreen extends React.Component {
  static navigationOptions = {
      title: 'Search',
      headerStyle: {
        backgroundColor: '#4C3D35',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Noteworthy-Bold'
      },
      headerBackTitle: 'Home',
      headerBackTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Noteworthy-Bold'
      },

  };
  render() {
    return (
      <ImageBackground source={
        require('../assets/images/search_page_guide.png')
        }
        style={{width: '100%', height: '100%'}}>
      </ImageBackground>
    );
  }
}

export default SearchScreen;