<template>
  <transition name="point">
    <div class="point">
      <img id="fullScreen" src="http://wx1.sinaimg.cn/large/005JHgrHgy1g1z08wclf2j31120kujt7.jpg" alt="计分榜"/>
      <div class="allList">
        <div class="list" v-for="(list, index) in lists" :id="index">
          <div class="rank">
            <p>{{list.rank}}</p>
          </div>
          <div class="userName">
            <p>{{list.username}}</p>
          </div>
          <div class="score">
            <p>{{list.score}}</p>
          </div>
        </div>
      </div>
      <button class="restart" @click="restart"><span>重新开始</span></button>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'Point',

    props: ['i', 'userName', 'gamePoint'],

    data: function () {
      return {
        group: '',
        lists: ''
      }
    },

    created:
      function () {
        switch (this.i) {
          case 0: this.group = '研发'
            break
          case 1: this.group = '产品'
            break
          case 2: this.group = '运营'
            break
          case 3: this.group = '行政'
            break
          case 4: this.group = '设计'
            break
        }
        axios.post('http://47.101.204.202:8000/api/ranking', {
          group: this.group,
          score: this.gamePoint,
          userName: this.userName
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
            this.lists = res.data
            console.log(res)
          })
          .catch(function (err) {
            console.log(err)
            throw new Error(err)
          })
      },
  
    methods: {
      restart: function () {
        this.$emit('end')
        setTimeout(() => {
          window.open('game.html', '_self')
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .point {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .allList {
    position: absolute;
    width: 74%;
    height: 66%;
    top: 31%;
    left: 3%;
    overflow: hidden;
  }

  .list {
    width: 100%;
    float: left;
    height: 25%;
    top: 31%;
    left: 3%;
    overflow: hidden;
  }

  .rank {
    width: 15%;
    height: 100%;
    float: left;
    text-align: center;
    position: relative;
  }

  p {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    color: #a49089;
  }

  .userName {
    float: left;
    position: relative;
    width: 60%;
    height: 100%;
  }

  .userName p {
    font-size: 48px;
    top: 50%;
    left: 5%;
    transform: translate(0, -50%);
  }

  .score {
    float: left;
    position: relative;
    width: 25%;
    height: 100%;
  }

  .score p {
    color: #974021;
  }

  .restart {
    position: absolute;
    right: 1.5%;
    bottom: 4%;
    width: 20%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
    height: 70px;
    font-size: 32px;
    font-weight: 500;
    color: white;
  }

  .point-enter-active, .point-leave-active {
    transition: opacity 1.0s;
  }

  .point-enter, .point-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  [id = '3'] .rank p, [id = '3'] .userName p{
    color: #78635b;
  }

</style>
