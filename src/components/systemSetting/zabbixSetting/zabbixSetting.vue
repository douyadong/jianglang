<template>
  <div id="zabbixSetting" class="boxContent">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" background-color="#222d32" text-color="#fff" 
    active-text-color="#409EFF" :router="true" :collapse="isCollapse">
      <Aside :navMenus="leftMenus" :defaultActive="defaultActive" @toggleAside="toggleAside" :asideTitle="asideTitle"
       @changeAside="changeActiveDefault" :isCollapse="isCollapse"></Aside>
    </el-menu>
    <div class="rightContent">
      <Breadcrumb></Breadcrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Aside from 'base/aside/aside.vue'
  import Breadcrumb from 'base/breadcrumb/breadcrumb.vue'

  export default {
    created() {
      this.defaultActive = this.$route.fullPath
      this.isCollapse = true
    },
    watch: {
      $route() {
        this.defaultActive = this.$route.fullPath
        this.isCollapse = true
      }
    },
    data() {
      return {
        asideTitle: 'zabbix设置',
        rightContentShow: true,
        isCollapse: true,
        leftMenus: [{
            "entity": {
              "id": 1,
              "parentMenuId": 0,
              "name": "systemManage",
              "icon": "el-icon-message\r\n",
              "alias": "设置",
              "state": "ENABLE",
              "sort": 0,
              "active": '/zabbixSetting/setting',
              "type": "NONE",
              "discription": "用于zabbix设置的菜单",
              "createUserId": 1
            },
            childs: null
          },
          {
            "entity": {
              "id": 2,
              "parentMenuId": 1,
              "name": "roleManage",
              "icon": "el-icon-bell",
              "alias": "活动事件设置",
              "state": "ENABLE",
              "sort": 1,
              "active": "/zabbixSetting/activetime",
              "type": "LINK",
              "discription": "用于活动事件设置的菜单",
              "createUserId": 2
            },
            "childs": null
          }
        ]
      };
    },
    methods: {
      toggleAside(bool) {
        this.isCollapse = bool
      },
      changeRightContentShow(bool) {
        this.rightContentShow = bool
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeActiveDefault(active) {
        this.defaultActive = active
      }
    },
    components: {
      Aside,
      Breadcrumb
    }
  }

</script>

<style lang="less">
  .asideTop {
    background-color: #1a2226;
    height: 36px;
    text-align: center;
    position: relative;
    p {
      position: absolute;
      top: 9px;
      left: 24px;
      font-size: 14px;
    }
    span {
      color: #fff;
      font-size: 20px;
      line-height: 36px;
      cursor: pointer;
    }
    span.el-icon-close {
      margin-right: 5px;
    }
  }
  .el-menu-vertical-demo {
    height: 100%;
    box-sizing: border-box;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    min-width: 200px;
  }
</style>
