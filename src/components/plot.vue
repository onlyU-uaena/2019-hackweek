<template>
  <transition name="onlyPlot">
    <div class="onlyPlot" @click="clickPlot">
      <img v-bind:src="showPlot[progress]" id="fullScreen"  alt="情节"/>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'plot',

    props: ['i', 'discouraged', 'progress'],

    data: function () {
      return {
        showPlot: '',
        plot0:
        ['http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1wqnxntomj31120kun1y.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqnxc7hzj31120kuafz.jpg',
          'http://wx4.sinaimg.cn/mw690/005JHgrHgy1g1wqnxyn16j31120kutcw.jpg',
          'http://wx4.sinaimg.cn/mw690/005JHgrHgy1g1wqnz0ps8j31120kujvx.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqnzo9ufj31120kuaee.jpg',
          '',
          '',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqnzyfjuj31120ku0x4.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqo0hsysj31120kuae6.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqo0zaxcj31120kujv9.jpg'],
        plot1: ['情节1', '情节2'],
        plot2: ['情节1', '情节2'],
        plot3: ['情节1', '情节2'],
        plot4:
        ['http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1wqnxntomj31120kun1y.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqnxc7hzj31120kuafz.jpg',
          'http://wx4.sinaimg.cn/mw690/005JHgrHgy1g1wqnxyn16j31120kutcw.jpg',
          'http://wx4.sinaimg.cn/mw690/005JHgrHgy1g1wqnz0ps8j31120kujvx.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqnzo9ufj31120kuaee.jpg',
          '',
          '',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqnzyfjuj31120ku0x4.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqo0hsysj31120kuae6.jpg',
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1wqo0zaxcj31120kujv9.jpg']
      }
    },

    created: function () {
      switch (this.i) {
        case 0: this.showPlot = this.plot0
          break
        case 1: this.showPlot = this.plot1
          break
        case 2: this.showPlot = this.plot2
          break
        case 3: this.showPlot = this.plot3
          break
        case 4: this.showPlot = this.plot4
          break
      }
    },

    methods: {
      clickPlot: function () {
        this.$emit('clickPlot')
        if (this.discouraged === true) {
          this.$emit('discouraged')
        }
      }
    }
  }
</script>

<style scoped>
  .onlyPlot{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .centerPlot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
  }

  .onlyPlot-enter-active {
    transition: opacity 1.5s;
  }

  .onlyPlot-leave-active {
    transition: opacity 1.5s;
  }
  .onlyPlot-enter, .onlyPlot-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
