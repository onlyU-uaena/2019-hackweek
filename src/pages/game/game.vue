<template>
  <div id="app">
    <div class="loading" v-if="loading !== 42">
      <div v-bind:style="loadingStyle"></div>
      <div>{{loadingProgress}}</div>
    </div>
    <input-name v-show="inputShow" @inputComplete="inputComplete"></input-name>
    <choice v-show="choicing" @choiceOccupational="choiceOccupational"></choice>
    <first-plot v-show="firstPlotShow" v-if="firstPlotIf" :i="i" @close="firstPlotClose"></first-plot>
    <plot-choice v-if="plotChoiceIf" v-show="plotChoiceShow" :i="i" @showPlot="choiceOption" @gamePoint="checkDiscouraged"></plot-choice>
    <plot v-if="plotIf" v-show="plotShow" :i="i" :progress="progress" :discouraged="discouraged" @discouraged="BeenDiscouraged" @gameEnd="gameEnd" @clickPlot="clickPlot"></plot>
    <discouraged v-show="discouragedShow"></discouraged>
    <game-end v-show="gameEndShow" @gameEnd="showPoint"></game-end>
    <point v-show="pointShow"></point>
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
        pointShow: false,
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
          'page42'
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
          'http://wx3.sinaimg.cn/large/005JHgrHgy1g1u021veypj30lc0lct8u.jpg'
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
          this.audio.setAttribute('src', 'http://cloud.mail.163.com/dfs/service/%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90.mp3?op=downloadFile&uid=5924b993eaf5c3bce6339e6050a85412@tencent.163.com&file=eyJzIjoiZnM6Y2xvdWRzdG9yYWdlLm1haWwuMTYzOjQ4NDM3NDg4OTYyNyIsInNmIjoiNDg1Njk0NzQxODM0OjQ4NDM3NDg4OTYyNyIsImkiOjg5MjY5MzQ5MDU5NzE3MDMsImNzIjp7InQiOjEsInYiOiIwMjE3MmE4YzQyYWZjM2NiMDc0NjA4NTZjOWIzMjc0ZCJ9LCJzeiI6MTA2NjQyNzEsImN0IjoxNTU0OTkwNzk0NzgzfQ&callback=http://wp.163.com:80/filehub/html/downloadCallback.jsp')
          this.audio.play()
          this.pictures[i] = new Image()
          this.pictures[i].src = this.picturesSrc[i]
          let watching = setInterval(() => {
            if (this.pictures[i].complete) {
              this.loading++
              this.loadingStyle.width = (this.loading / this.pictures.length) * 100 + '%'
              let progress = (this.loading / this.pictures.length) * 100
              this.loadingProgress = progress.toFixed(0) + '%'
              if (this.loading === 42) {
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
        this.plotIf = true
        setTimeout(() => {
          this.firstPlotShow = true
        }, 1500)
        this.choicing = false
      },

      firstPlotClose: function () {
        setTimeout(() => {
          this.plotChoiceShow = true
        }, 1500)
        this.firstPlotShow = false
      },

      choiceOption: function (progress) {
        this.plotChoiceShow = false
        this.progress = progress
        setTimeout(() => {
          this.plotShow = true
        }, 1500)
      },

      checkDiscouraged: function (gamePoint) {
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
        }, 1500)
      },

      gameEnd: function () {
        this.plotChoiceIf = false
        this.PlotShow = false
        setTimeout(() => {
          this.gameEndShow = true
          this.plotIf = false
        }, 1500)
      },

      showPoint: function () {
        this.gameEndShow = false
        setTimeout(() => {
          this.pointShow = true
        }, 1500)
      },

      clickPlot: function () {
        this.plotShow = false
        setTimeout(() => {
          this.plotChoiceShow = true
        }, 1500)
      },

      inputComplete: function () {
        setTimeout(() => {
          this.choicing = true
        }, 1500)
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
