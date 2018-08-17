<template>
  <div class="turn">
  <div :style="{ left: x + 'rem', top: y + 'rem' }" id="mother-core">
    <div class="shadow plane"></div>
    <div class="base plane">
      <div class="front plane"></div>
      <div class="back plane"></div>
      <div class="left plane"></div>
      <div class="right plane"></div>
      <div class="floor plane"></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "MotherCore",
    data() {
      return {
        x: 35,
        y: 15,
        width: 8,
        height: 8
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $animTime: 60;
  $animDuration: $animTime + s;

  $platform-width: 8;
  $platform-length: 8;

  $base-height: 0.6;

  $float-height: 1;

  #mother-core {
    transform-style: preserve-3d;
    position: absolute;
    animation: turn linear infinite $animDuration;
    .plane {
      position: absolute;
    }
    .shadow {
      width: $platform-width / 2 + rem;
      height: $platform-length / 2 + rem;
      background-color: rgba(0, 0, 0, 0.8);
      animation: shift ease-in-out infinite 5s;
    }
    .base {
      width: $platform-width + rem;
      height: $platform-length + rem;
      background-color: #404040;
      transform-style: preserve-3d;
      animation: hover ease-in-out infinite 5s;
      .front {
        width: $platform-width + rem;
        height: $base-height + rem;
        transform-origin: top;
        transform: rotateX(90deg) translateZ(-$platform-length + rem);
        background-color: orange;
        animation: blend linear infinite $animDuration;
        animation-delay: -$animTime / 4 + s;
      }
      .back {
        width: $platform-width + rem;
        height: $base-height + rem;
        transform-origin: top;
        transform: rotateX(90deg);
        animation: blend linear infinite $animDuration;
        animation-delay: $animTime / 4 + s;
        background-color: brown;
      }
      .left {
        width: $base-height + rem;
        height: $platform-length + rem;
        transform-origin: left;
        transform: rotateY(-90deg);
        animation: blend linear infinite $animDuration;
        background-color: brown;
        animation-delay: $animTime / 2 + s;
      }
      .right {
        width: $base-height + rem;
        height: $platform-length + rem;
        transform-origin: left;
        transform: rotateY(-90deg) translateZ(-$platform-width + rem);
        animation: blend linear infinite $animDuration;
      }
      .floor {
        width: $platform-width + rem;
        height: $platform-length + rem;
        transform-origin: top;
        transform: translateZ($base-height + rem);
        background-color: yellow;
        opacity: 0.7;
      }
    }
  }
  @keyframes blend {
    0% {
      background-color: brown;
    }
    25% {
      background-color: orange;
    }
    50% {
      background-color: yellow;
    }
    75% {
      background-color: orange;
    }
    100% {
      background-color: brown;
    }
  }
  @keyframes turn {
    0% {
      transform: rotateZ(0deg) translateX(-($platform-width / 2) + rem) translateY(-($platform-length / 2) + rem);
    }
    100% {
      transform: rotateZ(360deg) translateX(-($platform-width / 2) + rem) translateY(-($platform-length / 2) + rem);
    }
  }
  @keyframes hover {
    0% {
      transform: translateZ($float-height + em);
    }
    50% {
      transform: translateZ($float-height + 7 + rem);
    }
    100% {
      transform: translateZ($float-height + rem);
    }
  }
  @keyframes shift {
    0% {
      width: 8rem;
      height: 8rem;
      background-color: rgba(0, 0, 0, 0.8);
      transform: translateX(0) translateY(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);
    }
    25% {
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 0.0.1rem 0.2rem rgba(0, 0, 0, 0.6);
    }
    50% {
      width: 6rem;
      height: 6rem;
      background-color: rgba(0, 0, 0, 0.6);
      transform: translateX(1rem) translateY(1rem);
      box-shadow: 0 0 0.125rem 0.25rem rgba(0, 0, 0, 0.6);
    }
    75% {
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 0.1rem 0.2rem rgba(0, 0, 0, 0.6);
    }
    100% {
      width: 8rem;
      height: 8rem;
      background-color: rgba(0, 0, 0, 0.8);
      transform: translateX(0) translateY(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);
    }
  }
</style>
