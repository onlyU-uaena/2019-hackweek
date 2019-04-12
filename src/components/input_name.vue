<template>
  <transition name="inputName">
    <div class="inputName">
      <img id="fullScreen" src="http://wx2.sinaimg.cn/large/005JHgrHgy1g1yoivwrdlj31120kuk3i.jpg" alt="背景"/>
      <img class="input" src="../assets/input.png" alt="输入"/>
      <label for="inputName"></label><input id="inputName" placeholder="请输入用户昵称" v-model="msg"/>
      <div class="enter" @click="send"></div>
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

  #inputName::-webkit-input-placeholder {
    color: #cecece;
  }

  #inputName {
    position: absolute;
    left: 50%;
    transform:translate(-50%, 0);
    top: 52.7%;
    width: 47%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 600;
  }

  .input {
    position: absolute;
    left: 50%;
    transform:translate(-50%, 0);
    top: 48%;
    width: 54%;
    height: 18%;
  }

  .enter {
    position: absolute;
    left: 50%;
    transform:translate(-50%, 0);
    top: 69%;
    width: 21.5%;
    height: 17%;
  }
</style>
