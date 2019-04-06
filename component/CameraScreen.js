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
  CameraRoll,
} from 'react-native';
import { WebBrowser } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Camera, Permissions } from 'expo';

class CameraScreen extends React.Component {
  static navigationOptions = {
        title: 'Camera',
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
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    capture: [],
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
      if (this.camera) {
          const photo = await this.camera.takePictureAsync();
          this.setState({capture:[photo, ... this.state.capture]});
          console.log(photo);
          console.log(this.state.capture);
          CameraRoll.saveToCameraRoll(photo["uri"]);
      }
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style= {{
                   flex: 1,
                   flexDirection: 'row',
                   justifyContent: 'center',
                   alignItems: 'flex-end'
                }}
                onPress={() => {
                  {this.snap()}
                }}>
                <View style={{
                    width: 60,
                    height: 60,
                    borderWidth: 2,
                    borderRadius: 60,
                    borderColor: "#FFFFFF",

                }}>
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}




export default CameraScreen

/*<TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>*/

/*class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  console.log(barcodes);
                }}
              />
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            </View>
    );

  }

  takePicture = async function() {
     if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
     }
  };
}

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       flexDirection: 'column',
       backgroundColor: 'black',
     },
     preview: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: 'center',
     },
     capture: {
       flex: 0,
       backgroundColor: '#fff',
       borderRadius: 5,
       padding: 15,
       paddingHorizontal: 20,
       alignSelf: 'center',
       margin: 20,
     },
   });

export default CameraScreen;*/
