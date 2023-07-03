<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './containers/Header.vue'
import Footer from './containers/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
}
}
</script>

<style>
@import url('@/assets/css/all.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
