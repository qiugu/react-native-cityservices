import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Util from '../utils';

export default class MsNotice extends Component {
  constructor() {
    super();
    this.state = {
      data: Util.notice
    }
  }

  renderNotice({item}) {
    return (
      <View style={styles.listContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 16,color: 'black',fontWeight: '100'}}>{item.title}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={{color: 'black',fontWeight: '100',fontSize: 14}} numberOfLines={4}>{item.content}</Text>
          </View>
          <TouchableOpacity style={styles.footContainer}>
            <Text>查看详情</Text>
            <Ionicons name="ios-arrow-forward" size={20} color="#333"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render () {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderNotice}
        style={styles.container}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={6}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  listContainer: {
    width: Util.size.width,
    paddingTop: 40,
    alignItems: 'center'
  },
  timeContainer: {
    backgroundColor: '#ebe9e9',
    width: Util.size.width / 3,
    borderRadius: 20,
    marginBottom: 10
  },
  time: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center'
  },
  mainContainer: {
    width: Util.size.width * 0.94,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f2f2f2'
  },
  titleContainer: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 10
  },
  contentContainer: {
    padding: 10,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  footContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  }
})