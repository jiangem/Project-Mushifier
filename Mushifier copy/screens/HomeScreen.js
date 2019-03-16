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

import { MonoText } from '../components/StyledText';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground source={
          require('../assets/images/fp_back.png')
        }
        style={{width: '100%', height: '100%'}}>

        <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end', paddingBottom: 30}}>

          <Image source={
            require('../assets/images/fp_camera.png')
          }
          style={{width:'21%', height: '11%'}}>
          </Image>

          <Image source={
            require('../assets/images/fp_index.png')
          }
          style={{width:'21%', height: '11%'}}>
          </Image>

          <Image source={
            require('../assets/images/fp_search.png')
          }
          style={{width:'21%', height: '11%'}}>
          </Image>

          <Image source={
            require('../assets/images/fp_gallery.png')
          }
          style={{width:'21%', height: '11%'}}>
          </Image>
        </View>
      </ImageBackground>
    );
  }
}