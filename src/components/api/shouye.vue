<template>
  <div class="page">
      <h1>echarts的使用</h1>
      <el-button @click="drawLine" type="success">绘制形图</el-button>
      <div id="myChart1" :style="{width: '600px', height: '300px'}"></div>
      <!-- 容器 -->
      <el-button @click="synDraw" type="success">绘制柱形图</el-button>
      <div id="myChart2" :style="{width: '800px', height: '500px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        date:[
                {
                    "Xzhou":["IQ","EQ","PQ"],
                    "Yzhoup":[[200,100,50,150],[50,80,100,200],[80,150,200,70],[50,90,300,150]]
                }
             ]
    };
  },
  components: {},
  mounted() {
  },
  methods: {
        drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption({
            title: { text: '简单柱形图' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    // 系列：柱形bar 折现line
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                },
                {
                    name: '业绩',
                    // 系列：柱形bar 折现line
                    type: 'line',
                    data: [10, 20, 40, 10, 20, 10]
                }
            ]
        });

    },
    synDraw(){
        // 基于dom元素，初始化echarts实例
        let myChart=this.$echarts.init(document.getElementById('myChart2'))
        // 绘制
        var _this=this;
        myChart.setOption({
            // 标题
            title:{text:'柱形图之数据异步加载'},
            // 提示框位置
            tooltip:{x:"300px",y:"600px"},
            // 图例组件，可以通过点击控制该组数据是否显示
            legend:{
                // data:["我","小明","小青","小强"]
            } ,          
            // x轴数据
            xAxis:{
                data:_this.date[0].Xzhou
            },
            // y轴数据
            yAxis:{},
            series:[
                {
                    name:"我",
                    type:'bar',
                    data:_this.date[0].Yzhoup[0]
                },
                {
                    name:"小明",
                    type:'bar',
                    data:_this.date[0].Yzhoup[1]
                },
                {
                    name:"小青",
                    type:'bar',
                    data:_this.date[0].Yzhoup[2]                 
                },
                {
                    name:"小强",
                    type:'bar',
                    data:_this.date[0].Yzhoup[3]
                }
            ]
        })
    }
  
  }
};
</script>

<style scoped>
</style>
