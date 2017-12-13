
var data = [['2017-11-05', 116], ['2017-11-11', 129], ['2017-11-12', 135], ['2017-11-08', 86], ['2017-11-09', 73], ['2017-11-10', 85], ['2017-11-11', 73], ['2017-11-12', 68], ['2017-11-13', 92], ['2017-11-14', 130], ['2017-11-15', 245], ['2017-11-16', 139], ['2017-11-17', 115], ['2017-11-18', 111], ['2017-11-19', 309], ['2017-11-20', 211], ['2017-11-21', 137], ['2017-11-22', 128], ['2017-11-23', 85], ['2017-11-24', 94], ['2017-11-25', 71], ['2017-11-26', 111], ['2017-11-27', 84], ['2017-11-28', 93], ['2017-11-29', 85], ['2017-11-30', 73], ['2017-12-01', 83], ['2017-12-02', 125], ['2017-12-03', 112], ['2017-12-04', 82], ['2017-12-05', 44], ['2017-12-11', 72], ['2017-12-12', 111], ['2017-12-08', 112], ['2017-12-09', 66], ['2017-12-10', 91], ['2017-12-11', 92], ['2017-12-12', 113], ['2017-12-13', 112], ['2017-12-14', 131], ['2017-12-15', 111], ['2017-12-16', 64], ['2017-12-17', 69], ['2017-12-18', 88], ['2017-12-19', 77], ['2017-12-20', 83], ['2017-12-21', 111], ['2017-12-22', 57], ['2017-12-23', 55], ['2017-12-24', 60]]

var dateList = data.map(function(item) {
  return item[0]
})
var valueList = data.map(function(item) {
  return item[1]
})

export default{

    // Make gradient line here
  visualMap: [{
    show: false,
    type: 'continuous',
    seriesIndex: 0,
    min: 0,
    max: 400
  }, {
    show: false,
    type: 'continuous',
    seriesIndex: 1,
    dimension: 0,
    min: 0,
    max: dateList.length - 1
  }],
  backgroundColor: 'rgba(32, 32, 35, 0.1)',
  title: [{
    left: 'center',
    text: 'app日均下载量'
  }, {
    top: '55%',
    left: 'center',
    text: 'app日均用户量'
  }],
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [{
    data: dateList
  }, {
    data: dateList,
    gridIndex: 1
  }],
  yAxis: [{
    splitLine: { show: false }
  }, {
    splitLine: { show: false },
    gridIndex: 1
  }],
  grid: [{
    bottom: '60%'
  }, {
    top: '60%'
  }],
  series: [{
    type: 'line',
    showSymbol: false,
    data: valueList
  }, {
    type: 'line',
    showSymbol: false,
    data: valueList,
    xAxisIndex: 1,
    yAxisIndex: 1
  }]
}
