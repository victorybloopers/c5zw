<template>
  <div id="app">
    <BuildingBlock/>
  </div>
</template>

<script>
import BuildingBlock from './components/BuildingBlock'

export default {
  name: 'App',
  components: {
    BuildingBlock
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
