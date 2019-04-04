<template>
  <div class="onlyPlot" @click="clickPlot">
    <div class="centerPlot">{{showPlot[progress]}}</div>
  </div>
</template>

<script>
  export default {
    name: 'plot',

    props: ['i'],

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
        this.progress++
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
</style>
