<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from 'components/header/header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
