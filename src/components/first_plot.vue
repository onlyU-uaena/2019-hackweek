<template>
  <transition name="firstPlot">
    <div class="firstPlot" @click="close">
      <img id="fullScreen" src="http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrfn2dej31120kudll.jpg" alt="firstPlot"/>
      <div class="msg"><p>恭喜你，在一轮笔试和两轮面试中过关斩将，成为家园工作室{{msg}}的一员!</p></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'first_plot',

    props: ['i'],

    created: function () {
      switch (this.i) {
        case 0: this.msg = '研发组'
          break
        case 1: this.msg = '产品组'
          break
        case 2: this.msg = '运营组'
          break
        case 3: this.msg = '行政组'
          break
        case 4: this.msg = '设计组'
          break
      }
    },

    data: function () {
      return {
        msg: ''
      }
    },

    methods: {
      close: function () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .firstPlot {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .firstPlot-enter-active {
    transition: opacity 1.5s;
  }

  .firstPlot-leave-active {
    transition: opacity 1.5s;
  }

  .firstPlot-enter, .firstPlot-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .msg {
    position: absolute;
    width: 90%;
    bottom: 10%;
    transform:translate(-50%, 0);
    height: 30%;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
  }

  .msg p {
    margin-left: 30px;
    margin-right: 30px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }
</style>
