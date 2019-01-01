import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid, TouchableOpacity} from 'react-native';
import Util from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class NoticeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      title: '',
      content: ''
    };
    this._handlePress = this._handlePress.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <Text style={{ flex: 1, textAlign: 'center', color: 'black', fontWeight: '200', fontSize: 18 }}>{`${navigation.getParam('title')}`}</Text>
      ),
      headerRight: (
        <TouchableOpacity underColor="#eee" style={{paddingRight: 20}}  onPress={navigation.getParam('handlePress')} >
          <Entypo name="dots-three-horizontal" size={20} color="red"/>
        </TouchableOpacity>
      )
    }
  }

  componentWillMount () {
    let param = this.props.navigation.getParam('title');
    Util.notice.forEach(item => {
      if (item.keywords === param) {
        this.setState({
          time: item.time,
          title: item.title,
          content: item.content
        })
      }
    })
  }

  _handlePress () {
    ToastAndroid.show('保存成功',ToastAndroid.SHORT);
  }

  render () {
    if (this.state.title === '') {
      return null;
    }
    return (
      <View style={styles.listContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{this.state.time}</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 16,color: 'black',fontWeight: '100'}}>{this.state.title}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={{color: 'black',fontWeight: '100',fontSize: 14}}>{this.state.content}</Text>
          </View>
          <TouchableOpacity style={styles.footContainer}>
            <Text>查看详情</Text>
            <Ionicons name="ios-arrow-forward" size={20} color="#333"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
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
    borderColor: '#f2f2f2',
    borderRadius: 8
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