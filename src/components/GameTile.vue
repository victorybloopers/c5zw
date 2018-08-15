<template>
  <div id="grid">
    <div class="perspective">
      <SteamVent />
      <div v-hammer:tap="changeTowerHeight" class="tower">
        <div class="surface bottom"></div>
        <div :style="{ height: towerHeight + 'rem' }" class="surface back"></div>
        <div :style="{ width: towerHeight + 'rem' }" class="surface left"></div>
        <div :style="{ width: towerHeight + 'rem' }" class="surface right"></div>
        <div :style="{ transform: 'translateZ(' + towerHeight + 'rem)' }" class="surface top"></div>
        <div :style="{ height: towerHeight + 'rem' }" class="surface front"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import SteamVent from './SteamVent'
  export default {
    name: "GameTile",
    components: {
      SteamVent
    },
    data() {
      return {
        towerHeight: 4
      }
    },
    methods: {
      changeTowerHeight: function() {
        this.towerHeight += 4;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #grid {
  }
  .perspective {
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
  }
  .surface {
    position: absolute;
    transition: 200ms;
    box-sizing: border-box;
  }
  .tower {
    position: absolute;
    top: 0rem;
    left: 40rem;
  }
  /*
  .front:hover {
    animation: glow linear infinite 600ms;
  }
  @keyframes glow {
    0% {
      border-top: 3px solid rgba(255, 255, 255, 0);
      border-left: 2px solid rgba(255, 255, 255, 0);
    }
    50% {
      border-top: 3px solid rgba(255, 255, 255, 1);
      border-left: 2px solid rgba(255, 255, 255, 1);
    }
    100% {
      border-top: 3px solid rgba(255, 255, 255, 0);
      border-left: 2px solid rgba(255, 255, 255, 0);
    }
  }
  */
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
    animation: spin2 linear infinite 5s;
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
  /*
  .shadow {
    background-color: rgba(0, 0, 0, 0.5);
    width: 4rem;
    height: 4rem;
  } */
</style>
