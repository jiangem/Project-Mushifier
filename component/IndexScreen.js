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

const nameHolder = '';

const items = [
  'Agaricaceae',
  'Agaricales',
  'Agaricus_s',
  'Agaricus_xanthodermus',
  'Amanita_sec',
  'Armillaria',
  'Armillari_mellea',
  'Bolbitius_titubans',
  'Hericium_erinaceus',
  'Laetiporus_sulphureus',
  'Omphalotus_olivascens',
  'Pleurotus_ostreatus',
  'Pluteus_cervinus',
  'Polyporus_squamosus',
  'Sarcomyxa_serotina',
  'Schizophyllum_commune',
  'Trametes_versicolor',
];

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

  constructor(props) {
    super(props);
    this.state = {
      nameHolder: []
    };
  }

  _onPress = () => {
    this.props.navigation.navigate('Description', {name: 'testing'}, {image: '../assets/images/fp_index.png'})
  }

  /*generateImgList() {
    var counter = items.size;
    var imgList = [];
    for (var i=0; i < counter; i++) {
      imgList.push(
        <View key={i} style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={this.props.navigation.navigate('Description', {name: items[i]}, {image: '../assets/images/index' + items[i] + '.jpg'})}>
            <Image source={require('../assets/images/index' + items[i] + '.jpg')} style={{width: 190, height: 190}}/>
          </TouchableOpacity>
        </View>
      )
    }
    return;
  }*/

  render() {
    console.log(items)
    var counter = items.length;
    console.log(items.length)
    var imgList = [];
    console.log(counter)
    for (let i = 0; i < counter; i++) {
      const imgPath = '../assets/images/index/' + items[i] + '.jpg';
      console.log(imgPath);
      imgList.push(
        <View key={i} style={{flex: 1, flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Description', {name: items[i]}, {image: imgPath})}}>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#4C3D35' }}>
        <View>
          { imgList }
        </View>
      </View>
    )
  }

  /*() {
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
  }*/
}

export default IndexScreen;