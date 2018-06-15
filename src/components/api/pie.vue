<template>
  <div class="page">
      <h1>南丁格尔图(也是饼图的一种)会通过半径表示数据的大小</h1>
      <el-button type="success" size="mini" @click="drawPie">绘制南丁格尔图</el-button>
      <!-- dom容器 -->
      <div id="myChart"  :style="{width:'400px',height:'400px',border:'1px solid black',margin:'10px'}"></div>
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
      drawPie(){
          //初始化echarts实例
          var mychart=this.$echarts.init(document.getElementById('myChart'));
          //绘制
          mychart.setOption({
            title:{
                text:"南丁格尔图",
                // 定位坐标
                left:'center',
                top:'10',
                // 标题样式
                textStyle:{
                    color:'blue',
                    fontSize:'30',
                }
            },
            // 背景颜色
            backgroundColor:'green',
            // 提示框
            tooltip:{

            },
            // 视觉映射
            visualmap:{

            },
            series:[
                {
                    name:'猴赛雷',
                    type:'pie',
                    // 饼所占容器比例大小
                    radius:'55%',
                    // 定位
                    center:['50%','50%'],
                    data:[
                        {value:100,name:'物理'},
                        {value:80,name:'化学'},
                        {value:150,name:'数学'},
                        {value:120,name:'英语'}
                    ].sort(function(a,b){ return a.value-b.value }),
                // 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
                // 'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
                roseType:'radius',
                // 展示文字样式
                lable:{
                    normal:{
                        textStyle:{
                            color:'rgba(255,255,255,0.3)'
                        },
                        // 线转折点样式
                        smooth:0.1,
                        
                        length:50,
                        length2:20
                    }
                },
                // 延伸线样式控制
                labelLine:{
                    normal:{
                        lineStyle:{
                            color:'rgba(255,255,255,0.3)'
                        }
                    }
                },
                // 图形样式
                itemStyle:{
                    normal:{
                        // color:'yellow',
                        shadowBlur:200,
                        shadowColor:'rgba(0,0,0,0.5)'
                    }
                }
                }
            ]
          })
      }
  }

}   
</script>

<style scoped>
</style>
