<template>
  <div>
    <div id="block"
         v-hammer:pan="updateCoordinates"
         v-hammer:press="findRelativeCoordinates"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor, left: left + 'px', top: top + 'px' }">PAN</div>
  </div>
</template>

<script>
export default {
  name: 'BuildingBlock',
  data () {
    return {
      bgColor: 'blue',
      left: 0,
      top: 0
    }
  },
  methods: {
    changeColor: function(e) {
      console.log(e)
      this.bgColor = 'red'
    },
    updateCoordinates: function(e) {
      var rect = e.target.getBoundingClientRect()
      this.left = e.center.x - 100
      this.top = e.center.y - 100
    },
    findRelativeCoordinates: function(e) {
      var rect = e.target.getBoundingClientRect()
      console.log(e.center.x - rect.left)
    }
  }
}
</script>

<style scoped>
  .building-block {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    margin-bottom: 0.4em;
    background-color: blue;
  }
</style>
