const data = [{
  'name': '玉林',
  'value': 1
},
{
  'name': '江阴',
  'value': 2
},
{
  'name': '辽阳',
  'value': 1
},
{
  'name': '长春',
  'value': 6
},
{
  'name': '东莞',
  'value': 1
},
{
  'name': '中山',
  'value': 5
},
{
  'name': '荆门',
  'value': 2
},
{
  'name': '郴州',
  'value': 2
},
{
  'name': '惠州',
  'value': 5
},
{
  'name': '葫芦岛',
  'value': 3
},
{
  'name': '潍坊',
  'value': 2
},
{
  'name': '郑州',
  'value': 7
},
{
  'name': '上海',
  'value': 9
},
{
  'name': '西安',
  'value': 8
},
{
  'name': '青岛',
  'value': 5
},
{
  'name': '茂名',
  'value': 2
},
{
  'name': '厦门',
  'value': 3
},
{
  'name': '临沂',
  'value': 8
},
{
  'name': '惠东',
  'value': 1
},
{
  'name': '南京',
  'value': 3
},
{
  'name': '海门',
  'value': 2
},
{
  'name': '广州',
  'value': 8
},
{
  'name': '洛阳',
  'value': 2
},
{
  'name': '包头',
  'value': 4
},
{
  'name': '珠海',
  'value': 1
},
{
  'name': '威海',
  'value': 3
},
{
  'name': '秦皇岛',
  'value': 2
},
{
  'name': '东莞',
  'value': 1
},
{
  'name': '增城',
  'value': 2
},
{
  'name': '杭州',
  'value': 1
},
{
  'name': '焦作',
  'value': 2
},
{
  'name': '宁波',
  'value': 1
},
{
  'name': '昆山',
  'value': 2
},
{
  'name': '合肥',
  'value': 10
},
{
  'name': '胶州',
  'value': 4
},
{
  'name': '南昌',
  'value': 6
},
{
  'name': '深圳',
  'value': 17
},
{
  'name': '东营',
  'value': 2
},
{
  'name': '济南',
  'value': 7
},
{
  'name': '海口',
  'value': 8
},
{
  'name': '汉中',
  'value': 4
},
{
  'name': '沈阳',
  'value': 5
},
{
  'name': '乌鲁木齐',
  'value': 4
},
{
  'name': '齐齐哈尔',
  'value': 1
},
{
  'name': '许昌',
  'value': 1
},
{
  'name': '苏州',
  'value': 10
},
{
  'name': '武汉',
  'value': 11
},
{
  'name': '北京',
  'value': 16
},
{
  'name': '兰州',
  'value': 4
},
{
  'name': '珠海',
  'value': 2
},
{
  'name': '开封',
  'value': 1
},
{
  'name': '大连',
  'value': 4
},
{
  'name': '重庆',
  'value': 4
},
{
  'name': '贵阳',
  'value': 3
},
{
  'name': '银川',
  'value': 5
},
{
  'name': '九江',
  'value': 3
},
{
  'name': '衢州',
  'value': 1
},
{
  'name': '日照',
  'value': 1
},
{
  'name': '枣庄',
  'value': 3
},
{
  'name': '台州',
  'value': 1
},
{
  'name': '鹤壁',
  'value': 2
},
{
  'name': '邯郸',
  'value': 4
},
{
  'name': '阜阳',
  'value': 2
},
{
  'name': '南通',
  'value': 3
},
{
  'name': '日照',
  'value': 1
},
{
  'name': '新乡',
  'value': 4
},
{
  'name': '哈尔滨',
  'value': 4
},
{
  'name': '常德',
  'value': 3
},
{
  'name': '成都',
  'value': 4
},
{
  'name': '锦州',
  'value': 2
},
{
  'name': '石家庄',
  'value': 10
},
{
  'name': '营口',
  'value': 2
},
{
  'name': '榆林',
  'value': 2
},
{
  'name': '沧州',
  'value': 3
},
{
  'name': '太原',
  'value': 2
},
{
  'name': '盘锦',
  'value': 3
},
{
  'name': '岳阳',
  'value': 3
},
{
  'name': '长沙',
  'value': 8
},
{
  'name': '呼和浩特',
  'value': 2
},
{
  'name': '萍乡',
  'value': 2
},
{
  'name': '烟台',
  'value': 2
},
{
  'name': '长乐',
  'value': 1
},
{
  'name': '十堰',
  'value': 3
},
{
  'name': '乐从',
  'value': 5
},
{
  'name': '淮北',
  'value': 1
},
{
  'name': '福州',
  'value': 6
},
{
  'name': '聊城',
  'value': 3
},
{
  'name': '衡阳',
  'value': 2
}]
const geoCoordMap = {
  '东营': [118.681045,
    37.43999],
  '齐齐哈尔': [123.924531,
    47.360082],
  '秦皇岛': [119.608614,
    39.941588],
  '阜阳': [115.820692,
    32.896045],
  '十堰': [110.8046,
    32.635498],
  '辽阳': [123.244792,
    41.274927],
  '厦门': [118.095905,
    24.485817],
  '汉中': [107.02971,
    33.072637],
  '宁波': [121.630851,
    29.865707],
  '开封': [114.314164,
    34.802756],
  '东莞': [113.758231,
    23.026994],
  '石家庄': [114.48,
    38.03],
  '贵阳': [106.636766,
    26.65331],
  '潍坊': [119.168158,
    36.713207],
  '长春': [125.330097,
    43.822402],
  '合肥': [117.233592,
    31.826705],
  '珠海': [113.583216,
    22.276393],
  '沧州': [116.848904,
    38.309946],
  '青岛': [120.388969,
    36.073179],
  '大连': [121.621331,
    38.919658],
  '威海': [122.127927,
    37.518857],
  '杭州': [120.162142,
    30.278988],
  '南昌': [115.864758,
    28.68833],
  '玉林': [110.170948,
    22.64274],
  '福州': [119.303339,
    26.080457],
  '上海': [121.480237,
    31.2363],
  '沈阳': [123.471844,
    41.683611],
  '南通': [120.900881,
    31.98643],
  '九江': [115.959851,
    29.667088],
  '衢州': [118.865666,
    28.975716],
  '武汉': [114.311831,
    30.598426],
  '日照': [119.533325,
    35.422765],
  '广州': [113.270793,
    23.135303],
  '银川': [106.238976,
    38.492391],
  '邯郸': [114.545866,
    36.631195],
  '郑州': [113.631768,
    34.753427],
  '新乡': [113.933871,
    35.308964],
  '太原': [112.555135,
    37.876812],
  '南京': [118.802962,
    32.064792],
  '盘锦': [122.076498,
    41.164663],
  '海口': [110.206424,
    20.050052],
  '济南': [117.126488,
    36.65819],
  '包头': [109.846755,
    40.663633],
  '许昌': [113.858331,
    34.042261],
  '临沂': [118.364237,
    35.110174],
  '重庆': [106.558106,
    29.56911],
  '聊城': [115.991887,
    36.462676],
  '枣庄': [117.330154,
    34.815974],
  '鹤壁': [114.303874,
    35.752667],
  '营口': [122.226413,
    40.631056],
  '哈尔滨': [126.541745,
    45.808985],
  '茂名': [110.931773,
    21.669043],
  '榆林': [109.741195,
    38.290882],
  '葫芦岛': [120.843388,
    40.71736],
  '成都': [104.07214,
    30.578832],
  '衡阳': [112.578467,
    26.899509],
  '兰州': [103.840702,
    36.067221],
  '台州': [121.427186,
    28.662336],
  '萍乡': [113.861018,
    27.628699],
  '淮北': [116.804839,
    33.961777],
  '长沙': [112.945393,
    28.234248],
  '锦州': [121.133449,
    41.101429],
  '岳阳': [113.135152,
    29.362762],
  '中山': [113.39914,
    22.524027],
  '乌鲁木齐': [87.623193,
    43.831481],
  '深圳': [114.065944,
    22.548554],
  '荆门': [112.205843,
    31.041785],
  '惠州': [114.423348,
    23.116409],
  '呼和浩特': [111.755186,
    40.848657],
  '常德': [111.704994,
    29.037716],
  '洛阳': [112.460445,
    34.624379],
  '焦作': [113.248557,
    35.221493],
  '郴州': [113.021311,
    25.776709],
  '西安': [108.946167,
    34.347652],
  '烟台': [121.454425,
    37.469868],
  '苏州': [120.591427,
    31.307026],
  '北京': [116.413624,
    39.910837]
}

// 地图数据
function convertData(data) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
// data.sort(function(a, b) {
//   return a.value - b.value
// })

// var categoryData = []
// var barData = []
// //   var maxBar = 30;
// var sum = 0
// var count = data.length
// for (var i = 0; i < data.length; i++) {
//   // categoryData.push(data[i].name)
//   // barData.push(data[i].value)
//   sum += data[i].value
// }

// function sortData(data) {
//   const res = []
//   const tmp = (data.sort((a, b) => b.value - a.value).slice(0, 6))
//   for (let a = tmp.length - 1; a > -1; a--) {
//     res.push({
//       name: tmp[a].name,
//       value: tmp[a].value
//     })
//     categoryData.push(data[a].name)
//     barData.push(data[a].value)
//   }
//   res.forEach(function(e) {
//     console.log('name:'.concat(e.name))
//     console.log('value'.concat(e.value))
//   }, this)
//   return res
// }

export default {
  // backgroundColor: '#404a59',
  backgroundColor: 'rgba(32, 32, 35, 0.1)',
  title: {// [{
    text: '经销商全国分布图',
    subtext: 'data from homefax',
    sublink: 'http://www.homefax.cn/',
    left: 'center',
    textStyle: {
      color: '#2a333d'
    }
  },
  // }, {
  //   id: 'statistic',
  //   text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
  //   right: 120,
  //   top: 40,
  //   width: 100,
  //   textStyle: {
  //     color: '#2a333d',
  //     fontSize: 16
  //   }
  // }],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    x: 'right',
    data: ['homefax'],
    textStyle: {
      color: '#fff'
    }
  },
  // toolbox: {
  //   iconStyle: {
  //     normal: {
  //       borderColor: '#fff'
  //     },
  //     emphasis: {
  //       borderColor: '#b1e4ff'
  //     }
  //   },
  //   feature: {
  //     dataZoom: {},
  //     brush: {
  //       type: ['rect', 'polygon', 'clear']
  //     },
  //     saveAsImage: {
  //       show: true
  //     }
  //   }
  // },
  // brush: {
  //   outOfBrush: {
  //     color: '#abc'
  //   },
  //   brushStyle: {
  //     borderWidth: 2,
  //     color: 'rgba(0,0,0,0.2)',
  //     borderColor: 'rgba(0,0,0,0.5)'
  //   },
  //   seriesIndex: [0, 1],
  //   throttleType: 'debounce',
  //   throttleDelay: 300,
  //   geoIndex: 0
  // },
  geo: {
    map: 'china',
    // left: '10',
    // right: '35%', // 地图位置
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true, // 缩放
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  // grid: {
  //   right: 40,
  //   top: 100,
  //   bottom: 40,
  //   width: '30%'
  // },
  // xAxis: {
  //   type: 'value',
  //   scale: true,
  //   position: 'top',
  //   boundaryGap: false,
  //   min: 0,
  //   splitLine: {
  //     show: false
  //   },
  //   axisLine: {
  //     show: false
  //   },
  //   axisTick: {
  //     show: false
  //   },
  //   axisLabel: {
  //     margin: 2,
  //     textStyle: {
  //       color: '#2a333d'
  //     }
  //   }
  // },
  // yAxis: {
  //   type: 'category',
  //   //  name: 'TOP 20',
  //   nameGap: 16,
  //   axisLine: {
  //     show: true,
  //     lineStyle: {
  //       color: '#2a333d'
  //     }
  //   },
  //   axisTick: {
  //     show: false,
  //     lineStyle: {
  //       color: '#2a333d'
  //     }
  //   },
  //   axisLabel: {
  //     interval: 0,
  //     textStyle: {
  //       color: '#2a333d'
  //     }
  //   },
  //   data: categoryData
  // },
  series: [
    {
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: val => val[2] / 1,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 10)),
      symbolSize: val => val[2] / 10,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    // }, {
    //   id: 'bar',
    //   zlevel: 2,
    //   type: 'bar',
    //   symbol: 'none',
    //   itemStyle: {
    //     normal: {
    //       color: '#ddb926'
    //     }
    //   },
    //   data: sortData(data)

    }
  ]
}
