<template>
  <transition name="discouraged">
    <div class="discouraged">
      <transition name="page1">
        <img v-show="pageShow" id="fullScreen" @click="page2Show" src="http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbs8urbj31120kuwkp.jpg" alt="劝退">
      </transition>
      <transition name="page2">
        <img v-show="show" id="repeat" @click="repeat" src="http://wx3.sinaimg.cn/large/005JHgrHgy1g1yzid8sphj31120kujzg.jpg" alt="重启"/>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Discouraged',

    data: function () {
      return {
        show: false,
        pageShow: true
      }
    },

    methods: {
      page2Show: function () {
        this.pageShow = false
        setTimeout(() => {
          this.show = true
        }, 1500)
      },

      repeat: function () {
        this.show = false
        setTimeout(() => {
          window.open('game.html', '_self')
        }, 1500)
      }
    }
  }
</script>

<style scoped>

  .discouraged {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .discouraged-enter-active, .page2-enter-active {
    transition: opacity 1.0s;
  }

  .discouraged-leave-active, .page1-leave-active, .page2-leave-active {
    transition: opacity 1.0s;
  }
  .discouraged-enter, .page2-enter, .page2-leave-to, .page1-enter ,.page1-leave-to, .discouraged-leave-to {
    opacity: 0;
  }

  #repeat {
    position: absolute;
    height: 100%;
    width: 100%;
  }

</style>
