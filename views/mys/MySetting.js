import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Util from '../utils'

class SetItem extends Component {
    render() {
        return (
            <TouchableOpacity underColor="#f2f2f2">
                <View style={styles.setItem}>
                    <Text style={styles.font}>{this.props.name}</Text>
                    <Ionicons name="ios-arrow-forward" size={20} color="#ccc"></Ionicons>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class MyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: 'v1.0.0'
        }
    }

    static navigationOptions = {
        headerTitle: (
            <Text style={{ flex: 1, textAlign: 'center', color: 'black', fontWeight: '200', fontSize: 18 }}>个人设置</Text>
        ),
        headerRight: <View />
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.setItemFirst}>
                    <Text>版本号</Text>
                    <Text>{this.state.version}</Text>
                </View>
                <View style={{marginTop: 30}}>
                    <SetItem name="账号与安全" />
                    <SetItem name="授权管理" />
                </View>
                <View style={{marginTop: 30}}>
                    <SetItem name="我的地址" />
                </View>
                <View style={{marginTop: 30,marginBottom: 30}}>
                    <SetItem name="分享城市令" />
                    <SetItem name="功能介绍" />
                    <SetItem name="去评分" />
                    <SetItem name="联系我们" />
                </View>
                <TouchableOpacity title="退出当前账号" underColor="#eee" style={styles.btnContainer} onPress={() => Alert.alert('111')}>
                    <View style={styles.logout}>
                        <Text style={{color: '#f40'}}>退出当前账号</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    setItem: {
        width: Util.size.width,
        height: Util.size.height / 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: Util.pixel,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
    setItemFirst: {
        width: Util.size.width,
        height: Util.size.height / 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        borderWidth: Util.pixel,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
    font: {
        color: '#333'
    },
    btnContainer: {
        width: Util.size.width,
        alignItems: 'center'
    },
    logout: {
        width: 150,
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})