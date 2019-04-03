<template>
  <div class="choice">
    <img id="fullScreen" src="http://wx1.sinaimg.cn/mw690/005JHgrHgy1g1olrebrjij31120kujvj.jpg" alt="背景"/>
    <div id="button1" @click="openModel(0)"></div>
    <div id="button2" @click="openModel(1)"></div>
    <div id="button3" @click="openModel(2)"></div>
    <div id="button4" @click="openModel(3)"></div>
    <div id="button5" @click="openModel(4)"></div>
    <model :message = message[i] :show="show" @close="closeModel"></model>
  </div>
</template>

<script>
  import model from './model'
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
        this.i = i
        this.show = true
      },

      closeModel: function () {
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

  #fullScreen {
    position: absolute;
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


</style>
