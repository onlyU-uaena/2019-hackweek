<template>
  <div id="app">
    <img id="fullScreen" src="http://image.uczzd.cn/5343954532419927661.jpg?id=0&from=export" alt="横屏"/>
    <h1 class="content">请横屏体验该游戏</h1>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data () {
      return {
      }
    },

    created: function () {
      setTimeout(() => {
        window.open('game.html', '_self')
      }, 3000)
    },

    methods: {
    }
  }

</script>

<style>
  #fullScreen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
  }

  .content {
    position: absolute;
    top: 70%;
    left: 50%;
    transform:translate(-50%, 0);
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
