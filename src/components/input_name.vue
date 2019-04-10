<template>
  <transition name="inputName">
    <div class="inputName">
      <label>昵称
        <input placeholder="请输入昵称" v-model="msg"/>
      </label>
      <button @click="send">进入游戏</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'input_name',

    data () {
      return {
        msg: '',
        index: true,
        audio: ''
      }
    },

    created: function () {
      this.audio = document.createElement('audio')
      this.audio.setAttribute('src', '')
    },

    methods: {
      send: function () {
        this.$http.post('/upload', {
          name: this.msg
        })
          .then((res) => {
            console.log(res)
            if (res.data.data.statu === 'ok') {
              this.$emit('inputComplete')
            }
          })
          .catch(function (err) {
            console.log(err)
            throw new Error(err)
          })
      }
    }
  }
</script>

<style scoped>
  .inputName-enter-active, .inputName-leave-active{
    transition: opacity 1.5s;
  }
  .inputName-enter, .inputName-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
