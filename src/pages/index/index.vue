<template>
  <div id="app">
    <div v-show="index">
      <label>昵称
        <input placeholder="请输入昵称" v-model="msg"/>
      </label>
      <button @click="play">进入游戏</button>
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
      this.audio.setAttribute('src', 'http://s128.xiami.net/439/85439/423508/1770009616_1986471_l.mp3?ccode=xiami__&expire=86400&duration=266&psid=5ba9b0e976847aecc877848999246dd4&ups_client_netip=null&ups_ts=1554798810&ups_userid=0&utid=&vid=1770009616&fn=1770009616_1986471_l.mp3&vkey=B276a3a64c563f5ac9b947ba8a8180111')
    },

    methods: {
      send: function () {
        this.$http.post('/upload', {
          name: this.msg
        })
          .then(function (res) {
            console.log(res)
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
