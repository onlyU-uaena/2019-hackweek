<template>
  <transition name="model">
    <div v-show="show" class="background">
      <img id="fullScreen" :src="picturesSrc[i]" alt="模态框"/>
      <img @click="choice" src="../assets/enter.png" id="enter" alt="确认"/>
      <img @click="close" src="../assets/cancel.png" id="cancel" alt="取消"/>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'model',

    props: ['show', 'i'],

    data: function () {
      return {
        picturesSrc: [
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g219dixdtwj31120ku44s.jpg',
          'http://wx1.sinaimg.cn/large/005JHgrHgy1g219dhs1i9j31120kudm0.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g219djegv0j31120kugru.jpg',
          'http://wx4.sinaimg.cn/large/005JHgrHgy1g219di4dodj31120ku7aj.jpg',
          'http://wx2.sinaimg.cn/large/005JHgrHgy1g219diln52j31120kugru.jpg'
        ]
      }
    },

    methods: {
      close: function () {
        this.$emit('close')
      },

      choice: function () {
        this.$emit('choice')
      }
    }
  }
</script>

<style scoped>
  .background {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  #enter, #cancel {
    z-index: 100;
    position: absolute;
    width: 40%;
    height: 65%;
    left: 60%;
    top: 35.8%;
  }

  #cancel {
    top: 50%;
    left: 0;
    width: 40%;
    height: 65%;
  }

  .modelContent {
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
  }

  .model-enter-active, .model-leave-active {
    transition: opacity 1.0s;
  }

  .model-enter, .model-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
