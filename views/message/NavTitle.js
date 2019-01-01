import React, { Component } from 'react';
import { Platform,View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Util from '../utils';
import { withNavigation } from 'react-navigation';

class NavTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        const pos = this.props.navigation.state.routeName
        return (
            <View style={{paddingLeft: pos === 'List' ? 0 : 20,marginLeft: Platform.OS === 'ios' && pos === 'List' ? 50 : 0,...styles.inputContainer}}>
                <TextInput
                    style={styles.inputItem}
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    placeholder="搜索您感兴趣的内容、服务窗"
                    placeholderTextColor="red"
                    underlineColorAndroid="transparent"
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
        paddingLeft: 20,
        flex: 1
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
        justifyContent: 'flex-end',
        backgroundColor: '#ff216b',
        flexDirection: 'row'
    },
    inputItem: {
        width: 280,
        height: 28,
        paddingLeft: 30,
        backgroundColor: '#fe83b4',
        borderRadius: 8,
        fontSize: 12,
        paddingVertical: 0
    }
})

export default withNavigation(NavTitle)
