<template>  
  <div class="navMenu">
    <div class="asideTop">
        <p v-show="!collapse" style="font-size: 12px">{{asideTitle}}</p>
        <span class="el-icon-menu" v-show="collapse" @click="toggleAside(false)"></span>
        <span class="el-icon-close f-right" v-show="!collapse" @click="toggleAside(true)"></span>
      </div>
    <label v-for="(navMenu,index) in navMenus" :key="index">  
      <el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"  
                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.active"
                    @click="changeAside(navMenu.entity.active)">
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>  
      </el-menu-item>

      <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"  
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.active">  
        <template slot="title">  
          <i :class="navMenu.entity.icon"></i>  
          <span slot="title" v-show="!collapse">{{navMenu.entity.alias}}</span>  
        </template>
        <Asidechild :asideChild="navMenu.childs" :defaultActive="defaultActive" @changeAside="changeAside"></Asidechild>
      </el-submenu>  
    </label>  
  </div>
</template>

<script>  
  import Asidechild from 'base/aside/asideChild.vue'
  
  export default {  
    props: ['navMenus','defaultActive','isCollapse','asideTitle'],
    created() {
    },
    computed: {
      collapse: {
        get() {
          return this.isCollapse
        },
        set() {
        }
      },
    },
    data() {  
      return {
      }  
    },
    methods: {
      changeAside(active) {
        if(active === this.defaultActive) return 
        this.$emit('changeAside',active)
      },
      toggleAside(bool) {
        this.collapse = bool
        this.$emit('toggleAside',bool)
      }
    },
    components: {
      Asidechild
    }
  }  
</script>  

<style lang="less">
  .closeAside {
    height: 40px;
    overflow: hidden;
    background-color: #1a2226;
    button {
      margin-right: 10px;
      font-size: 18px;
      color: #fff;
    }
  }
  .openAside {
    text-align: center;
    button {
      font-size: 18px;
    }
  }
  .asideTop {
    background-color: #1a2226;
    height: 36px;
    text-align: center;
    position: relative;
    p {
      position: absolute;
      top: 11px;
      left: 20px;
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
</style>
