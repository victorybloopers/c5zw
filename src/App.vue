<template>
  <div :style="{ width: windowWidth + 'px', height: windowHeight + 'px' }" id="app">
    <BuildingBlock :mainWidth="windowWidth" :mainHeight="windowHeight" />
  </div>
</template>

<script>
import BuildingBlock from './components/BuildingBlock'

export default {
  name: 'App',
  components: {
    BuildingBlock
  },
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0
    }
  },
  mounted () {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  computed: {
    startWidth: function () {
      return window.innerWidth
    }
  },
  methods: {
    getWindowWidth: function() {
      if (window.innerWidth < 1920) {
        this.windowWidth = window.innerWidth
      }
      else {
        this.windowWidth = 1920
      }
    },
    getWindowHeight: function() {
      if (window.innerHeight <= 1080) {
        this.windowHeight = window.innerHeight
      }
      else {
        this.windowHeight = 1080
      }
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
#app {
  margin: 0 auto;
  position: absolute;
  outline: 1px solid black;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 1;
  overflow: hidden;
}
</style>
