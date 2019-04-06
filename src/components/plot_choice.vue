<template>
  <transition name="plotChoice">
    <div class="plotChoice">
      <div v-bind:style="gameProgress"></div>
      <div class="gamePoint">{{gamePoint}}</div>
      <div class="Plot">{{showMassage[progress].plotChoice}}</div>
      <div class="choiceButton">
        <div class="choiceLeft">
          <button @click="progressAdd(showMassage[progress].point[0])" id="choice1">{{showMassage[progress].options[0]}}</button>
          <button @click="progressAdd(showMassage[progress].point[1])" id="choice2">{{showMassage[progress].options[1]}}</button>
      </div>
      <div class="choiceRight">
        <button @click="progressAdd(showMassage[progress].point[2])" id="choice3">{{showMassage[progress].options[2]}}</button>
        <button @click="progressAdd(showMassage[progress].point[3])" id="choice4">{{showMassage[progress].options[3]}}</button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: 'plot',

    props: ['i'],

    data: function () {
      return {
        gamePoint: 50,
        progress: 0,
        showMassage: '',
        message0:
        [// 情节进度
          {
            options: ['1', '2', '3', '4'],
            plotChoice: '研发1',
            point: [1, -3, 3, 4]
          },
          {
            options: [4, 5, 6, 7],
            plotChoice: '情节2',
            point: [1, 2, -3, 4]
          }
        ],
        message1:
        [// 情节进度
          {
            options: ['1', '2', '3', '4'],
            plotChoice: '产品1',
            point: [1, -2, 3, 4]
          },
          {
            options: [4, 5, 6, 7],
            plotChoice: '情节2',
            point: [1, -2, 3, 4]
          }
        ],
        message2:
        [// 情节进度
          {
            options: ['1', '2', '3', '4'],
            plotChoice: '运营1',
            point: [1, -2, 3, 4]
          },
          {
            options: [4, 5, 6, 7],
            plotChoice: '情节2',
            point: [1, -2, 3, 4]
          }
        ],
        message3:
        [// 情节进度
          {
            options: ['1', '2', '3', '4'],
            plotChoice: '行政1',
            point: [1, -2, 3, 4]
          },
          {
            options: [4, 5, 6, 7],
            plotChoice: '情节2',
            point: [1, -2, 3, 4]
          }
        ],
        message4:
        [// 情节进度
          {
            options: ['1', '2', '3', '4'],
            plotChoice: '设计1',
            point: [1, -2, 3, 4]
          },
          {
            options: [4, 5, 6, 7],
            plotChoice: '情节2',
            point: [1, -2, 3, 4]
          }
        ]
      }
    },

    created: function () {
      switch (this.i) {
        case 0: this.showMassage = this.message0
          break
        case 1: this.showMassage = this.message1
          break
        case 2: this.showMassage = this.message2
          break
        case 3: this.showMassage = this.message3
          break
        case 4: this.showMassage = this.message4
          break
      }
    },

    computed: {
      gameProgress: function () {
        return {
          position: 'absolute',
          width: (this.progress / (this.showMassage.length - 1)) * 200 + 'px',
          backgroundColor: 'blue',
          height: '5%',
          top: '5%',
          right: '15%'
        }
      }
    },

    methods: {
      progressAdd: function (point) {
        this.$emit('showPlot')
        this.gamePoint += point
        this.$emit('gamePoint', this.gamePoint)
        // 多50ms防止文字突变
        setTimeout(() => {
          this.progress++
        }, 3050)
      }
    }
  }
</script>

<style scoped>
  .plotChoice {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .gamePoint {
    position: absolute;
    left: 10%;
    top: 20%;
  }

  .choiceButton {
    position: absolute;
    transform:translate(-50%, 0);
    width: 50%;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    height: 30%;
  }

  #choice1, #choice2 {
    float: left;
  }

  .choiceLeft, .choiceRight{
    height: 100%;
    width: 50%;
    float: left;
  }

  #choice3, #choice4 {
    float: right;
  }

  #choice1, #choice2, #choice3, #choice4 {
    width: 60%;
    margin: 10%;
  }

  .Plot {
    position: absolute;
    top: 10%;
    left: 50%;
    transform:translate(-50%, 0);
    width: 50%;
    height: 30%;
    text-align: center;
  }

  .plotChoice-enter-active {
    transition: opacity 1.5s;
  }

  .plotChoice-leave-active {
    transition: opacity 3s;
  }

  .plotChoice-enter, .plotChoice-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
