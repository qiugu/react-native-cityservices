import { AppRegistry } from 'react-native';
import MainView from './views/apps/App';
import { name as appName } from './app.json';
import MainMs from './views/message/MainMs';
import MyInfo from './views/mys/MyInfo';
import MySetting from './views/mys/MySetting';
import MyMaterial from './views/mys/MyMaterial';
import DetailSet from './views/mys/DetailSet';
import Camera from './views/Camera';
import MyWeb from './views/WebView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const MainNavigator = createStackNavigator({
    Home: MainView,
    Camera: Camera,
    WebView: MyWeb
})

const SetNavigator = createStackNavigator({
    setHome: MyInfo,
    setDetail: MySetting,
    setMaterial: MyMaterial,
    MaterialDetail: DetailSet
}, {
        defaultNavigationOptions: {
            headerTintColor: '#f40',
            headerBackTitle: null
        }
    })

//  离开主页以后隐藏底部tabbar
const hideTabBar = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
}

MainNavigator.navigationOptions = hideTabBar;
SetNavigator.navigationOptions = hideTabBar;
MainMs.navigationOptions = hideTabBar;

const Tabs = createBottomTabNavigator(
    {
        应用: MainNavigator,
        消息: MainMs,
        我的: SetNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '应用') {
                    iconName = `ios-${focused ? 'apps' : 'appstore'}`;
                } else if (routeName === '消息') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === '我的') {
                    iconName = `ios-contact${focused ? '' : 's'}`
                }
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            tabStyle: {
                backgroundColor: '#E6E6E6'
            }
        }
    }
)

let App = createAppContainer(Tabs);
AppRegistry.registerComponent(appName, () => App);
