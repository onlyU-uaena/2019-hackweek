<template>
  <div id="app">
    <div class="loading" v-if="loading !== 6">
      <div v-bind:style="loadingStyle"></div>
      <div>{{loadingStyle.width}}</div>
    </div>
    <div class="choice" v-show="choicing">
      <transition name="button1">
        <button id="button1" @click="choicingComplete" v-if="loading === 6" >研发组</button>
      </transition>
      <transition name="button2">
        <button id="button2" v-if="loading === 6">产品组</button>
      </transition>
      <transition name="button3">
        <button class="button3" v-if="loading === 6">运营组</button>
      </transition>
      <transition name="button4">
        <button id="button4" v-if="loading === 6">设计组</button>
      </transition>
      <transition name="button5">
        <button id="button5" v-if="loading === 6">行政组</button>
      </transition>
    </div>
    <div class="plotChoice">
      <div class="choiceButton">
        <transition name="button1">
          <button id="choice1" v-if=""></button>
        </transition>
        <transition name="button2">
          <button id="choice2" v-if=""></button>
        </transition>
        <transition name="button3">
          <button id="choice3" v-if=""></button>
        </transition>
        <transition name="button4">
          <button id="choice4" v-if=""></button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      choicing: '1',
      pictures: [
        'page1',
        'page2',
        'page3',
        'page4',
        'page5',
        'page6'
      ],
      picturesSrc: [
        'https://wx3.sinaimg.cn/mw690/006R4iFygy1g0jv5fe0dmj32kz2leb2h.jpg',
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
            clearInterval(watching)
          }
        }, 1)
      }
    },

  methods: {
    choicingComplete: function () {
      this.choicing = 0
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

  .choice{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .plotChoice {
    position: relative;
    height: 100%;
    width: 100%;
  }

  #button1 {
    position: absolute;
    top: 40%;
    right: 10% ;
  }

  #button2 {
    position: absolute;
    right: 25%;
    top: 30%;
  }

  .button3 {
    position: absolute;
    left:50%;
    top:20%;
    transform:translate(-50%,-50%)
  }

  #button4 {
    position: absolute;
    left: 10%;
    top: 40%;
  }

  #button5 {
    position: absolute;
    left: 25%;
    top: 30%;
  }
  .button1-enter-active {
    transition: all 2s ease;
  }

  .button1-enter{
    transform: translateY(-100px);
    opacity: 0;
  }

  .button1-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .button2-enter-active {
    transition: all 2s ease;
  }

  .button2-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .button2-enter{
    transform: translateY(-100px);
    opacity: 0;
  }

  .button3-enter-active {
    transition: all 2s ease;
  }

  .button3-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .button3-enter{
    transform: translate(-50%, -100px);
    opacity: 0;
  }

  .button4-enter-active {
    transition: all 2s ease;
  }

  .button4-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .button4-enter{
    opacity: 0;
    transform: translateY(-100px);
  }

  .button5-enter-active {
    transition: all 2s ease;
  }

  .button5-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .button5-enter{
    transform: translateY(-100px);
    opacity: 0;
  }
</style>
