<template>
  <div class="hello">
      <router-link to="/api/global">
        <el-button type="success" size="small">全局api</el-button>
      </router-link>
      <router-link to="/api/shouye">
        <el-button type="primary" size="small">首页绘制测试</el-button>
      </router-link>
      <router-link to="/api/pie">
        <el-button type="primary" size="small">南丁格尔图</el-button>
      </router-link>
      <router-link to="/api/Radar">
        <el-button type="primary" size="small">雷达探测仪</el-button>
      </router-link>
      <router-link to="/api/todolist">
        <el-button type="primary" size="small">todolist</el-button>
      </router-link>
      <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
