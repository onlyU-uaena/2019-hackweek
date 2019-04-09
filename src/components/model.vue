<template>
  <transition name="model">
    <div v-show="show" class="background">
      <div class="content">
        <div class="contentHead">
          <p class="close" @click="close">x</p>
        </div>
        <div class="contentBody">{{message}}</div>
        <div class="contentFoot">
          <p @click="choice">确认选择</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'model',

    components: {},

    props: ['show', 'message'],

    data: function () {
      return {

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
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
  }

  .contentBody {
  }

  .model-enter-active, .model-leave-active {
    transition: opacity 1.5s;
  }

  .model-enter, .model-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
