import React from 'react';
import {
  Blink,
  CameraRoll,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ViewPhotos,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Cameraroll, Permissions } from 'expo';

class CamerarollScreen extends React.Component {
  static navigationOptions = {
        title: 'Gallery',
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

  state = {
    showPhotoGallery: false,
    photoArray: []
  }

  access() {
    CameraRoll.getPhotos({ first: 1000000 })
      .then(res => {
        let photoArray = res.edges;
        this.setState({ showPhotoGallery: true, photoArray: photoArray })
      })
  }

  render() {
    if (this.state.showPhotoGallery) {
      return (
        <ViewPhotos
          photoArray={this.state.photoArray} />
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#4C3D35' }}>
        <TouchableHighlight
          onPress={() => this.access()}>
          <Image style={{ width: 75, height:75 }}
            source={require('../assets/images/fp_gallery.png')} />
        </TouchableHighlight>
        <Text style= {{ fontFamily: 'Noteworthy-Bold', fontSize: 28, color:'white' }}>
          tap to load images
        </Text>
      </View>
    );
  }
}

export default CamerarollScreen;
