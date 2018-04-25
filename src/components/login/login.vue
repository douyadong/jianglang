<template>
  <div id="login">
    <header class="htmleaf-header">
      <h1>一体化运维管理系统 <span>The most challenging challenge is to improve yourself. - Michael Stryley</span></h1>
      <div class="htmleaf-links">
        <a class="iconfont icon-shouye" href="http://www.grandage.cn/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC.html"
           title="关于我们" target="_blank"></a>
        <a class="iconfont icon-share" href="http://www.grandage.cn/index.html" title="公司首页" target="_blank"></a>
      </div>
    </header>
    <div class="user-password">
      <form class="form-horizontal">
        <span class="heading">用户登录</span>
        <div class="form-group">
          <input type="text" class="hidden">
          <input type="text" class="form-control" placeholder="用户名" v-model="userName"
          autocomplete="off">
          <i class="iconfont icon-icon-user"></i>
        </div>
        <div class="form-group">
          <input type="password" class="hidden">
          <input type="password" class="form-control" placeholder="密　码" v-model="password">
          <i class="iconfont icon-suo"></i>
        </div>
        <div class="clearfix form-group">
          <button type="button" class="btn btn-default f-right" @click="signIn">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        userName: '',
        password: ''
      }
    },
    computed: mapState({
      userS: state => state.user,
      passwordS: state => state.password
    }),
    methods: {
      signIn() {
        this.$router.push('HomePage')
      },
      ...mapMutations({
        login: 'login'
      })
    }
  }
</script>

<style lang="less" scoped>
  /* 隐藏滚动条 */
  body::-webkit-scrollbar {
    display: none;
  }
  #login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('./login.jpg') no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    /* Header */
    .htmleaf-header {
      padding: 50px 0;
      letter-spacing: -1px;
      text-align: center;
      h1 {
        color: #D5D6E2;
        font-weight: 600;
        font-size: 1.1em;
        line-height: 1;
        margin-bottom: 0;
        span {
          display: block;
          font-size: 60%;
          font-weight: 400;
          padding: 0.8em 0 0.5em 0;
          color: #c3c8cd;
        }
      }
      .htmleaf-links {
        position: relative;
        width: 100px;
        margin: 0 auto;
        a {
          color: #337ab7;
          font-weight: 600;
          display: inline-block;
          padding: 15px 10px;
        }
      }
      .htmleaf-links::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 30px;
        top: 8px;
        left: 50px;
        background-color: #dbdbdb;
        -webkit-transform: rotate3d(0,0,1,30deg);
        transform: rotate3d(0,0,1,30deg);
      }
    }
    /* user-password */
    .user-password {
      margin: 0 auto;
      width: 700px;
      background: #fff;
      border-radius: 15px;
      text-align: center;
      .form-horizontal {
        padding-bottom:40px;
        .heading {
          display: block;
          font-size: 35px;
          font-weight: 700;
          padding: 35px 0;
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 30px;
        }
        .form-group {
          margin: 0 0 25px 0;
          padding: 0 20px;
          position: relative;
          i {
            position: absolute;
            top: 10px;
            left: 40px;
            font-size: 17px;
            color: #c8c8c8;
            transition: all 0.5s ease 0s;
          }
        }
        .form-control {
          background: #f0f0f0;
          border: none;
          border-radius: 20px;
          padding: 0 20px 0 45px;
          height: 40px;
          display: inline-block;
          width: 100%;
        }
        .btn {
          font-size: 14px;
          color: #fff;
          background: #00b4ef;
          border-radius: 30px;
          padding: 10px 25px;
          border: none;
          text-transform: capitalize;
          transition: all 0.5s ease 0s;
          cursor: pointer;
        }
      }
    }
  }
</style>
