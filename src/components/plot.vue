<template>
  <transition name="onlyPlot">
    <div class="onlyPlot" @click="clickPlot">
      <img v-bind:src="showPlot[progress].picturesSrc" id="fullScreen"  alt="情节"/>
      <div class="Plot"><p>{{showPlot[progress].plot}}</p></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'plot',

    props: ['i', 'discouraged', 'progress'],

    data: function () {
      return {
        showPlot: '',
        plot0: [
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
            plot: '没有密码的用户就是没有灵魂的游客，用户注册完后仍然是游客身份，研发组学长看见你们设计的这个谜之注册，开始怀疑人生……',
            gameEnd: 8},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
            plot: '选择了这两类数据后，你们不仅成功地完成了用户注册的设计，还超额做成了用户注册后续的用户验证，研发学长在例会上对你们进行了表扬，并将你们提名为“研发最帅小队”。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8ftz55j31120kutkc.jpg',
            plot: '你们选择了这两个数据，最终圆满完成任务。产品对你们的完成度十分满意，当即从食堂提了几袋鸡排回来给你们加餐。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
            plot: '后端选择了这个词来向前端描述情况，前端瞬间Get到了点，前后端几乎无缝衔接，堪称完美地完成了此次任务。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
            plot: '后端本想偷个懒，只发两个“u”来表示“unknown user”，奈何让神秘代码前端琢磨了半天，最后还是得通过交流解答，反而拖慢了总体进程，不过好在前端早早跑来表达疑问，双方沟通较及时，最终也较为圆满地完成了任务。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1xs8g7cf8j31120kuwgr.jpg',
            plot: '404是一个如此海纳百川的代号，它的背后包含着数不清的可能情况，前端因为后端要表达的意思过于含蓄而集体宕机，产品凄惨腰斩。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
            plot: '扔后端一时爽，扔完之后，没有后端来帮你优化数据，你只能自己回去收拾烂摊子，从此坐实“研发最苦逼前端”称号。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
            plot: '自己解析，是个漫长而艰难的过程，毕竟设计数据结构本来就完全是后端的锅。最后你虽然成功解决问题，但却被学长指出团队意识不够，由此你引以为戒，并下定决心以后的项目接口设计，一定要和后端定义好优化的数据结构和规范。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xs8gisy1j31120kutc4.jpg',
            plot: '虽然前期没有商量好导致了现在的问题，但你充分意识到这是后端在设计数据结构上的锅，于是你及时向后端提出了问题，再次接到锅的后端虽然&￥#￥%！@，但因为这锅确实接的明明白白，于是还是乖乖去优化了数据，最终你们成功协作，创造了研发组前后端对接最迅猛的一段佳话。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
            plot: '好在你技术过硬，有足够的本事来接这口锅，于是最终没有“打草惊蛇”，有惊无险得化解了这场危机。并且，你从这次BUG中深深地体会到了技术就是一切，于是在做一个牛逼后端的道路上开始狂奔……'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
            plot: '虽然达到了坑队友的目的，但问题并没有得到解决，因为这确、实、是后端的锅，于是锅在前端那传了一轮之后又回到了你的头上，于是你喜提研发组“背锅侠”名号。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xs8h353nj31120ku4be.jpg',
            plot: '产品同学非常理解你的处境，但爱莫能助，于是去食堂为你提回炸鸡和肥宅快乐水以表安慰，就这样，锅填满了你的心，而炸鸡填满了你的胃……'}
        ],
        plot1: [
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
            plot: '在场的云村用户一听到鹅厂出品，都露出对资本的无情嘲笑和愤愤不平。',
            gameEnd: 7},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
            plot: '平日使用过程中不明显的优点，一下子却浮现在你的脑海中，你甚至现场用xmind从音乐版权、推荐算法、用户社区等等角度将优点逐条列出，能用一张图表达出来的，就不用冗余的文字，可以说很产品了。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xun22rw4j31120kujvb.jpg',
            plot: '你开始对网易云音乐进行了深刻的批评，甚至让人以为你是一个叛变的云村资深用户。有些优点，往往在对同类竞品的分析过程中不言自明，在场的云村用户听到你直击痛点的diss一时间想不到回击的话。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
            plot: '用手画确实可以把你想的页面都表达出来，但不可避免地，它不够精确，有些部分可能是你自己才看得懂的逻辑，产品组的其他成员甚至get不到你的点…'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yyastu4lj31120kuaco.jpg',
            plot: '因为逻辑简单，要画的页面也比较少，所以即使操作并不熟练，也比较清楚地展现出了你的想法，在例会上评价作业的时候，你成功逃过了被疯狂吐槽的厄运（呼～'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
            plot: '研发在最后一天终于把产品做了出来，除了少了一些当初设置的功能以及没有来得及多测试几次之外，也还算是完整了。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
            plot: '最后三天，研发祭天也无法实现最开始沟通的全部功能，你气得和研发打了一架，产品最终也没有落地。中心组给出的惩罚是：两个人牵手相亲相爱一下午。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xun2dye0j31120kujv0.jpg',
            plot: '虽然心里已经把这个研发吐槽了一百遍，但理性还是让你根据研发的进度，保留了几个核心需求，小程序最后成功落地并在推广下获得了很好的反响～'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
            plot: '人人都是产品经理上的产品案例，可以，但做不到。看完之后，你抱住菜菜的自己，甚至不敢说fa'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
            plot: '你坐着小白在休闲和天健之间来回，突然一个关于小白车的产品撞进了你的脑袋，想法+1！'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1yud77303j31120ku0zp.jpg',
            plot: '在机房捕捉到一个研发组的朋友，他给你安利了他最近在玩的游戏，你在几乎成为网瘾少年的同时，也产生了许多新鲜的灵感！'}
        ],
        plot2: [
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
            plot: '当你说出刘昊然的名字，座中一位学姐露出了激动的神情，过了几秒，她居然打开了B站和你分享昊然弟弟的美颜混剪，甚至堂而皇之地说：“Emmm...这个也算我们例会的讨论内容嘛。”\n' +
              '不过，这也是真的。运营，才不是没有灵魂的打字机，一条条出彩文案的背后，也许正藏着一个在潮流间冲浪,脑洞奇崛的追星女孩。',
            gameEnd: 8},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
            plot: '你本来以为学姐们对姜文不太感冒，却没想到一位学姐翻出一张姜文抽着雪茄的照片：“我就说！怎么会有人不爱姜文这副作派呢？”于是，运营的例会变成了姜文的大型安利现场。\n' +
              '有人喜欢正流行、也有的偏爱冷门。但对于运营们来说，只要发现了足够优质的内容，无论大众小众，都想诚挚安利给用户。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt790lsaj31120kuwpg.jpg',
            plot: '你一说美队的名字，在座的漫威迷眼中都闪起了光亮，运营学长顺势提议：“我们要不要24号一起去看复联四？”于是，运营的第一次团建，就这样莫名其妙地定下来了。\n' +
              '有人说，社团只是为了综测分的牺牲，或是扩展人脉的平台......也许是这样的，但说话者，一定还没来得及认识家园工作室。在这里，有着比综测分更有意义的自我提升，有比人脉更动人的关系,我们称之为，同好。'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
            plot: '虽然并没有设计组出的图那么成熟，但胜在鼠标随手移，手起刀落（？）就完成了头图，及时抢占热点发出了推送，推文浏览量一时间没停止涨过！'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
            plot: '用APP自带贴纸放大缩小调了半天，才完成了这张难以言说的头图，你还是决定硬着头皮传上组内群。在半小时的沉默后，某诚实的学姐发了一个“愣住”的表情.....'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xt79fs4pj31120kudr6.jpg',
            plot: '拿到设计出的图已经是四天以后的事了，得到了运营组内的一致彩虹屁，但此时热点稍微冷却，不过还好，推文发出反响还不错。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xuk4ya8mj31120kuthn.jpg',
            plot: '你去上早课的时候拍下单车的第一手高清图，说说一经发出，QQ空间的诸好友纷纷转载点赞，吃下了这款配色绝美的定制单车的安利。果然，颜值即正义啊。'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xuk5f606j31120ku0xy.jpg',
            plot: '每隔一阵子，5G技术好像总会取得一些新进展。这条新闻甚至和上个月的那条5G新闻没有太大差别，大家都在想，5G什么时候正式投放民用市场呢？说说反响只是平平。'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xul2snyyj31120kuwjo.jpg',
            plot: '平时再摸鱼，逃不过四六级。能不能考过425，也都是要报名的。虽然这件事许多校媒都发出了通知。还是会有许多网友，转发这条说说到自己的朋友圈和好友相约四六级。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
            plot: '从太阳升起到落下，今天的你像是开了64倍速的机器人，从来都没发现自己的效率可以这么高，晚上十点，虽然有点晚，但你成功地发出了推文。看着眼前的推文，你甚至不敢相信，自己一个人在这么短的时间内居然完成了这么多工作。的确，大锅会让人感到压力，但它的出现，也让我们发现原来自己，有这么多可能。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1xt79v0dgj31120kudhy.jpg',
            plot: '发出求助后，大家分好工后就迅速来到工作室帮忙。运营组的萌新们，今天成为了工作室最晚走的人。这篇推文，也成为考核期以来浏览量最高的推文。你刚走进工作室的时候，可能并不明白门外张贴的“团结”的意义，这一刻好像突然了解了一部分：并非是乌合之众的聚集，而是1+1＞2的高效协作。'}
        ],
        plot3: [
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
            plot: '那些表格，在编辑的时候明明整整齐齐，四四方方，在打印的时候却完、全、不、一样，你甚至怀疑自己做了几个小时的，怎么会是这么个玩意儿？行高列宽固定是假的，边看打印预览边调整才是真的。',
            gameEnd: 7},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
            plot: 'PDF格式好，好就好在你做出来什么样最后让大家看到的就基本一致，将你的版式统统固定，呈现出你想要的模样。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts45lqjj31120kuqax.jpg',
            plot: '也许对于别的组来说，这一点并没有那么重要，但你面对的是有各种名字字长、人数多到组两只足球队的研发组。一开始就把行列空间拉大，让你的信息录入和排版更省事儿了。当然，全部录入完毕后你还是把空间再次调整了一遍。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
            plot: '你知道许多女大学生都有成长危机的叭，这位学姐碰巧就是其中之一。在学姐沉浸在即将进入奔三年龄层的悲伤，刚说服自己虚岁还是19时，看到这条祝福后，她拿起充气锤正在来盘你的路上。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts4izetj31120kuwmg.jpg',
            plot: '你早早就把这条祝福发到了家园工作群里，彼时学姐还没有收到任何祝福，看到亮起的小红点，心中突然一喜。虽然祝福里的10W+是不太可能了，但还是被你的甜蜜狙击biu地一下击中了。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
            plot: '对于行政来说，活动目的并不是一堆套话就可以敷衍了事的。虽然你以为确实如此，但组长一次次的修改意见都证实着第一句话，认真再思考思考活动的价值和意义，改吧。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
            plot: '越是大型的活动，活动流程就更为琐碎繁杂，如果活动流程无法精确，许多潜在风险就更容易成为现实。在大会开始的前一天，你认为要去调音响的人今日居然有课，主持人还不明确自己的台本顺序......（小声bb:你完了'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1xts50oqrj31120kutgg.jpg',
            plot: '因为轻视活动预算，这场全体大会成为了家园历史上耗费最多规模最大的全体大会，你们组长虽然咬牙心痛，但看在全体大会的反响还不错，还是忍下了捶你的动作。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
            plot: '在线佛系征集的后果是，大家在暗搓搓的犹豫害羞里，错过了报名时间。几乎没有几个人报名表演节目，你只好再头脑风暴想一个新的游戏救急了。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
            plot: '凭借你锐利如鬼的观察力和充满策略的巧妙话术，你在工作室成功捕捉许多自愿表演(??)的嘉宾，这次全体大会，一定敲！精！彩！'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1yzbyra73j31120kuqc4.jpg',
            plot: 'Fine，发家致富靠自己，虽然在十余年的短暂人生中，你几乎都在观众席里默默的做一个无才艺只吃瓜的群众，但这一次：“为了任务，anyway冲鸭！”你一边放松肌肉，拉动筋骨，摩拳擦掌一边想道。'}
        ],
        plot4: [
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrh64pqj31120kudj1.jpg',
            plot: '这张图获得了运营组的集体好评，用上这张图，一周后的小家园说说取得了较好的反响，运营小姐姐特地向你表达了赞赏和感谢，不过设计组的学长学姐则鼓励道还有很大进步空间',
            gameEnd: 7},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrgq12tj31120kuwjk.jpg',
            plot: '运营小姐姐拿到这张图后，放到了运营组工作群，大家看过后都表示非常满意。一周后配上说说文案发到家园工作室的官Q空间，取得了极好的反响，评论和转发量都很高。在那周的设计组例会上，学姐学长重点表扬了你。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrhhg9sj31120kuack.jpg',
            plot: '你选好这张图后发到了设计组的工作群中，学长和学姐审过后提出了一些意见，表示图片与文案主题还未能很好地契合，并建议你再接再厉。'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
            plot: '你见解独到的设计收获了一片好评，成功斩获许多选票，但还有设计小伙伴显然对家园人的特质有着更深的解读，所以你的设计虽然很受欣赏，但最终工作牌的制作还是采取了其他小伙伴的方案。'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
            plot: '在投票竞选中，你出挑的设计成为好评收割机，并毫无悬念地得到了最高的选票。最后，你的设计落地做成工作牌，成为了每一个家园人值班时胸前佩戴的那一抹亮色。'},
          {picturesSrc: 'http://wx2.sinaimg.cn/large/005JHgrHgy1g1xwig0h2tj31120kudlg.jpg',
            plot: '从你的设计可以看出你十分的用心，不过对家园内涵的理解还可以进一步深入，也许下一次的工作牌设计中，你的设计方案就是那个好评收割机！'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            plot: '娴熟使用PS工具的你，作出的星球图得到了学长学姐的表扬，就这样，你一步步成长，终于来到了考核期的最后一周。'},
          {picturesSrc: 'http://wx4.sinaimg.cn/large/005JHgrHgy1g1whrhve76j31120kuqcb.jpg',
            plot: '没有用到这些工具的你，还能做出这么好看的图。确认过眼神，是设计组得不到的人。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrinji1j31120ku771.jpg',
            plot: '没有经验的小白，虽然手不抖，但却势必经历一个漫长的学习过程，于是，作为一个学习ing的小摄影，制作的暖场视频虽然还不错，但却没有达到预期的暖场效果。'},
          {picturesSrc: 'http://wx1.sinaimg.cn/large/005JHgrHgy1g1whrizkstj31120kujty.jpg',
            plot: '这一位摄像师，技术很牛，奈何手抖，一个原本制作牛逼的暖场视频生生让人看到潸然泪下……也许，这样的“感动”是你为全体大会带去的另类暖场。'},
          {picturesSrc: 'http://wx3.sinaimg.cn/large/005JHgrHgy1g1whrjv0q4j31120ku413.jpg',
            plot: '你凭着敏锐的判断力选择了这位摄影，果然设备好才是王道，最终暖场视频的拍摄效果出乎意料，完美引燃全场！'}
        ]
      }
    },

    created: function () {
      switch (this.i) {
        case 0: this.showPlot = this.plot0
          break
        case 1: this.showPlot = this.plot1
          break
        case 2: this.showPlot = this.plot2
          break
        case 3: this.showPlot = this.plot3
          break
        case 4: this.showPlot = this.plot4
          break
      }
    },

    methods: {
      clickPlot: function () {
        this.$emit('clickPlot')
        if (this.discouraged === true) {
          this.$emit('discouraged')
        }
        if (this.progress > this.showPlot[0].gameEnd) {
          this.$emit('gameEnd')
        }
      }
    }
  }
</script>

<style scoped>
  .onlyPlot{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .centerPlot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
  }

  .onlyPlot-enter-active {
    transition: opacity 1.5s;
  }

  .onlyPlot-leave-active {
    transition: opacity 1.5s;
  }
  .onlyPlot-enter, .onlyPlot-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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
</style>
