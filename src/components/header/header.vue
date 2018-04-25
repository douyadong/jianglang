<template>
  <div id="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true"
     @select="handleSelect" background-color="#222d32"
      text-color="#fff" active-text-color="#ffd04b">
      <li class="title">一体化运维管理系统</li>
      <el-menu-item index="/HomePage">首页</el-menu-item>
      <el-submenu index="2" :show-timeout="50" :hide-timeout="50">
        <template slot="title">资产管理</template>
        <el-menu-item index="2-1">主机设备管理</el-menu-item>
        <el-menu-item index="2-2">网络设备管理</el-menu-item>
        <el-menu-item index="2-3">资产对比管理</el-menu-item>
        <el-menu-item index="2-4">维保提醒时间设置</el-menu-item>
        <el-menu-item index="2-5">主机字段映射</el-menu-item>
        <el-menu-item index="2-6">网络字段映射</el-menu-item>
      </el-submenu>
      <el-submenu index="3" :show-timeout="50" :hide-timeout="50">
        <template slot="title">事件管理</template>
        <el-menu-item index="3-1">主机设备管理</el-menu-item>
        <el-menu-item index="3-2">网络设备管理</el-menu-item>
        <el-menu-item index="3-3">资产对比管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4" :show-timeout="50" :hide-timeout="50">
        <template slot="title">报表</template>
        <el-menu-item index="4-1">主机设备管理</el-menu-item>
        <el-menu-item index="4-2">网络设备管理</el-menu-item>
        <el-menu-item index="4-3">资产对比管理</el-menu-item>
      </el-submenu>
       <el-submenu index="5" :show-timeout="50" :hide-timeout="50">
        <template slot="title">告警设置</template>
        <el-menu-item index="5-1">主机设备管理</el-menu-item>
        <el-menu-item index="5-2">网络设备管理</el-menu-item>

      </el-submenu>
       <el-submenu index="6" :show-timeout="50" :hide-timeout="50">
        <template slot="title">系统设置</template>
        <el-menu-item index="/user">用户管理/用户组管理</el-menu-item>
        <el-menu-item index="/zabbixSetting">Zabbix设置</el-menu-item>
      </el-submenu>
      <li class="title f-right">欢迎您
        <span class="userName">Admin</span>
        <span class="iconfont icon-tuichu"></span>
      </li>
    </el-menu>
  </div>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      activeIndex () {
        return this.$route.matched[0].path
      }
    },
    methods: {
      handleSelect(key, keyPath) {

      },
    }
  }

</script>

<style lang="less" scoped>
  #header {
    position: fixed;
    width: 100%;
    z-index: 10;
    height: 60px;
    overflow: hidden;
  }
  #header .title {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    color: #fff;
    margin: 0 100px 0 30px;
    .userName {
      color: gold;
      margin: 0 10px;
    }
  }
   #header .title.f-right {
     float: right;
     margin-right: 20px;
   }
</style>
