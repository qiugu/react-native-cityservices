import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import Util from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionSheet from '../ActionSheet';

export default class ServiceWindow extends Component {
  constructor() {
    super();
    this.sheet = React.createRef();
    this.state = {
      data: Util.services,
      sex: ''
    }
  }

  renderServices({item}) {
    return (
      <TouchableOpacity style={styles.list} onPress={() => this.props.navigation.navigate('Detail',{title: item.title})}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
          <View style={styles.leftContainer}>
            <View style={{backgroundColor: item.color,...styles.icon}}>
              <Ionicons name={item.icon} size={30} color="#fff"/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.content}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{alignItems: 'center',paddingBottom: 10}} onPress={() => this.handlePress(item.title)}>
              <Entypo name="dots-three-horizontal" size={20} color="red"/>
            </TouchableOpacity>
            <Text>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  handlePress(title) {
    this.sheet.current.show('标记已读','删除消息',this.state)
  }

  cancelHandle() {
    this.sheet.current.cancel()
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.concern} onPress={() => this.props.navigation.navigate('List')}>
          <Text>&gt;&gt;已关注服务窗&lt;&lt;</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          renderItem={this.renderServices.bind(this)}
          style={styles.container}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={6}
        />
        <ActionSheet ref={this.sheet}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  list: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  leftContainer: {
    flexDirection: 'row'
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  concern: {
    width: Util.size.width,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  textContainer: {
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 16,
    color: 'black',
    paddingBottom: 10,
    fontWeight: '100'
  }
})