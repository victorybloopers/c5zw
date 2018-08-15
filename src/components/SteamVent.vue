<template>
  <div id="vent">
    <div class="floor">
      <div class="slot"></div>
      <div class="slot"></div>
      <div class="slot"></div>
      <div class="slot"></div>
      <div class="slot"></div>
      <div class="steam" style="top: 2rem; left: 1rem; animation-delay: 14s"></div>
      <div class="steam" style="top: 2.5rem; left: 0.5rem; animation-delay: 22s"></div>
      <div class="steam" style="top: 0.5rem; left: 1.125rem; animation-delay: 36s"></div>
      <div class="steam"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SteamVent"
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #vent {
    position: absolute;
    left: 20rem;
    .floor {
      box-sizing: border-box;
      padding-top: 0.35rem;
      width: 3em;
      height: 3em;
      background-color: #6e6f6f;
      .slot {
        width: 2.25rem;
        height: 0.25rem;
        margin-left: 0.35rem;
        margin-bottom: 0.25rem;
        background-color: rgba(0, 0, 0, 0.8);
      }
      .steam {
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        left: 0.5rem;
        top: 1rem;
        width: 1.5rem;
        transform-origin: top;
        animation: rise ease infinite 10s;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }
  }
  @keyframes rise {
    0% {
      background-color: rgba(255, 255, 255, 0);
      transform: rotateX(90deg) translateY(-0.25rem);
      height: 0rem;
    }
    20% {
      background-color: rgba(255, 255, 255, 0.3);
    }
    60% {
      background-color: rgba(255, 255, 255, 0.3);
    }
    80% {
      height: 10rem;
    }
    100% {
      background-color: rgba(255, 255, 255, 0);
      transform: rotateX(90deg) translateY(0.5rem);
    }
  }
</style>
