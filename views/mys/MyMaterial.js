import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Util from '../utils'

class SetItem extends Component {
  render() {
      return (
          <TouchableOpacity underColor="#f2f2f2" onPress={() => {this.props.navigateTo(this.props.name,this.props.info)}}>
            <View style={styles.setItem}>
              <Text style={styles.font}>{this.props.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{paddingRight: 15}}>{this.props.info || '-'}</Text>
                <Ionicons name="ios-arrow-forward" size={20} color="#ccc"></Ionicons>
              </View>
            </View>
          </TouchableOpacity>
      )
  }
}

export default class MyMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: require('../../img/header.png'),
      nickName: 'qiugu',
      realName: '已实名认证',
      address: '安徽省芜湖市弋江区',
      company: 'hgzx',
      position: '前端开发',
      tel: '18293900274',
      email: '476710564@qq.com'
    }
    this.goDetailSet = this.goDetailSet.bind(this);
  }

  static navigationOptions = {
    headerTitle: (
      <Text style={{ flex: 1, textAlign: 'center', color: 'black', fontWeight: '200', fontSize: 18 }}>我的资料</Text>
    ),
    headerRight: <View />
  }

  goDetailSet (title,value) {
    this.props.navigation.push('MaterialDetail', {title,value})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.setItemFirst}>
              <Text style={{color: 'black'}}>头像</Text>
              <Image source={this.state.img} style={styles.img}/>
          </View>
          <SetItem name="昵称" info={this.state.nickName} navigateTo={this.goDetailSet}/>
          <View style={styles.setItem}>
            <Text style={styles.font}>实名认证</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingRight: 15}}>{this.state.realName || '-'}</Text>
            </View>
          </View>
          <SetItem name="地址" info={this.state.address} navigateTo={this.goDetailSet}/>
          <SetItem name="公司" info={this.state.company} navigateTo={this.goDetailSet}/>
          <SetItem name="职位" info={this.state.position} navigateTo={this.goDetailSet}/>
        </View>
        <View style={{marginTop: 10}}>
          <View style={styles.setItem}>
            <Text style={styles.font}>电话号码</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingRight: 15}}>{this.state.tel || '-'}</Text>
            </View>
          </View>
          <SetItem name="电子邮箱" info={this.state.email} navigateTo={this.goDetailSet}/>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  setItemFirst: {
    width: Util.size.width,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    borderWidth: Util.pixel,
    borderColor: '#ccc'
  },
  setItem: {
    width: Util.size.width,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    borderWidth: Util.pixel,
    borderColor: '#ccc'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 35
  },
  font: {
    color: 'black'
  },
})