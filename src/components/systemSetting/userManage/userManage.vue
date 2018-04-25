<template>
  <div>
  <div id="userManage" class="boxContent">
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
  </div>
</template>

<script>
  import Aside from 'base/aside/aside.vue'
  import Header from 'components/header/header.vue'
  import Breadcrumb from 'base/breadcrumb/breadcrumb.vue'
  export default {
    created() {
      this.defaultActive = this.$route.fullPath
    },
    watch: {
      $route() {
        this.defaultActive = this.$route.fullPath
        this.isCollapse = true
      }
    },
    data() {
      return {
        asideTitle: '用户管理/用户组管理',
        rightContentShow: true,
        defaultActive: '',
        isCollapse: true,
        leftMenus: [{
            "entity": {
              "id": 1,
              "parentMenuId": 0,
              "name": "systemManage",
              "icon": "el-icon-message\r\n",
              "alias": "用户管理",
              "state": "ENABLE",
              "sort": 0,
              "active": '/user/manage',
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
              "icon": "el-icon-setting",
              "alias": "用户组管理",
              "state": "ENABLE",
              "sort": 1,
              "active": "/user/arr",
              "type": "LINK",
              "discription": "用于活动事件设置的菜单",
              "createUserId": 2
            },
            "childs": [{
              "entity": {
                "id": 3,
                "parentMenuId": 3,
                "name": "roleManage",
                "icon": "el-icon-star-off",
                "alias": "网络管理员组",
                "state": "ENABLE",
                "sort": 1,
                "active": "/user/arr/netArr",
                "type": "LINK",
                "discription": "用于网络管理员组的菜单",
                "createUserId": 3
              },
              childs: null
            },{
              "entity": {
                "id": 4,
                "parentMenuId": 4,
                "name": "roleManage",
                "icon": "el-icon-star-off",
                "alias": "管理组",
                "state": "ENABLE",
                "sort": 1,
                "active": "/user/arr/manageArr",
                "type": "LINK",
                "discription": "用于管理组的菜单",
                "createUserId": 4
              },
              childs: null
            },
            {
              "entity": {
                "id": 5,
                "parentMenuId": 5,
                "name": "roleManage",
                "icon": "el-icon-star-off",
                "alias": "测试用户组",
                "state": "ENABLE",
                "sort": 1,
                "active": "/user/arr/testArr",
                "type": "LINK",
                "discription": "用于测试用户组的菜单",
                "createUserId": 5
              },
              childs: null
            }]
          }
        ]
      }
    },
    methods: {
      changeRightContentShow(bool) {
        this.rightContentShow = bool
      },
      changeActiveDefault(active) {
        this.defaultActive = active
      },
      toggleAside(bool) {
        this.isCollapse = bool
      }
    },
    components: {
      Aside,
      Breadcrumb
    }
  }

</script>

<style lang="less">
  .pagesize {
    margin: 10px 0;
    text-align: center;
  }
  .selectUser .el-input__inner {
    padding-right: 15px;
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
