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

class IndexScreen extends React.Component {
  static navigationOptions = {
        title: 'Index',
        headerStyle: {
          backgroundColor: '#4C3D35',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Noteworthy-Bold'
        },
        headerBackTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Noteworthy-Bold'
        },

    };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35' }}>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 50, color:'white'}}>
        Hello
         text is written in Noteworthy
        </Text>
      </View>
    );
  }
}

export default IndexScreen;