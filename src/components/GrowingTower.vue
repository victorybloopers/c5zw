<template>
  <div v-hammer:tap="changeTowerHeight" id="growing-tower">
    <div class="surface bottom"></div>
    <div :style="{ height: towerHeight + 'rem' }" class="surface back"></div>
    <div :style="{ width: towerHeight + 'rem' }" class="surface left"></div>
    <div :style="{ width: towerHeight + 'rem' }" class="surface right"></div>
    <div :style="{ transform: 'translateZ(' + towerHeight + 'rem)' }" class="surface top"></div>
    <div :style="{ height: towerHeight + 'rem' }" class="surface front"></div>
  </div>
</template>

<script>
  export default {
    name: "GrowingTower",
    data() {
      return {
        towerHeight: 4
      }
    },
    methods: {
      changeTowerHeight: function () {
        this.towerHeight += 4;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #growing-tower {
    position: absolute;
    top: 0rem;
    left: 40rem;
    .surface {
      position: absolute;
      transition: 200ms;
      box-sizing: border-box;
    }
    .front {
      background-color: #515656;
      width: 4rem;
      transform-origin: top;
      transform: rotateX(90deg) translateZ(-4rem);
    }
    .back {
      background-color: #6e6f6f;
      width: 4rem;
      transform-origin: top;
      transform: rotateX(90deg);
    }
    .left {
      background-color: #6e6f6f;
      height: 4rem;
      transform-origin: left;
      transform: rotateY(-90deg);
    }
    .right {
      background-color: #404040;
      height: 4rem;
      transform-origin: left;
      transform: rotateY(-90deg) translateZ(-4rem);
    }
    .top {
      background-color: #6e6f6f;
      width: 4rem;
      height: 4rem;
    }
    .bottom {
      background-color: #6e6f6f;
      width: 4rem;
      height: 4rem;
    }
  }
</style>
