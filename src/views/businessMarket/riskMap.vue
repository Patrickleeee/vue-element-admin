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
import setMapOption from "./data/map";
import pie from "./data/pie";
import bar from "./data/bar";
import radar from "./data/radar";
import setAmountOption from "./data/line";
// require('./data/china')  // 引入china.js地图文件
import echarts from "echarts/lib/echarts";
// import "echarts/lib/chart/map";
// import "echarts/lib/chart/pie";
// import "echarts/lib/chart/bar";
// import "echarts/lib/chart/radar";
// Map of China
import chinaMap from "./china.json";
// registering map data
echarts.registerMap("china", chinaMap);

import { getDealer, getMonthAmount } from "@/api/login";

export default {
  name: "",
  data() {
    return {
      pie,
      bar,
      radar,
      items: [],
      dealerData: [],
      mapData: {}
    };
  },
  methods: {
    drawChinaMap(formatData) {
      this.items = document.querySelectorAll(".flex-container .item");
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
      // map
      var myMap = this.$echarts.init(document.getElementById("mapContainer"));
      let thisMap = setMapOption(formatData);
      myMap.setOption(thisMap);

      // pie
      var myPie = this.$echarts.init(document.getElementById("pieContainer"));
      myPie.setOption(pie);

      // radar
      var myRadar = this.$echarts.init(
        document.getElementById("radarContainer")
      );
      myRadar.setOption(radar);
    },
    drawAmountLine(formatData) {
      var myLine = this.$echarts.init(document.getElementById("lineContainer"));
      let amountLine = setAmountOption(formatData);
      myLine.setOption(amountLine);
    },
    _resize() {
      this.$root.charts.forEach(myChart => {
        myChart.resize();
      });
    },
    clickChart(clickIndex) {
      const activeItem = document.querySelector(".flex-container .active");
      const activeIndex = activeItem.dataset.order;
      console.log("当前chart索引", activeIndex);
      const clickItem = this.items[clickIndex - 1];
      if (activeIndex === clickIndex) {
        return;
      }
      activeItem.classList.remove("active");
      clickItem.classList.add("active");
      this._setStyle(clickItem, activeItem);
    },
    _setStyle(el1, el2) {
      const transform1 = el1.style.transform;
      const transform2 = el2.style.transform;
      el1.style.transform = transform2;
      el2.style.transform = transform1;
    },
    /**
     * 地图数据格式化
     * @augments {} data
     * @augments {} map
     */
    formatMapData(data, map) {
      return data.map(item => {
        return {
          name: item.name,
          value: map[item.name] ? map[item.name].concat(item.value) : []
        };
      });
    },
    initData() {
      var that = this;
    }
  },
  created() {
    this.initData();
  },
  mounted() {
    new Promise((resolve, reject) => {
      getMonthAmount()
        .then(res => {
          const formatData = res.data.data.map(item => {
            return {
              "name": String(item.year),
              "type": "line",
              "data": item.amount
            };
          });
          this.drawAmountLine(formatData);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });

    new Promise((resolve, reject) => {
      getDealer()
        .then(response => {
          this.dealerData = response.data.data.datas;
          console.log("dealerData", this.dealerData);
          this.mapData = response.data.data.map;
          console.log("mapData", this.mapData);
          var formatData = this.formatMapData(this.dealerData, this.mapData);
          console.log("格式化数据", formatData);
          this.drawChinaMap(formatData);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
</script>
        
<style scoped>
.item {
  padding: 0px;
  margin: 0px;
  width: 66%;
  height: 91.5%;
  position: absolute;
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
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
.active {
  width: 66%;
  height: 94%;
  margin-left: 10px;
  line-height: 300px;
}
</style>