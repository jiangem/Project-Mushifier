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

class HelpScreen extends React.Component {
  static navigationOptions = {
        title: 'A Simple Guide to Mushifier!',
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35'  }}>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white'}}>
          WELCOME TO MUSHIFIER!

          This guide is for Mushroom lovers who now want to know the best Mushrooms.

        </Text>
      </View>
    );
  }
}

export default HelpScreen;
