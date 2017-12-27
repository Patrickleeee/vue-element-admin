const setAmountOption = (formatData) => {
  console.log(formatData)
  let yearData = formatData.map((item) => {
    return String(item.name)
  })
  return {
    title: {
      text: '优质经销商销售统计'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{b} <br/>{a0}: {c0} 万元<br/>{a1}: {c1} 万元"
    },
    legend: {
      data: yearData
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: formatData
  }
}
export default setAmountOption