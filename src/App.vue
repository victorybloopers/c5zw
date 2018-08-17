<template>
  <div :style="{ width: windowWidth + 'px', height: windowHeight + 'px' }" id="app">
    <!-- <div class="line" v-for="line in 100"></div> -->
    <div class="grid">
    </div>
    <GameScreen :mainWidth="windowWidth" :mainHeight="windowHeight" />
  </div>
</template>

<script>
import GameScreen from './components/GameScreen'

export default {
  name: 'App',
  components: {
    GameScreen
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

<style lang="scss" rel="stylesheet/scss">
  $baseline: 1.5rem;

  @import url('https://fonts.googleapis.com/css?family=Unica+One');

  html {
    font-size: 16px;
  }
  body {
    background-color: #111111;
    padding: 0;
    margin: 0;
  }
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-weight: normal;
    font-size: 2rem;
    line-height: $baseline * 2;
    margin-bottom: 0;
  }
  p {
    font-size: 1rem;
    line-height: $baseline;
    margin-bottom: $baseline;
  }
  .grid {
    color: white;
    width: $baseline * 34;
    position: absolute;
    top: 0;
  }
  .line {
    width: 100%;
    height: $baseline;
    border-bottom: 1px solid grey;
    box-sizing: border-box;
  }
  #app {
    margin: 0 auto;
    position: absolute;
    outline: 1px solid black;
    font-family: 'Unica One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    z-index: 1;
    overflow: hidden;
  }
</style>
