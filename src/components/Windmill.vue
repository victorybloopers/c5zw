<template>
  <div id="windmill">
    <div class="south wall"></div>
    <div class="east wall"></div>
    <div class="roof"></div>
    <div class="south-head wall"></div>
    <div class="east-head"></div>
    <div class="wheel">
      <div class="turbine">
        <div class="blade"></div>
        <div class="blade"></div>
        <div class="blade"></div>
        <div class="blade"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Windmill"
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $basewidth: 2rem;
  $baseheight: 25rem;
  $bladewidth: 2rem;
  $bladelength: 15rem;

  #windmill {
    position: absolute;
    left: 120rem;
    top: -40rem;
    .wall {
      position: absolute;
      box-sizing: border-box;
    }
    .south {
      width: $basewidth;
      height: $baseheight;
      background-color: #d7d7d7;
      transform-origin: top;
      transform: rotateX(90deg) translateZ(-$basewidth);
    }
    .east {
      width: $baseheight;
      height: $basewidth;
      background-color: #a9a9a9;
      transform-origin: left;
      transform: rotateY(-90deg) translateZ(-$basewidth);
    }
    .south-head {
      width: 4rem;
      height: 2rem;
      background-color: #e2e2e2;
      transform: rotateX(90deg) translateZ(1rem) translateY(25rem);
    }
    .east-head {
      width: 2rem;
      height: 5rem;
      transform-origin: left;
      background-color: #bcbcbc;
      transform: rotateY(-90deg) translateZ(-3rem) translateY(-6rem) translateX(22.57rem);
    }
    .roof {
      width: 4rem;
      height: 5rem;
      background-color: #f9f9f9;
      transform: translateZ(26rem);
    }
    .wheel {
      width: 15rem;
      height: 15rem;
      background-color: rgba(0, 0, 0, 0);
      transform-origin: top;
      transform-style: preserve-3d;
      transform: rotateX(90deg) rotateZ(0deg) translateY(24.5rem) translateX(-0.6rem);
      .turbine {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        animation: spin linear infinite 5s;
        .blade {
          width: 15rem;
          height: 2rem;
          position: absolute;
          background-color: #ffffff;
        }
        .blade:nth-child(1) {
          left: 50%;
          top: 50%;
          transform: translateY(-50%);
          border-bottom-right-radius: 1rem;
          border-top-right-radius: 1rem;
          border-bottom-left-radius: 50%;
          border-top-left-radius: 50%;
        }
        .blade:nth-child(2) {
          top: 50%;
          left: -50%;
          transform: translateY(-50%);
          border-bottom-left-radius: 1rem;
          border-top-left-radius: 1rem;
          border-bottom-right-radius: 50%;
          border-top-right-radius: 50%;
        }
        .blade:nth-child(3) {
          transform: rotate(90deg) translateX(-1em);
          border-bottom-left-radius: 1rem;
          border-top-left-radius: 1rem;
          border-bottom-right-radius: 50%;
          border-top-right-radius: 50%;
        }
        .blade:nth-child(4) {
          top: 100%;
          transform: rotate(90deg) translateX(-1em);
          border-bottom-right-radius: 1rem;
          border-top-right-radius: 1rem;
          border-bottom-left-radius: 50%;
          border-top-left-radius: 50%;
        }
      }
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
