<template>
  <transition name="model">
    <div v-show="show" class="background">
      <div class="content">
        <img id="enter" @click="choice" src="../assets/enter.png" alt="确认"/>
        <img id="cancel" @click="close" src="../assets/cancel.png" alt="取消"/>
        <img :src="picturesSrc[i]" class="modelContent" alt="模态框"/>
      </div>
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
          '../../static/development.png',
          '../../static/products.png',
          '../../static/operation.png',
          '../../static/administrative.png',
          '../../static/design.png'
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

  .content {
    height: 100%;
  }

  #enter, #cancel {
    z-index: 100;
    position: absolute;
    width: 5%;
    height: 10%;
    left: 75%;
    top: 34%;
    box-shadow: 2px 2px 3px #888888;
  }

  #cancel {
    left: 65%;
    width: 5.5%;
    height: 10.5%;
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
    transition: opacity 1.5s;
  }

  .model-enter, .model-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
