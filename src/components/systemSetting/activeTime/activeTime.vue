<template>
  <div id="activeTime">
    <el-form label-width="140px">
        <el-form-item label="活动事件刷新频率">
          <el-input v-model="refreshRate" style="width:280px" :disabled="refreshDisabled"></el-input>
          <span style="margin:0 50px 0 10px;">秒</span>
          <el-button type="primary" v-show="show" @click="show=false;;refreshDisabled=false">编辑</el-button>
          <el-button type="primary" v-show="!show" @click="show=true;refreshDisabled=true">保存</el-button>
          <el-button type="primary" v-show="!show" @click="show=true;refreshDisabled=true">取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        refreshRate: 100,
        refreshDisabled: true,
        show: true
      }
    }
  }
</script>

<style lang="less">

</style>