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
const util = require('util');

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
    console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
    var {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35'  }}>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 30}}>
          WELCOME TO MUSHIFIER!
        </Text>
        <Text style= {{fontFamily: 'Noteworthy', fontSize: 14, color:'white', paddingBottom: 50}}>
          At Mushifier, we are creating an app that enables people to love mushrooms even more!
          Join over 4 million mushroom lovers and find the mushroom that's right for you!
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 30, textDecorationLine: 'underline'}}>
          A Guide
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 10}}>
          <Button
            onPress = {
              () => navigate("Guide", {})
            }
            title = "Why Mushifier?"
          />
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 10}}>
          <Button
            onPress = {
              () => navigate("Guide", {})
            }
            title = "How to start"
          />
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 10}}>
          <Button
            onPress = {
              () => navigate("Guide", {})
            }
            title = "How to take picutres"
          />
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 10}}>
          <Button
            onPress = {
              () => navigate("Guide", {})
            }
            title = "How to import photos"
          />
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 10}}>
          <Button
            onPress = {
              () => navigate("Guide", {})
            }
            title = "How to search"
          />
        </Text>
        <Text style= {{fontFamily: 'Noteworthy-Bold', fontSize: 18, color:'white', paddingBottom: 10}}>
          <Button
            onPress = {
              () => navigate("Guide", {})
            }
            title = "How to save"
          />
        </Text>
      </View>
    );
  }
}

export default HelpScreen;
