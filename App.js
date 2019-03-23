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
  Index: {screen:IndexScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

/*class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground source={
          require('./assets/images/fp_back.png')
        }
        style={{width: '100%', height: '100%'}}>

        <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 330}}>

          <Image source={
            require('./assets/images/fp_camera.png')
          }
          style={{width: 150, height: 150}}>
          </Image>

        </View>


        <View style={{flex: 2, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 80, paddingLeft: 15, paddingRight: 15}}>

          <Image source={
            require('./assets/images/fp_gallery.png')
          }
          style={{width: 120, height: 120}}>
          </Image>

          <Image source={
            require('./assets/images/fp_index.png')
          }
          style={{width: 120, height: 120}}>
          </Image>

        </View>

        <View style={{flex: 3, flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 180}}>

          <Image source={
            require('./assets/images/fp_search.png')
          }
          style={{width: 120, height: 120}}>
          </Image>

        </View>
      </ImageBackground>
    );
  }
}

class CameraScreen extends React.Component {

}*/


