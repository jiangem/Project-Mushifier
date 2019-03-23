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