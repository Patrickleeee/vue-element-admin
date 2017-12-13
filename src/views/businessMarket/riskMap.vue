<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" @click="clickChart('1')" id="mapContainer" style="transform: translate(-32.6%,-32.7%) scale(0.33)">
        </div>
        <div class="item two" @click="clickChart('2')" id="mapContainer1" style="transform: translate(-32.6%,1.7%) scale(0.33)">
        </div>
        <div class="item three" @click="clickChart('3')" id="mapContainer2" style="transform: translate(-32.6%,36%) scale(0.33)">
        </div>
        <div class="item four active" @click="clickChart('4')" id="mapContainer3" style="transform: translate(33.5%, 0.3%) scale(0.99)">
        </div>
    </div>
  </div>
</template>
        
<script>
// import option from './data/map-options'  // 引入配置项
import map from './data/map'
// require('./data/china')  // 引入china.js地图文件
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
// Map of China
import chinaMap from './china.json'
// registering map data
echarts.registerMap('china', chinaMap)

export default {
  name: '',
  data() {
    return {
      items: []
    }
  },
  methods: {
    // initMap() {
    //   const self = this
    //   setTimeout(() => {
    //     window.onresize = function() {
    //       self.$refs.test1.resize()
    //     }
    //   }, 20)
    // },
    drawChinaMap() {
      this.items = document.querySelectorAll('.flex-container .item')
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1
      }
      var myChart = this.$echarts.init(document.getElementById('mapContainer'))
      myChart.setOption(map)
      var myChart1 = this.$echarts.init(document.getElementById('mapContainer1'))
      myChart1.setOption(map)
      var myChart2 = this.$echarts.init(document.getElementById('mapContainer2'))
      myChart2.setOption(map)
      var myChart3 = this.$echarts.init(document.getElementById('mapContainer3'))
      myChart3.setOption(map)
    },
    _resize() {
      this.$root.charts.forEach((myChart) => {
        myChart.resize()
      })
    },
    // _init() {
    //   this.items = document.querySelectorAll('.flex-container .item')
    //   for (let i = 0; i < this.items.length; i++) {
    //     this.items[i].dataset.order = i + 1
    //   }
    // },
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
    // this.initMap()
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
  position:relative;
  width:100%;
  height:100%;
  margin:0px;
  padding:0px;
  padding-top:5%;
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