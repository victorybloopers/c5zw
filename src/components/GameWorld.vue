<template>
  <div id="world">
    <div class="perspective">
      <SteamVent />
      <GrowingTower />
      <Windmill />
      <MotherCore />
    </div>
  </div>
</template>

<script>
  import SteamVent from './SteamVent'
  import GrowingTower from './GrowingTower'
  import Windmill from './Windmill'
  import MotherCore from './MotherCore'

  export default {
    name: "GameWorld",
    components: {
      SteamVent,
      GrowingTower,
      Windmill,
      MotherCore
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #world {
    background: linear-gradient(to right bottom, #23d4d4, #0044ff)
  }

  .perspective {
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
  }
</style>
