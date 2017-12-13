export default{
  title: {
    text: '今日购风控拦截雷达',
    subtext: 'data from homefax',
    top: 10,
    left: 10
  },
  backgroundColor: 'rgba(32, 32, 35, 0.1)',
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,250,0.2)'
  },
  legend: {
    type: 'scroll',
    bottom: 10,
    data: (function() {
      var list = []
      for (var i = 1; i <= 28; i++) {
        list.push(i + 2000 + '')
      }
      return list
    })()
  },
  visualMap: {
    top: 'middle',
    right: 10,
    color: ['red', 'yellow'],
    calculable: true
  },
  radar: {
    indicator: [
           { text: '羊毛党', max: 400 },
           { text: '欺诈人群', max: 400 },
           { text: '失信人群', max: 400 },
           { text: '逾期用户', max: 400 },
           { text: '正常用户', max: 400 }
    ]
  },
  series: (function() {
    var series = []
    for (var i = 1; i <= 28; i++) {
      series.push({
        name: '浏览器（数据纯属虚构）',
        type: 'radar',
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              width: 1
            }
          },
          emphasis: {
            areaStyle: { color: 'rgba(0,250,0,0.3)' }
          }
        },
        data: [
          {
            value: [
              (40 - i) * 10,
              (38 - i) * 4 + 60,
              i * 5 + 10,
              i * 9,
              i * i / 2
            ],
            name: i + 2000 + ''
          }
        ]
      })
    }
    return series
  })()
}
