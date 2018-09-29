import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button, Alert } from 'react-native';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
  	let display = this.state.isShowingText ? this.props.text : ' ';
    return (
    	<Text style={styles.bigblue}>{display}</Text>
    );
  }
}
export default class BlinkApp extends Component {
  render() {
  	return (
      <View style={{alignItems: 'center'}, {flex : 1}}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
        <Button
        onPress={() => {
        	Alert.alert('You tapped the button!');
        }}
        title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);

