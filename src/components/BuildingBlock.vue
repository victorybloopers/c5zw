<template>
  <div v-hammer:press="handlePress"
       v-hammer:pressup="endDrag"
       v-hammer:pan="handleDrag"
       v-hammer:panend="endDrag"
       v-hammer:pancancel="endDrag"
       ref="someBlock"
       :class="{ 'building-block': true }"
       :style="{ backgroundColor: 'red',
                 left: posX + 'px',
                 top: posY + 'px',
                 width: width + 'px',
                 height: height + 'px'}">
    {{ isDragging }}
    <div class="square" style="top: 0; left: 0"></div>
    <div class="square" style="top: 0; right: 0"></div>
    <div class="square" style="left: 0; bottom: 0"></div>
    <div class="square" style="right: 0; bottom: 0"></div>
  </div>
</template>

<script>
export default {
  name: 'BuildingBlock',
  data () {
    return {
      bgColor: 'blue',
      isDragging: false,
      lastPosX: 0,
      lastPosY: 0,
      posX: -50,
      posY: -50,
      width: 200,
      height: 200
    }
  },
  mounted () {
  },
  methods: {
    handlePress: function() {
      this.endDrag()
      console.log('press down')
    },
    handleDrag: function(e) {
      if (!this.isDragging) {
        this.startDrag(e)
        console.log('Dragging...')
      }

      this.posX = e.deltaX + this.lastPosX
      this.posY = e.deltaY + this.lastPosY

      if (this.posX > 0) {
        this.posX = 0
      }

      if (this.posY > 0) {
        this.posY = 0
      }

      if (this.posX + this.width < 100) {
        this.posX = -100
      }

      if (this.posY + this.height < 100) {
        this.posY = -100
      }

      if (e.isFinal) {
        this.endDrag()
      }
    },
    startDrag: function(e) {
      this.isDragging = true
      this.lastPosX = e.target.offsetLeft
      this.lastPosY = e.target.offsetTop
    },
    endDrag: function() {
      this.isDragging = false
      console.log('press up')
    }
  }
}
</script>

<style scoped>
  .square {
    position: absolute;
    width: 20px;
    height: 20px;
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
