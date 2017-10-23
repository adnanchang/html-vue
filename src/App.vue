<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello-world/> -->
    <!-- <test/> -->
    <router-link to="/">Home</router-link>
    <router-link to="/normalCircle">Normal Circles</router-link>
    <router-link to="/cgwof">Growing Circles</router-link>
    <router-link to="/cgwf">Growing Circles - Follow</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 25px; */
}

a {
  color: #42b983;
}
</style>
