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

class IndexScreen extends React.Component {
  static navigationOptions = {
        title: 'Index',
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
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35' }}>
        <ScrollView>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Agaricales.jpg')} style={{width: 190, height: 190}}/>
             </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Agaricus_s.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Agaricus_xanthodermus.jpg')} style={{width: 190, height: 190}}/>   
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Amanita_sec.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Armillaria.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Armillaria_mellea.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
              <Image source={require('../assets/images/index/Bolbitius_titubans.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Hericium_erinaceus.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
        </ScrollView>
      </View>
    );
  }
}

export default IndexScreen;