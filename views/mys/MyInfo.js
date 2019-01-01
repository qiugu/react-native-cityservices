import React,{ Component } from 'react';
import { StyleSheet,Image,Text,TouchableHighlight,View,TouchableOpacity,Alert,Platform } from 'react-native';
import Util from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SetTitle extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showInfo: true
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow () {
    this.setState({
      showInfo: !this.state.showInfo
    })
    this.props.setHidden()
  }

  render () {
    return (
      <View style={styles.titles}>
        <TouchableOpacity style={{paddingLeft: 20}} onPress={() => this.props.navigation.push('setDetail')}>
          <Ionicons name="ios-settings" size={20} color="#fff"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 20}} onPress={this.handleShow}>
          <Ionicons name={this.state.showInfo ? 'ios-eye' : 'ios-eye-off'} size={20} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>
    )
  }
}

class BaseInfo extends Component{
  render () {
    return (
      <View style={styles.setContainer}>
        <TouchableHighlight underlayColor="#eee" style={styles.touchable} onPress={() => this.props.navigation.navigate('setMaterial')}>
          <View style={styles.baseinfo}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <Image source={this.props.person.img} style={styles.portrait}></Image>
              <View style={{paddingLeft: 20}}>
                <Text style={styles.fontPerson}>
                  {this.props.person.showInfo ? this.props.person.username : '***'}
                </Text>
                <Text style={styles.fontPerson}>
                  {this.props.person.showInfo ? this.props.person.tel : `${this.props.person.tel.slice(0,3)}****${this.props.person.tel.slice(-4)}`}
                </Text>
              </View>
            </View>
            <View>
              <Ionicons name="ios-arrow-forward" size={30} color="#fff"></Ionicons>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.social}>
          <View style={styles.socialItem}>
            <Text style={{textAlign: 'center',color: 'black'}}>{this.props.person.showInfo ? this.props.person.medical : '***'}</Text>
            <Text style={{textAlign: 'center'}}>医保查询</Text>
          </View>
          <View style={styles.socialItem}>
            <Text style={{textAlign: 'center',color: 'black'}}>{this.props.person.showInfo ? this.props.person.social + '个月' : '***'}</Text>
            <Text style={{textAlign: 'center'}}>社保累计缴纳</Text>
          </View>
          <View style={styles.socialItems}>
            <Text style={{textAlign: 'center',color: 'black'}}>{this.props.person.showInfo ? this.props.person.funds : '***'}</Text>
            <Text style={{textAlign: 'center'}}>公积金余额</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default class MyInfo extends Component{
  constructor (props) {
    super(props);
    this.state = {
      img: require('../../img/header.png'),
      username: '秋谷',
      tel: '18497900274',
      medical: '12751.36',
      social: '181',
      funds: '584474.49',
      showInfo: true
    }
    this.setHidden = this.setHidden.bind(this);
  }

  setHidden () {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  navigateTo () {
    this.props.navigation.navigate('Home')
  }

  static navigationOptions =  {
    header: null
  }

  componentDidMount () {
    this.props.navigation.setParams({showInfo: this.setHidden})
  }

  render () {
    const box = Util.menus.map((item,index) => {
      return (
        <TouchableHighlight style={styles.menuBarItem} underColor="#eee" key={item.key} onPress={() => this.props.navigation.navigate(item.component)}>
          <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Ionicons size={20} name={item.icon} style={[styles.boxIcon,{color:item.color}]}></Ionicons>
              <Text style={styles.boxText}>{item.name}</Text>
            </View>
            <Text style={{color: '#333'}}>{item.icon !== 'ios-egg' && item.icon !== 'ios-mail' || this.state.showInfo ? item.detail : '***'}</Text>
          </View>
        </TouchableHighlight>
      )
    });
    return (
      <View style={styles.container}>
        <SetTitle setHidden={this.setHidden} navigation={this.props.navigation}/>
        <BaseInfo person={this.state} navigation={this.props.navigation}/>
        <View style={styles.menubar}>
          {box}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  setContainer:{
    width: Util.size.width,
    backgroundColor: "#CC3333"
  },
  titles: {
    width: Util.size.width,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: '#CC3333',
    height: Platform.OS === 'ios' ? 55 : 40,
    paddingTop: Platform.OS === 'ios' ? 35 : 15,
    alignItems: 'center'
  },
  touchable: {
    justifyContent: 'space-between',
    height: 100
  },
  fontPerson: {
    color: '#fff',
    fontWeight: '100'
  },
  baseinfo: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  portrait: {
    borderRadius: Platform.OS === 'ios' ? 25 :35,
    width: 50,
    height: 50
  },
  social: {
    width: Util.size.width,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  socialItems: {
    flex: 1
  },
  socialItem: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'black'
  },
  menubar: {
    marginTop: 20,
    width: Util.size.width, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  menuBarItem: {
    alignItems:"flex-start",
    justifyContent:"center",
    width: Util.size.width/2 - (Util.pixel * 3),
    height: 90,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor:"#f2f2f2",
    borderLeftWidth: 1,
    borderLeftColor:"#f2f2f2",
    borderRightWidth: 1,
    borderRightColor:"#f2f2f2",
    borderBottomWidth: 1,
    borderBottomColor:"#f2f2f2",
  },
  boxIcon: {
    paddingRight: 10
  },
  boxText: {
    color: 'black'
  }
});