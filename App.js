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
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './component/HomeScreen'
import CameraScreen from './component/CameraScreen.js'
import CamerarollScreen from './component/CamerarollScreen.js'
import IndexScreen from './component/IndexScreen.js'
import SearchScreen from './component/SearchScreen.js'
import PredictorScreen from './component/PredictorScreen.js'
import DescriptionScreen from './component/DescriptionScreen'
import HelpScreen from './component/HelpScreen'
import MushifierGuide from './component/MushifierGuide';


const styles = StyleSheet.create({
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Camera: {screen: CameraScreen},
  Search: {screen: SearchScreen},
  Cameraroll: {screen: CamerarollScreen},
  Index: {screen:IndexScreen},
  Predictor:{screen:PredictorScreen},
  Description:{screen:DescriptionScreen},
  Help:{screen:HelpScreen},
  Guide:{screen:MushifierGuide},
});

const App = createAppContainer(MainNavigator);

export default App;
