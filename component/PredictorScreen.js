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

class PredictorScreen extends React.Component {
  static navigationOptions = {
        title: 'Predictor',
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
    const image = this.props.navigation.getParam('image', '../assets/images/fp_index.png');
    console.log(typeof image)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35' }}>
        <Image source={
          {uri:image}
          } style={{width: 250, height: 400}}>
        </Image>
      </View>
    );
  }
}

export default PredictorScreen;