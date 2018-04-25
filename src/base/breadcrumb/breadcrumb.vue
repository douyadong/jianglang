<template>
  <div id="breadcrumb">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    created() {
      this.getBreadcrumb()
    },
    computed: {
      ...mapGetters([
        'breadListState'
      ])
    },
    data() {
      return {
        breadList: [], // 路由集合
      }
    },
    methods: {
      getBreadcrumb() {
        this.breadList = this.$route.matched;
        this.$route.matched.forEach((item, index) => {
          // 判断父级路由是否为空字符串或者meta是否为首页,直接复写路径到根目录
          // 后面的就是判断路由和当前遍历的项目是否一致,是的话把标题的值给上
          item.meta.breadcrumbName === '首页' ? item.path = '/' : this.$route.path === item.path ? this.title = item.meta.breadcrumbName : '';
        })
      },
      ...mapMutations([
        'breadListMutation'
      ])
    },
    watch: {
      //"$route": "getBreadcrumb"
      $route() {
        this.getBreadcrumb()
      }
    },
  }
</script>

<style lang="less">
  #breadcrumb {
    height: 30px;
  }
</style>
