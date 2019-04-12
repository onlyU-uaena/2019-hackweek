<template>
  <transition name="choice">
    <div class="choice">
      <img id="fullScreen" src="http://wx4.sinaimg.cn/large/005JHgrHgy1g1yx2c9pskj31120kuthg.jpg" alt="背景"/>
      <img src="../assets/xiaojiayuan.png" id="move" alt="小家园" />
      <div id="button1" @click="openModel(0)"></div>
      <div id="button2" @click="openModel(1)"></div>
      <div id="button3" @click="openModel(2)"></div>
      <div id="button4" @click="openModel(3)"></div>
      <div id="button5" @click="openModel(4)"></div>
      <model :show="show" :i="i" @close="closeModel" @choice="choiceOccupational"></model>
    </div>
  </transition>
</template>

<script>
  import model from './model'
  import {TweenLite} from 'gsap/TweenMax'
  export default {
    name: 'choice',

    components: {model},

    props: [''],

    data: function () {
      return {
        message: ['研发', '产品', '运营', '行政', '设计'],
        i: 0,
        show: false
      }
    },

    methods: {
      openModel: function (i) {
        switch (i) {
          case 0:
            TweenLite.to('#move', 2, {left: '10%'})
            setTimeout(() => {
              this.i = i
              this.show = true
            }, 2000)
            break
          case 1:
            TweenLite.to('#move', 2, {left: '24%'})
            setTimeout(() => {
              this.i = i
              this.show = true
            }, 2000)
            break
          case 2:
            TweenLite.to('#move', 2, {left: '40%'})
            setTimeout(() => {
              this.i = i
              this.show = true
            }, 2000)
            break
          case 3:
            TweenLite.to('#move', 2, {left: '53%'})
            setTimeout(() => {
              this.i = i
              this.show = true
            }, 2000)
            break
          case 4:
            TweenLite.to('#move', 2, {left: '64%'})
            setTimeout(() => {
              this.i = i
              this.show = true
            }, 2000)
            break
        }
      },

      closeModel: function () {
        this.show = false
      },

      choiceOccupational: function () {
        this.$emit('choiceOccupational', this.i)
        this.show = false
      }
    }
  }
  
</script>

<style scoped>
  .choice {
    position: relative;
    height: 100%;
    width: 100%;
  }

  #button1 {
    position: absolute;
    top: 74%;
    left: 20%;
    width: 5%;
    height: 12%;
  }

  #button2 {
    position: absolute;
    top: 74%;
    left: 33.5%;
    width: 5%;
    height: 12%;
  }

  #button3 {
    position: absolute;
    top: 74%;
    left: 48%;
    width: 9%;
    height: 12%;
  }

  #button4 {
    position: absolute;
    top: 74%;
    left: 62%;
    width: 5%;
    height: 12%;
  }

  #button5 {
    position: absolute;
    top: 74%;
    left: 73%;
    width: 5%;
    height: 12%;
  }

  #move {
    position: absolute;
    top: 56%;
    left: 5%;
    width: 10%;
    height: 30%;
  }

  .choice-enter-active, .choice-leave-active {
    transition: opacity 1.5s;
  }
  .choice-enter, .choice-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
