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
import { WebBrowser, Asset } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { TfImageRecognition } from 'react-native-tensorflow';

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
        headerBackTitle: 'Camera',
        headerBackTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Noteworthy-Bold'
        },

    };

    predict() {
    //   const tfImageRecognition = new TfImageRecognition({
    //     model: require('../assets/retrained_graph.pb'),
    //     labels: require('../assets/retrained_labels.txt'),
    //   })
    //
    //   const results = tfImageRecognition.recognize({
    //     image: require('../assets/images/index/Agaricales.jpg'),
    //   })
    //
    //   results.forEach(result =>
    //     console.log(
    //       result.id, // Id of the result
    //       result.name, // Name of the result
    //       result.confidence // Confidence value between 0 - 1
    //   )
    // )
    //
    // tfImageRecognition.close() // Necessary in order to release objects on native side
    // return results

    }

  render() {
    const image = this.props.navigation.getParam('image', '../assets/images/fp_index.png');
    console.log(typeof image);
    const results = this.predict();
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35' }}>
        <Image source={
          {uri:image}
          } style={{width: 250, height: 400}}>
        </Image>
      </View>
    );er
  }
}

export default PredictorScreen;
