<template>
  <div>
    <div v-hammer:pan="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">PAN</div>
    <div v-hammer:swipe.left="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">SWIPE LEFT</div>
    <div v-hammer:swipe.right="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">SWIPE RIGHT</div>
    <div v-hammer:tap="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">TAP</div>
    <div v-hammer:rotate="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">ROTATE</div>
    <div v-hammer:pinch="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">PINCH</div>
    <div v-hammer:press="changeColor"
         :class="{ 'building-block': true }"
         :style="{ backgroundColor: bgColor }">PRESS</div>
  </div>
</template>

<script>
export default {
  name: 'BuildingBlock',
  data () {
    return {
      bgColor: 'blue'
    }
  },
  methods: {
    changeColor: function(e) {
      console.log(e)
      this.bgColor = 'red'
    }
  }
}
</script>

<style scoped>
  .building-block {
    color: white;
    width: 200px;
    height: 200px;
    margin-bottom: 0.4em;
    background-color: blue;
  }
</style>
