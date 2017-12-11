<template>          
    <div>
        <div id="mapContainer" ref="test1" :style="{width:'600px', height:'600px'}"></div>
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
    }
  },
  methods: {
    initMap() {
      const self = this
      setTimeout(() => {
        window.onresize = function() {
          self.$refs.drawChinaMap.resize()
        }
      }, 20)
    },
    drawChinaMap() {
      var myChart = this.$echarts.init(document.getElementById('mapContainer'))
      myChart.setOption(map)
    }
  },
  mounted() {
    this.drawChinaMap()
    this.initMap()
  }
}
</script>
        
<style scoped>
       
</style>