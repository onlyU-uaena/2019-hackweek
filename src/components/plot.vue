<template>
  <transition name="onlyPlot">
    <div class="onlyPlot" @click="clickPlot">
      <div class="centerPlot">{{showPlot[progress]}}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'plot',

    props: ['i', 'discouraged'],

    data: function () {
      return {
        progress: 0,
        showPlot: '',
        plot0: ['情节1', '情节2'],
        plot1: ['情节1', '情节2'],
        plot2: ['情节1', '情节2'],
        plot3: ['情节1', '情节2'],
        plot4: ['情节1', '情节2']
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
        // 多50ms防止文字突变
        setTimeout(() => {
          this.progress++
        }, 1550)
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
