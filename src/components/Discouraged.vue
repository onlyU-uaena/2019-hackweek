<template>
  <transition name="discouraged">
    <p>劝退页</p>
  </transition>
</template>

<script>
  export default {
    name: 'Discouraged'
  }
</script>

<style scoped>

  .discouraged-enter-active {
    transition: opacity 1.5s;
  }

  .discouraged-leave-active {
    transition: opacity 1.5s;
  }
  .discouraged-enter, .discouraged-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
