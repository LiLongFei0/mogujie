<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './base/navbar'
import '@/assets/reset.css'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>

</style>
