import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Util from '../utils';
import { withNavigation } from 'react-navigation';

class SearchTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.location}>芜湖</Text>
            <TextInput
                style={styles.inputItem}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                placeholder="搜索更多内容"
                placeholderTextColor="#333"
            />
            <TouchableOpacity style={styles.scanner} onPress={() => this.props.navigation.navigate('Camera')}>
                <Ionicons name="ios-qr-scanner" size={30} color="#fff" />
                <View style={styles.scannerLine}/>
            </TouchableOpacity>
          </View>
        )
    }
}

var styles = StyleSheet.create({
    scanner: {
        position: 'relative',
        flex: 1,
        paddingLeft: 20
    },
    scannerLine: {
        position: 'absolute',
        width: 24,
        height: 2,
        top: 14,
        left: 20,
        backgroundColor: '#fff'
    },
    inputContainer: {
        width: Util.size.width,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute'
    },
    inputItem: {
        flex: 9,
        height: 30,
        paddingLeft: 30,
        backgroundColor: '#fff',
        borderRadius: 8,
        fontSize: 12,
        paddingVertical: 0
    },
    location: {
      paddingRight: 20,
      color: 'black',
      fontWeight: '100'
    }
})

export default withNavigation(SearchTitle)
