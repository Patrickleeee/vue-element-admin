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
import line from "./data/line";
// require('./data/china')  // 引入china.js地图文件
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/map";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/line";
// Map of China
import chinaMap from "./china.json";
// registering map data
echarts.registerMap("china", chinaMap);

export default {
  name: "",
  data() {
    return {
      pie,
      bar,
      radar,
      line,
      items: [],
      dealerData: [
        {
          name: "玉林",
          value: 1
        },
        {
          name: "江阴",
          value: 2
        },
        {
          name: "辽阳",
          value: 1
        },
        {
          name: "长春",
          value: 6
        },
        {
          name: "东莞",
          value: 1
        },
        {
          name: "中山",
          value: 5
        },
        {
          name: "荆门",
          value: 2
        },
        {
          name: "郴州",
          value: 2
        },
        {
          name: "惠州",
          value: 5
        },
        {
          name: "葫芦岛",
          value: 3
        },
        {
          name: "潍坊",
          value: 2
        },
        {
          name: "郑州",
          value: 7
        },
        {
          name: "上海",
          value: 9
        },
        {
          name: "西安",
          value: 8
        },
        {
          name: "青岛",
          value: 5
        },
        {
          name: "茂名",
          value: 2
        },
        {
          name: "厦门",
          value: 3
        },
        {
          name: "临沂",
          value: 8
        },
        {
          name: "惠东",
          value: 1
        },
        {
          name: "南京",
          value: 3
        },
        {
          name: "海门",
          value: 2
        },
        {
          name: "广州",
          value: 8
        },
        {
          name: "洛阳",
          value: 2
        },
        {
          name: "包头",
          value: 4
        },
        {
          name: "珠海",
          value: 1
        },
        {
          name: "威海",
          value: 3
        },
        {
          name: "秦皇岛",
          value: 2
        },
        {
          name: "东莞",
          value: 1
        },
        {
          name: "增城",
          value: 2
        },
        {
          name: "杭州",
          value: 1
        },
        {
          name: "焦作",
          value: 2
        },
        {
          name: "宁波",
          value: 1
        },
        {
          name: "昆山",
          value: 2
        },
        {
          name: "合肥",
          value: 10
        },
        {
          name: "胶州",
          value: 4
        },
        {
          name: "南昌",
          value: 6
        },
        {
          name: "深圳",
          value: 17
        },
        {
          name: "东营",
          value: 2
        },
        {
          name: "济南",
          value: 7
        },
        {
          name: "海口",
          value: 8
        },
        {
          name: "汉中",
          value: 4
        },
        {
          name: "沈阳",
          value: 5
        },
        {
          name: "乌鲁木齐",
          value: 4
        },
        {
          name: "齐齐哈尔",
          value: 1
        },
        {
          name: "许昌",
          value: 1
        },
        {
          name: "苏州",
          value: 10
        },
        {
          name: "武汉",
          value: 11
        },
        {
          name: "北京",
          value: 16
        },
        {
          name: "兰州",
          value: 4
        },
        {
          name: "珠海",
          value: 2
        },
        {
          name: "开封",
          value: 1
        },
        {
          name: "大连",
          value: 4
        },
        {
          name: "重庆",
          value: 4
        },
        {
          name: "贵阳",
          value: 3
        },
        {
          name: "银川",
          value: 5
        },
        {
          name: "九江",
          value: 3
        },
        {
          name: "衢州",
          value: 1
        },
        {
          name: "日照",
          value: 1
        },
        {
          name: "枣庄",
          value: 3
        },
        {
          name: "台州",
          value: 1
        },
        {
          name: "鹤壁",
          value: 2
        },
        {
          name: "邯郸",
          value: 4
        },
        {
          name: "阜阳",
          value: 2
        },
        {
          name: "南通",
          value: 3
        },
        {
          name: "日照",
          value: 1
        },
        {
          name: "新乡",
          value: 4
        },
        {
          name: "哈尔滨",
          value: 4
        },
        {
          name: "常德",
          value: 3
        },
        {
          name: "成都",
          value: 4
        },
        {
          name: "锦州",
          value: 2
        },
        {
          name: "石家庄",
          value: 10
        },
        {
          name: "营口",
          value: 2
        },
        {
          name: "榆林",
          value: 2
        },
        {
          name: "沧州",
          value: 3
        },
        {
          name: "太原",
          value: 2
        },
        {
          name: "盘锦",
          value: 3
        },
        {
          name: "岳阳",
          value: 3
        },
        {
          name: "长沙",
          value: 8
        },
        {
          name: "呼和浩特",
          value: 2
        },
        {
          name: "萍乡",
          value: 2
        },
        {
          name: "烟台",
          value: 2
        },
        {
          name: "长乐",
          value: 1
        },
        {
          name: "十堰",
          value: 3
        },
        {
          name: "乐从",
          value: 5
        },
        {
          name: "淮北",
          value: 1
        },
        {
          name: "福州",
          value: 6
        },
        {
          name: "聊城",
          value: 3
        },
        {
          name: "衡阳",
          value: 2
        }
      ],
      mapData: {
        东营: [118.681045, 37.43999],
        齐齐哈尔: [123.924531, 47.360082],
        秦皇岛: [119.608614, 39.941588],
        阜阳: [115.820692, 32.896045],
        十堰: [110.8046, 32.635498],
        辽阳: [123.244792, 41.274927],
        厦门: [118.095905, 24.485817],
        汉中: [107.02971, 33.072637],
        宁波: [121.630851, 29.865707],
        开封: [114.314164, 34.802756],
        东莞: [113.758231, 23.026994],
        石家庄: [114.48, 38.03],
        贵阳: [106.636766, 26.65331],
        潍坊: [119.168158, 36.713207],
        长春: [125.330097, 43.822402],
        合肥: [117.233592, 31.826705],
        珠海: [113.583216, 22.276393],
        沧州: [116.848904, 38.309946],
        青岛: [120.388969, 36.073179],
        大连: [121.621331, 38.919658],
        威海: [122.127927, 37.518857],
        杭州: [120.162142, 30.278988],
        南昌: [115.864758, 28.68833],
        玉林: [110.170948, 22.64274],
        福州: [119.303339, 26.080457],
        上海: [121.480237, 31.2363],
        沈阳: [123.471844, 41.683611],
        南通: [120.900881, 31.98643],
        九江: [115.959851, 29.667088],
        衢州: [118.865666, 28.975716],
        武汉: [114.311831, 30.598426],
        日照: [119.533325, 35.422765],
        广州: [113.270793, 23.135303],
        银川: [106.238976, 38.492391],
        邯郸: [114.545866, 36.631195],
        郑州: [113.631768, 34.753427],
        新乡: [113.933871, 35.308964],
        太原: [112.555135, 37.876812],
        南京: [118.802962, 32.064792],
        盘锦: [122.076498, 41.164663],
        海口: [110.206424, 20.050052],
        济南: [117.126488, 36.65819],
        包头: [109.846755, 40.663633],
        许昌: [113.858331, 34.042261],
        临沂: [118.364237, 35.110174],
        重庆: [106.558106, 29.56911],
        聊城: [115.991887, 36.462676],
        枣庄: [117.330154, 34.815974],
        鹤壁: [114.303874, 35.752667],
        营口: [122.226413, 40.631056],
        哈尔滨: [126.541745, 45.808985],
        茂名: [110.931773, 21.669043],
        榆林: [109.741195, 38.290882],
        葫芦岛: [120.843388, 40.71736],
        成都: [104.07214, 30.578832],
        衡阳: [112.578467, 26.899509],
        兰州: [103.840702, 36.067221],
        台州: [121.427186, 28.662336],
        萍乡: [113.861018, 27.628699],
        淮北: [116.804839, 33.961777],
        长沙: [112.945393, 28.234248],
        锦州: [121.133449, 41.101429],
        岳阳: [113.135152, 29.362762],
        中山: [113.39914, 22.524027],
        乌鲁木齐: [87.623193, 43.831481],
        深圳: [114.065944, 22.548554],
        荆门: [112.205843, 31.041785],
        惠州: [114.423348, 23.116409],
        呼和浩特: [111.755186, 40.848657],
        常德: [111.704994, 29.037716],
        洛阳: [112.460445, 34.624379],
        焦作: [113.248557, 35.221493],
        郴州: [113.021311, 25.776709],
        西安: [108.946167, 34.347652],
        烟台: [121.454425, 37.469868],
        苏州: [120.591427, 31.307026],
        北京: [116.413624, 39.910837]
      }
    };
  },
  methods: {
    drawChinaMap() {
      this.items = document.querySelectorAll(".flex-container .item");
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
      // map
      var myMap = this.$echarts.init(document.getElementById("mapContainer"));
      var thisMap = setMapOption(
        this.formatMapData(this.dealerData, this.mapData)
      );
      myMap.setOption(thisMap);

      // pie
      var myPie = this.$echarts.init(document.getElementById("pieContainer"));
      myPie.setOption(pie);

      // line
      var myLine = this.$echarts.init(document.getElementById("lineContainer"));
      myLine.setOption(line);

      // radar
      var myRadar = this.$echarts.init(
        document.getElementById("radarContainer")
      );
      myRadar.setOption(radar);
    },
    _resize() {
      this.$root.charts.forEach(myChart => {
        myChart.resize();
      });
    },
    clickChart(clickIndex) {
      const activeItem = document.querySelector(".flex-container .active");
      const activeIndex = activeItem.dataset.order;
      console.log(activeIndex);
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
      let newData = data.map(item => {
        return {
          name: item.name,
          value: map[item.name] ? map[item.name].concat(item.value) : []
        };
      });
      return newData;
    }
  },
  mounted() {
    this.drawChinaMap();
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