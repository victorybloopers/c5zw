<template>
  <div id="game-tile">
    <div v-hammer:tap="changeTowerHeight" class="perspective">
      <div :style="{ height: towerHeight + 'px' }" class="surface front"></div>
      <div :style="{ height: towerHeight + 'px' }" class="surface back"></div>
      <div :style="{ width: towerHeight + 'px' }" class="surface left"></div>
      <div :style="{ width: towerHeight + 'px' }" class="surface right"></div>
      <div :style="{ transform: 'translateZ(' + towerHeight + 'px)' }" class="surface top"></div>
      <div :style="{  }" class="surface bottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GameTile",
    data() {
      return {
        towerHeight: 200
      }
    },
    methods: {
      changeTowerHeight: function() {
        this.towerHeight += 60
      }
    }
  }
</script>

<style scoped>
  #game-tile {
    position: absolute;
    left: 400px;
    top: 600px;
  }
  .perspective {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
  }
  .surface {
    position: absolute;
    opacity: 0.8;
    transition: 200ms;
  }
  .front {
    background-color: deepskyblue;
    width: 100px;
    height: 150px; /* tower */
    animation: spin linear infinite 5s;
    transform-origin: top;
    transform: rotateX(90deg) translateZ(-100px);
  }
  .back {
    background-color: aqua;
    width: 100px;
    height: 150px; /* tower */
    transform-origin: top;
    transform: rotateX(90deg);
  }
  .left {
    background-color: powderblue;
    width: 150px; /* tower */
    height: 100px;
    transform-origin: left;
    animation: spin2 linear infinite 5s;
    transform: rotateY(-90deg);
  }
  .right {
    background-color: khaki;
    width: 150px; /* tower */
    height: 100px;
    transform-origin: left;
    transform: rotateY(-90deg) translateZ(-100px);
  }
  .top {
    background-color: mediumpurple;
    width: 100px;
    height: 100px;
    transform: translateZ(150px); /* tower */
  }
  .bottom {
    width: 100px;
    height: 100px;
    background-color: teal;
  }
  /*
  @keyframes spin2 {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }*/
</style>
