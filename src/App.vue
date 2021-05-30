<template>
  <h1>Microcontroller List</h1>
  <utable />
</template>

<script>
import utable from './components/utable.vue'

export default {
  name: 'App',
  components: {
    utable
  },
  data() {
    return{
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
