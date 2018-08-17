<template>
  <div v-hammer:press="handlePress"
       v-hammer:pressup="endDrag"
       v-hammer:pan="handleDrag"
       v-hammer:panend="endDrag"
       v-hammer:pancancel="endDrag"
       id="world"
       :class="{ 'building-block': true }"
       :style="{ left: posX + 'px',
                 top: posY + 'px',
                 width: width + 'px',
                 height: height + 'px'}">
    <GameWorld />
  </div>
</template>

<script>
import GameWorld from './GameWorld'
export default {
  name: 'GameScreen',
  props: ['mainWidth', 'mainHeight'],
  components: {
    GameWorld,
  },
  data () {
    return {
      bgColor: 'red',
      isDragging: false,
      worldSelected: false,
      lastPosX: 0,
      lastPosY: 0,
      posX: 0,
      posY: 0,
      width: 2100,
      height: 1200
    }
  },
  mounted () {
    this.$nextTick(function() {
      window.addEventListener('resize', this.findWidth)
      window.addEventListener('resize', this.findHeight)
    })
  },
  methods: {
    findWidth: function() {
      if (this.posX + this.width < window.innerWidth) {
        this.posX = window.innerWidth - this.width
      }
    },
    findHeight: function() {
      if (this.posY + this.height < window.innerHeight) {
        this.posY = window.innerHeight - this.height
      }
    },
    tapTest: function() {
      this.bgColor = 'green'
    },
    handlePress: function(e) {
      if(e.target.id === 'world') {
        //this.worldSelected = true
      }
    },
    handleDrag: function(e) {
      if (!this.isDragging) {
        this.startDrag(e)
      }
      console.log(this.width - (-this.posX))

      this.posX = e.deltaX + this.lastPosX
      this.posY = e.deltaY + this.lastPosY

      if (this.posX > 0) {
        this.posX = 0
      }

      if (this.posY > 0) {
        this.posY = 0
      }

      if (this.posX + this.width < this.mainWidth) {
        this.posX = -(this.width - this.mainWidth)
      }

      if (this.posY + this.height < this.mainHeight) {
        this.posY = -(this.height - this.mainHeight)
      }

      if (e.isFinal) {
        this.endDrag()
      }
    },
    startDrag: function() {
      this.isDragging = true
      this.lastPosX = this.posX
      this.lastPosY = this.posY
    },
    endDrag: function() {
      //this.worldSelected = false
      this.isDragging = false
    }
  }
}
</script>

<style scoped>
  .square {
    position: absolute;
    width: 50px;
    height: 50px;
    background: blue;
  }
  .building-block {
    color: white;
    position: absolute;
    margin-bottom: 0.4em;
    background-color: blue;
    z-index: -1;
  }
</style>
