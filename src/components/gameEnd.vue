<template>
  <transition name="gameEnd">
    <div>
      <img id="fullScreen" @click="showPoint" src="http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbsipznj31120ku0z1.jpg" alt="录取页"/>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'gameEnd',

    methods: {
      showPoint: function () {
        this.$emit('gameEnd')
      }
    }
  }
</script>
<style scoped>
  .gameEnd-enter-active, .gameEnd-leave-active{
    transition: opacity 1.0s;
  }

  .gameEnd-enter, .gameEnd-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
