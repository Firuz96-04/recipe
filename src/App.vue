<template>
  <div id="app">
    
    <div class="leftBar">
      <h1 style="color:#fff">Admin</h1>

    </div>
    <vue-table/>
  </div>
</template>

<script>
import VueTable from './components/VueMainTable.vue'
export default {
  name: 'App',
  components: {
    VueTable
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
  display: flex;
}
.leftBar{
  width: 20%;
  height: 100vh;
  background: #2c3e50;
  position: relative;
}
</style>
