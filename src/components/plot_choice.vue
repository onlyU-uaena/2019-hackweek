<template>
  <transition name="plotChoice">
    <div class="plotChoice" @click="click" v-show="show">
      <img id="fullScreen" v-bind:src="showMassage[progress].picturesSrc" alt="背景"/>
      <div class="gamePoint">{{fixPoint}}</div>
      <div v-show="showMassage[progress].plotChoice !== ''" class="Plot"><p>{{showMassage[progress].plotChoice}}</p></div>
      <div class="choiceButton4" v-show="showMassage[progress].options.length === 4">
        <div class="choiceLeft">
          <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="choice1">{{showMassage[progress].options[0]}}</button>
          <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="choice2">{{showMassage[progress].options[1]}}</button>
      </div>
      <div class="choiceRight">
        <button @click="progressAdd(showMassage[progress].point[2], showMassage[progress].progress[2])" id="choice3">{{showMassage[progress].options[2]}}</button>
        <button @click="progressAdd(showMassage[progress].point[3], showMassage[progress].progress[3])" id="choice4">{{showMassage[progress].options[3]}}</button>
      </div>
    </div>
      <div class="choiceButton3" v-show="showMassage[progress].options.length === 3">
        <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="thirdChoice1">{{showMassage[progress].options[0]}}</button>
        <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="thirdChoice2">{{showMassage[progress].options[1]}}</button>
        <button @click="progressAdd(showMassage[progress].point[2], showMassage[progress].progress[2])" id="thirdChoice3">{{showMassage[progress].options[2]}}</button>
      </div>
  </div>
  </transition>
</template>

<script>
  import {TweenLite} from 'gsap/TweenMax'

  export default {
    name: 'plot',

    props: ['i'],

    data: function () {
      return {
        gamePoint: 50,
        newPoint: 50,
        show: true,
        progress: 0,
        showMassage: '',
        message0:
        [// 情节进度
          {
            options: [],
            plotChoice: '一个无课的下午，你正百无聊赖地刷着QQ空间,运营组小姐姐的消息弹窗突然弹出:"Hi ～方便做张说说配图嘛?"正好最近没事，于是你爽快地答应下来.',
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
            plotChoice: '接着，运营小姐姐给了你说说文案并附上了作图要求——下周就是植树节了，你需要作出一家园形象的图，用来配要在植树节发的空间说说.',
            point: [],
            continue: true
          },
          {
            options: ['A', 'B', 'C'],
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whrgcoa8j31120kun0j.jpg',
            plotChoice: '',
            point: [],
            continue: false
          },
          {
            options: [],
            plotChoice: '又到了每周四晚的设计组例会，你们 Ul 设计的完成情况，并重点在例会上，学姐总结了上次表扬了你的作业。在例会的末尾，学姐给了你们一条链接，里面有做图教程，需要你们',
            picturesSrc: 'http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星琢图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
            picturesSrc: 'http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A.选区工具', 'B.截图工具', 'C.截图工具', 'D.钢笔工具'],
            plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星琢图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
            picturesSrc: 'http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            continue: false
          },
          {
            options: [],
            plotChoice: '恭喜你！成功来到考核期最后一周！家园各个组为了给能够坚持到现在的崽子们庆祝一番，决定举办晦翻全场的家园全体大会。积极的你主动参与了大会暖场视频的筹划，现在有',
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '三个预选摄影师，各有其优势，综合考量一番后，你敲定____作为本次大会御用摄影。',
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '',
            picturesSrc: '',
            point: [],
            continue: false
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
            options: [],
            plotChoice: '一个无课的下午，你正百无聊赖地刷着QQ空间,运营组小姐姐的消息弹窗突然弹出:"Hi ～方便做张说说配图嘛?"正好最近没事，于是你爽快地答应下来.',
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
            plotChoice: '接着，运营小姐姐给了你说说文案并附上了作图要求——下周就是植树节了，你需要作出一家园形象的图，用来配要在植树节发的空间说说.',
            point: [],
            continue: true
          },
          {
            options: ['A', 'B', 'C'],
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whrgcoa8j31120kun0j.jpg',
            plotChoice: '',
            point: [],
            progress: [0, 1, 2],
            continue: false
          },
          {
            options: [],
            plotChoice: '又到了每周四晚的设计组例会，你们 Ul 设计的完成情况，并重点在例会上，学姐总结了上次表扬了你的作业。在例会的末尾，学姐给了你们一条链接，里面有做图教程，需要你们',
            picturesSrc: 'http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星琢图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
            picturesSrc: 'http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            progress: [1, 2, 3],
            continue: true
          },
          {
            options: ['A.选区工具', 'B.截图工具', 'C.截图工具', 'D.钢笔工具'],
            plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星琢图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
            picturesSrc: 'http://wx2.sinaimg.cn/mw690/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            progress: [1, 2, 3, 4],
            continue: false
          },
          {
            options: [],
            plotChoice: '恭喜你！成功来到考核期最后一周！家园各个组为了给能够坚持到现在的崽子们庆祝一番，决定举办晦翻全场的家园全体大会。积极的你主动参与了大会暖场视频的筹划，现在有',
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '三个预选摄影师，各有其优势，综合考量一番后，你敲定____作为本次大会御用摄影。',
            picturesSrc: 'http://wx3.sinaimg.cn/mw690/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '',
            picturesSrc: '',
            point: [],
            progress: [1, 2, 3],
            continue: false
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
      },

      fixPoint: function () {
        return this.newPoint.toFixed(0)
      }
    },

    methods: {
      progressAdd: function (point, progress) {
        this.$emit('showPlot', progress)
        this.gamePoint += point
        this.$emit('gamePoint', this.gamePoint)
        // 多50ms防止文字突变
        setTimeout(() => {
          this.progress++
        }, 3050)
      },

      click: function () {
        if (this.showMassage[this.progress].continue === true) {
          this.show = false
          setTimeout(() => {
            this.progress++
            this.show = true
          }, 1500)
        }
      }
    },

    watch: {
      gamePoint: function (newValue) {
        console.log(newValue)
        TweenLite.to(this.$data, 0.5, { newPoint: newValue })
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

  .choiceButton4 {
    position: absolute;
    width: 100%;
    top: 20%;
    overflow: hidden;
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
    width: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
    margin: 5% 25%;
    height: 60px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }

  .Plot {
    position: absolute;
    width: 90%;
    bottom: 5%;
    transform:translate(-50%, 0);
    left: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
  }

  .Plot p {
    margin-left: 30px;
    margin-right: 30px;
    font-size: 25px;
    font-weight: 500;
    color: white;
  }

  .choiceButton3 {
    position: absolute;
    width: 100%;
    bottom: 5%;
    overflow: hidden;
  }

  #thirdChoice1, #thirdChoice2, #thirdChoice3 {
    float: left;
    width: 15%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
    margin-right: 9.1%;
    margin-left: 9.1%;
    height: 85px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }

  .plotChoice-enter-active {
    transition: opacity 1.5s;
  }

  .plotChoice-leave-active {
    transition: opacity 1.5s;
  }

  .plotChoice-enter, .plotChoice-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
