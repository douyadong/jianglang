<template>
  <div class="asideChild">
    <el-menu-item-group v-for="(navMenuChild,index) in asideChild" :key="index">
      <el-menu-item :index="navMenuChild.entity.active" style="padding-left: 30px" 
      @click="changeAside(navMenuChild.entity.active)">
         <i :class="navMenuChild.entity.icon"></i>
         {{navMenuChild.entity.alias}}
         </el-menu-item>
    </el-menu-item-group>
  </div>
</template>

<script>
  export default {
    props: ['asideChild','defaultActive'],
    methods: {
      changeAside(active) {
        if(active === this.defaultActive) return
        this.$emit('changeAside',active)
      }
    }
  }
</script>

<style lang="less">
  .asideChild {
    overflow: hidden;
    .el-menu-item-group__title {
      position: absolute;
    }
  }
</style>
