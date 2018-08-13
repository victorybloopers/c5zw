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
    {{ isDragging }} {{ mainWidth }} {{ mainHeight }}
    <div class="square" style="top: 0; left: 0"></div>
    <div class="square" style="top: 0; right: 0"></div>
    <div class="square" style="left: 0; bottom: 0"></div>
    <div class="square" style="right: 0; bottom: 0"></div>
  </div>
</template>

<script>
export default {
  props: ['mainWidth', 'mainHeight'],
  name: 'BuildingBlock',
  data () {
    return {
      bgColor: 'blue',
      isDragging: false,
      lastPosX: 0,
      lastPosY: 0,
      posX: -50,
      posY: -50,
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
      if ((this.width - (-this.posX)) < this.mainWidth) {
        this.posX = -(this.width - this.mainWidth)
      }
    },
    findHeight: function() {
      if ((this.height - (-this.posY)) < this.mainHeight) {
        this.posY = -(this.height - this.mainHeight)
      }
    },
    handlePress: function() {
      this.endDrag()
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
    startDrag: function(e) {
      this.isDragging = true
      this.lastPosX = e.target.offsetLeft
      this.lastPosY = e.target.offsetTop
    },
    endDrag: function() {
      this.isDragging = false
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
