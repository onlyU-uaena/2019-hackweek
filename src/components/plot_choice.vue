<template>
  <transition name="plotChoice">
    <div class="plotChoice" @click="click" v-show="show">
      <img id="fullScreen" v-bind:src="showMassage[progress].picturesSrc" alt="背景"/>
      <div v-show="showMassage[progress].plotChoice !== ''" class="Plot"><p>{{showMassage[progress].plotChoice}}</p></div>
      <div class="choiceButton4" v-if="showMassage[progress].options.length === 4">
        <div class="choiceLeft">
          <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="choice1">{{showMassage[progress].options[0]}}</button>
          <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="choice2">{{showMassage[progress].options[1]}}</button>
      </div>
      <div class="choiceRight">
        <button @click="progressAdd(showMassage[progress].point[2], showMassage[progress].progress[2])" id="choice3">{{showMassage[progress].options[2]}}</button>
        <button @click="progressAdd(showMassage[progress].point[3], showMassage[progress].progress[3])" id="choice4">{{showMassage[progress].options[3]}}</button>
      </div>
      </div>
      <div class="designChoiceButton3" v-if="(showMassage[progress].options.length === 3) && (i === 4)">
        <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="designThreeChoice1">{{showMassage[progress].options[0]}}</button>
        <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="designThreeChoice2">{{showMassage[progress].options[1]}}</button>
        <button @click="progressAdd(showMassage[progress].point[2], showMassage[progress].progress[2])" id="designThreeChoice3">{{showMassage[progress].options[2]}}</button>
      </div>
      <div class="developChoiceButton3" v-if="(showMassage[progress].options.length === 3) && (i === 0)">
        <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="developThreeChoice1">{{showMassage[progress].options[0]}}</button>
        <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="developThreeChoice2">{{showMassage[progress].options[1]}}</button>
        <button @click="progressAdd(showMassage[progress].point[2], showMassage[progress].progress[2])" id="developThreeChoice3">{{showMassage[progress].options[2]}}</button>
      </div>
      <div class="choiceButton3" v-if="(showMassage[progress].options.length === 3) && (i !== 4) && (i !== 0)">
        <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="threeChoice1">{{showMassage[progress].options[0]}}</button>
        <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="threeChoice2">{{showMassage[progress].options[1]}}</button>
        <button @click="progressAdd(showMassage[progress].point[2], showMassage[progress].progress[2])" id="threeChoice3">{{showMassage[progress].options[2]}}</button>
      </div>
      <div class="choiceButton2" v-if="showMassage[progress].options.length === 2">
        <button @click="progressAdd(showMassage[progress].point[0], showMassage[progress].progress[0])" id="twoChoice1">{{showMassage[progress].options[0]}}</button>
        <button @click="progressAdd(showMassage[progress].point[1], showMassage[progress].progress[1])" id="twoChoice2">{{showMassage[progress].options[1]}}</button>
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
        gamePoint: 60,
        newPoint: 60,
        show: true,
        progress: 0,
        showMassage: '',
        message0:
        [// 情节进度
          {
            gameEnd: 8,
            options: [],
            plotChoice: '第一周，产品组就有一位特别有想法的萌新设想出了一款产品，并邀了你和其他几位研发参与产品的制作。现在，他写的需求文档还在学长学姐那儿审核，前端后端就已经提前开始交流如何实现用户的注册了。',
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A.username  email', 'B.email  password', 'C.username  password'],
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
            plotChoice: '在讨论的过程中，你发现，前端把__________和___________两类数据传给后端就能够最好地实现用户注册。',
            point: [-4, 5, 2],
            progress: [0, 1, 2],
            continue: false
          },
          {
            options: [],
            plotChoice: '好的开端是成功的一半，随着第一项任务的完成，你们信心满满地来到了第二周。这一周产品进展较大，你们开始对注册功能进行内部测试。',
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A.unknown user', 'B.u u', 'C.404'],
            plotChoice: '这时，前端发现一个问题——用户登陆时使用了没有注册过的用户名，于是后端向前端发送了_________以形容这一情况。',
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
            progress: [3, 4, 5],
            point: [5, 2, -4],
            continue: false
          },
          {
            options: [],
            plotChoice: '【提示：出于剧情体验需要，在第三周和第四周你会分别从前端和后端视角进行体验，祝你玩的愉快~】',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A.把后端扔出去', 'B.自己沉住气自己解析', 'C.让后端优化结构数据'],
            plotChoice: '你们的产品还有两周便要上线，前后端开始进入了紧张的联调之中。在进行接口调试的时候，不省心后端给出的数据结构混乱，导致前端在解析时麻烦又苦逼，于是，作为前端，你决定________',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
            progress: [6, 7, 8],
            point: [-4, 2, 5],
            continue: false
          },
          {
            options: [],
            plotChoice: '【能够顺利抵达考核期最后一周的你，已经没有什么能够阻挡了！Come on！通过这最后一关，你就是研发最靓的崽！】',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '由于你们前面的不懈努力，你们的产品——一款工具型的APP最终成功上线！上线一段时间后',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A.默默揣下这口锅，没有告诉任何人', 'B.想起上次推锅坑自己的某前端，于是顺理成章把锅推给了他', 'C.转向负责这款产品的产品同学求助'],
            plotChoice: '你们的产品开始踏上几乎每一款产品都必经的BUG之路——用户在点进平时使用频率最高的功能时，手机却显示一片空白，你深知这是自己身为后端该背的锅，略加思索，你__________',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
            progress: [9, 10, 11],
            point: [5, -4, 2],
            continue: false
          }
        ],
        message1:
        [// 情节进度
          {
            gameEnd: 7,
            options: ['A：鹅厂出品，还需要多说什么吗？', 'B：细数QQ音乐功能上的闪光点', 'C：由diss网易云音乐突出优越性'],
            plotChoice: '第一周嘛，总是由闲谈为契机加深了解。在聊到音乐APP 时，你作为一个在鄙视链中艰难存活的QQ 音乐用户，还是要为它说两句话，那么你会从哪方面说起呢？',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
            progress: [0, 1, 2],
            point: [-4, 5, 2],
            continue: false
          },
          {
            options: ['A：你想的产品逻辑有些复杂，直接手画', 'B：想了个逻辑简单的产品，试水Axure'],
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
            plotChoice: '本周产品组要求你想一个产品并画出原型图，你Axure刚开始学，这时你要怎么完成这份作业？',
            point: [-4, 5],
            progress: [3, 4],
            continue: false
          },
          {
            options: [],
            plotChoice: '距离国庆还有半个月，你决定找研发一起做一个追踪国庆热点的小程序，第一次开讨论会的时候，你和研发说了你对的需求，确定了研发能够实现的功能。',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A：绝望到无可奈何，告诉研发做出来能用就行', 'B：暴力警告，告诉他就算爆肝这些功能也得出来', 'C：强忍脾气，和研发再次进行线下讨论明确进度'],
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
            plotChoice: '但离国庆还有三天的时候，研发突然告诉你有些功能可能实现不了，你会：',
            point: [2, -4, 5],
            progress: [5, 6, 7],
            continue: false
          },
          {
            options: ['A：逛逛“人人都是产品经理”', 'B：在润溪湖天健园散散步', 'C：问问其他组的小伙伴们'],
            plotChoice: '工作室即将要开展hackweek比赛了，组长要你准备几个好的想法，你一时间没有头绪，你要怎样找些灵感呢：',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
            progress: [8, 9, 10],
            point: [-4, 2, 5],
            continue: false
          }
        ],
        message2:
        [// 情节进度
          {
            gameEnd: 8,
            options: ['A：刘昊然', 'B：姜文', 'C：克里斯埃文斯（美队）'],
            plotChoice: '明明说好不要摸鱼，运营学长学姐们却在第一次例会时...和你讨论起了喜欢哪个明星！？这时，你该怎么回答？',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
            progress: [0, 1, 2],
            point: [2, 2, 2],
            continue: false
          },
          {
            options: [],
            plotChoice: '有人喜欢正流行、也有的偏爱冷门。但对于运营们来说，只要发现了足够优质的内容，无论大众小众，都想诚挚安利给用户。',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
            progress: [],
            point: [],
            continue: true
          },
          {
            options: ['A：P图达人本人，自己做', 'B：虽然平时都用美图秀秀，但还是试试看', 'C：找设计组寻求帮助'],
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
            plotChoice: '本周，你开始学习所有运营的必修课之一——写推送，在确定以最近某热点为主题后，你开始为头图愁到掉发，你觉得，这张头图该怎么办呢？',
            point: [5, -4, 2],
            progress: [3, 4, 5],
            continue: false
          },
          {
            options: ['A：某共享单车为南大出了颜值很高的定制款', 'B：世界5G技术研发又取得了突破性新进展', 'C：2019年12月四六级考试报名链接正式发布'],
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuidijpzj31120ku77s.jpg',
            plotChoice: '今天你在QQ平台值班，需要发一条说说。这时，有三个内容集体撞车，你要选择：',
            point: [5, -4, 2],
            progress: [6, 7, 8],
            continue: false
          },
          {
            options: [],
            plotChoice: '还有几天，你就可以完全揭开运营组的神秘面纱啦~别掉以轻心，本周，你的第一个大锅来了。一年一届的运动会拉开帷幕，这样的大、热、点，不追不是小、运、营。开幕式当天',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A：从现在开始，进入工作狂模式', 'B：向其他的小运营们在线求帮助'],
            plotChoice: '你扛起相机冲向体育场，搜集了很多素材。采写完已经是中午，你的照片还没修，文案还没写，采访录音还没转译，眼看推文今晚就要发了，你要？',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
            progress: [9, 10],
            point: [2, 5],
            continue: false
          }
        ],
        message3:
        [// 情节进度
          {
            gameEnd: 7,
            options: ['A：设置表格固定的行高列宽', 'B：表格完成后转为PDF格式', 'C：表格的行列空间尽可能拉大'],
            plotChoice: '行政的工作之一，就是把其他组安排得明明白白。在收集了研发组几十名程序员的无课情况之后，需要你做一张研发组无课统计的电子表格。怎么做，才可能可以让这张表格尽可能地美观呢？',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
            progress: [0, 1, 2],
            point: [-4, 5, 2],
            continue: false
          },
          {
            options: [],
            plotChoice: '制作每一张Excel表格时，考勤每一班值班情况时，行政们都会表现出魔鬼般的严谨和周密。但同时，温暖亦如行政。他们将家园每一位成员的生日加入备忘录',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A：xxx终于20岁啦，你已经是个成熟的女大学生了，生日快乐！', 'B：祝为家园工作室倾注爱与希望的美丽运营生日快乐！愿你成为最棒的话题制造者，推送统统10w+，新的一年，等待着你的都是好运喔~'],
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
            plotChoice: '以备在生日当天及时送上最温馨的祝福，本周，运营组的一位学姐正好要过生日了，你需要为她写一条生日祝福文案，你会怎么写呢？',
            point: [-4, 5],
            progress: [3, 4],
            continue: false
          },
          {
            options: [],
            plotChoice: '如果其他组的工作侧重在于对外产出，行政组则致力于内部的团队建设。甚至可以说，行政组是家园工作室区别于其他社团的特点之一。毕竟，不是每一个社团都对本身的团队建设有着太多期待',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A：确定活动目的', 'B：精确活动流程', 'C：统计活动预算'],
            plotChoice: '这一点，从家园的全体大会就可见一斑了，当然，这绝对是行政每学期的重点工作内容。本学期全体大会的策划，交给了你负责。面对策划要考虑的种种因素，你如果一定要选择一个次优先级的因素，你会选择?',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
            progress: [5, 6, 7],
            point: [2, -4, 5],
            continue: false
          },
          {
            options: [],
            plotChoice: '如果你在其他组，你也许不太可能在一个月内认识其他组的大多数成员。但你是在行政组，对于行政来说，对其他组成员的了解，可能是因缘际会，是志趣相投，但更是刚性需求。',
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A：在线征集，感兴趣的筒子可以志愿报名~', 'B：暗中观察，说服你认为的潜在表演嘉宾', 'C：靠自己，这次全体大会嗨不嗨就靠你了'],
            plotChoice: '全体大会不仅要有烧脑刺激的集体游戏，还要有家园er们精心准备的节目。为了征集节目，你要怎么推动身边的家园er们参与节目呢？',
            picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
            progress: [8, 9, 10],
            point: [-4, 5, 2],
            continue: false
          }
        ],
        message4:
        [// 情节进度
          {
            gameEnd: 7,
            options: [],
            plotChoice: '一个无课的下午，你正百无聊赖地刷着QQ空间,运营组小姐姐的消息弹窗突然弹出:"Hi ～方便做张说说配图嘛?"正好最近没事，于是你爽快地答应下来.',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
            plotChoice: '接着，运营小姐姐给了你说说文案并附上了作图要求——下周就是植树节了，你需要作出一家园形象的图，用来配要在植树节发的空间说说.',
            point: [],
            continue: true
          },
          {
            options: ['A', 'B', 'C'],
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrgcoa8j31120kun0j.jpg',
            plotChoice: '',
            point: [2, 5, -4],
            progress: [0, 1, 2],
            continue: false
          },
          {
            options: [],
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
            plotChoice: '第二周，你终于迎来了期待已久的一项任务——设计工作证！每一届家园人都有着那一届独属的工作证，而工作证的设计，自然就是由身怀绝技的设计组来完成。根据自己对家园风格与特质的理解，你设计出了如下几个版本的工作证，并挑出了最适合家园人的那个_______。',
            point: [],
            continue: true
          },
          {
            options: ['A', 'B', 'C'],
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
            plotChoice: '',
            point: [2, 5, -4],
            progress: [3, 4, 5],
            continue: false
          },
          {
            options: [],
            plotChoice: '又到了每周四晚的设计组例会，你们 Ul 设计的完成情况，并重点在例会上，学姐总结了上次表扬了你的作业。在例会的末尾，学姐给了你们一条链接，里面有做图教程，需要你们',
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星球图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [],
            progress: [],
            continue: true
          },
          {
            options: ['A.选区工具', 'B.截图工具', 'C.图形工具', 'D.钢笔工具'],
            plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星球图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
            picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            point: [5, 2, 2, 2],
            progress: [7, 6, 7, 7],
            continue: false
          },
          {
            options: [],
            plotChoice: '恭喜你！成功来到考核期最后一周！家园各个组为了给能够坚持到现在的崽子们庆祝一番，决定举办晦翻全场的家园全体大会。积极的你主动参与了大会暖场视频的筹划，现在有',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
            point: [],
            continue: true
          },
          {
            options: [],
            plotChoice: '三个预选摄影师，各有其优势，综合考量一番后，你敲定____作为本次大会御用摄影。',
            picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
            point: [],
            continue: true
          },
          {
            options: ['A', 'B', 'C'],
            plotChoice: '',
            picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xp1j4g69j31120kuwgl.jpg',
            point: [2, -4, 5],
            progress: [8, 9, 10],
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

  .choiceButton2 {
    position: absolute;
    width: 100%;
    top: 5%;
    overflow: hidden;
  }

  .choiceButton3 {
    position: absolute;
    width: 100%;
    top: 5%;
    overflow: hidden;
  }

  .designChoiceButton3 {
    position: absolute;
    width: 100%;
    bottom: 5%;
    overflow: hidden;
  }

  .developChoiceButton3 {
    position: absolute;
    width: 50%;
    top: 5%;
    right: 0;
    overflow: hidden;
  }

  #threeChoice1, #threeChoice2, #threeChoice3 {
    width: 85%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
    margin: 1% 10%;
    height: 60px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }

  #designThreeChoice1, #designThreeChoice2, #designThreeChoice3 {
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

  #developThreeChoice1, #developThreeChoice2, #developThreeChoice3 {
    float: right;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
    margin: 1% 0;
    height: 90px;
    font-size: 30px;
    font-weight: 500;
    color: white;
  }

  #twoChoice1, #twoChoice2 {
    width: 80%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    border:5px solid #ffc674;
    margin: 2% 10%;
    height: 100px;
    font-size: 24px;
    font-weight: 500;
    color: white;
  }

  .plotChoice-enter-active {
    transition: opacity 1.0s;
    animation: bounce-in 1.0s;
  }

  .plotChoice-leave-active {
    transition: opacity 1.0s;
  }

  .plotChoice-enter, .plotChoice-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
