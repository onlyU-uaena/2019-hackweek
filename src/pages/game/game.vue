<template>
  <div id="app">
    <div class="loading" v-if="loading !== 47">
      <div class="loadingBar" v-bind:style="loadingStyle"></div>
    </div>
    <div v-if="loading !== 47" class="loadingProgress">Loading {{loadingProgress}}</div>
    <div class="lottie" v-if="loading !== 47"><lottie :options="defaultOptions"/></div>
    <input-name v-show="inputShow" @inputComplete="inputComplete"></input-name>
    <choice v-show="choicing" @choiceOccupational="choiceOccupational"></choice>
    <first-plot v-show="firstPlotShow" v-if="firstPlotIf" :i="i" @close="firstPlotClose"></first-plot>
    <plot-choice v-if="plotChoiceIf" v-show="plotChoiceShow" :i="i" @showPlot="choiceOption" @gamePoint="checkDiscouraged"></plot-choice>
    <plot v-if="plotIf" v-show="plotShow" :i="i" :progress="progress" :discouraged="discouraged" @discouraged="BeenDiscouraged" @gameEnd="gameEnd" @clickPlot="clickPlot"></plot>
    <discouraged v-show="discouragedShow"></discouraged>
    <game-end v-show="gameEndShow" @gameEnd="showPoint"></game-end>
    <point :userName="userName" :i="i" :gamePoint="gamePoint" v-if="pointShow" v-show="pointShow" @end="end"></point>
  </div>
</template>

<script>
  import choice from '../../components/choice'
  import plotChoice from '../../components/plot_choice'
  import plot from '../../components/plot'
  import discouraged from '../../components/discouraged'
  import inputName from '../../components/input_name'
  import firstPlot from '../../components/first_plot'
  import gameEnd from '../../components/gameEnd'
  import point from '../../components/point'
  import * as animationData from '../../assets/animation-w800-h600'

  export default {
    name: 'App',

    components: {gameEnd, choice, plotChoice, plot, discouraged, inputName, firstPlot, point},

    data: function () {
      return {
        choicing: 0,
        i: '',
        inputShow: false,
        firstPlotShow: false,
        firstPlotIf: false,
        plotChoiceIf: false,
        plotIf: false,
        plotChoiceShow: false,
        plotShow: false,
        discouragedShow: false,
        discouraged: false,
        gameEndShow: false,
        gamePoint: 0,
        pointShow: false,
        userName: '',
        audio: '',
        pictures: [
          'page1',
          'page2',
          'page3',
          'page4',
          'page5',
          'page6',
          'page7',
          'page8',
          'page9',
          'page10',
          'page11',
          'page12',
          'page13',
          'page14',
          'page15',
          'page16',
          'page17',
          'page18',
          'page19',
          'page20',
          'page21',
          'page22',
          'page23',
          'page24',
          'page25',
          'page26',
          'page27',
          'page28',
          'page29',
          'page30',
          'page31',
          'page32',
          'page33',
          'page34',
          'page35',
          'page36',
          'page37',
          'page38',
          'page39',
          'page40',
          'page41',
          'page42',
          'page43',
          'page44',
          'page45',
          'page46',
          'page47',
          'page48',
          'page47'
        ],
        picturesSrc: [
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1z08wclf2j31120kujt7.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yzid8sphj31120kujzg.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yx2c9pskj31120kuthg.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yx2c9pskj31120kuthg.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbsipznj31120ku0z1.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbs8urbj31120kuwkp.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1yud6vyflj31120kuadm.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1yoiwtqu1j31120kuaj9.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1yoivwrdlj31120kuk3i.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xul2snyyj31120kuwjo.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuk5f606j31120ku0xy.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xuk4ya8mj31120kuthn.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuidijpzj31120ku77s.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xp1j4g69j31120kuwgl.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrjv0q4j31120ku413.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrizkstj31120kujty.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrinji1j31120ku771.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrhhg9sj31120kuack.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrh64pqj31120kudj1.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrgq12tj31120kuwjk.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrgcoa8j31120kun0j.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrfn2dej31120kudll.jpg',
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1u021veypj30lc0lct8u.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g219dixdtwj31120ku44s.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g219dhs1i9j31120kudm0.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g219djegv0j31120kugru.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g219di4dodj31120ku7aj.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g219diln52j31120kugru.jpg'
        ],
        loading: 0,
        progress: 0,
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        loadingStyle: {
          width: 0,
          height: '8px',
          backgroundColor: 'orange'
        },
        loadingProgress: 0
      }
    },

    created:
      function () {
        this.audio = document.createElement('audio')
        this.audio.setAttribute('src', 'http://audio.xmcdn.com/group47/M03/1E/54/wKgKk1ubPLbgzAVMACD0qpSK364636.m4a')
        for (let i = 0; i < this.pictures.length; i++) {
          this.pictures[i] = new Image()
          this.pictures[i].src = this.picturesSrc[i]
          let watching = setInterval(() => {
            if (this.pictures[i].complete) {
              this.loading++
              this.loadingStyle.width = (this.loading / this.pictures.length) * 100 + '%'
              let progress = (this.loading / this.pictures.length) * 100
              this.loadingProgress = progress.toFixed(0) + '%'
              if (this.loading === 47) {
                this.inputShow = true
                this.audio.play()
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
        this.plotIf = true
        setTimeout(() => {
          this.firstPlotShow = true
        }, 1000)
        this.choicing = false
      },

      firstPlotClose: function () {
        setTimeout(() => {
          this.plotChoiceShow = true
        }, 1000)
        this.firstPlotShow = false
      },

      choiceOption: function (progress) {
        this.plotChoiceShow = false
        this.progress = progress
        setTimeout(() => {
          this.plotShow = true
        }, 1000)
      },

      checkDiscouraged: function (gamePoint) {
        this.gamePoint = gamePoint
        if (gamePoint < 59) {
          this.discouraged = true
        }
      },

      BeenDiscouraged: function () {
        this.plotChoiceIf = false
        this.PlotShow = false
        setTimeout(() => {
          this.discouragedShow = true
          this.plotIf = false
        }, 1000)
      },

      gameEnd: function () {
        this.plotChoiceIf = false
        this.PlotShow = false
        setTimeout(() => {
          this.gameEndShow = true
          this.plotIf = false
        }, 1000)
      },

      end: function () {
        this.pointShow = false
      },

      showPoint: function () {
        this.gameEndShow = false
        setTimeout(() => {
          this.pointShow = true
        }, 1000)
      },

      clickPlot: function () {
        this.plotShow = false
        setTimeout(() => {
          this.plotChoiceShow = true
        }, 1000)
      },

      inputComplete: function (userName) {
        setTimeout(() => {
          this.choicing = true
        }, 1000)
        this.inputShow = false
        this.userName = userName
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

  .lottie {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, 0);
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
    position: absolute;
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background-color: #a9a7a6;
  }

  .loadingBar {
    border-radius: 12px;
    position: relative;
  }

  .loadingProgress {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: monospace;
    font-size: 28px;
    font-weight: bold;
  }
</style>
