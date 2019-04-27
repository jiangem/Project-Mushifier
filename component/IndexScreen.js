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

class IndexScreen extends React.Component {
  static navigationOptions = {
        title: 'Index',
        headerStyle: {
          backgroundColor: '#4C3D35',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitleStyle: {
            fontWeight: 'bold',
        },

    };
    
    _onPress = () => {
      this.props.navigation.navigate('Description')
    }
    
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35' }}>
        <ScrollView>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Agaricales.jpg')} style={{width: 190, height: 190}}/>
             </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Agaricus_s.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Agaricus_xanthodermus.jpg')} style={{width: 190, height: 190}}/>   
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Amanita_sec.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Armillaria.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Armillaria_mellea.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress}>
              <Image source={require('../assets/images/index/Bolbitius_titubans.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Hericium_erinaceus.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Laetiporus_sulphureus.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Omphalotus_olivascens.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Pleurotus_ostreatus.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Pluteus_cervinus.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Polyporus_squamosus.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Sarcomyxa_serotina.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Schizophyllum_commune.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Trametes_versicolor.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
               <TouchableOpacity onPress={this._onPress}>
            
              <Image source={require('../assets/images/index/Agaricaceae.jpg')} style={{width: 190, height: 190}}/>
            </TouchableOpacity>
             </View>
        </ScrollView>
      </View>
    );
  }
}

export default IndexScreen;