webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: 'localhost'
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lottieWeb = __webpack_require__(76);

var _lottieWeb2 = _interopRequireDefault(_lottieWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },

  data: function data() {
    return {
      style: {
        width: this.width ? this.width + 'px' : '100%',
        height: this.height ? this.height + 'px' : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    };
  },
  mounted: function mounted() {
    this.anim = _lottieWeb2.default.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    });
    this.$emit('animCreated', this.anim);
  }
}; //
//
//
//

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap_TweenMax__ = __webpack_require__(28);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'choice',

  components: { model: __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */] },

  props: [''],

  data: function () {
    return {
      message: ['研发', '产品', '运营', '行政', '设计'],
      i: 0,
      show: false
    };
  },

  methods: {
    openModel: function (i) {
      switch (i) {
        case 0:
          __WEBPACK_IMPORTED_MODULE_1_gsap_TweenMax__["a" /* TweenLite */].to('#move', 2, { left: '10%' });
          setTimeout(() => {
            this.i = i;
            this.show = true;
          }, 2000);
          break;
        case 1:
          __WEBPACK_IMPORTED_MODULE_1_gsap_TweenMax__["a" /* TweenLite */].to('#move', 2, { left: '24%' });
          setTimeout(() => {
            this.i = i;
            this.show = true;
          }, 2000);
          break;
        case 2:
          __WEBPACK_IMPORTED_MODULE_1_gsap_TweenMax__["a" /* TweenLite */].to('#move', 2, { left: '40%' });
          setTimeout(() => {
            this.i = i;
            this.show = true;
          }, 2000);
          break;
        case 3:
          __WEBPACK_IMPORTED_MODULE_1_gsap_TweenMax__["a" /* TweenLite */].to('#move', 2, { left: '53%' });
          setTimeout(() => {
            this.i = i;
            this.show = true;
          }, 2000);
          break;
        case 4:
          __WEBPACK_IMPORTED_MODULE_1_gsap_TweenMax__["a" /* TweenLite */].to('#move', 2, { left: '64%' });
          setTimeout(() => {
            this.i = i;
            this.show = true;
          }, 2000);
          break;
      }
    },

    closeModel: function () {
      this.show = false;
    },

    choiceOccupational: function () {
      this.$emit('choiceOccupational', this.i);
      this.show = false;
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Discouraged',

  data: function () {
    return {
      show: false,
      pageShow: true
    };
  },

  methods: {
    page2Show: function () {
      this.pageShow = false;
      setTimeout(() => {
        this.show = true;
      }, 1500);
    },

    repeat: function () {
      this.show = false;
      setTimeout(() => {
        window.open('game.html', '_self');
      }, 1500);
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'first_plot',

  props: ['i'],

  created: function () {
    switch (this.i) {
      case 0:
        this.msg = '研发组';
        break;
      case 1:
        this.msg = '产品组';
        break;
      case 2:
        this.msg = '运营组';
        break;
      case 3:
        this.msg = '行政组';
        break;
      case 4:
        this.msg = '设计组';
        break;
    }
  },

  data: function () {
    return {
      msg: ''
    };
  },

  methods: {
    close: function () {
      this.$emit('close');
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'gameEnd',

  methods: {
    showPoint: function () {
      this.$emit('gameEnd');
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'input_name',

  data() {
    return {
      msg: '',
      index: true,
      register: false
    };
  },

  methods: {
    send: function () {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://localhost:5000/api/game_user', {
        'username': this.msg
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        transformRequest: [function (data) {
          data = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(data);
          return data;
        }]
      }).then(res => {
        console.log(res);
        if (res.data.success === '0') {
          this.$emit('inputComplete', this.msg);
        } else {
          this.register = true;
          setTimeout(() => {
            this.register = false;
          }, 1000);
        }
      }).catch(function (err) {
        console.log(err);
        throw new Error(err);
      });
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'model',

  props: ['show', 'i'],

  data: function () {
    return {
      picturesSrc: ['http://wx4.sinaimg.cn/large/005JHgrHgy1g219dixdtwj31120ku44s.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g219dhs1i9j31120kudm0.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g219djegv0j31120kugru.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g219di4dodj31120ku7aj.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g219diln52j31120kugru.jpg']
    };
  },

  methods: {
    close: function () {
      this.$emit('close');
    },

    choice: function () {
      this.$emit('choice');
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'plot',

  props: ['i', 'discouraged', 'progress'],

  data: function () {
    return {
      showPlot: '',
      plot0: [{ picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
        plot: '没有密码的用户就是没有灵魂的游客，用户注册完后仍然是游客身份，研发组学长看见你们设计的这个谜之注册，开始怀疑人生……',
        gameEnd: 8 }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
        plot: '选择了这两类数据后，你们不仅成功地完成了用户注册的设计，还超额做成了用户注册后续的用户验证，研发学长在例会上对你们进行了表扬，并将你们提名为“研发最帅小队”。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
        plot: '你们选择了这两个数据，最终圆满完成任务。产品对你们的完成度十分满意，当即从食堂提了几袋鸡排回来给你们加餐。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
        plot: '后端选择了这个词来向前端描述情况，前端瞬间Get到了点，前后端几乎无缝衔接，堪称完美地完成了此次任务。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
        plot: '后端本想偷个懒，只发两个“u”来表示“unknown user”，奈何让神秘代码前端琢磨了半天，最后还是得通过交流解答，反而拖慢了总体进程，不过好在前端早早跑来表达疑问，双方沟通较及时，最终也较为圆满地完成了任务。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
        plot: '404是一个如此海纳百川的代号，它的背后包含着数不清的可能情况，前端因为后端要表达的意思过于含蓄而集体宕机，产品凄惨腰斩。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
        plot: '扔后端一时爽，扔完之后，没有后端来帮你优化数据，你只能自己回去收拾烂摊子，从此坐实“研发最苦逼前端”称号。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
        plot: '自己解析，是个漫长而艰难的过程，毕竟设计数据结构本来就完全是后端的锅。最后你虽然成功解决问题，但却被学长指出团队意识不够，由此你引以为戒，并下定决心以后的项目接口设计，一定要和后端定义好优化的数据结构和规范。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
        plot: '虽然前期没有商量好导致了现在的问题，但你充分意识到这是后端在设计数据结构上的锅，于是你及时向后端提出了问题，再次接到锅的后端虽然&￥#￥%！@，但因为这锅确实接的明明白白，于是还是乖乖去优化了数据，最终你们成功协作，创造了研发组前后端对接最迅猛的一段佳话。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
        plot: '好在你技术过硬，有足够的本事来接这口锅，于是最终没有“打草惊蛇”，有惊无险得化解了这场危机。并且，你从这次BUG中深深地体会到了技术就是一切，于是在做一个牛逼后端的道路上开始狂奔……' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
        plot: '虽然达到了坑队友的目的，但问题并没有得到解决，因为这确、实、是后端的锅，于是锅在前端那传了一轮之后又回到了你的头上，于是你喜提研发组“背锅侠”名号。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
        plot: '产品同学非常理解你的处境，但爱莫能助，于是去食堂为你提回炸鸡和肥宅快乐水以表安慰，就这样，锅填满了你的心，而炸鸡填满了你的胃……' }],
      plot1: [{ picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
        plot: '在场的云村用户一听到鹅厂出品，都露出对资本的无情嘲笑和愤愤不平。',
        gameEnd: 7 }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
        plot: '平日使用过程中不明显的优点，一下子却浮现在你的脑海中，你甚至现场用xmind从音乐版权、推荐算法、用户社区等等角度将优点逐条列出，能用一张图表达出来的，就不用冗余的文字，可以说很产品了。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
        plot: '你开始对网易云音乐进行了深刻的批评，甚至让人以为你是一个叛变的云村资深用户。有些优点，往往在对同类竞品的分析过程中不言自明，在场的云村用户听到你直击痛点的diss一时间想不到回击的话。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
        plot: '用手画确实可以把你想的页面都表达出来，但不可避免地，它不够精确，有些部分可能是你自己才看得懂的逻辑，产品组的其他成员甚至get不到你的点…' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
        plot: '因为逻辑简单，要画的页面也比较少，所以即使操作并不熟练，也比较清楚地展现出了你的想法，在例会上评价作业的时候，你成功逃过了被疯狂吐槽的厄运（呼～' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
        plot: '研发在最后一天终于把产品做了出来，除了少了一些当初设置的功能以及没有来得及多测试几次之外，也还算是完整了。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
        plot: '最后三天，研发祭天也无法实现最开始沟通的全部功能，你气得和研发打了一架，产品最终也没有落地。中心组给出的惩罚是：两个人牵手相亲相爱一下午。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
        plot: '虽然心里已经把这个研发吐槽了一百遍，但理性还是让你根据研发的进度，保留了几个核心需求，小程序最后成功落地并在推广下获得了很好的反响～' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
        plot: '人人都是产品经理上的产品案例，可以，但做不到。看完之后，你抱住菜菜的自己，甚至不敢说fa' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
        plot: '你坐着小白在休闲和天健之间来回，突然一个关于小白车的产品撞进了你的脑袋，想法+1！' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
        plot: '在机房捕捉到一个研发组的朋友，他给你安利了他最近在玩的游戏，你在几乎成为网瘾少年的同时，也产生了许多新鲜的灵感！' }],
      plot2: [{ picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
        plot: '当你说出刘昊然的名字，座中一位学姐露出了激动的神情，过了几秒，她居然打开了B站和你分享昊然弟弟的美颜混剪，甚至堂而皇之地说：“Emmm...这个也算我们例会的讨论内容嘛。”\n' + '不过，这也是真的。运营，才不是没有灵魂的打字机，一条条出彩文案的背后，也许正藏着一个在潮流间冲浪,脑洞奇崛的追星女孩。',
        gameEnd: 8 }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
        plot: '你本来以为学姐们对姜文不太感冒，却没想到一位学姐翻出一张姜文抽着雪茄的照片：“我就说！怎么会有人不爱姜文这副作派呢？”于是，运营的例会变成了姜文的大型安利现场。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
        plot: '你一说美队的名字，在座的漫威迷眼中都闪起了光亮，运营学长顺势提议：“我们要不要24号一起去看复联四？”于是，运营的第一次团建，就这样莫名其妙地定下来了。\n' + '有人说，社团只是为了综测分的牺牲，或是扩展人脉的平台......也许是这样的，但说话者，一定还没来得及认识家园工作室。在这里，有着比综测分更有意义的自我提升，有比人脉更动人的关系,我们称之为，同好。' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
        plot: '虽然并没有设计组出的图那么成熟，但胜在鼠标随手移，手起刀落（？）就完成了头图，及时抢占热点发出了推送，推文浏览量一时间没停止涨过！' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
        plot: '用APP自带贴纸放大缩小调了半天，才完成了这张难以言说的头图，你还是决定硬着头皮传上组内群。在半小时的沉默后，某诚实的学姐发了一个“愣住”的表情.....' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
        plot: '拿到设计出的图已经是四天以后的事了，得到了运营组内的一致彩虹屁，但此时热点稍微冷却，不过还好，推文发出反响还不错。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xuk4ya8mj31120kuthn.jpg',
        plot: '你去上早课的时候拍下单车的第一手高清图，说说一经发出，QQ空间的诸好友纷纷转载点赞，吃下了这款配色绝美的定制单车的安利。果然，颜值即正义啊。' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuk5f606j31120ku0xy.jpg',
        plot: '每隔一阵子，5G技术好像总会取得一些新进展。这条新闻甚至和上个月的那条5G新闻没有太大差别，大家都在想，5G什么时候正式投放民用市场呢？说说反响只是平平。' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xul2snyyj31120kuwjo.jpg',
        plot: '平时再摸鱼，逃不过四六级。能不能考过425，也都是要报名的。虽然这件事许多校媒都发出了通知。还是会有许多网友，转发这条说说到自己的朋友圈和好友相约四六级。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
        plot: '从太阳升起到落下，今天的你像是开了64倍速的机器人，从来都没发现自己的效率可以这么高，晚上十点，虽然有点晚，但你成功地发出了推文。看着眼前的推文，你甚至不敢相信，自己一个人在这么短的时间内居然完成了这么多工作。的确，大锅会让人感到压力，但它的出现，也让我们发现原来自己，有这么多可能。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
        plot: '发出求助后，大家分好工后就迅速来到工作室帮忙。运营组的萌新们，今天成为了工作室最晚走的人。这篇推文，也成为考核期以来浏览量最高的推文。你刚走进工作室的时候，可能并不明白门外张贴的“团结”的意义，这一刻好像突然了解了一部分：并非是乌合之众的聚集，而是1+1＞2的高效协作。' }],
      plot3: [{ picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
        plot: '那些表格，在编辑的时候明明整整齐齐，四四方方，在打印的时候却完、全、不、一样，你甚至怀疑自己做了几个小时的，怎么会是这么个玩意儿？行高列宽固定是假的，边看打印预览边调整才是真的。',
        gameEnd: 7 }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
        plot: 'PDF格式好，好就好在你做出来什么样最后让大家看到的就基本一致，将你的版式统统固定，呈现出你想要的模样。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
        plot: '也许对于别的组来说，这一点并没有那么重要，但你面对的是有各种名字字长、人数多到组两只足球队的研发组。一开始就把行列空间拉大，让你的信息录入和排版更省事儿了。当然，全部录入完毕后你还是把空间再次调整了一遍。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
        plot: '你知道许多女大学生都有成长危机的叭，这位学姐碰巧就是其中之一。在学姐沉浸在即将进入奔三年龄层的悲伤，刚说服自己虚岁还是19时，看到这条祝福后，她拿起充气锤正在来盘你的路上。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
        plot: '你早早就把这条祝福发到了家园工作群里，彼时学姐还没有收到任何祝福，看到亮起的小红点，心中突然一喜。虽然祝福里的10W+是不太可能了，但还是被你的甜蜜狙击biu地一下击中了。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
        plot: '对于行政来说，活动目的并不是一堆套话就可以敷衍了事的。虽然你以为确实如此，但组长一次次的修改意见都证实着第一句话，认真再思考思考活动的价值和意义，改吧。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
        plot: '越是大型的活动，活动流程就更为琐碎繁杂，如果活动流程无法精确，许多潜在风险就更容易成为现实。在大会开始的前一天，你认为要去调音响的人今日居然有课，主持人还不明确自己的台本顺序......（小声bb:你完了' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
        plot: '因为轻视活动预算，这场全体大会成为了家园历史上耗费最多规模最大的全体大会，你们组长虽然咬牙心痛，但看在全体大会的反响还不错，还是忍下了捶你的动作。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
        plot: '在线佛系征集的后果是，大家在暗搓搓的犹豫害羞里，错过了报名时间。几乎没有几个人报名表演节目，你只好再头脑风暴想一个新的游戏救急了。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
        plot: '凭借你锐利如鬼的观察力和充满策略的巧妙话术，你在工作室成功捕捉许多自愿表演(??)的嘉宾，这次全体大会，一定敲！精！彩！' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
        plot: 'Fine，发家致富靠自己，虽然在十余年的短暂人生中，你几乎都在观众席里默默的做一个无才艺只吃瓜的群众，但这一次：“为了任务，anyway冲鸭！”你一边放松肌肉，拉动筋骨，摩拳擦掌一边想道。' }],
      plot4: [{ picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrh64pqj31120kudj1.jpg',
        plot: '这张图获得了运营组的集体好评，用上这张图，一周后的小家园说说取得了较好的反响，运营小姐姐特地向你表达了赞赏和感谢，不过设计组的学长学姐则鼓励道还有很大进步空间',
        gameEnd: 7 }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrgq12tj31120kuwjk.jpg',
        plot: '运营小姐姐拿到这张图后，放到了运营组工作群，大家看过后都表示非常满意。一周后配上说说文案发到家园工作室的官Q空间，取得了极好的反响，评论和转发量都很高。在那周的设计组例会上，学姐学长重点表扬了你。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrhhg9sj31120kuack.jpg',
        plot: '你选好这张图后发到了设计组的工作群中，学长和学姐审过后提出了一些意见，表示图片与文案主题还未能很好地契合，并建议你再接再厉。' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
        plot: '你见解独到的设计收获了一片好评，成功斩获许多选票，但还有设计小伙伴显然对家园人的特质有着更深的解读，所以你的设计虽然很受欣赏，但最终工作牌的制作还是采取了其他小伙伴的方案。' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
        plot: '在投票竞选中，你出挑的设计成为好评收割机，并毫无悬念地得到了最高的选票。最后，你的设计落地做成工作牌，成为了每一个家园人值班时胸前佩戴的那一抹亮色。' }, { picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
        plot: '从你的设计可以看出你十分的用心，不过对家园内涵的理解还可以进一步深入，也许下一次的工作牌设计中，你的设计方案就是那个好评收割机！' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
        plot: '娴熟使用PS工具的你，作出的星球图得到了学长学姐的表扬，就这样，你一步步成长，终于来到了考核期的最后一周。' }, { picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
        plot: '没有用到这些工具的你，还能做出这么好看的图。确认过眼神，是设计组得不到的人。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrinji1j31120ku771.jpg',
        plot: '没有经验的小白，虽然手不抖，但却势必经历一个漫长的学习过程，于是，作为一个学习ing的小摄影，制作的暖场视频虽然还不错，但却没有达到预期的暖场效果。' }, { picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrizkstj31120kujty.jpg',
        plot: '这一位摄像师，技术很牛，奈何手抖，一个原本制作牛逼的暖场视频生生让人看到潸然泪下……也许，这样的“感动”是你为全体大会带去的另类暖场。' }, { picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrjv0q4j31120ku413.jpg',
        plot: '你凭着敏锐的判断力选择了这位摄影，果然设备好才是王道，最终暖场视频的拍摄效果出乎意料，完美引燃全场！' }]
    };
  },

  created: function () {
    switch (this.i) {
      case 0:
        this.showPlot = this.plot0;
        break;
      case 1:
        this.showPlot = this.plot1;
        break;
      case 2:
        this.showPlot = this.plot2;
        break;
      case 3:
        this.showPlot = this.plot3;
        break;
      case 4:
        this.showPlot = this.plot4;
        break;
    }
  },

  methods: {
    clickPlot: function () {
      this.$emit('clickPlot');
      if (this.discouraged === true) {
        this.$emit('discouraged');
      }
      if (this.progress > this.showPlot[0].gameEnd) {
        this.$emit('gameEnd');
      }
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap_TweenMax__ = __webpack_require__(28);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'plot',

  props: ['i'],

  data: function () {
    return {
      gamePoint: 60,
      newPoint: 60,
      show: true,
      progress: 0,
      showMassage: '',
      message0: [// 情节进度
      {
        gameEnd: 8,
        options: [],
        plotChoice: '第一周，产品组就有一位特别有想法的萌新设想出了一款产品，并邀了你和其他几位研发参与产品的制作。现在，他写的需求文档还在学长学姐那儿审核，前端后端就已经提前开始交流如何实现用户的注册了。',
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
        point: [],
        continue: true
      }, {
        options: ['A.username  email', 'B.email  password', 'C.username  password'],
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
        plotChoice: '在讨论的过程中，你发现，前端把__________和___________两类数据传给后端就能够最好地实现用户注册。',
        point: [-4, 5, 2],
        progress: [0, 1, 2],
        continue: false
      }, {
        options: [],
        plotChoice: '好的开端是成功的一半，随着第一项任务的完成，你们信心满满地来到了第二周。这一周产品进展较大，你们开始对注册功能进行内部测试。',
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
        point: [],
        continue: true
      }, {
        options: ['A.unknown user', 'B.u u', 'C.404'],
        plotChoice: '这时，前端发现一个问题——用户登陆时使用了没有注册过的用户名，于是后端向前端发送了_________以形容这一情况。',
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
        progress: [3, 4, 5],
        point: [5, 2, -4],
        continue: false
      }, {
        options: [],
        plotChoice: '【提示：出于剧情体验需要，在第三周和第四周你会分别从前端和后端视角进行体验，祝你玩的愉快~】',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
        point: [],
        continue: true
      }, {
        options: ['A.把后端扔出去', 'B.自己沉住气自己解析', 'C.让后端优化结构数据'],
        plotChoice: '你们的产品还有两周便要上线，前后端开始进入了紧张的联调之中。在进行接口调试的时候，不省心后端给出的数据结构混乱，导致前端在解析时麻烦又苦逼，于是，作为前端，你决定________',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
        progress: [6, 7, 8],
        point: [-4, 2, 5],
        continue: false
      }, {
        options: [],
        plotChoice: '【能够顺利抵达考核期最后一周的你，已经没有什么能够阻挡了！Come on！通过这最后一关，你就是研发最靓的崽！】',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
        point: [],
        continue: true
      }, {
        options: [],
        plotChoice: '由于你们前面的不懈努力，你们的产品——一款工具型的APP最终成功上线！上线一段时间后',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
        point: [],
        continue: true
      }, {
        options: ['A.默默揣下这口锅，没有告诉任何人', 'B.想起上次推锅坑自己的某前端，于是顺理成章把锅推给了他', 'C.转向负责这款产品的产品同学求助'],
        plotChoice: '你们的产品开始踏上几乎每一款产品都必经的BUG之路——用户在点进平时使用频率最高的功能时，手机却显示一片空白，你深知这是自己身为后端该背的锅，略加思索，你__________',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
        progress: [9, 10, 11],
        point: [5, -4, 2],
        continue: false
      }],
      message1: [// 情节进度
      {
        gameEnd: 7,
        options: ['A：鹅厂出品，还需要多说什么吗？', 'B：细数QQ音乐功能上的闪光点', 'C：由diss网易云音乐突出优越性'],
        plotChoice: '第一周嘛，总是由闲谈为契机加深了解。在聊到音乐APP 时，你作为一个在鄙视链中艰难存活的QQ 音乐用户，还是要为它说两句话，那么你会从哪方面说起呢？',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
        progress: [0, 1, 2],
        point: [-4, 5, 2],
        continue: false
      }, {
        options: ['A：你想的产品逻辑有些复杂，直接手画', 'B：想了个逻辑简单的产品，试水Axure'],
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
        plotChoice: '本周产品组要求你想一个产品并画出原型图，你Axure刚开始学，这时你要怎么完成这份作业？',
        point: [-4, 5],
        progress: [3, 4],
        continue: false
      }, {
        options: [],
        plotChoice: '距离国庆还有半个月，你决定找研发一起做一个追踪国庆热点的小程序，第一次开讨论会的时候，你和研发说了你对的需求，确定了研发能够实现的功能。',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
        point: [],
        continue: true
      }, {
        options: ['A：绝望到无可奈何，告诉研发做出来能用就行', 'B：暴力警告，告诉他就算爆肝这些功能也得出来', 'C：强忍脾气，和研发再次进行线下讨论明确进度'],
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
        plotChoice: '但离国庆还有三天的时候，研发突然告诉你有些功能可能实现不了，你会：',
        point: [2, -4, 5],
        progress: [5, 6, 7],
        continue: false
      }, {
        options: ['A：逛逛“人人都是产品经理”', 'B：在润溪湖天健园散散步', 'C：问问其他组的小伙伴们'],
        plotChoice: '工作室即将要开展hackweek比赛了，组长要你准备几个好的想法，你一时间没有头绪，你要怎样找些灵感呢：',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
        progress: [8, 9, 10],
        point: [-4, 2, 5],
        continue: false
      }],
      message2: [// 情节进度
      {
        gameEnd: 8,
        options: ['A：刘昊然', 'B：姜文', 'C：克里斯埃文斯（美队）'],
        plotChoice: '明明说好不要摸鱼，运营学长学姐们却在第一次例会时...和你讨论起了喜欢哪个明星！？这时，你该怎么回答？',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
        progress: [0, 1, 2],
        point: [2, 2, 2],
        continue: false
      }, {
        options: [],
        plotChoice: '有人喜欢正流行、也有的偏爱冷门。但对于运营们来说，只要发现了足够优质的内容，无论大众小众，都想诚挚安利给用户。',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
        progress: [],
        point: [],
        continue: true
      }, {
        options: ['A：P图达人本人，自己做', 'B：虽然平时都用美图秀秀，但还是试试看', 'C：找设计组寻求帮助'],
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
        plotChoice: '本周，你开始学习所有运营的必修课之一——写推送，在确定以最近某热点为主题后，你开始为头图愁到掉发，你觉得，这张头图该怎么办呢？',
        point: [5, -4, 2],
        progress: [3, 4, 5],
        continue: false
      }, {
        options: ['A：某共享单车为南大出了颜值很高的定制款', 'B：世界5G技术研发又取得了突破性新进展', 'C：2019年12月四六级考试报名链接正式发布'],
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuidijpzj31120ku77s.jpg',
        plotChoice: '今天你在QQ平台值班，需要发一条说说。这时，有三个内容集体撞车，你要选择：',
        point: [5, -4, 2],
        progress: [6, 7, 8],
        continue: false
      }, {
        options: [],
        plotChoice: '还有几天，你就可以完全揭开运营组的神秘面纱啦~别掉以轻心，本周，你的第一个大锅来了。一年一届的运动会拉开帷幕，这样的大、热、点，不追不是小、运、营。开幕式当天',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
        point: [],
        continue: true
      }, {
        options: ['A：从现在开始，进入工作狂模式', 'B：向其他的小运营们在线求帮助'],
        plotChoice: '你扛起相机冲向体育场，搜集了很多素材。采写完已经是中午，你的照片还没修，文案还没写，采访录音还没转译，眼看推文今晚就要发了，你要？',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
        progress: [9, 10],
        point: [2, 5],
        continue: false
      }],
      message3: [// 情节进度
      {
        gameEnd: 7,
        options: ['A：设置表格固定的行高列宽', 'B：表格完成后转为PDF格式', 'C：表格的行列空间尽可能拉大'],
        plotChoice: '行政的工作之一，就是把其他组安排得明明白白。在收集了研发组几十名程序员的无课情况之后，需要你做一张研发组无课统计的电子表格。怎么做，才可能可以让这张表格尽可能地美观呢？',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
        progress: [0, 1, 2],
        point: [-4, 5, 2],
        continue: false
      }, {
        options: [],
        plotChoice: '制作每一张Excel表格时，考勤每一班值班情况时，行政们都会表现出魔鬼般的严谨和周密。但同时，温暖亦如行政。他们将家园每一位成员的生日加入备忘录',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
        point: [],
        continue: true
      }, {
        options: ['A：xxx终于20岁啦，你已经是个成熟的女大学生了，生日快乐！', 'B：祝为家园工作室倾注爱与希望的美丽运营生日快乐！愿你成为最棒的话题制造者，推送统统10w+，新的一年，等待着你的都是好运喔~'],
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
        plotChoice: '以备在生日当天及时送上最温馨的祝福，本周，运营组的一位学姐正好要过生日了，你需要为她写一条生日祝福文案，你会怎么写呢？',
        point: [-4, 5],
        progress: [3, 4],
        continue: false
      }, {
        options: [],
        plotChoice: '如果其他组的工作侧重在于对外产出，行政组则致力于内部的团队建设。甚至可以说，行政组是家园工作室区别于其他社团的特点之一。毕竟，不是每一个社团都对本身的团队建设有着太多期待',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
        point: [],
        continue: true
      }, {
        options: ['A：确定活动目的', 'B：精确活动流程', 'C：统计活动预算'],
        plotChoice: '这一点，从家园的全体大会就可见一斑了，当然，这绝对是行政每学期的重点工作内容。本学期全体大会的策划，交给了你负责。面对策划要考虑的种种因素，你如果一定要选择一个次优先级的因素，你会选择?',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
        progress: [5, 6, 7],
        point: [2, -4, 5],
        continue: false
      }, {
        options: [],
        plotChoice: '如果你在其他组，你也许不太可能在一个月内认识其他组的大多数成员。但你是在行政组，对于行政来说，对其他组成员的了解，可能是因缘际会，是志趣相投，但更是刚性需求。',
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
        point: [],
        continue: true
      }, {
        options: ['A：在线征集，感兴趣的筒子可以志愿报名~', 'B：暗中观察，说服你认为的潜在表演嘉宾', 'C：靠自己，这次全体大会嗨不嗨就靠你了'],
        plotChoice: '全体大会不仅要有烧脑刺激的集体游戏，还要有家园er们精心准备的节目。为了征集节目，你要怎么推动身边的家园er们参与节目呢？',
        picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
        progress: [8, 9, 10],
        point: [-4, 5, 2],
        continue: false
      }],
      message4: [// 情节进度
      {
        gameEnd: 7,
        options: [],
        plotChoice: '一个无课的下午，你正百无聊赖地刷着QQ空间,运营组小姐姐的消息弹窗突然弹出:"Hi ～方便做张说说配图嘛?"正好最近没事，于是你爽快地答应下来.',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
        point: [],
        continue: true
      }, {
        options: [],
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg',
        plotChoice: '接着，运营小姐姐给了你说说文案并附上了作图要求——下周就是植树节了，你需要作出一家园形象的图，用来配要在植树节发的空间说说.',
        point: [],
        continue: true
      }, {
        options: ['A', 'B', 'C'],
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrgcoa8j31120kun0j.jpg',
        plotChoice: '',
        point: [2, 5, -4],
        progress: [0, 1, 2],
        continue: false
      }, {
        options: [],
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
        plotChoice: '第二周，你终于迎来了期待已久的一项任务——设计工作证！每一届家园人都有着那一届独属的工作证，而工作证的设计，自然就是由身怀绝技的设计组来完成。根据自己对家园风格与特质的理解，你设计出了如下几个版本的工作证，并挑出了最适合家园人的那个_______。',
        point: [],
        continue: true
      }, {
        options: ['A', 'B', 'C'],
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
        plotChoice: '',
        point: [2, 5, -4],
        progress: [3, 4, 5],
        continue: false
      }, {
        options: [],
        plotChoice: '又到了每周四晚的设计组例会，你们 Ul 设计的完成情况，并重点在例会上，学姐总结了上次表扬了你的作业。在例会的末尾，学姐给了你们一条链接，里面有做图教程，需要你们',
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
        point: [],
        continue: true
      }, {
        options: [],
        plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星球图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
        point: [],
        progress: [],
        continue: true
      }, {
        options: ['A.选区工具', 'B.截图工具', 'C.图形工具', 'D.钢笔工具'],
        plotChoice: '自学来做图和配色.一你花了几天时间做出了下面这张“星球图”，在作图过程中，你用到了许多 PS 工具，不过没有用到____',
        picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
        point: [5, 2, 2, 2],
        progress: [7, 6, 7, 7],
        continue: false
      }, {
        options: [],
        plotChoice: '恭喜你！成功来到考核期最后一周！家园各个组为了给能够坚持到现在的崽子们庆祝一番，决定举办晦翻全场的家园全体大会。积极的你主动参与了大会暖场视频的筹划，现在有',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
        point: [],
        continue: true
      }, {
        options: [],
        plotChoice: '三个预选摄影师，各有其优势，综合考量一番后，你敲定____作为本次大会御用摄影。',
        picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg',
        point: [],
        continue: true
      }, {
        options: ['A', 'B', 'C'],
        plotChoice: '',
        picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xp1j4g69j31120kuwgl.jpg',
        point: [2, -4, 5],
        progress: [8, 9, 10],
        continue: false
      }]
    };
  },

  created: function () {
    switch (this.i) {
      case 0:
        this.showMassage = this.message0;
        break;
      case 1:
        this.showMassage = this.message1;
        break;
      case 2:
        this.showMassage = this.message2;
        break;
      case 3:
        this.showMassage = this.message3;
        break;
      case 4:
        this.showMassage = this.message4;
        break;
    }
  },

  computed: {
    gameProgress: function () {
      return {
        position: 'absolute',
        width: this.progress / (this.showMassage.length - 1) * 200 + 'px',
        backgroundColor: 'blue',
        height: '5%',
        top: '5%',
        right: '15%'
      };
    },

    fixPoint: function () {
      return this.newPoint.toFixed(0);
    }
  },

  methods: {
    progressAdd: function (point, progress) {
      this.$emit('showPlot', progress);
      this.gamePoint += point;
      this.$emit('gamePoint', this.gamePoint);
      // 多50ms防止文字突变
      setTimeout(() => {
        this.progress++;
      }, 3050);
    },

    click: function () {
      if (this.showMassage[this.progress].continue === true) {
        this.show = false;
        setTimeout(() => {
          this.progress++;
          this.show = true;
        }, 1500);
      }
    }
  },

  watch: {
    gamePoint: function (newValue) {
      console.log(newValue);
      __WEBPACK_IMPORTED_MODULE_0_gsap_TweenMax__["a" /* TweenLite */].to(this.$data, 0.5, { newPoint: newValue });
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Point',

  props: ['i', 'userName', 'gamePoint'],

  data: function () {
    return {
      group: '',
      lists: ''
    };
  },

  created: function () {
    switch (this.i) {
      case 0:
        this.group = '研发';
        break;
      case 1:
        this.group = '产品';
        break;
      case 2:
        this.group = '运营';
        break;
      case 3:
        this.group = '行政';
        break;
      case 4:
        this.group = '设计';
        break;
    }
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('http://localhost:8000/api/ranking', {
      group: this.group,
      score: this.gamePoint,
      userName: this.userName
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      transformRequest: [function (data) {
        data = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(data);
        return data;
      }]
    }).then(res => {
      this.lists = res.data;
      console.log(res);
    }).catch(function (err) {
      console.log(err);
      throw new Error(err);
    });
  },

  methods: {
    restart: function () {
      this.$emit('end');
      setTimeout(() => {
        window.open('game.html', '_self');
      }, 1000);
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_choice__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_plot_choice__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_plot__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_discouraged__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_input_name__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_first_plot__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_gameEnd__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_point__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_animation_w800_h600__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_animation_w800_h600___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_animation_w800_h600__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'App',

  components: { gameEnd: __WEBPACK_IMPORTED_MODULE_6__components_gameEnd__["a" /* default */], choice: __WEBPACK_IMPORTED_MODULE_0__components_choice__["a" /* default */], plotChoice: __WEBPACK_IMPORTED_MODULE_1__components_plot_choice__["a" /* default */], plot: __WEBPACK_IMPORTED_MODULE_2__components_plot__["a" /* default */], discouraged: __WEBPACK_IMPORTED_MODULE_3__components_discouraged__["a" /* default */], inputName: __WEBPACK_IMPORTED_MODULE_4__components_input_name__["a" /* default */], firstPlot: __WEBPACK_IMPORTED_MODULE_5__components_first_plot__["a" /* default */], point: __WEBPACK_IMPORTED_MODULE_7__components_point__["a" /* default */] },

  data: function () {
    return {
      choicing: 0,
      i: '',
      inputShow: false,
      firstPlotShow: false,
      firstPlotIf: false,
      plotChoiceIf: false,
      plotIf: false,
      plotChoiceShow: false,
      plotShow: false,
      discouragedShow: false,
      discouraged: false,
      gameEndShow: false,
      gamePoint: 0,
      pointShow: false,
      userName: '',
      audio: '',
      pictures: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page15', 'page16', 'page17', 'page18', 'page19', 'page20', 'page21', 'page22', 'page23', 'page24', 'page25', 'page26', 'page27', 'page28', 'page29', 'page30', 'page31', 'page32', 'page33', 'page34', 'page35', 'page36', 'page37', 'page38', 'page39', 'page40', 'page41', 'page42', 'page43', 'page44', 'page45', 'page46', 'page47'],
      picturesSrc: ['http://wx1.sinaimg.cn/large/005JHgrHgy1g1z08wclf2j31120kujt7.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yzid8sphj31120kujzg.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yx2c9pskj31120kuthg.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yx2c9pskj31120kuthg.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbsipznj31120ku0z1.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbs8urbj31120kuwkp.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1yud6vyflj31120kuadm.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1yoiwtqu1j31120kuaj9.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1yoivwrdlj31120kuk3i.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xul2snyyj31120kuwjo.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuk5f606j31120ku0xy.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xuk4ya8mj31120kuthn.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuidijpzj31120ku77s.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xp1j4g69j31120kuwgl.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrjv0q4j31120ku413.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrizkstj31120kujty.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whri9hsvj31120kuq5q.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrinji1j31120ku771.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrhhg9sj31120kuack.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrh64pqj31120kudj1.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrgq12tj31120kuwjk.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrgcoa8j31120kun0j.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrg1ficj30qo0gs74m.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrfn2dej31120kudll.jpg', 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1u021veypj30lc0lct8u.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g219dixdtwj31120ku44s.jpg', 'http://wx1.sinaimg.cn/large/005JHgrHgy1g219dhs1i9j31120kudm0.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g219djegv0j31120kugru.jpg', 'http://wx4.sinaimg.cn/large/005JHgrHgy1g219di4dodj31120ku7aj.jpg', 'http://wx2.sinaimg.cn/large/005JHgrHgy1g219diln52j31120kugru.jpg'],
      loading: 0,
      progress: 0,
      defaultOptions: { animationData: __WEBPACK_IMPORTED_MODULE_8__assets_animation_w800_h600__ },
      animationSpeed: 1,
      loadingStyle: {
        width: 0,
        height: '8px',
        backgroundColor: 'orange'
      },
      loadingProgress: 0
    };
  },

  created: function () {
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', 'http://audio.xmcdn.com/group47/M03/1E/54/wKgKk1ubPLbgzAVMACD0qpSK364636.m4a');
    for (let i = 0; i < this.pictures.length; i++) {
      this.pictures[i] = new Image();
      this.pictures[i].src = this.picturesSrc[i];
      let watching = setInterval(() => {
        if (this.pictures[i].complete) {
          this.loading++;
          this.loadingStyle.width = this.loading / this.pictures.length * 100 + '%';
          let progress = this.loading / this.pictures.length * 100;
          this.loadingProgress = progress.toFixed(0) + '%';
          if (this.loading === 47) {
            this.inputShow = true;
            this.audio.play();
          }
          clearInterval(watching);
        }
      }, 1);
    }
  },

  methods: {
    choiceOccupational: function (i) {
      this.i = i;
      this.firstPlotIf = true;
      this.plotChoiceIf = true;
      this.plotIf = true;
      setTimeout(() => {
        this.firstPlotShow = true;
      }, 1000);
      this.choicing = false;
    },

    firstPlotClose: function () {
      setTimeout(() => {
        this.plotChoiceShow = true;
      }, 1000);
      this.firstPlotShow = false;
    },

    choiceOption: function (progress) {
      this.plotChoiceShow = false;
      this.progress = progress;
      setTimeout(() => {
        this.plotShow = true;
      }, 1000);
    },

    checkDiscouraged: function (gamePoint) {
      this.gamePoint = gamePoint;
      if (gamePoint < 59) {
        this.discouraged = true;
      }
    },

    BeenDiscouraged: function () {
      this.plotChoiceIf = false;
      this.PlotShow = false;
      setTimeout(() => {
        this.discouragedShow = true;
        this.plotIf = false;
      }, 1000);
    },

    gameEnd: function () {
      this.plotChoiceIf = false;
      this.PlotShow = false;
      setTimeout(() => {
        this.gameEndShow = true;
        this.plotIf = false;
      }, 1000);
    },

    end: function () {
      this.pointShow = false;
    },

    showPoint: function () {
      this.gameEndShow = false;
      setTimeout(() => {
        this.pointShow = true;
      }, 1000);
    },

    clickPlot: function () {
      this.plotShow = false;
      setTimeout(() => {
        this.plotChoiceShow = true;
      }, 1000);
    },

    inputComplete: function (userName) {
      setTimeout(() => {
        this.choicing = true;
      }, 1000);
      this.inputShow = false;
      this.userName = userName;
    }
  }
});

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_game__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_lottie__ = __webpack_require__(36);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$http = __WEBPACK_IMPORTED_MODULE_3__api_index__["a" /* instance */];
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('lottie', __WEBPACK_IMPORTED_MODULE_4_vue_lottie__["default"]);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#game',
  router: __WEBPACK_IMPORTED_MODULE_2__router_game__["a" /* default */],
  template: '<game/>',
  components: { game: __WEBPACK_IMPORTED_MODULE_1__game_vue__["a" /* default */] }
});

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(25);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'game',
    component: __WEBPACK_IMPORTED_MODULE_2__game__["default"]
  }]
}));

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_lottie_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_lottie_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_lottie_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_3c796cc7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_lottie_vue__ = __webpack_require__(99);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_lottie_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_3c796cc7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_lottie_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_game_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03432dd2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_game_vue__ = __webpack_require__(95);
function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_game_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03432dd2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_game_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_choice_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a3ee04a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_choice_vue__ = __webpack_require__(105);
function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a3ee04a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_choice_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a3ee04a8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_choice_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_discouraged_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d6ce9d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_discouraged_vue__ = __webpack_require__(96);
function injectStyle (ssrContext) {
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d6ce9d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_discouraged_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d6ce9d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_discouraged_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_first_plot_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55bf8630_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_first_plot_vue__ = __webpack_require__(102);
function injectStyle (ssrContext) {
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55bf8630"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_first_plot_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55bf8630_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_first_plot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gameEnd_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fc6a14d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gameEnd_vue__ = __webpack_require__(100);
function injectStyle (ssrContext) {
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fc6a14d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_gameEnd_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fc6a14d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_gameEnd_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_name_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5d7068_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_name_vue__ = __webpack_require__(103);
function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c5d7068"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_name_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c5d7068_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_name_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_model_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_418cddf1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_model_vue__ = __webpack_require__(101);
function injectStyle (ssrContext) {
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-418cddf1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_model_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_418cddf1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_model_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plot_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_86174e0e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_plot_vue__ = __webpack_require__(104);
function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86174e0e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plot_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_86174e0e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_plot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plot_choice_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd922e28_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_plot_choice_vue__ = __webpack_require__(106);
function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bd922e28"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plot_choice_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd922e28_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_plot_choice_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_point_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2755b50c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_point_vue__ = __webpack_require__(98);
function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2755b50c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_point_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2755b50c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_point_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(_vm.loading !== 47)?_c('div',{staticClass:"loading"},[_c('div',{staticClass:"loadingBar",style:(_vm.loadingStyle)})]):_vm._e(),_vm._v(" "),(_vm.loading !== 47)?_c('div',{staticClass:"loadingProgress"},[_vm._v("Loading "+_vm._s(_vm.loadingProgress))]):_vm._e(),_vm._v(" "),(_vm.loading !== 47)?_c('div',{staticClass:"lottie"},[_c('lottie',{attrs:{"options":_vm.defaultOptions}})],1):_vm._e(),_vm._v(" "),_c('input-name',{directives:[{name:"show",rawName:"v-show",value:(_vm.inputShow),expression:"inputShow"}],on:{"inputComplete":_vm.inputComplete}}),_vm._v(" "),_c('choice',{directives:[{name:"show",rawName:"v-show",value:(_vm.choicing),expression:"choicing"}],on:{"choiceOccupational":_vm.choiceOccupational}}),_vm._v(" "),(_vm.firstPlotIf)?_c('first-plot',{directives:[{name:"show",rawName:"v-show",value:(_vm.firstPlotShow),expression:"firstPlotShow"}],attrs:{"i":_vm.i},on:{"close":_vm.firstPlotClose}}):_vm._e(),_vm._v(" "),(_vm.plotChoiceIf)?_c('plot-choice',{directives:[{name:"show",rawName:"v-show",value:(_vm.plotChoiceShow),expression:"plotChoiceShow"}],attrs:{"i":_vm.i},on:{"showPlot":_vm.choiceOption,"gamePoint":_vm.checkDiscouraged}}):_vm._e(),_vm._v(" "),(_vm.plotIf)?_c('plot',{directives:[{name:"show",rawName:"v-show",value:(_vm.plotShow),expression:"plotShow"}],attrs:{"i":_vm.i,"progress":_vm.progress,"discouraged":_vm.discouraged},on:{"discouraged":_vm.BeenDiscouraged,"gameEnd":_vm.gameEnd,"clickPlot":_vm.clickPlot}}):_vm._e(),_vm._v(" "),_c('discouraged',{directives:[{name:"show",rawName:"v-show",value:(_vm.discouragedShow),expression:"discouragedShow"}]}),_vm._v(" "),_c('game-end',{directives:[{name:"show",rawName:"v-show",value:(_vm.gameEndShow),expression:"gameEndShow"}],on:{"gameEnd":_vm.showPoint}}),_vm._v(" "),(_vm.pointShow)?_c('point',{directives:[{name:"show",rawName:"v-show",value:(_vm.pointShow),expression:"pointShow"}],attrs:{"userName":_vm.userName,"i":_vm.i,"gamePoint":_vm.gamePoint},on:{"end":_vm.end}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"discouraged"}},[_c('div',{staticClass:"discouraged"},[_c('transition',{attrs:{"name":"page1"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.pageShow),expression:"pageShow"}],attrs:{"id":"fullScreen","src":"http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbs8urbj31120kuwkp.jpg","alt":"劝退"},on:{"click":_vm.page2Show}})]),_vm._v(" "),_c('transition',{attrs:{"name":"page2"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],attrs:{"id":"repeat","src":"http://wx3.sinaimg.cn/large/005JHgrHgy1g1yzid8sphj31120kujzg.jpg","alt":"重启"},on:{"click":_vm.repeat}})])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"point"}},[_c('div',{staticClass:"point"},[_c('img',{attrs:{"id":"fullScreen","src":"http://wx1.sinaimg.cn/large/005JHgrHgy1g1z08wclf2j31120kujt7.jpg","alt":"计分榜"}}),_vm._v(" "),_c('div',{staticClass:"allList"},_vm._l((_vm.lists),function(list,index){return _c('div',{staticClass:"list",attrs:{"id":index}},[_c('div',{staticClass:"rank"},[_c('p',[_vm._v(_vm._s(list.rank))])]),_vm._v(" "),_c('div',{staticClass:"userName"},[_c('p',[_vm._v(_vm._s(list.username))])]),_vm._v(" "),_c('div',{staticClass:"score"},[_c('p',[_vm._v(_vm._s(list.score))])])])}),0),_vm._v(" "),_c('button',{staticClass:"restart",on:{"click":_vm.restart}},[_c('span',[_vm._v("重新开始")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"lavContainer",style:(_vm.style)})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"gameEnd"}},[_c('div',[_c('img',{attrs:{"id":"fullScreen","src":"http://wx1.sinaimg.cn/large/005JHgrHgy1g1ywbsipznj31120ku0z1.jpg","alt":"录取页"},on:{"click":_vm.showPoint}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"model"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"background"},[_c('img',{attrs:{"id":"fullScreen","src":_vm.picturesSrc[_vm.i],"alt":"模态框"}}),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(82),"id":"enter","alt":"确认"},on:{"click":_vm.choice}}),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(81),"id":"cancel","alt":"取消"},on:{"click":_vm.close}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"firstPlot"}},[_c('div',{staticClass:"firstPlot",on:{"click":_vm.close}},[_c('img',{attrs:{"id":"fullScreen","src":"http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrfn2dej31120kudll.jpg","alt":"firstPlot"}}),_vm._v(" "),_c('div',{staticClass:"msg"},[_c('p',[_vm._v("恭喜你，在一轮笔试和两轮面试中过关斩将，成为家园工作室"+_vm._s(_vm.msg)+"的一员!")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"inputName"}},[_c('div',{staticClass:"inputName"},[_c('img',{attrs:{"id":"fullScreen","src":"http://wx2.sinaimg.cn/large/005JHgrHgy1g1yoivwrdlj31120kuk3i.jpg","alt":"背景"}}),_vm._v(" "),_c('img',{staticClass:"input",attrs:{"src":__webpack_require__(83),"alt":"输入"}}),_vm._v(" "),_c('label',{attrs:{"for":"inputName"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.msg),expression:"msg"}],attrs:{"id":"inputName","placeholder":"请输入用户昵称"},domProps:{"value":(_vm.msg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.msg=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"enter",on:{"click":_vm.send}}),_vm._v(" "),_c('transition',{attrs:{"name":"register"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.register),expression:"register"}],attrs:{"id":"register","src":__webpack_require__(84),"alt":"已注册"}})])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"onlyPlot"}},[_c('div',{staticClass:"onlyPlot",on:{"click":_vm.clickPlot}},[_c('img',{attrs:{"src":_vm.showPlot[_vm.progress].picturesSrc,"id":"fullScreen","alt":"情节"}}),_vm._v(" "),_c('div',{staticClass:"Plot"},[_c('p',[_vm._v(_vm._s(_vm.showPlot[_vm.progress].plot))])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"choice"}},[_c('div',{staticClass:"choice"},[_c('img',{attrs:{"id":"fullScreen","src":"http://wx4.sinaimg.cn/large/005JHgrHgy1g1yx2c9pskj31120kuthg.jpg","alt":"背景"}}),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__(85),"id":"move","alt":"小家园"}}),_vm._v(" "),_c('div',{attrs:{"id":"button1"},on:{"click":function($event){return _vm.openModel(0)}}}),_vm._v(" "),_c('div',{attrs:{"id":"button2"},on:{"click":function($event){return _vm.openModel(1)}}}),_vm._v(" "),_c('div',{attrs:{"id":"button3"},on:{"click":function($event){return _vm.openModel(2)}}}),_vm._v(" "),_c('div',{attrs:{"id":"button4"},on:{"click":function($event){return _vm.openModel(3)}}}),_vm._v(" "),_c('div',{attrs:{"id":"button5"},on:{"click":function($event){return _vm.openModel(4)}}}),_vm._v(" "),_c('model',{attrs:{"show":_vm.show,"i":_vm.i},on:{"close":_vm.closeModel,"choice":_vm.choiceOccupational}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"plotChoice"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"plotChoice",on:{"click":_vm.click}},[_c('img',{attrs:{"id":"fullScreen","src":_vm.showMassage[_vm.progress].picturesSrc,"alt":"背景"}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMassage[_vm.progress].plotChoice !== ''),expression:"showMassage[progress].plotChoice !== ''"}],staticClass:"Plot"},[_c('p',[_vm._v(_vm._s(_vm.showMassage[_vm.progress].plotChoice))])]),_vm._v(" "),(_vm.showMassage[_vm.progress].options.length === 4)?_c('div',{staticClass:"choiceButton4"},[_c('div',{staticClass:"choiceLeft"},[_c('button',{attrs:{"id":"choice1"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[0], _vm.showMassage[_vm.progress].progress[0])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[0]))]),_vm._v(" "),_c('button',{attrs:{"id":"choice2"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[1], _vm.showMassage[_vm.progress].progress[1])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[1]))])]),_vm._v(" "),_c('div',{staticClass:"choiceRight"},[_c('button',{attrs:{"id":"choice3"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[2], _vm.showMassage[_vm.progress].progress[2])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[2]))]),_vm._v(" "),_c('button',{attrs:{"id":"choice4"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[3], _vm.showMassage[_vm.progress].progress[3])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[3]))])])]):_vm._e(),_vm._v(" "),((_vm.showMassage[_vm.progress].options.length === 3) && (_vm.i === 4))?_c('div',{staticClass:"designChoiceButton3"},[_c('button',{attrs:{"id":"designThreeChoice1"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[0], _vm.showMassage[_vm.progress].progress[0])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[0]))]),_vm._v(" "),_c('button',{attrs:{"id":"designThreeChoice2"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[1], _vm.showMassage[_vm.progress].progress[1])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[1]))]),_vm._v(" "),_c('button',{attrs:{"id":"designThreeChoice3"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[2], _vm.showMassage[_vm.progress].progress[2])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[2]))])]):_vm._e(),_vm._v(" "),((_vm.showMassage[_vm.progress].options.length === 3) && (_vm.i === 0))?_c('div',{staticClass:"developChoiceButton3"},[_c('button',{attrs:{"id":"developThreeChoice1"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[0], _vm.showMassage[_vm.progress].progress[0])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[0]))]),_vm._v(" "),_c('button',{attrs:{"id":"developThreeChoice2"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[1], _vm.showMassage[_vm.progress].progress[1])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[1]))]),_vm._v(" "),_c('button',{attrs:{"id":"developThreeChoice3"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[2], _vm.showMassage[_vm.progress].progress[2])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[2]))])]):_vm._e(),_vm._v(" "),((_vm.showMassage[_vm.progress].options.length === 3) && (_vm.i !== 4) && (_vm.i !== 0))?_c('div',{staticClass:"choiceButton3"},[_c('button',{attrs:{"id":"threeChoice1"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[0], _vm.showMassage[_vm.progress].progress[0])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[0]))]),_vm._v(" "),_c('button',{attrs:{"id":"threeChoice2"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[1], _vm.showMassage[_vm.progress].progress[1])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[1]))]),_vm._v(" "),_c('button',{attrs:{"id":"threeChoice3"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[2], _vm.showMassage[_vm.progress].progress[2])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[2]))])]):_vm._e(),_vm._v(" "),(_vm.showMassage[_vm.progress].options.length === 2)?_c('div',{staticClass:"choiceButton2"},[_c('button',{attrs:{"id":"twoChoice1"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[0], _vm.showMassage[_vm.progress].progress[0])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[0]))]),_vm._v(" "),_c('button',{attrs:{"id":"twoChoice2"},on:{"click":function($event){return _vm.progressAdd(_vm.showMassage[_vm.progress].point[1], _vm.showMassage[_vm.progress].progress[1])}}},[_vm._v(_vm._s(_vm.showMassage[_vm.progress].options[1]))])]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports) {

module.exports = {"v":"4.7.0","fr":30.0000305175781,"ip":0,"op":151.000153605143,"w":800,"h":600,"nm":"LEGO loader Lottie","ddd":0,"assets":[{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"red 5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[428.45,219.705,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":330,"s":[428.45,219.705,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":360,"s":[485.15,259.845,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[485.15,259.845,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":450,"s":[428.45,299.985,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":540.001,"s":[428.45,299.985,0],"e":[371.75,340.125,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":540.000549316406,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"orange 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[428.05,219.585,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":210,"s":[428.05,219.585,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":240,"s":[484.75,259.725,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[484.75,259.725,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[428.05,299.865,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[428.05,299.865,0],"e":[371.35,340.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":450,"s":[371.35,340.005,0],"e":[371.35,340.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":510.001,"s":[371.35,340.005,0],"e":[314.65,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":540.000549316406}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":420.000427246094,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"yellow 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[371.55,260.125,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[428.25,219.725,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":90,"s":[428.25,219.725,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":120,"s":[484.95,259.865,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[484.95,259.865,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[428.25,300.005,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[428.25,300.005,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[371.55,340.145,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":390,"s":[371.55,340.145,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":420,"s":[314.85,300.005,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":480,"s":[314.85,300.005,0],"e":[371.55,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":510.000518798828}]},"a":{"a":0,"k":[419.874,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[394.094,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[420.65,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[447.66,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.331],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[421.104,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.89,0.184,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[391.524,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.699,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.922,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[419.874,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.349,40.14],[-28.349,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[448.224,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":300.000305175781,"op":480.00048828125,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"blue 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[371.95,340.415,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":270,"s":[371.95,340.415,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":300,"s":[315.25,300.275,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[315.25,300.275,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"t":390.000396728516}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":180.000183105469,"op":360.000366210938,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"green 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"t":270.000274658203}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":60.0000610351563,"op":240.000244140625,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"red","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150.000152587891}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":120.000122070313,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"green","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"t":90.0000915527344}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":60.0000610351563,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"blue","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":70,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"t":210.000213623047}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":180.000183105469,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"orange","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":10,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150.000152587891}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":120.000122070313,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":10,"ty":4,"nm":"yellow","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[371.55,260.125,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[428.25,219.725,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":90,"s":[428.25,219.725,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":120,"s":[484.95,259.865,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":190,"s":[484.95,259.865,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[428.25,300.005,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[428.25,300.005,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"t":330.000335693359}]},"a":{"a":0,"k":[419.874,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[394.094,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[420.65,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[447.66,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.331],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[421.104,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.89,0.184,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[391.524,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.699,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.922,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[419.874,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.349,40.14],[-28.349,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[448.224,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":300.000305175781,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":11,"ty":4,"nm":"orange 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[428.05,219.585,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":210,"s":[428.05,219.585,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":240,"s":[484.75,259.725,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":310,"s":[484.75,259.725,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[428.05,299.865,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[428.05,299.865,0],"e":[371.35,340.005,0],"to":[0,0,0],"ti":[0,0,0]},{"t":450.000457763672}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":300.000305175781,"op":420.000427246094,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":12,"ty":4,"nm":"red 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[428.45,219.705,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":330,"s":[428.45,219.705,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":360,"s":[485.15,259.845,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":430,"s":[485.15,259.845,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":450,"s":[428.45,299.985,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":540.001,"s":[428.45,299.985,0],"e":[371.75,340.125,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":420.000427246094,"op":540.000549316406,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":13,"ty":4,"nm":"green 5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[372.25,259.725,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[372.25,259.725,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[428.95,219.585,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":450,"s":[428.95,219.585,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":480,"s":[485.65,259.725,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":550.001,"s":[485.65,259.725,0],"e":[428.95,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":540.000549316406,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":14,"ty":4,"nm":"yellow 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[371.55,260.125,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[428.25,219.725,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":90,"s":[428.25,219.725,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":120,"s":[484.95,259.865,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[484.95,259.865,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[428.25,300.005,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[428.25,300.005,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[371.55,340.145,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":390,"s":[371.55,340.145,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":420,"s":[314.85,300.005,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":490,"s":[314.85,300.005,0],"e":[371.55,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":510.000518798828}]},"a":{"a":0,"k":[419.874,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[394.094,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[420.65,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[447.66,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.331],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[421.104,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.89,0.184,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[391.524,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.699,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.922,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[419.874,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.349,40.14],[-28.349,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[448.224,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":480.00048828125,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":15,"ty":4,"nm":"blue 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[371.95,340.415,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":270,"s":[371.95,340.415,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":300,"s":[315.25,300.275,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":370,"s":[315.25,300.275,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[371.95,260.135,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":480,"s":[371.95,260.135,0],"e":[428.65,219.995,0],"to":[0,0,0],"ti":[0,0,0]},{"t":510.000518798828}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":360.000366210938,"op":480.00048828125,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":16,"ty":4,"nm":"green 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":250,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[372.25,259.725,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[372.25,259.725,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"t":390.000396728516}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":240.000244140625,"op":360.000366210938,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":17,"ty":4,"nm":"red 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":130,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"t":270.000274658203}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":120.000122070313,"op":240.000244140625,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":18,"ty":4,"nm":"orange 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[428.05,219.585,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":210,"s":[428.05,219.585,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":240,"s":[484.75,259.725,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[484.75,259.725,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":330.000335693359}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":120.000122070313,"op":300.000305175781,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":19,"ty":4,"nm":"red 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[428.45,219.705,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":330,"s":[428.45,219.705,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":360,"s":[485.15,259.845,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[485.15,259.845,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"t":450.000457763672}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":240.000244140625,"op":420.000427246094,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":20,"ty":4,"nm":"green 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[372.25,259.725,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[372.25,259.725,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[428.95,219.585,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":450,"s":[428.95,219.585,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":480,"s":[485.65,259.725,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":540.001,"s":[485.65,259.725,0],"e":[428.95,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":360.000366210938,"op":540.000549316406,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":21,"ty":4,"nm":"blue 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[371.95,340.415,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":270,"s":[371.95,340.415,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":300,"s":[315.25,300.275,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[315.25,300.275,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[371.95,260.135,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":480,"s":[371.95,260.135,0],"e":[428.65,219.995,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":510.001,"s":[428.65,219.995,0],"e":[428.65,219.995,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":570.001,"s":[428.65,219.995,0],"e":[485.35,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"t":600.000610351563}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":480.00048828125,"op":603.00061340332,"st":0,"bm":0,"sr":1}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"LEGO loader","refId":"comp_3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[400,300,0]},"a":{"a":0,"k":[400,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":150,"s":[20],"e":[20.033]},{"t":601.000611368815}]},"w":800,"h":600,"ip":0,"op":151.000153605143,"st":0,"bm":0,"sr":1}]}

/***/ })
],[25]);
//# sourceMappingURL=game.31c3d968ac44133fe0ab.js.map