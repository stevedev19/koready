import type { Strings } from "@/lib/strings";

// Simplified Chinese. Machine-assisted translation: not yet reviewed by a native speaker.
// Korean words, phone numbers and "119" stay as they are (some code relies on them).
export const zh: Strings = {
  app: {
    name: "KReady",
    shortName: "KReady",
    description: "在韩外国人的日常必备助手。",
  },

  tabs: {
    label: "主导航",
    home: "首页",
    safety: "安全",
    local: "健康",
    slang: "流行语",
  },

  comingSoon: {
    title: "即将推出",
    body: "此版块仍在建设中，请稍后再来！",
    backHome: "返回首页",
  },

  home: {
    todayIn: "今日",
    pickDistrict: "选择城市",
  },

  installHint: {
    title: "添加到主屏幕",
    dismiss: "隐藏这些说明",
    why: "像应用一样全屏打开，一点即达。",
    safari: {
      share: "点击“分享”按钮（带箭头的方框）。如果看不到，请先点击 •••。",
      add: "向下滚动，点击“添加到主屏幕”(Add to Home Screen)。",
      confirm: "如果看到“作为网页应用打开”(Open as Web App)，请保持开启，然后点击“添加”。",
    },
    otherBrowser: {
      title: "请在 Safari 中打开此页面",
      body: "要将应用添加到主屏幕，请使用 Safari。复制链接并粘贴到 Safari，或通过当前应用的菜单在 Safari 中打开。",
      copy: "复制链接",
      copied: "链接已复制",
    },
  },

  quickActions: {
    open: "打开快捷操作",
    close: "关闭快捷操作",
    listLabel: "快捷操作",
    weather: { label: "天气", ko: "날씨" },
    exchange: { label: "汇率", ko: "환율" },
    recycling: { label: "垃圾分类指南", ko: "분리배출" },
    settingsKo: "설정",
  },

  audience: {
    welcome: {
      title: "您是来韩国旅行，还是在韩国生活？",
      body: "我们会把最有用的内容放在前面。不会隐藏任何内容，您可以随时在“设置”中更改。",
      visitor: { label: "旅行", hint: "短期来访" },
      resident: { label: "在韩生活", hint: "工作、学习或定居" },
      skip: "跳过",
      stored: "仅保存在此手机上。",
    },
    settings: {
      title: "设置",
      link: "设置",
      imLabel: "我是…",
      hint: "选择“旅行”或“在韩生活”会在首页添加相应的“为你推荐”卡片。选择“两者都有”则不显示。其他内容均不会隐藏。",
      options: { visitor: "旅行", resident: "在韩生活", all: "两者都有" },
    },
    forYou: {
      title: "为你推荐",
      change: "更改",
      changeLabel: "更改您是旅行还是在韩生活",
      cards: {
        exchange: { title: "汇率", hint: "韩元换算成您的货币" },
        pharmacy: { title: "药店用语", hint: "说出您需要的东西" },
        alerts: { title: "紧急警报", hint: "看懂 재난문자" },
        trail: { title: "首尔古城路线", hint: "宫殿、韩屋和市场" },
        weather: { title: "天气", hint: "今日天气与空气质量" },
        recycling: { title: "垃圾分类指南", hint: "哪个垃圾桶，哪一天" },
        slang: { title: "每日流行语", hint: "像本地人一样说话" },
        doctor: { title: "看医生", hint: "该去哪种诊所" },
      },
    },
  },

  language: {
    label: "语言",
    hint: "将更改按钮、菜单和提示的语言。流行语释义、警报说明和各类指南目前仍为英文。",
  },

  common: {
    loading: "加载中…",
    error: "暂时无法加载。",
    retry: "重试",
    updated: "更新于",
    close: "关闭",
  },

  emergencyShortcut: {
    open: "紧急电话：119 或 112",
    title: "紧急情况",
    titleKo: "긴급 전화",
    ambulanceNote: "也提供 24 小时医疗咨询",
    policeNote: "提供英语翻译",
    more: "该说什么、最近的急诊室",
  },

  weather: {
    title: "天气",
    titleKo: "날씨",
    tips: {
      storm: "今天有雷暴。听到雷声请进入室内。",
      snow: "今天有雪或结冰。请穿防滑鞋，并预留更多出行时间。",
      umbrella: "请带伞。",
      cold: "非常寒冷。请穿保暖外套，戴帽子和手套。",
      heat: "非常炎热。请多喝水，在阴凉处休息。",
      layers: "今天温差很大。请分层穿衣。",
      none: "今天无需特别准备。",
    },
    tipLabel: "提示",
    pageTitle: "天气",
    feelsLike: "体感温度",
    high: "最高",
    low: "最低",
    rainChance: "降雨概率",
    humidity: "湿度",
    wind: "风速",
    attribution: "天气数据来自 Open-Meteo.com (CC BY 4.0)",
    codes: {
      clear: "晴",
      mostlyClear: "大致晴朗",
      partlyCloudy: "多云",
      overcast: "阴",
      fog: "雾",
      drizzle: "毛毛雨",
      freezingDrizzle: "冻毛毛雨",
      rain: "雨",
      freezingRain: "冻雨",
      snow: "雪",
      snowGrains: "米雪",
      showers: "阵雨",
      snowShowers: "阵雪",
      thunderstorm: "雷暴",
      thunderstormHail: "雷暴伴有冰雹",
      unknown: "未知",
    },
  },

  air: {
    title: "空气质量",
    titleKo: "미세먼지",
    maskTip: {
      moderate: {
        title: "对粉尘敏感？可考虑佩戴 KF94 口罩",
        body: "儿童、老人和哮喘患者最先受到影响。",
      },
      bad: {
        title: "外出请佩戴 KF94 口罩",
        body: "请关好窗户，减少户外剧烈运动。",
      },
      veryBad: {
        title: "请佩戴 KF94 口罩，尽量待在室内",
        body: "请关好窗户，避免户外运动。",
      },
    },
    pm10: "细颗粒物 (PM10)",
    pm25: "超细颗粒物 (PM2.5)",
    overall: "综合",
    unit: "µg/m³",
    grades: {
      good: "良好",
      moderate: "一般",
      bad: "差",
      veryBad: "很差",
    },
    advice: {
      good: "非常适合外出。",
      moderate: "对大多数人来说没问题。",
      bad: "外出时可考虑佩戴 KF94 口罩。",
      veryBad: "请佩戴 KF94 口罩，并减少外出时间。",
    },
    note: "按韩国标准分级的模型估算值。监测站读数可能不同。",
    attribution: "空气质量数据来自 Open-Meteo.com (CC BY 4.0)",
    goingOutside: "要出门吗？",
  },

  exchange: {
    title: "汇率",
    titleKo: "환율",
    convert: {
      title: "快速换算",
      amount: "金额",
      currency: "货币",
      swap: "切换方向",
      approx: "≈",
    },
    per: "每",
    note: "每日参考汇率。银行和换汇店的汇率会有所不同。",
    attribution: "汇率来自 Frankfurter（央行数据）",
    asOf: "截至",
  },

  slang: {
    title: "每日流行语",
    titleKo: "오늘의 신조어",
    meaning: "含义",
    examples: "例句",
    tone: {
      casual: "随意",
      playful: "俏皮",
      rude: "粗鲁",
      formal: "正式",
    },
    usage: {
      safe: "可以放心用",
      casual: "仅限朋友之间",
      risky: "有风险：别对陌生人用",
    },
  },

  slangPage: {
    titleKo: "신조어",
    intro: "你会从朋友、网上和电视里听到的韩语流行语，以及使用时需注意的程度。",
    beta: "测试版：词条正在由母语者核对。",
    hideBeta: "隐藏此提示",
    archive: {
      title: "全部流行语",
      searchLabel: "搜索流行语",
      searchPlaceholder: "词语、罗马字或含义",
      filterLabel: "筛选流行语",
      filters: { all: "全部", saved: "已收藏", risky: "有风险" },
      noResults: "没有匹配的流行语。",
      noSaved: "还没有收藏。点击词语上的爱心即可收藏到这里。",
      listen: "收听",
      save: "收藏",
      examples: "例句",
      noVoice: "此设备没有韩语语音。",
    },
  },

  safety: {
    intro: "帮助您识别诈骗的工具。您在这里输入的内容不会离开您的手机。",
    disclaimer: "非官方建议。如有疑问，请联系相关公司或警方。",
  },

  imageText: {
    upload: "上传截图",
    hint: "也可以把截图粘贴到输入框中。图片在您的手机上识别，不会被发送或保存。",
    loading: "正在准备文字识别…",
    loadingFirstTime: "仅首次：需下载约 8 MB。",
    reading: "正在识别图片中的文字…",
    done: "图片中的文字已填入输入框，可能有错误。继续之前请检查并修正。",
    errors: {
      not_image: "该文件不是图片。请选择截图或照片。",
      too_big: "图片太大。请改用截图。",
      no_text: "图片中未找到文字。请换一张更清晰的截图，或直接输入消息。",
      failed: "无法识别该图片。请检查网络连接（首次需要），或直接输入消息。",
    },
  },

  alerts: {
    title: "警报翻译",
    intro: "收到韩语紧急或安全短信（재난문자）？粘贴内容或上传截图，看看说了什么以及该怎么做。",
    label: "粘贴韩语警报内容",
    placeholder: "在此粘贴警报…",
    privacy: "仅在您的手机上读取。内容不会被发送、保存或记录。",
    translate: "解读这条警报",
    clear: "清除",
    samples: "警报示例",
    samplesHint: "试试示例（为练习编写，并非真实警报）：",
    learnLink: "在紧急情况发生前了解警报类型",
    disclaimer: "非官方信息。请遵循政府部门和原始警报中的指示。",
    originalTitle: "原始警报（韩语）",
    typeTitle: "警报类型",
    unknownType: "无法识别",
    alsoMentions: "还提到",
    category: "类别",
    categoryNotShown: "粘贴的内容中未显示",
    sender: "发送方",
    area: "地区（原文）",
    time: "时间（原文）",
    notFound: "内容中未找到",
    summaryTitle: "摘要（英文）",
    levelWarning: "级别：警报（경보），较高级别。",
    levelAdvisory: "级别：注意报（주의보），较低级别。",
    lifted: "警报内容称已解除（해제）。其他危险可能仍然存在，请继续遵循当地指示。",
    drill: "警报内容称这是演习（훈련）。请按演习指示行动。",
    mentions: "警报提到：",
    noSummary: "我们无法识别这条警报的类型。",
    actionsTitle: "该怎么做",
    actionsIntro: "请始终优先遵循原始警报中的指示。以下是此类警报的一般官方指南（英文）。",
    actionsSource: "来源：官方安全指南",
    glossaryTitle: "找到的关键词",
    linesTitle: "逐行解读",
    keyWords: "关键词：",
    notTranslated: "未翻译",
    notUnderstoodTitle: "我无法完全理解这条警报。",
    notUnderstoodBody:
      "请根据周围所见所闻行动，询问附近的人，或拨打 119 / 经核实的求助热线。",
    call119: "拨打 119",
    tooLong: "只读取前 2,000 个字符。",
  },

  alertGuide: {
    title: "了解警报类型",
    intro: "韩国的手机会收到三种政府警报短信（재난문자）。请在紧急情况发生前，现在就了解它们。",
    categoriesTitle: "三种警报类别",
    sound: "声音",
    canTurnOff: "可以关闭吗？",
    yes: "可以",
    no: "不可以。每部手机都会收到。",
    screenTitle: "它的样子",
    screenBody:
      "警报会弹出在屏幕上。请留意类别名称（例如 긴급재난문자）和 [方括号] 中的发送方，例如气象厅 [기상청] 或您所在的市政府。具体外观因手机而异。",
    englishTitle: "警报中的英文",
    englishBody:
      "自 2024 年起，带警报声的紧急警报和灾难警报会用英文标注关键信息，例如灾害类型和地震震级。其余内容仍为韩语。",
    earthquakeTitle: "地震警报",
    earthquakeBody:
      "6.0 级及以上：向全国发送紧急警报。5.0–5.9 级：向全国发送灾难警报。较小的地震：根据您所在地预计的震感强度，发送灾难警报或安全提示。",
    enableTitle: "确认已开启警报",
    iphoneTitle: "iPhone",
    iphoneSteps: [
      "打开“设置”，点击“通知”。",
      "滚动到最底部。",
      "在“政府警报”下，开启各类警报。",
    ],
    androidTitle: "Android（三星 Galaxy）",
    androidSteps: [
      "打开“设置”，点击“安全和紧急情况”。",
      "点击“无线紧急警报”。",
      "开启“允许警报”，并检查下方的警报类型。",
    ],
    otherAndroid:
      "其他 Android 手机：打开“信息”应用，进入设置，查找紧急警报设置。菜单名称因手机和语言而异。",
    appTitle: "用您的语言接收警报",
    appBody:
      "安装政府的 Emergency Ready App（안전디딤돌 的外语版），即可接收英文、中文、越南语、泰语或日语的灾难短信。它还会显示附近的避难所。",
    helpTitle: "紧急和求助电话",
    sourcesTitle: "来源",
    lastChecked: "最后核对",
    back: "安全",
  },

  scam: {
    title: "诈骗检测",
    intro: "粘贴您不确定的短信、KakaoTalk 消息或邮件，或上传截图。",
    placeholder: "在此粘贴消息…",
    privacy: "仅在您的手机上检测。您的消息不会被发送、保存或记录。",
    check: "检测消息",
    clear: "清除",
    tooLong: "只检测前 5,000 个字符。",
    resultHeading: "结果",
    verdicts: {
      likely_scam: "很可能是诈骗",
      unclear: "无法确定",
      no_obvious_signs: "未发现明显诈骗迹象，但请通过官方渠道核实。",
    },
    advice: {
      likely_scam:
        "不要点击任何链接、回拨电话、安装应用，也不要转账或发送验证码。删除这条消息，或向 1394 举报。",
      unclear:
        "我们无法判断。请谨慎对待：通过您自己查到的官方应用、网站或电话联系发送方。",
      no_obvious_signs:
        "我们的规则无法识别所有诈骗。如果对方索要钱款、验证码或个人信息，请通过该公司的官方应用或电话核实。",
    },
    reasons: {
      too_short: "消息太短，无法判断。",
      odd_input: "这看起来不像一条正常消息，因此无法判断。",
    },
    signalsTitle: "发现的警示信号",
    rulesNote: "这些检测只是简单规则，仍在由母语者审核。新的诈骗手法可能无法识别。",
  },

  helpLines: {
    title: "求助",
    call: "拨打",
    lines: {
      emergency: {
        name: "急救与消防",
        detail: "紧急情况。也提供 24 小时医疗咨询，并告诉您哪些医院和药店正在营业。",
      },
      mentalHealthCrisis: {
        name: "自杀预防与心理健康热线",
        detail: "如果您感到痛苦或担心他人，可获得 24 小时心理咨询。主要使用韩语。",
      },
      police: {
        name: "警察",
        detail: "紧急情况，或您已转账、身处危险时。提供英语翻译。",
      },
      scamReport: {
        name: "电话诈骗与短信诈骗举报",
        detail: "警方运营的 24 小时中心：举报诈骗电话和短信，协助止付。",
      },
      fss: {
        name: "金融监督院 (FSS)",
        detail: "金融诈骗和非法贷款的咨询与举报。需支付通话费。",
      },
      kisa: {
        name: "KISA（垃圾信息与黑客）",
        detail: "举报垃圾短信、诈骗链接和黑客攻击。",
      },
      travelHotline: {
        name: "1330 韩国旅游热线",
        detail: "通过电话或短信提供英语、中文、日语等多语种翻译。由韩国观光公社运营。",
      },
      kdca: {
        name: "疾病管理热线 (KDCA)",
        detail: "传染病相关咨询。24 小时，免费，多语种。",
      },
      immigration: {
        name: "出入境咨询中心",
        detail: "核实签证或出入境相关消息是否真实。提供多种语言。",
      },
    },
  },

  local: {
    intro: "在您附近寻求帮助。",
    hospital: {
      title: "医院和药店助手",
      question: "您需要什么？",
      options: {
        emergency: { label: "紧急情况", hint: "立即拨打 119" },
        doctor: { label: "看医生", hint: "非紧急情况" },
        pharmacy: { label: "找药店", hint: "药品和处方" },
        dental: { label: "牙科", hint: "牙痛、洗牙" },
        mentalHealth: { label: "心理健康", hint: "压力、焦虑、情绪低落" },
      },
    },
    disclaimer: "非医疗建议。紧急情况请拨打 119。",
    back: "返回",
    emergency: {
      title: "紧急情况",
      callTitle: "拨打 119",
      callBody: "叫救护车或报火警。24 小时服务。",
      callButton: "拨打 119",
      tellThem: "告诉对方：",
      tellList: [
        "您在哪里（地址，或附近的建筑物、车站）",
        "发生了什么",
        "您的电话号码",
      ],
      notSureTitle: "不确定是否属于紧急情况？",
      notSureBody:
        "119 也提供电话医疗咨询，并告诉您夜间和节假日哪些医院和药店营业。",
      egenLink: "查找营业中的急诊室和药店（E-Gen，韩语）",
      findEr: "查找附近的急诊室",
    },
    doctor: {
      title: "看医生",
      pickerTitle: "哪里不舒服？",
      pickerHint: "选择最接近的一项。这里只建议诊所类型，不是诊断。",
      clinicTitle: "建议就诊的诊所",
      also: "或者：",
      phrasesTitle: "在诊所可以这样说",
      bringTitle: "需要携带",
      bringList: [
        "外国人登录证 ARC (외국인등록증)",
        "护照",
        "健康保险卡（如有）",
        "您正在服用的药物清单",
      ],
      bringNote: "勾选不会被保存。",
    },
    pharmacy: {
      title: "找药店",
      phrasesTitle: "药店用语",
      afterHours: "夜间或节假日，请拨打 119 或查看 E-Gen 寻找营业中的药店。",
      egenLink: "打开 E-Gen（韩语）",
    },
    dental: {
      title: "牙科",
      phrasesTitle: "在牙科可以这样说",
    },
    mentalHealth: {
      title: "心理健康",
      crisisTitle: "需要马上找人聊聊？",
      centerTitle: "或者去公立中心",
      crisisBody: "如果您可能伤害自己，或现在正处于危险中，请拨打 119。",
      phrasesTitle: "实用语句",
      reassurance: "因为压力、睡眠或情绪问题看医生很常见，寻求帮助完全没问题。",
    },
    clinic: {
      findNearby: "查找附近：",
      locating: "正在获取您的位置…",
      openIn: "打开方式：",
      apps: { naver: "Naver 地图", kakao: "Kakao 地图", google: "Google 地图" },
      locationNote:
        "您的位置保留在手机上，只会添加到 Google 地图链接中。Naver 和 Kakao 使用它们自己的定位。",
      locationDenied: "定位已关闭。地图应用会在它推测的您所在位置附近搜索。",
    },
    recycling: {
      title: "垃圾分类与丢弃指南",
      banner: "各区规定不同。请查看您所在楼的公告栏或区政府。",
      chooseDistrict: "选择您所在的区",
      onlyThese: "目前只有这些区有指南。",
      searchLabel: "搜索物品",
      searchPlaceholder: "例如：披萨盒、电池、페트병",
      browse: "浏览",
      all: "全部",
      noResults: "没有找到该物品。",
      whenTitle: "何时扔垃圾",
      appliesTo: "适用于：",
      time: "时间：",
      place: "地点：",
      binLabel: "放入",
      prepLabel: "丢弃前",
      dayLabel: "收运日",
      noDay: "区政府未公布此类的收运日。",
      inferred: "未按名称列出。依据该区的一般规定。",
      bookOnline: "在线预约上门收运（韩语）",
      notSureTitle: "不确定？",
      notSureBody:
        "不要猜。请询问楼宇管理处（관리실），查看楼内垃圾投放处旁的公告栏，或致电区政府的资源回收部门。",
      call: "拨打",
      sourcesTitle: "来源",
      lastChecked: "最后核对",
      published: "发布于",
      noDate: "未注明日期",
      reviewNote: "译自该区的韩语网页，尚未经母语者审核。",
      backToItems: "全部物品",
      days: { mon: "周一", tue: "周二", wed: "周三", thu: "周四", fri: "周五", sat: "周六", sun: "周日" },
    },
    phrases: {
      copy: "复制",
      copied: "已复制",
      showLarge: "展示",
      close: "关闭",
      showToStaff: "请给工作人员看",
      screenOn: "此页面打开时屏幕保持常亮。",
      screenMayDim: "屏幕可能会变暗。请不时点一下屏幕保持常亮。",
      blankHint: "指向 ___ 或说出这个词。",
      reviewNote: "这些语句尚未经母语者审核。",
    },
  },

  trails: {
    title: "路线",
    intro: "韩国各地的自助短途游，结合韩流景点与当地市场和美食。",
    trailsTitle: "路线",
    stopsCount: "个站点",
    tags: {
      kpop: "K-pop",
      kdrama: "韩剧",
      film: "电影",
      food: "美食",
      nature: "自然",
      culture: "文化",
    },
    banner: "地点可能关闭或变动。出发前请确认营业时间。",
    reportProblem: "报告问题",
    reportSubject: "路线问题",
    trail: {
      time: "时间",
      difficulty: "难度",
      season: "最佳季节",
      gettingThere: "交通方式",
      respectTitle: "尊重当地居民",
      stopsTitle: "站点",
      progress: "已到访",
      progressNote: "到访标记仅保存在此手机上。",
      relatedTo: "相关",
      hours: "营业时间",
      cost: "费用",
      notPublished: "未公布。出发前请确认。",
      map: "地图",
      copyKorean: "复制韩文名称",
      copied: "已复制",
      markVisited: "已到访",
      source: "来源",
      lastChecked: "最后核对",
      needsReview: "尚未审核。",
    },
  },

  privacy: {
    title: "隐私",
    link: "隐私：哪些内容留在您的手机上",
    updated: "最后更新：2026-10-03",
    intro: "KReady 没有账号、没有广告，也没有跟踪或统计分析。以下是您的信息的具体处理方式。",
    sections: [
      {
        title: "您检测的消息和截图",
        body: [
          "诈骗检测和警报翻译完全在您的浏览器中运行。",
          "您粘贴的内容绝不会发送到我们的服务器，不会被保存，也不会被记录。离开页面后即消失。",
          "您上传或粘贴的截图在手机上识别。图片绝不会被上传、保存或记录。",
          "首次识别截图时，应用会从我们的网站下载文字识别程序（约 8 MB）。浏览器会保留语言文件的副本，以便下次更快。其中不包含您的任何数据。",
          "这些输入框关闭了拼写检查和自动填充，以免内容被分享给键盘或拼写检查服务。",
          "流行语页面的朗读按钮使用浏览器自带的语音功能。它优先使用手机上的语音，但在某些设备上浏览器可能使用在线语音。只会朗读流行语词语，绝不会朗读您输入的内容。",
        ],
      },
      {
        title: "仅保存在您的手机上",
        body: [
          "您选择的区以及标记为已到访的站点，保存在此设备的浏览器存储中。",
          "您选择的是“旅行”还是“在韩生活”，以便首页优先显示合适的卡片。可随时在“设置”中更改。",
          "您用爱心收藏的流行语。",
          "您选择的语言，保存在一个小 Cookie 中。浏览器会在每次请求页面时发送它，以便页面以您的语言显示。",
          "不保存其他任何内容。健康相关选择、清单勾选和搜索词只保存在内存中，离开页面即清除。",
          "如需删除已保存的数据，请在浏览器设置中清除本网站的数据。",
        ],
      },
      {
        title: "您的位置",
        body: [
          "只有在您点击“查找附近”时，应用才会请求您的位置。",
          "位置保留在浏览器中，约精确到 100 米，只有在您打开 Google 地图链接时才会添加到该链接中。Naver 和 Kakao 链接不包含位置。",
          "您的位置绝不会发送到我们的服务器，也不会被保存。",
        ],
      },
      {
        title: "天气、空气质量和汇率",
        body: [
          "我们的服务器从 Open-Meteo 和 Frankfurter 获取这些数据，使用的是您所选区的中心点，而不是您的位置。",
          "结果会被缓存，并由选择同一区的所有人共享。",
        ],
      },
      {
        title: "指向其他服务的链接",
        body: [
          "您从本应用打开的地图应用、电话以及政府或旅游网站由第三方运营，适用其各自的隐私政策。",
        ],
      },
      {
        title: "技术日志",
        body: [
          "与所有网站一样，我们的托管服务商可能会出于安全和稳定性保留标准请求日志（如 IP 地址和所请求的页面）。",
          "我们自己的代码只记录天气和汇率服务的错误，绝不记录您输入或粘贴的任何内容。",
        ],
      },
      {
        title: "离线使用",
        body: [
          "应用会在您的设备上保存自身的页面和文件，以便离线使用。其中不含任何个人信息。",
        ],
      },
    ],
    contact: "对隐私有疑问？",
  },

  licenses: {
    title: "开源许可",
    link: "开源许可",
    intro:
      "KReady 使用免费开源软件和 Pretendard 字体构建。以下是它使用的软件包及其版权声明和许可。",
    showText: "显示许可文本",
    packages: "个软件包",
  },

  offline: {
    title: "您已离线",
    body: "请检查网络连接后重试。您之前打开过的页面可能仍可使用。",
    retry: "重试",
  },
};
