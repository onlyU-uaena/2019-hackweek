<template>
  <div id="app">
    <div class="loading" v-if="loading !== 6">
      <div v-bind:style="loadingStyle"></div>
      <div>{{loadingStyle.width}}</div>
    </div>
    <choice v-if="choicing" @choice="text"></choice>
    <div class="plotChoice">
      <div class="Plot">剧情</div>
      <div class="choiceButton">
        <div class="choiceLeft">
          <transition name="button1">
            <button id="choice1" v-if="">选项1</button>
          </transition>
          <transition name="button2">
            <button id="choice2" v-if="">选项2</button>
          </transition>
        </div>
        <div class="choiceRight">
          <transition name="button3">
            <button id="choice3" v-if="">选项3</button>
          </transition>
          <transition name="button4">
            <button id="choice4" v-if="">选项4</button>
          </transition>
        </div>
      </div>
    </div>
    <div class="onlyPlot">
      <div class="centerPlot">剧情</div>
    </div>
  </div>
</template>

<script>
  import choice from '../../components/choice'
  export default {
    name: 'App',

    components: {choice},

    data: function () {
      return {
        choicing: 0,
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
        loadingStyle: {
          width: 0,
          height: '20px',
          backgroundColor: 'yellow'
        }
      }
    },

    created:
      function () {
        for (let i = 0; i < this.pictures.length; i++) {
          this.pictures[i] = new Image()
          this.pictures[i].src = this.picturesSrc[i]
          let watching = setInterval(() => {
            if (this.pictures[i].complete) {
              this.loading++
              this.loadingStyle.width = (this.loading / this.pictures.length) * 100 + '%'
              if (this.loading === 6) {
                this.choicing = true
              }
              clearInterval(watching)
            }
          }, 1)
        }
      },

    methods: {
      text: function () {
        alert('qq')
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

  #app {
    width: 100%;
    height: 100%;
  }

  .loading {
    width: 50%;
    height: 20%;
    margin: 20% auto 0;
  }

  .plotChoice, .onlyPlot{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .choiceButton {
    position: absolute;
    transform:translate(-50%, 0);
    width: 50%;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    height: 30%;
  }

  #choice1, #choice2 {
    float: left;
  }

  .choiceLeft, .choiceRight{
    height: 100%;
    width: 50%;
    float: left;
  }

  #choice3, #choice4 {
    float: right;
  }

  #choice1 , #choice2, #choice3, #choice4 {
    width: 60%;
    margin: 10%;
  }

  .Plot {
    position: absolute;
    top: 10%;
    left: 50%;
    transform:translate(-50%, 0);
    width: 50%;
    height: 30%;
    text-align: center;
  }

  .centerPlot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
  }
</style>
