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
import {createStackNavigator, createAppContainer} from 'react-navigation';

class DescriptionScreen extends React.Component {
  static navigationOptions = {
        title: 'Description',
        headerStyle: {
          backgroundColor: '#4C3D35',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
                   },
        headerBackTitle: 'Home',
        headerBackTitleStyle: {
                    fontWeight: 'bold',
                                   },

    };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35'  }}>
        <Text style= {{fontSize: 50, color:'white'}}> Hi Cibi
        </Text>
      </View>
    );
  }
}

export default DescriptionScreen;