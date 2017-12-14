export default{
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  title: {
    text: '今日购规则触发量',
    subtext: 'data from homefax',
    sublink: 'http://www.homefax.cn/',
    left: 'center',
    textStyle: {
      color: '#2a333d'
    }
  },
  backgroundColor: 'rgba(32, 32, 35, 0.1)',
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['准入', '授信', '交易拦截', '准入强规则', '准入中规则', '准入弱规则', '恶性规则', '非恶性规则-店铺', '非恶性规则-商户', '非恶性规则-下单风险']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
                { value: 679, name: '准入', selected: true },
                { value: 335, name: '授信' },
                { value: 1548, name: '交易拦截' }
      ]
    },
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        }
      },
      data: [
                { value: 135, name: '准入强规则' },
                { value: 310, name: '准入中规则' },
                { value: 234, name: '准入弱规则' },
                { value: 335, name: '授信' },
                { value: 1048, name: '恶性规则' },
                { value: 251, name: '非恶性规则-店铺' },
                { value: 147, name: '非恶性规则-商户' },
                { value: 102, name: '非恶性规则-下单风险' }
      ]
    }
  ]
}
