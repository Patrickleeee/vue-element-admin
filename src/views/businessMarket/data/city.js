const setCityOption = (cityData, seriesData) => {
  return {
    title: {
      text: '2017年1-11月全国年定货60万以上经销商-城市排名Top10',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['门店数量', '红星门店数量'],
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '60',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      position: 'top'
    },
    yAxis: {
      type: 'category',
      data: cityData,
      axisLabel: {
        interval: 0
      }
    },
    series: seriesData
  };
}
export default setCityOption