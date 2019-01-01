 import React, {Component} from 'react';
import NavTitle from './NavTitle';
import {StyleSheet, View, Text, SectionList, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Util from '../utils';

const ITEM_HEIGHT = 87; //item的高度
const HEADER_HEIGHT = 24;  //分组头部的高度
const SEPARATOR_HEIGHT = 0;  //分割线的高度

export default class Attention extends Component {
  constructor(props) {
    super(props);
    this.position = React.createRef();
    this.state = {
      sections: [
        {title: 'B', data: [{title: '办事助手',icon: 'ios-bookmarks',color: '#FF9A05'}]},
        {title: 'D', data: [{title: '达令推荐',icon: 'ios-aperture',color: '#00D204'}]},
        {title: 'G', data: [{title: '公厕导航',icon: 'ios-stats',color: '#fd8f9d'}]},
        {title: 'H', data: [{title: '核查攻略',icon: 'ios-cloudy',color: '#2aa2ef'}]},
        {title: 'J', data: [{title: '教育报名',icon: 'ios-unlock',color: '#32A69B'}]},
        {title: 'L', data: [{title: '绿色自行车',icon: 'ios-train',color: '#37465c'}]},
        {title: 'N', data: [{title: '农村信用',icon: 'ios-cash',color: '#69B32A'}]},
        {title: 'S', data: [{title: '实时公交',icon: 'ios-baseball',color: '#4285f4'}]},
        {title: 'T', data: [{title: '体育运动',icon: 'ios-partly-sunny',color: '#2F3600'}]},
        {title: 'W', data: [{title: '违章缴费',icon: 'ios-construct',color: '#5e2a06'}]},
        {title: 'X', data: [{title: '系统通知',icon: 'ios-chatbubbles',color: '#777'}]},
        {title: 'Y', data: [{title: '预约挂号',icon: 'ios-planet',color: '#ec240e'}]},
        {title: 'Z', data: [{title: '周边休闲',icon: 'ios-chatboxes',color: '#83709d'}]}
      ],
      originData: [],
      letterData: [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'
      ]
    };
    this.skipPos = this.skipPos.bind(this);
  }

  static navigationOptions = {
    headerTitle: NavTitle,
    headerStyle: {
      backgroundColor: '#ff216b'
    },
    headerTintColor: '#fff',
    headerTitleContainerStyle: {
      paddingLeft: 20
    }
  }

  renderConcernList({item}) {
    return (
      <TouchableOpacity style={styles.listContainer} onPress={() => this.props.navigation.navigate('Detail',{title: item.title})}>
        <View style={{backgroundColor: item.color,...styles.icon}}>
          <Ionicons name={item.icon} color="#fff" size={25}/>
        </View>
        <Text style={styles.font}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  renderCritical({item}) {
    return (
      <TouchableOpacity style={styles.criticalItem} onPress={() => this.skipPos(item)}>
        <Text style={{fontSize: 14,color: '#333'}}>{item}</Text>
      </TouchableOpacity>
    )
  }

  skipPos(item) {
    let sectionIndex = 0;
    this.state.sections.forEach((elem,index) => {
      if (item === elem.title) {
        sectionIndex = index;
      }
    })
    this.position.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: sectionIndex,
      viewOffset: 56,
      viewPosition: 0
    })
  }

  _getItemLayout(data, index) {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index + 56,
      index
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <SectionList
          ref={this.position}
          renderItem={this.renderConcernList.bind(this)}
          renderSectionHeader={({section: {title}}) => (
            <View style={{backgroundColor: '#ccc',paddingLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
            </View>
          )}
          sections={this.state.sections}
          keyExtractor={(item,index) => item + index}
          getItemLayout={this._getItemLayout}
          initialNumToRender={7}
        />
        <FlatList
          style={styles.critical}
          data={this.state.letterData}
          renderItem={this.renderCritical.bind(this)}
          keyExtractor={(item,index) => item + index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row'
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#fff',
    height: Util.size.height / 10
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  font: {
    fontWeight: '100',
    fontSize: 16,
    color: 'black'
  },
  critical: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20
  },
  criticalItem: {
    width: 20,
    height: Util.size.height / 27 - 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
})