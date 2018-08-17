<template>
  <div id="pushy-shroom">
    <div class="shadow surface"></div>
    <div class="stalk">
        <div :style="{ height: pushyHeight + 'rem' }" class="front surface"></div>
        <div :style="{ width: (pushyHeight - 1) + 'rem' }" class="right surface"></div>
    </div>
    <div @click="pushyShroom" :style="{ transform: 'translateZ(' + pushyHeight + 'rem)' }" class="cap">
      <div class="front surface">
      </div>
      <div class="right surface"></div>
      <div class="top surface">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store.js'

  export default {
    name: "PushyShroom",
    data() {
      return {
        storage: store.state,
      }
    },
    computed: {
      pushyHeight: function() {
        return store.state.objects.pushyShroom.height
      }
    },
    methods: {
      pushyShroom: function() {
        if (this.storage.objects.pushyShroom.height > 4) {
          this.storage.objects.pushyShroom.height -= 2
          this.storage.objects.pumpyShroom.height += 2
        }
        if (this.storage.objects.pushyShroom.height <= 4) {
          console.log('test')
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #pushy-shroom {
    position: absolute;
    left: 100rem;
    top: 5rem;
    transform-style: preserve-3d;
    .surface {
      position: absolute;
    }
    .shadow {
      width: 5rem;
      height: 5rem;
      background-color: rgba(0, 0, 0, 0.3);
      transform: translateX(-2rem) translateY(-2rem);
    }
    .stalk {
      transform-style: preserve-3d;
      .front {
        width: 1rem;
        transform-origin: top;
        transform: rotateX(90deg) translateZ(-1rem);
        background-color: white;
        transition: 200ms;
      }
      .right {
        width: 9rem;
        height: 1rem;
        transform-origin: left;
        transform: rotateY(-90deg) translateZ(-1rem);
        background-color: whitesmoke;
      }
    }
    .cap {
      transform-style: preserve-3d;
      transition: 200ms;
      .front {
        width: 5rem;
        height: 1rem;
        background-color: orangered;
        transform-origin: top;
        transform: rotateX(90deg) translateX(-2rem) translateZ(-3rem);
      }
      .right {
        width: 1rem;
        height: 5rem;
        background-color: firebrick;
        transform-origin: left;
        transform: rotateY(-90deg) translateY(-2rem) translateZ(-3rem);
      }
      .top {
        width: 5rem;
        height: 5rem;
        background-color: tomato;
        transform: translateX(-2rem) translateY(-2rem) translateZ(1rem);
        overflow: hidden;
        .dot {
          position: absolute;
          border-radius: 50%;
          background-color: whitesmoke;
        }
        .dot:nth-child(1) {
          width: 1.5rem;
          height: 1.5rem;
          left: 1rem;
          top: -0.5rem;
        }
        .dot:nth-child(2) {
          width: 1.75rem;
          height: 1.75rem;
          left: -0.25rem;
          top: 1.25rem;
        }
        .dot:nth-child(3) {
          width: 1.25rem;
          height: 1.25rem;
          left: 2.5rem;
          top: 1.25rem;
        }
        .dot:nth-child(4) {
          width: 1.25rem;
          height: 1.25rem;
          left: 0.75rem;
          top: 4rem;
        }
        .dot:nth-child(5) {
          width: 2rem;
          height: 2rem;
          left: 3.25rem;
          top: 3.5rem;
        }
        .dot:nth-child(6) {
          width: 1rem;
          height: 1rem;
          left: 4.25rem;
          top: 1.25rem;
        }
        .dot:nth-child(7) {
          width: 0.85rem;
          height: 0.85rem;
          left: 3.25rem;
          top: -0.5rem;
        }
        .dot:nth-child(8) {
          width: 0.5rem;
          height: 0.5rem;
          left: -0.25rem;
          top: 3.5rem;
        }
        .dot:nth-child(9) {
          width: 0.75rem;
          height: 0.75rem;
          left: 2rem;
          top: 3rem;
        }
      }
    }
  }
</style>
