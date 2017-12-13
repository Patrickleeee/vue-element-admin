<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" @click="clickChart('1')" id="radarContainer" style="transform: translate(-32.6%,-32.7%) scale(0.33)">
        </div>
        <div class="item two" @click="clickChart('2')" id="pieContainer" style="transform: translate(-32.6%,1.7%) scale(0.33)">
        </div>
        <div class="item three" @click="clickChart('3')" id="lineContainer" style="transform: translate(-32.6%,36%) scale(0.33)">
        </div>
        <div class="item four active" @click="clickChart('4')" id="mapContainer" style="transform: translate(33.5%, 0.3%) scale(0.99)">
        </div>
    </div>
  </div>
</template>
        
<script>
// import option from './data/map-options'  // 引入配置项
import map from './data/map'
import pie from './data/pie'
import bar from './data/bar'
import radar from './data/radar'
import line from './data/line'
// require('./data/china')  // 引入china.js地图文件
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/line'
// Map of China
import chinaMap from './china.json'
// registering map data
echarts.registerMap('china', chinaMap)

export default {
  name: '',
  data() {
    return {
      pie,
      bar,
      radar,
      line,
      items: []
    }
  },
  methods: {
    drawChinaMap() {
      this.items = document.querySelectorAll('.flex-container .item')
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1
      }
      // map
      var myMap = this.$echarts.init(document.getElementById('mapContainer'))
      myMap.setOption(map)

      // pie
      var myPie = this.$echarts.init(document.getElementById('pieContainer'))
      myPie.setOption(pie)

      // line
      var myLine = this.$echarts.init(document.getElementById('lineContainer'))
      myLine.setOption(line)

      // radar
      var myRadar = this.$echarts.init(document.getElementById('radarContainer'))
      myRadar.setOption(radar)
    },
    _resize() {
      this.$root.charts.forEach((myChart) => {
        myChart.resize()
      })
    },
    clickChart(clickIndex) {
      const activeItem = document.querySelector('.flex-container .active')
      const activeIndex = activeItem.dataset.order
      console.log(activeIndex)
      const clickItem = this.items[clickIndex - 1]
      if (activeIndex === clickIndex) {
        return
      }
      activeItem.classList.remove('active')
      clickItem.classList.add('active')
      this._setStyle(clickItem, activeItem)
    },
    _setStyle(el1, el2) {
      const transform1 = el1.style.transform
      const transform2 = el2.style.transform
      el1.style.transform = transform2
      el2.style.transform = transform1
    }
  },
  mounted() {
    this.drawChinaMap()
    // let dataIndex = -1
    // const pie = this.$refs.pie
    // const dataLen = pie.options.series[0].data.length
    // setInterval(() => {
    //   pie.dispatchAction({
    //     type: 'downplay',
    //     seriesIndex: 0,
    //     dataIndex
    //   })
    //   dataIndex = (dataIndex + 1) % dataLen
    //   pie.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex
    //   })
    //   // 显示 tooltip
    //   pie.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex
    //   })
    // }, 1000)
    // this.connected = true
  }
}
</script>
        
<style scoped>
.item{
  padding: 0px;
  margin: 0px;
  width: 66%;
  height: 91.5%;
  position:absolute;
  transform:scale(0.33);
  text-align: center;
  transition:all 0.8s;
  background:rgba(32, 32, 35, 0.5);
} 
/* .dashboard{
  position:absolute;
  width:100%;
  height:94.5%;
  margin:0px;
  padding:0px;
  padding-top:1%;
  background:url('../../assets/bg.jpg');
  background-size: 100% 100%;
} */
/* .flex-container.column{
  position:relative;
  height: 90%;
  width: 90%;
  overflow: hidden;
  margin:  0 auto 100px auto;
  box-sizing: content-box;
} */
.active{
  width: 66%;
  height: 94%;
  margin-left: 10px;
  line-height: 300px;     
}
</style>