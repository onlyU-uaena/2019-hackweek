<template>
  <transition name="inputName">
    <div class="inputName">
      <img id="fullScreen" src="http://wx2.sinaimg.cn/large/005JHgrHgy1g1yoivwrdlj31120kuk3i.jpg" alt="背景"/>
      <img class="input" src="../assets/input.png" alt="输入"/>
      <label for="inputName"></label><input id="inputName" placeholder="请输入用户昵称" v-model="msg"/>
      <div class="enter" @click="send"></div>
      <transition name="register">
        <img v-show="register" id="register" src="../assets/registered.png" alt="已注册"/>
      </transition>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'input_name',

    data () {
      return {
        msg: '',
        index: true,
        register: false
      }
    },

    methods: {
      send: function () {
        axios.post('http://47.101.204.202:7000/api/game_user', {
          'username': this.msg
        },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: [function (data) {
              data = qs.stringify(data)
              return data
            }]
          })
          .then((res) => {
            console.log(res)
            if (res.data.success === '0') {
              this.$emit('inputComplete', this.msg)
            } else {
              this.register = true
              setTimeout(() => {
                this.register = false
              }, 1000)
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
    transition: opacity 1.0s;
  }

  .inputName-enter, .inputName-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .register-enter-active, .register-leave-active{
    transition: opacity 0.5s;
  }

  .register-enter, .register-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  #inputName::-webkit-input-placeholder {
    color: #cecece;
  }

  #register {
    position: absolute;
    left: 49%;
    top: 15%;
    width: 36%;
    height: 80%;
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
