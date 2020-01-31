<template>
  <div id="app">
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      v-if="IsNcov"
      >
      <el-table-column
        prop="name"
        label="地区"
        sortable
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="deathNum"
        label="确诊"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="susNum"
        label="死亡"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="cureNum"
        label="治愈"
        sortable
      >
      </el-table-column>
    </el-table>
    <div v-if="!IsNcov" @click="Message"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data(){
    return{
      IsNcov:false,
      tableData: []
    }
  },
  created() {
    // eslint-disable-next-line no-undef
    axios.get('/api').then((response) => {
      if(response.data.data.list){
        this.tableData = response.data.data.list
        this.IsNcov = true
      }else{
        this.Message()
        this.tableData = []
        this.IsNcov = false
      }
    })
  },
  methods:{
    Message() {
      const h = this.$createElement;
      this.$notify({
        title: '提示信息',
        message: h('i', { style: 'color: teal'}, '接口已下线')
      });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
