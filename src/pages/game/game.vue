<template>
  <div id="app">
    <div class="loading" v-if="loading !== 6">
      <div v-bind:style="loadingStyle"></div>
      <div>{{loadingProgress}}</div>
    </div>
    <input-name v-show="inputShow" @inputComplete="inputComplete"></input-name>
    <choice v-show="choicing" @choiceOccupational="choiceOccupational"></choice>
    <first-plot v-show="firstPlotShow" v-if="firstPlotIf" :i="i" @close="firstPlotClose"></first-plot>
    <plot-choice v-if="plotChoiceIf" v-show="plotChoiceShow" :i="i" @showPlot="choiceOption" @gamePoint="checkDiscouraged"></plot-choice>
    <plot v-if="PlotIf" v-show="plotShow" :i="i" :progress="progress" :discouraged="discouraged" @discouraged="BeenDiscouraged" @clickPlot="clickPlot"></plot>
    <discouraged v-show="discouragedShow"></discouraged>
  </div>
</template>

<script>
  import choice from '../../components/choice'
  import plotChoice from '../../components/plot_choice'
  import plot from '../../components/plot'
  import discouraged from '../../components/discouraged'
  import inputName from '../../components/input_name'
  import firstPlot from '../../components/first_plot'

  export default {
    name: 'App',

    components: {choice, plotChoice, plot, discouraged, inputName, firstPlot},

    data: function () {
      return {
        choicing: 0,
        i: '',
        inputShow: false,
        firstPlotShow: false,
        firstPlotIf: false,
        plotChoiceIf: false,
        PlotIf: false,
        plotChoiceShow: false,
        plotShow: false,
        discouragedShow: false,
        discouraged: false,
        audio: '',
        pictures: [
          'page1',
          'page2',
          'page3',
          'page4',
          'page5',
          'page6'
        ],
        picturesSrc: [
          'http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1olrebrjij31120kujvj.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2079932039,2403444542&fm=27&gp=0.jpg',
          'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7e685ef2f903918fc8d13bca613d264b/b3119313b07eca80787730f59f2397dda14483b5.jpg',
          'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2923f3cd9e5298221a333fc3e7ca7b3b/77094b36acaf2eddcccc86e3831001e9390193ff.jpg',
          'https://i04picsos.sogoucdn.com/bf8ef3bd8a93e901',
          'https://img01.sogoucdn.com/app/a/100520020/9e9f851b1d08b8492a66fdb15f3c2070'
        ],
        loading: 0,
        progress: 0,
        loadingStyle: {
          width: 0,
          height: '20px',
          backgroundColor: 'yellow'
        },
        loadingProgress: 0
      }
    },

    created:
      function () {
        for (let i = 0; i < this.pictures.length; i++) {
          this.audio = document.createElement('audio')
          this.audio.setAttribute('src', 'http://s128.xiami.net/439/85439/423508/1770009616_1986471_l.mp3?ccode=xiami__&expire=86400&duration=266&psid=5ba9b0e976847aecc877848999246dd4&ups_client_netip=null&ups_ts=1554798810&ups_userid=0&utid=&vid=1770009616&fn=1770009616_1986471_l.mp3&vkey=B276a3a64c563f5ac9b947ba8a8180111')
          this.audio.play()
          this.pictures[i] = new Image()
          this.pictures[i].src = this.picturesSrc[i]
          let watching = setInterval(() => {
            if (this.pictures[i].complete) {
              this.loading++
              this.loadingStyle.width = (this.loading / this.pictures.length) * 100 + '%'
              let progress = (this.loading / this.pictures.length) * 100
              this.loadingProgress = progress.toFixed(0) + '%'
              if (this.loading === 6) {
                this.inputShow = true
              }
              clearInterval(watching)
            }
          }, 1)
        }
      },

    methods: {
      choiceOccupational: function (i) {
        this.i = i
        this.firstPlotIf = true
        this.plotChoiceIf = true
        this.PlotIf = true
        this.firstPlotShow = true
        this.choicing = false
      },

      firstPlotClose: function () {
        this.plotChoiceShow = true
        this.firstPlotShow = false
      },

      choiceOption: function (progress) {
        this.plotChoiceShow = false
        this.progress += progress
        setTimeout(() => {
          this.plotShow = true
        }, 1500)
      },

      checkDiscouraged: function (gamePoint) {
        if (gamePoint < 49) {
          this.discouraged = true
        }
      },

      BeenDiscouraged: function () {
        this.plotChoiceShow = false
        setTimeout(() => {
          this.discouragedShow = true
        }, 1500)
      },

      clickPlot: function () {
        this.plotShow = false
        this.plotChoiceShow = true
      },

      inputComplete: function () {
        this.choicing = true
        this.inputShow = false
      }
    }
}
</script>

<style>
  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #fullScreen {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .loading {
    width: 50%;
    height: 20%;
    margin: 20% auto 0;
  }
</style>
