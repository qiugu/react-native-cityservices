import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import Util from '../utils';
import MsNotice from './MsNotice';
import NoticeDetail from './NoticeDetail';
import ServiceWindow from './ServiceWindow';
import Attention from './Attention';
import Camera from '../Camera';
import NavTitle from './NavTitle';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class MainMs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [],
      loaded: false
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={6}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({ item }) {
    return (
      <View style={styles.listContainer}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingLeft: 20
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:  20
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "left",
    color: 'black'
  },
  year: {
    textAlign: "left"
  },
  thumbnail: {
    width: 81,
    height: 53
  },
  list: {
    backgroundColor: "#F5FCFF"
  }
})

const MesNavigator = createMaterialTopTabNavigator({
  '服务窗': ServiceWindow,
  '消息通知': MsNotice,
  '新闻快讯': MainMs
}, {
    initialRouteName: '新闻快讯',
    // tabBarComponent: NavTitle,
    tabBarOptions: {
      activeTintColor: '#f40',
      inactiveTintColor: '#333',
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      tabStyle: {
        width: Util.size.width / 4
      },
      labelStyle: {
        fontWeight: '100',
        fontSize: 13
      }
    }
  })

const MsNavigator = createStackNavigator({
  MainMs: MesNavigator,
  Camera: Camera,
  Detail: NoticeDetail,
  List: Attention
}, {
    defaultNavigationOptions: {
      headerTitle: NavTitle,
      headerTintColor: 'red',
      headerBackTitle: null,
      headerStyle: {
        width: Util.size.width,
        height: 40
      }
    }
  })

export default createAppContainer(MsNavigator)
