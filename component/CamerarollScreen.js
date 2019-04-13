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
import {Permissions } from 'expo';

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
    CameraRoll.getPhotos({ first: 100 })
      .then(res => {
        let photoArray = res.edges;
        this.setState({ showPhotoGallery: true, photoArray: photoArray })
      })
  }

  render() {
    const initial = <TouchableHighlight
                        onPress={() => this.access()}>
                        <Image style={{ width: 75, height:75 }}
                          source={require('../assets/images/fp_gallery.png')} />
                      </TouchableHighlight>
                      
    let rendering;
    if (this.state.showPhotoGallery) {
      rendering = <ScrollView>
                      {this.state.photoArray.map((p, i) => {
                      return (
                        <TouchableOpacity key={i} onPress={() => { {this.props.navigation.navigate('Predictor', {image: p.node.image.uri})} }}>
                            <Image
                              key={i}
                              style={{
                                width: 300,
                                height: 300,
                              }}
                              source={{ uri: p.node.image.uri }}
                            />
                        </TouchableOpacity>
                      );
                    })}
                    </ScrollView>
    } else {
      rendering = initial
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#4C3D35' }}> 
          {rendering} 
          <Text style= {{ fontFamily: 'Noteworthy-Bold', fontSize: 28, color:'white' }}>
           tap to load images
          </Text>
      </View>
    );
  }
}

export default CamerarollScreen;
