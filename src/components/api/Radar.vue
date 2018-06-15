<template>
  <div class="page">
      <h1>雷达探测</h1>
      <el-button @click="drawRadar" type="success" size="mini">绘制基本雷达探测仪</el-button>
      <!-- dom容器 -->
      <div id="mychart" ref="radar" :style="{width:'500px',height:'500px',border:'1px solid black'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
    drawRadar(){
      // 初始化echarts的实例
      var mychart= this.$echarts.init(document.getElementById('mychart'));
      // 绘制
      mychart.setOption({
        // 标题
        title:{
          text:"基础雷达扫射图"
        },
        tooltip:{},
        legend:{
          data:['塔兹米','赤瞳','艾德里曼']
        },
        radar:{
          // 控制雷达形状，默认多边形
          // shape:'circle',
            name:{
              textStyle:{
                color:'blue',
                backgroundColor:'green',
                padding:'4px',
                borderRadious:20,
              }
            },
            indicator:[
              {name:'体术',max:1000},
              {name:'幻术',max:1000},
              {name:'忍术',max:1000},
              {name:'色诱之术',max:1000},
              {name:'轮回之术',max:1000}
            ]
        },
          series:[{
            name:'斩赤红之瞳',
            type:'radar',
            // 控制区域块颜色
            // areaStyle:{
            //   normal:{

            //   }
            // },
            data:[
              {
                value:[999,888,777,1000,300],
                name:'塔兹米'
              },
              {
                value:[1000,666,777,600,900],
                name:'赤瞳'
              },
              {
                value:[999,999,999,1000,1000],
                name:'艾德里曼'
              }
            ]
          }]
      })
    }
  }
}
</script>

<style scoped>
</style>
