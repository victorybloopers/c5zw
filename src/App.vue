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
  position: absolute;
  outline: 1px solid black;
  left: 200px;
  top: 200px;
  width: 100px;
  height: 100px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 1;
  overflow: hidden;
}
</style>
