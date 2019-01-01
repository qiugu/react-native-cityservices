import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  post (url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(url, fetchOptions)
    .then(res => {
      return res.json()
    })
    .then(res => {
      callback(res)
    })
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
  days: [
    {
      title: '热门推荐',
      data: [
        {
          key:0,
          title:"居民医保缴费",
          component: 'indicator',
          isFA: true,
          icon: "ios-stopwatch",
          size: 30,
          color: "#ff856c",
          hideNav: false,
        },
        {
          key:1,
          title:"核发居住证",
          component: 'Camera',
          isFA: true,
          icon: "ios-camera",
          size: 30,
          color:"#90bdc1",
          hideNav: true,
        },
        {
          key:2,
          title:"实时公交",
          component: 'Menu',
          isFA: true,
          icon: "ios-bus",
          size:30,
          color:"#2aa2ef",
          hideNav: true,
        },
        {
          key:3,
          title:"违章缴费",
          component: 'WebView',
          isFA: true,
          icon: "ios-switch",
          size:30,
          color:"#FF9A05",
          hideNav: false,
        }
      ]
    },
    {
      title: '全民社管',
      data: [
        {
          key:4,
          title:"我要爆料",
          component: 'Day5',
          isFA: true,
          icon: "ios-videocam",
          size:30,
          color:"#00D204",
          hideNav: false,
        },
        {
          key:5,
          title:"我要核查",
          component: 'Day6',
          isFA: true,
          icon: "ios-construct",
          size:30,
          color:"#777",
          hideNav: true,
        },
        {
          key:6,
          title:"爆料攻略",
          component: 'Day7',
          isFA: true,
          icon: "ios-baseball",
          size:30,
          color:"#5e2a06",
          hideNav: true,
        },
        {
          key:7,
          title:"核查攻略",
          component: 'Day8',
          isFA: true,
          icon: "ios-cloudy",
          size:30,
          color:"#4285f4",
          hideNav: true,
        }
      ]
    },
    {
      title: '交通服务',
      data: [
        {
          key:8,
          title:"我要挪车",
          component: 'Day9',
          isFA: true,
          icon: "ios-nutrition",
          size:30,
          color:"#2aa2ef",
          hideNav: true,
        },
        {
          key:9,
          title:"违章查询",
          component: 'Day10',
          isFA: true,
          icon: "ios-train",
          size:30,
          color:"#37465c",
          hideNav: true,
        },
        {
          key:10,
          title:"违章缴费",
          component: 'Day11',
          isFA: false,
          icon: "ios-partly-sunny",
          size:30,
          color:"#2F3600",
          hideNav: false,
        },
        {
          key:11,
          title:"实时公交",
          component: 'Day12',
          isFA: false,
          icon: "ios-stats",
          size:30,
          color:"#fd8f9d",
          hideNav: false,
        },
        {
          key:12,
          title:"绿色自行车",
          component: 'Day13',
          isFA: false,
          icon: "ios-bicycle",
          size:30,
          color:"#83709d",
          hideNav: true,
        },
        {
          key:13,
          title:"绿色通道",
          component: 'Day14',
          isFA: true,
          icon: "ios-call",
          size:30,
          color:"#ff6b6b",
          hideNav: true,
        },
        {
          key:14,
          title:"公厕导航",
          component: 'Day15',
          isFA: false,
          icon: "ios-planet",
          size:30,
          color:"#ec240e",
          hideNav: false,
        }
      ]
    },
    {
      title: '文体休闲',
      data: [
        {
          key:15,
          title:"文化演出",
          component: 'Day16',
          isFA: false,
          icon: "ios-unlock",
          size:30,
          color:"#32A69B",
          hideNav: true,
        },
        {
          key:16,
          title:"体育运动",
          component: 'Day17',
          isFA: false,
          icon: "ios-cash",
          size:30,
          color:"#69B32A",
          hideNav: false,
        },
        {
          key:17,
          title:"周边休闲",
          component: 'Day18',
          isFA: false,
          icon: "ios-cafe",
          size:30,
          color:"#68231A",
          hideNav: true,
        }
      ]
    },
    {
      title: '健康医疗',
      data: [
        {
          key:18,
          title:"智慧医院",
          component: 'Day19',
          isFA: false,
          icon: "ios-log-in",
          size:30,
          color:"#fdbded",
          hideNav: true,
        },
        {
          key:19,
          title:"预约挂号",
          component: 'Day20',
          isFA: false,
          icon: "ios-school",
          size:30,
          color:"#68d746",
          hideNav: true,
        },
        {
          key:20,
          title:"预约体检",
          component: 'Day21',
          isFA: false,
          icon: "ios-umbrella",
          size:30,
          color:"#fe952b",
          hideNav: true,
        },
        {
          key:21,
          title:"预约疫苗",
          component: 'Day22',
          isFA: false,
          icon: "ios-videocam",
          size:30,
          color:"#4285f4",
          hideNav: true,
        }
      ]
    },
    {
      title: '城市服务',
      data: [
        {
          key:22,
          title:"智慧社区",
          component: 'Day23',
          isFA: true,
          icon: "ios-business",
          size:30,
          color:"#23bfe7",
          hideNav: false,
        },
        {
          key:23,
          title:"城市卡付款码",
          component: 'Day24',
          isFA: false,
          icon: "ios-happy",
          size:30,
          color:"#e32524",
          hideNav: true,
        },
        {
          key:24,
          title:"水电气缴费",
          component: 'Day25',
          isFA: false,
          icon: "ios-globe",
          size:30,
          color:"#00ab6b",
          hideNav: true,
        },
        {
          key:25,
          title:"重名查询",
          component: 'Day26',
          isFA: false,
          icon: "ios-mail-open",
          size:30,
          color:"#893D54",
          hideNav: true,
        },
        {
          key:26,
          title:"场馆认证",
          component: 'Day27',
          isFA: false,
          icon: "ios-chatbubbles",
          size:30,
          color:"#248ef5",
          hideNav: false,
        },
        {
          key:27,
          title:"城市黄页",
          component: 'Day28',
          isFA: false,
          icon: "ios-person",
          size:30,
          color:"#f5248e",
          hideNav: true,
        },
        {
          key:28,
          title:"城市令WiFi",
          component: 'Day29',
          isFA: false,
          icon: "ios-wifi",
          size:30,
          color:"#48f52e",
          hideNav: false,
        },
        {
          key:29,
          title:"爱心公益",
          component: 'Day30',
          isFA: false,
          icon: "ios-paper-plane",
          size:30,
          color:"#f27405",
          hideNav: false,
        },
        {
          key:30,
          title:"便民服务查询",
          component: 'Day11',
          isFA: false,
          icon: "ios-partly-sunny",
          size:30,
          color:"#2F3600",
          hideNav: false,
        },
        {
          key:31,
          title:"教育报名",
          component: 'Day12',
          isFA: false,
          icon: "ios-stats",
          size:30,
          color:"#fd8f9d",
          hideNav: false,
        },
        {
          key:32,
          title:"农村信用",
          component: 'Day13',
          isFA: false,
          icon: "ios-outlet",
          size:30,
          color:"#83709d",
          hideNav: true,
        },
      ]
    },
    {
      title: '企业服务',
      data: [
        {
          key:33,
          title:"智慧园区",
          component: 'Day16',
          isFA: false,
          icon: "ios-unlock",
          size:30,
          color:"#32A69B",
          hideNav: true,
        },
        {
          key:34,
          title:"创业创新",
          component: 'Day17',
          isFA: false,
          icon: "ios-cash",
          size:30,
          color:"#69B32A",
          hideNav: false,
        },
        {
          key:35,
          title:"四送一服",
          component: 'Day18',
          isFA: false,
          icon: "ios-cafe",
          size:30,
          color:"#68231A",
          hideNav: true,
        }
      ]
    }
  ],
  menus: [
    {
      key: 0,
      icon: 'ios-egg',
      name: '乐惠分',
      detail: '分数：901',
      color: '#f27405',
      component: ''
    },
    {
      key: 1,
      icon: 'ios-list-box',
      name: '办事记录',
      detail: '您还没有申请政府办事项',
      color: '#48f52e',
      component: ''
    },
    {
      key: 2,
      icon: 'ios-card',
      name: '电子证照柜',
      detail: '立即查看',
      color: '#f5248e',
      component: ''
    },
    {
      key: 3,
      icon: 'ios-mail',
      name: '违章记分',
      detail: '您还没有驾照数据',
      color: '#f5248e',
      component: ''
    },
    {
      key: 4,
      icon: 'ios-archive',
      name: '城市卡钱包',
      detail: '立即查看',
      color: '#893D54',
      component: ''
    },
    {
      key: 5,
      icon: 'ios-pricetag',
      name: '优惠券',
      detail: '立即查看',
      color: '#e32524',
      component: ''
    },
    {
      key: 6,
      icon: 'ios-walk',
      name: '生物特征采集',
      detail: '服务由市公安局提供',
      color: '#68d746',
      component: ''
    }
  ],
  notice: [
    {
      key: 0,
      time: '2018-11-15 19:00:41',
      title: '系统通知',
      keywords: '系统通知',
      content: '您与11月15日在城市令申请的个人实名认证已通过，请重新登录城市令，更新您的实名认证状态。省心省心的惠民服务，新潮好玩的生活方式尽在城市令。'
    },
    {
      key: 1,
      time: '2099-12-01 18:13:55',
      keywords: '账单通知',
      title: '公积金账户变动通知',
      content: '收支明细：20000\n账户：秋谷\n变动时间：2018/10/01\n业务类型：汇缴'
    }
  ],
  services: [
    {
      key: 0,
      icon: 'ios-card',
      title: '账单通知',
      content: '[更新1条]公积金账户变动通知',
      date: '11-31',
      color: '#00CC99'
    },
    {
      key: 1,
      icon: 'ios-chatbubbles',
      title: '系统通知',
      content: '系统通知',
      date: '11-15',
      color: '#f5248e'
    }
  ],
  topMenu: [
    {
      path: require('../img/tumblr-audio.png'),
      text: '办事大厅'
    },
    {
      path: require('../img/tumblr-chat.png'),
      text: '汽车服务'
    },
    {
      path: require('../img/tumblr-link.png'),
      text: '便民查询'
    },
    {
      path: require('../img/tumblr-photo.png'),
      text: '服务窗'
    }    
  ]
}

export default Util
