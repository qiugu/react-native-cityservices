import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';
import Util from '../utils';

export default class DetailSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.navigation.getParam('value')
    };
    this._handlePress = this._handlePress.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <Text style={{ flex: 1, textAlign: 'center', color: 'black', fontWeight: '200', fontSize: 18 }}>{`${navigation.getParam('title')}设置`}</Text>
      ),
      headerRight: (
        <TouchableOpacity underColor="#eee"  onPress={navigation.getParam('handlePress')} >
          <Text style={{paddingRight: 20, color: "red"}}>保存</Text>
        </TouchableOpacity>
      )
    }
  }

  componentDidMount () {
    this.props.navigation.setParams({handlePress: this._handlePress})
  }

  _handlePress () {
    ToastAndroid.show('保存成功',ToastAndroid.SHORT);
    this.props.navigation.navigate('setMaterial', {value: this.state.text})
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputItem} value={this.state.text} onChangeText={text => this.setState({text})} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  inputItem: {
    width: Util.size.width,
    height: 40,
    marginTop: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  }
})