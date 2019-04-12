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
import SearchBar from 'react-native-searchbar';

const items = [
  'Agaricaceae',
  'Agaricales',
  'Agaricus s',
  'Agaricus xanthodermus',
  'Amanita sec',
  'Armillaria',
  'Armillaria mellea',
  'Bolbitius titubans',
  'Hericium erinaceus',
  'Laetiporus sulphureus',
  'Omphalotus olivascens',
  'Pleurotus ostreatus',
  'Pluteus cervinus',
  'Polyporus squamosus',
  'Sarcomyxa serotina',
  'Schizophyllum commune',
  'Trametes versicolor',
];

export default class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <ImageBackground source={
        require('../assets/images/back.png')
      }
      style={{width: '100%', height: '90%'}}>
      <View>
        <View style={{ marginTop: 70 }}>
          {
            this.state.results.map((result, i) => {
              return (
                <Text key={i}>
                  {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
                </Text>
              );
            })
          }
          
          
          
        </View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
          hideBack
          placeholder='ex. Amanita'
        />
      </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: "center"
        //flexDirection: 'row',
        //height: 100
    }
})

/*class SearchScreen extends React.Component {
  static navigationOptions = {
      title: 'Search',
      headerStyle: {
        backgroundColor: '#4C3D35',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          //fontFamily: 'GillSans-UltraBold'
      },
      headerBackTitle: 'Home',
      headerBackTitleStyle: {
          fontWeight: 'bold',
          //fontFamily: 'GillSans-UltraBold'
      },

  };
  render() {
    return (
      <ImageBackground source={
        require('../assets/images/search_page_guide.png')
        }
        style={{width: '100%', height: '100%'}}>
      </ImageBackground>
    );
  }
}

export default SearchScreen;

<TouchableOpacity onPress={() => this.searchBar.show()}>
            <View style={{ backgroundColor: 'green', height: 80, marginTop: 50 }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <View style={{ backgroundColor: 'red', height: 80 }}/>
          </TouchableOpacity>
*/