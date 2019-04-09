<template>
  <transition name="discouraged">
    <div class="discouraged">劝退页</div>
  </transition>
</template>

<script>
  export default {
    name: 'Discouraged'
  }
</script>

<style scoped>

  .discouraged {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .discouraged-enter-active {
    transition: opacity 1.5s;
  }

  .discouraged-leave-active {
    transition: opacity 1.5s;
  }
  .discouraged-enter, .discouraged-leave-to {
    opacity: 0;
  }

</style>
