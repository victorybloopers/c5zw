<template>
  <div v-hammer:press="handlePress"
       v-hammer:pressup="endDrag"
       v-hammer:pan="handleDrag"
       v-hammer:panend="endDrag"
       v-hammer:pancancel="endDrag"
       ref="someBlock"
       :class="{ 'building-block': true }"
       :style="{ backgroundColor: 'red', left: posX + 'px', top: posY + 'px' }">{{ isDragging }}</div>
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
      posX: 0,
      posY: 0
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
  .building-block {
    color: white;
    position: absolute;
    width: 200px;
    height: 200px;
    margin-bottom: 0.4em;
    background-color: blue;
  }
</style>
