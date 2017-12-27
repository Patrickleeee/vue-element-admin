// 地图数据
// function convertData(data) {
//   const res = []
//   for (let i = 0; i < data.length; i++) {
//     const geoCoord = geoCoordMap[data[i].name]
//     if (geoCoord) {
//       res.push({
//         name: data[i].name,
//         value: geoCoord.concat(data[i].value)
//       })
//     }
//   }
//   return res
// }

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

const setMapOption = (formatData) => {
  return {
    // backgroundColor: '#404a59',
    backgroundColor: 'rgba(32, 32, 35, 0.1)',
    title: { // [{
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
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        //x轴名称  
        var name = params.name
        //图表title名称  
        var seriesName = params.seriesName
        //值  
        var value = params.value
        return name + '<br />' + seriesName + '：' + value[2]
      }
    },
    legend: {
      orient: 'vertical',
      y: 'top',
      x: 'left',
      data: ['all', 'Top 1-10', 'Top 11-20', 'Top 21-30'],
      textStyle: {
        color: '#2a333d'
      },
      shadowColor: {
        show: false
      },
      selectedMode: 'single'
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
        name: 'Top 1-10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: formatData.length >= 10 ? formatData.slice(0, 10) : formatData,
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

      },
      {
        name: 'Top 11-20',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: formatData.length >= 10 ? formatData.slice(10, 20) : formatData,
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
        }
      },
      {
        name: 'Top 21-30',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: formatData.length >= 10 ? formatData.slice(20, 30) : formatData,
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
        }
      },
      {
        name: 'all',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: formatData,
        symbolSize: val => val[2] / 1,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
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
      }
    ]
  }
}
export default setMapOption