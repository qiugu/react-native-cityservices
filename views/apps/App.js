import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableHighlight, FlatList, SectionList, RefreshControl} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Util from '../utils';
import SearchTitle from './SearchTitle';
import Swiper from 'react-native-swiper';

class RowMenu extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.menuBarItem} underColor="#eee" key={this.props.row.key}>
        <View style={{flex: 1}}>
          <Ionicons size={this.props.row.size} name={this.props.row.icon} style={[styles.boxIcon,{color:this.props.row.color}]}></Ionicons>
          <Text style={styles.boxText}>{this.props.row.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default class MainView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      refreshing: false,
      strategySource: require('../../img/header.png'),
      strategyTitle: '达令说办事',
      strategyContent: '芜湖热门办事项攻略在此',
      days: Util.days,
      swipers: [
        {source: require('../../img/day1.jpg'),text: 'image 1'},
        {source: require('../../img/day2.jpg'),text: 'image 2'},
        {source: require('../../img/www.jpg'),text: 'image 3'},
        {source: require('../../img/location.jpg'),text: 'image 4'}
      ],
      topMenu: Util.topMenu,
      news: [
        {title: '回答问卷抢宫崎骏音乐会门票'},
        {title: '爱心接力|芜湖蓝天救援队寻人启事'},
        {title: '全民社管 杰出爆料（12/21）'},
        {title: '【城市服务】关爱老人“黄手环”发放活动预告（12/23）'},
        {title: '城市线上办理“一卡通”免邮寄到家'}
      ],
      activity: [
        {title: '小确幸',des: '周边温泉福利',source: require('../../img/day1.jpg')},
        {title: '特价85',des: '方特梦幻跨年夜',source: require('../../img/day2.jpg')}
      ]
    };
    this.renderSwiper = this.renderSwiper.bind(this);
    this.renderSwiperNews = this.renderSwiperNews.bind(this);
    this.onScrollHandle = this.onScrollHandle.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    //  根据获取的路由参数来决定是否显示背景色，以及背景色的透明度
    return {
      headerTitle: SearchTitle,
      headerBackgroundTransitionPreset: 'fade',
      headerTransparent: !!navigation.getParam('distance') && navigation.getParam('distance') > 0 ? false : true,
      headerStyle: {
        backgroundColor: `rgba(193,0,0,${navigation.getParam('distance') / 115 || 0 })`
      }
    }
  }

  onScrollHandle(e) {
    let distance = e.nativeEvent.contentOffset.y;
    if (distance > 0) {
      this.props.navigation.setParams({distance})
    } else {
      this.props.navigation.setParams({distance: 0})
    }
  }

  renderSwiper() {
    return this.state.swipers.map((item, index) => {
      return (
        <View style={styles.slides} key={index}>
          <Image style={styles.img} source={item.source} resizeMode="cover"/>
          {/* <Text style={styles.slideText}>{item.text}</Text> */}
        </View>
      )
    })
  }

  renderSwiperNews() {
    return this.state.news.map((item, index) => {
      return (
        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start',flex: 1}} key={index}>
          <Entypo name="dot-single" size={25} color="red"/>
          <Text style={{color: 'black',width: Util.size.width - 180}} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
        </View>
      )
    })
  }

  renderTopMenu({item}) {
    return (
      <TouchableHighlight>
        <View style={styles.topContainer}>
          <Image source={item.path} style={styles.topImage}  resizeMode="contain"/>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{item.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  renderMenuList({item}) {
    return (
      <View style={styles.listMenu}>
        {this.state.days[item].data.map((val,index) => {
          return (
            <RowMenu key={index} row={val}/>
          )
        })}
      </View>
    )
  }

  _onRefresh() {

  }

  render () {
    let tempArr = JSON.parse(JSON.stringify(this.state.days));
    let box = tempArr.map((item,index) => {
      item.data = [],
      item.data.push(index)
      return item
    });
    return (
      <ScrollView 
        style={styles.scrollContainer} 
        onScroll={this.onScrollHandle}
        scrollEventThrottle = {200}
        refreshControl={
          <RefreshControl
            // 是否刷新
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            progressBackgroundColor="#ff6600"
            tintColor="#ff6600"
            title="拼命加载中..."
          />
        }
      >
        <Swiper 
          height={200} 
          autoplay={true} 
          activeDotStyle={styles.activeDotStyle} 
          paginationStyle={{left:'auto',right: 20,bottom: 20,top:'auto'}} 
          dotStyle={styles.inactiveDot}>
          {this.renderSwiper()}
        </Swiper>
        <View style={{backgroundColor: '#fff'}}>
          <FlatList
            style={{borderWidth: Util.pixel,borderColor: '#ccc'}}
            horizontal={true}
            data={this.state.topMenu}
            showsHorizontalScrollIndicator = {false}
            renderItem={this.renderTopMenu.bind(this)}
            keyExtractor={(item,index) => item + index}
          />
          <View style={styles.news}>
            <View style={{borderRightWidth: 1,borderRightColor: '#ccc'}}>
              <Image source={require('../../img/fonts.jpg')} style={styles.fontImg}/>
            </View>
            <Swiper
              horizontal={false}
              autoplayTimeout={4} 
              height={100} 
              autoplay={true} 
              showsPagination={false}>
              {this.renderSwiperNews()}
            </Swiper>
          </View>
        </View>
        <View style={styles.activity}>
          {this.state.activity.map((item, index) => {
            return (
              <View style={styles.activityItem} key={index}>
                <View>
                  <Text style={{color: 'red',fontSize: 16}}>{item.title}</Text>
                  <Text style={{fontSize: 10,color: '#c0c0c0'}}>{item.des}</Text>
                </View>
                <Image source={item.source} resizeMode="cover" style={{borderRadius: 30,width: 50,height: 50}}/>
              </View>
            )
          })}
        </View>
        <View style={styles.activity}>
          <View style={styles.strategyItem}>
            <Image source={this.state.strategySource} resizeMode="stretch" style={{width: 100,height: 50}}/>
          </View>
          <View style={styles.strategyItem}>
            <Text style={{color: 'red',fontSize: 16}}>{this.state.strategyTitle}</Text>
            <Text style={{fontSize: 10,color: '#c0c0c0'}}>{this.state.strategyContent}</Text>
          </View>
        </View>
        <SectionList
          style={{marginTop: 15}}
          renderItem={this.renderMenuList.bind(this)}
          renderSectionHeader={({section}) => (
            <View style={{backgroundColor: '#fff',padding: 20}}>
              <Text style={{fontWeight: 'bold',color: 'black'}}>{section.title}</Text>
            </View>
          )}
          sections={box}
          keyExtractor={(item,index) => item + index}
        />
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  scrollContainer: {
    // marginTop: 55
    backgroundColor: '#f2f2f2'
  },
  menuBarItem: {
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width / 4,
    height: 80
  },
  boxText: {
    textAlign:"center",
    fontSize: 12,
    color: 'black'
  },
  boxIcon: {
    fontSize: 40,
    textAlign: 'center'
  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: Util.size.width,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'stretch'
  },
  slideText: {
    position: "absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  activeDotStyle: {
    backgroundColor: 'red'
  },
  inactiveDot: {
    backgroundColor: '#808080'
  },
  topContainer: {
    width: Util.size.width / 4,
    height: Util.size.width / 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topImage: {
    flex: 1
  },
  fontImg: {
    width: 130,
    height: 38,
    resizeMode: 'contain'
  },
  news: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  activity: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 15
  },
  activityItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: Util.pixel,
    borderRightWidth: Util.pixel,
    borderLeftColor: '#ccc',
    borderRightColor: '#ccc',
    padding: 15
  },
  strategyItem: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15
  },
  listMenu: {
    flex: 1,
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginBottom: 15
  }
})
