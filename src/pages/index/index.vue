<template>
  <div id="app">
    logo
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
      }, 5000)
    },

    methods: {
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
