/**
 * Created by yys on 18/3/12
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
import Login from 'components/login/login.vue'
import Header from 'components/header/header.vue'
import HomePage from 'components/homePage/homePage.vue'
import UserManage from 'components/systemSetting/userManage/userManage.vue'
import ZabbixSetting from 'components/systemSetting/zabbixSetting/zabbixSetting.vue'
import UserSetting from 'components/systemSetting/userSetting/userSetting.vue'
import UserArr from 'components/systemSetting/userArr/userArr.vue'
import ZabbixList from 'components/systemSetting/zabbixList/zabbixList.vue'
import ActiveTime from 'components/systemSetting/activeTime/activeTime.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/HomePage',
    name: '首页',
    components: {
      default: HomePage,
      Header
    }
  },
  {
    path: '/user',
    name: '用户管理&用户组管理',
    redirect: '/user/manage',
    components: {
      default: UserManage,
      Header
    },
    children: [{
        path: 'manage',
        name: '用户管理',
        component: UserSetting
    },{
        path: 'arr/:id',
        name: '用户组管理',
        component: UserArr
    }]
  },
  {
    path: '/zabbixSetting',
    name: 'Zabbix设置',
    redirect: '/zabbixSetting/setting',
    components: {
      default: ZabbixSetting,
      Header
    },
    children: [{
        path: 'setting',
        name: '设置',
        component: ZabbixList
    },{
        path: 'activetime',
        name: '活动事件设置',
        component: ActiveTime
    }]
  }
];


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})

export default router;
