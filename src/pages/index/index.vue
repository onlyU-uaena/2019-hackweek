<template>
  <div id="app">
    <div v-show="index">
      <label>昵称
        <input placeholder="请输入昵称" v-model="msg"/>
      </label>
      <button href="game.html" @click="play">进入游戏</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data () {
      return {
        msg: '',
        index: true,
        audio: ''
      }
    },

    created: function () {
      this.audio = document.createElement('audio')
      this.audio.setAttribute('src', 'https://www.w3cschool.cn/statics/demosource/horse.ogg')
    },

    methods: {
      send: function () {
        this.$http.post('', {
          name: this.msg
        })
          .then(function (res) {
            if (res) {
              index
            }
          })
          .catch(function (err) {
            console.log(err)
            throw new Error(err)
          })
      },
      play: function () {
        this.audio.play()
        window.open('game.html', '_self')
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  input {
    text-align: center;
  }
</style>
