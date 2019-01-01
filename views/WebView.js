import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  static navigationOptions = {
    headerTitle: '网页'
  }
  render() {
    console.log(this.props.navigation.state)
    return (
      <WebView
        source={{uri: this.props.navigation.state.url || 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}