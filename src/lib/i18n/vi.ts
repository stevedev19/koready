import type { Strings } from "@/lib/strings";

// Vietnamese. Machine-assisted translation: not yet reviewed by a native speaker.
// Korean words, phone numbers and "119" stay as they are (some code relies on them).
export const vi: Strings = {
  app: {
    name: "KReady",
    shortName: "KReady",
    description: "Thông tin thiết yếu hằng ngày cho người nước ngoài sống tại Hàn Quốc.",
  },

  tabs: {
    label: "Điều hướng chính",
    home: "Trang chủ",
    safety: "An toàn",
    local: "Sức khỏe",
    slang: "Tiếng lóng",
  },

  comingSoon: {
    title: "Sắp ra mắt",
    body: "Chúng tôi vẫn đang xây dựng mục này. Hãy quay lại sau nhé!",
    backHome: "Về Trang chủ",
  },

  home: {
    todayIn: "Hôm nay tại",
    pickDistrict: "Chọn thành phố",
  },

  installHint: {
    title: "Thêm vào Màn hình chính",
    dismiss: "Ẩn hướng dẫn này",
    why: "Mở như một ứng dụng, toàn màn hình, chỉ với một lần chạm.",
    safari: {
      share: "Chạm vào nút Chia sẻ (hình vuông có mũi tên). Nếu không thấy, hãy chạm ••• trước.",
      add: "Cuộn xuống và chạm \"Add to Home Screen\" (Thêm vào MH chính).",
      confirm: "Nếu thấy \"Open as Web App\", hãy để bật, rồi chạm \"Add\".",
    },
    otherBrowser: {
      title: "Mở trang này bằng Safari",
      body: "Để thêm ứng dụng vào Màn hình chính, hãy dùng Safari. Sao chép liên kết và dán vào Safari, hoặc dùng menu của ứng dụng để mở bằng Safari.",
      copy: "Sao chép liên kết",
      copied: "Đã sao chép liên kết",
    },
  },

  quickActions: {
    open: "Mở thao tác nhanh",
    close: "Đóng thao tác nhanh",
    listLabel: "Thao tác nhanh",
    weather: { label: "Thời tiết", ko: "날씨" },
    exchange: { label: "Tỷ giá", ko: "환율" },
    recycling: { label: "Hướng dẫn phân loại rác", ko: "분리배출" },
    settingsKo: "설정",
  },

  audience: {
    welcome: {
      title: "Bạn đang du lịch hay sống tại Hàn Quốc?",
      body: "Chúng tôi sẽ đưa những thứ hữu ích nhất lên trước. Không có gì bị ẩn, và bạn có thể đổi lựa chọn này bất cứ lúc nào trong Cài đặt.",
      visitor: { label: "Du lịch", hint: "Đến đây một chuyến" },
      resident: { label: "Sống tại đây", hint: "Làm việc, học tập hoặc định cư" },
      skip: "Bỏ qua",
      stored: "Chỉ lưu trên điện thoại này.",
    },
    settings: {
      title: "Cài đặt",
      link: "Cài đặt",
      imLabel: "Tôi đang…",
      hint: "\"Du lịch\" hoặc \"Sống tại đây\" sẽ thêm các thẻ \"Dành cho bạn\" phù hợp vào Trang chủ. \"Cả hai\" sẽ không hiện thẻ nào. Không có gì khác bị ẩn.",
      options: { visitor: "Du lịch", resident: "Sống tại đây", all: "Cả hai" },
    },
    forYou: {
      title: "Dành cho bạn",
      change: "Thay đổi",
      changeLabel: "Thay đổi bạn đang du lịch hay sống tại đây",
      cards: {
        exchange: { title: "Tỷ giá", hint: "Đổi won sang tiền của bạn" },
        pharmacy: { title: "Câu nói ở nhà thuốc", hint: "Hỏi thứ bạn cần" },
        alerts: { title: "Tin nhắn khẩn cấp", hint: "Hiểu 재난문자" },
        trail: { title: "Hành trình Seoul xưa", hint: "Cung điện, hanok và chợ" },
        weather: { title: "Thời tiết", hint: "Hôm nay và chất lượng không khí" },
        recycling: { title: "Hướng dẫn phân loại rác", hint: "Thùng nào, ngày nào" },
        slang: { title: "Tiếng lóng hôm nay", hint: "Nói như người bản xứ" },
        doctor: { title: "Đi khám bác sĩ", hint: "Nên chọn phòng khám nào" },
      },
    },
  },

  language: {
    label: "Ngôn ngữ",
    hint: "Thay đổi nút, menu và mẹo. Nghĩa tiếng lóng, phần giải thích cảnh báo và các hướng dẫn hiện vẫn bằng tiếng Anh.",
  },

  common: {
    loading: "Đang tải…",
    error: "Hiện không tải được nội dung này.",
    retry: "Thử lại",
    updated: "Cập nhật",
    close: "Đóng",
  },

  emergencyShortcut: {
    open: "Gọi khẩn cấp: 119 hoặc 112",
    title: "Khẩn cấp",
    titleKo: "긴급 전화",
    ambulanceNote: "Còn tư vấn y tế 24 giờ",
    policeNote: "Có phiên dịch tiếng Anh",
    more: "Cần nói gì, phòng cấp cứu gần nhất",
  },

  weather: {
    title: "Thời tiết",
    titleKo: "날씨",
    tips: {
      storm: "Hôm nay có dông. Hãy vào trong nhà khi nghe tiếng sấm.",
      snow: "Hôm nay có tuyết hoặc băng. Mang giày chống trượt và dành thêm thời gian di chuyển.",
      umbrella: "Hãy mang ô.",
      cold: "Rất lạnh. Mặc áo khoác ấm, đội mũ và đeo găng tay.",
      heat: "Rất nóng. Uống nước và nghỉ trong bóng râm.",
      layers: "Hôm nay nhiệt độ chênh lệch lớn. Hãy mặc nhiều lớp.",
      none: "Hôm nay không cần chuẩn bị gì đặc biệt.",
    },
    tipLabel: "Mẹo",
    pageTitle: "Thời tiết",
    feelsLike: "Cảm giác như",
    high: "Cao",
    low: "Thấp",
    rainChance: "Khả năng mưa",
    humidity: "Độ ẩm",
    wind: "Gió",
    attribution: "Dữ liệu thời tiết từ Open-Meteo.com (CC BY 4.0)",
    codes: {
      clear: "Quang đãng",
      mostlyClear: "Phần lớn quang đãng",
      partlyCloudy: "Có mây rải rác",
      overcast: "Nhiều mây",
      fog: "Sương mù",
      drizzle: "Mưa phùn",
      freezingDrizzle: "Mưa phùn băng giá",
      rain: "Mưa",
      freezingRain: "Mưa băng giá",
      snow: "Tuyết",
      snowGrains: "Hạt tuyết",
      showers: "Mưa rào",
      snowShowers: "Mưa tuyết",
      thunderstorm: "Dông",
      thunderstormHail: "Dông kèm mưa đá",
      unknown: "Không rõ",
    },
  },

  air: {
    title: "Chất lượng không khí",
    titleKo: "미세먼지",
    maskTip: {
      moderate: {
        title: "Nhạy cảm với bụi? Cân nhắc đeo khẩu trang KF94",
        body: "Trẻ em, người lớn tuổi và người bị hen suyễn sẽ bị ảnh hưởng trước.",
      },
      bad: {
        title: "Đeo khẩu trang KF94 khi ra ngoài",
        body: "Đóng cửa sổ và hạn chế vận động mạnh ngoài trời.",
      },
      veryBad: {
        title: "Đeo khẩu trang KF94 và ở trong nhà nếu có thể",
        body: "Đóng cửa sổ và tránh vận động ngoài trời.",
      },
    },
    pm10: "Bụi mịn (PM10)",
    pm25: "Bụi siêu mịn (PM2.5)",
    overall: "Tổng thể",
    unit: "µg/m³",
    grades: {
      good: "Tốt",
      moderate: "Trung bình",
      bad: "Xấu",
      veryBad: "Rất xấu",
    },
    advice: {
      good: "Ngày tuyệt vời để ra ngoài.",
      moderate: "Ổn với hầu hết mọi người.",
      bad: "Cân nhắc đeo khẩu trang KF94 khi ra ngoài.",
      veryBad: "Đeo khẩu trang KF94 và hạn chế thời gian ở ngoài.",
    },
    note: "Ước tính theo mô hình, dùng thang đánh giá của Hàn Quốc. Số đo tại trạm có thể khác.",
    attribution: "Dữ liệu chất lượng không khí từ Open-Meteo.com (CC BY 4.0)",
    goingOutside: "Sắp ra ngoài?",
  },

  exchange: {
    title: "Tỷ giá",
    titleKo: "환율",
    convert: {
      title: "Quy đổi nhanh",
      amount: "Số tiền",
      currency: "Tiền tệ",
      swap: "Đổi chiều",
      approx: "≈",
    },
    per: "mỗi",
    note: "Tỷ giá tham khảo hằng ngày. Ngân hàng và tiệm đổi tiền sẽ khác.",
    attribution: "Tỷ giá từ Frankfurter (dữ liệu ngân hàng trung ương)",
    asOf: "Tính đến",
  },

  slang: {
    title: "Tiếng lóng hôm nay",
    titleKo: "오늘의 신조어",
    meaning: "Nghĩa",
    examples: "Ví dụ",
    tone: {
      casual: "Thân mật",
      playful: "Đùa vui",
      rude: "Thô lỗ",
      formal: "Trang trọng",
    },
    usage: {
      safe: "Dùng được",
      casual: "Chỉ với bạn bè",
      risky: "Rủi ro: tránh dùng với người lạ",
    },
  },

  slangPage: {
    titleKo: "신조어",
    intro: "Tiếng lóng Hàn Quốc bạn sẽ nghe từ bạn bè, trên mạng và trên TV, kèm mức độ nên dùng.",
    beta: "Beta: các mục đang được người bản xứ kiểm tra.",
    hideBeta: "Ẩn thông báo này",
    archive: {
      title: "Tất cả tiếng lóng",
      searchLabel: "Tìm tiếng lóng",
      searchPlaceholder: "Từ, phiên âm hoặc nghĩa",
      filterLabel: "Lọc tiếng lóng",
      filters: { all: "Tất cả", saved: "Đã lưu", risky: "Rủi ro" },
      noResults: "Không có tiếng lóng nào phù hợp.",
      noSaved: "Chưa lưu gì. Chạm vào trái tim trên một từ để giữ nó ở đây.",
      listen: "Nghe",
      save: "Lưu",
      examples: "Ví dụ",
      noVoice: "Thiết bị này không có giọng đọc tiếng Hàn.",
    },
  },

  safety: {
    intro: "Công cụ giúp bạn nhận ra lừa đảo. Những gì bạn nhập ở đây không rời khỏi điện thoại của bạn.",
    disclaimer: "Không phải tư vấn chính thức. Nếu không chắc, hãy liên hệ công ty hoặc cảnh sát.",
  },

  imageText: {
    upload: "Tải ảnh chụp màn hình lên",
    hint: "Hoặc dán ảnh chụp màn hình vào ô. Ảnh được đọc trên điện thoại của bạn, không được gửi hay lưu.",
    loading: "Đang chuẩn bị trình đọc chữ…",
    loadingFirstTime: "Chỉ lần đầu: tải khoảng 8 MB.",
    reading: "Đang đọc chữ trong ảnh…",
    done: "Chữ trong ảnh đã được đưa vào ô. Có thể có lỗi. Hãy kiểm tra và sửa chỗ sai trước khi tiếp tục.",
    errors: {
      not_image: "Tệp này không phải ảnh. Hãy chọn ảnh chụp màn hình hoặc ảnh.",
      too_big: "Ảnh quá lớn. Hãy thử ảnh chụp màn hình.",
      no_text: "Không tìm thấy chữ trong ảnh. Hãy thử ảnh rõ hơn, hoặc gõ tin nhắn.",
      failed: "Không đọc được ảnh. Kiểm tra kết nối mạng (cần cho lần đầu), hoặc gõ tin nhắn.",
    },
  },

  alerts: {
    title: "Dịch tin cảnh báo",
    intro: "Nhận được tin nhắn khẩn cấp hoặc an toàn bằng tiếng Hàn (재난문자)? Dán vào hoặc tải ảnh chụp màn hình để xem nội dung và việc cần làm.",
    label: "Dán nội dung cảnh báo tiếng Hàn",
    placeholder: "Dán cảnh báo vào đây…",
    privacy: "Chỉ đọc trên điện thoại của bạn. Nội dung không được gửi, lưu hay ghi lại.",
    translate: "Giải thích cảnh báo này",
    clear: "Xóa",
    samples: "Cảnh báo mẫu",
    samplesHint: "Thử một mẫu (soạn để luyện tập, không phải cảnh báo thật):",
    learnLink: "Tìm hiểu các loại cảnh báo trước khi có sự cố",
    disclaimer: "Không chính thức. Hãy làm theo hướng dẫn của cơ quan chức năng và cảnh báo gốc.",
    originalTitle: "Cảnh báo gốc (tiếng Hàn)",
    typeTitle: "Loại cảnh báo",
    unknownType: "Không nhận diện được",
    alsoMentions: "Cũng nhắc đến",
    category: "Hạng mục",
    categoryNotShown: "Không có trong nội dung đã dán",
    sender: "Người gửi",
    area: "Khu vực (như trong tin)",
    time: "Thời gian (như trong tin)",
    notFound: "Không tìm thấy trong nội dung",
    summaryTitle: "Tóm tắt (bằng tiếng Anh)",
    levelWarning: "Mức: cảnh báo (경보), mức cao hơn.",
    levelAdvisory: "Mức: khuyến cáo (주의보), mức thấp hơn.",
    lifted: "Tin cảnh báo cho biết đã được dỡ bỏ (해제). Các nguy hiểm khác có thể vẫn còn. Tiếp tục làm theo hướng dẫn tại địa phương.",
    drill: "Tin cảnh báo cho biết đây là diễn tập (훈련). Hãy làm theo hướng dẫn diễn tập.",
    mentions: "Cảnh báo có nhắc đến:",
    noSummary: "Chúng tôi không nhận diện được loại cảnh báo này.",
    actionsTitle: "Việc cần làm",
    actionsIntro: "Luôn làm theo hướng dẫn trong cảnh báo gốc trước. Dưới đây là hướng dẫn chính thức chung cho loại cảnh báo này (bằng tiếng Anh).",
    actionsSource: "Nguồn: hướng dẫn an toàn chính thức",
    glossaryTitle: "Thuật ngữ chính tìm thấy",
    linesTitle: "Từng dòng",
    keyWords: "Từ khóa:",
    notTranslated: "Chưa dịch",
    notUnderstoodTitle: "Tôi không hiểu hết cảnh báo này.",
    notUnderstoodBody:
      "Hãy làm theo những gì bạn thấy và nghe xung quanh, hỏi người gần đó, hoặc gọi 119 / đường dây hỗ trợ đã xác minh.",
    call119: "Gọi 119",
    tooLong: "Chỉ đọc 2.000 ký tự đầu tiên.",
  },

  alertGuide: {
    title: "Tìm hiểu các loại cảnh báo",
    intro: "Điện thoại ở Hàn Quốc nhận ba loại tin cảnh báo của chính phủ (재난문자). Hãy tìm hiểu ngay bây giờ, trước khi có sự cố.",
    categoriesTitle: "Ba hạng mục cảnh báo",
    sound: "Âm thanh",
    canTurnOff: "Có tắt được không?",
    yes: "Có",
    no: "Không. Mọi điện thoại đều nhận được.",
    screenTitle: "Trông như thế nào",
    screenBody:
      "Cảnh báo hiện lên trên màn hình. Hãy tìm tên hạng mục (ví dụ 긴급재난문자) và người gửi trong [ngoặc vuông], như [기상청] là cơ quan khí tượng, hoặc văn phòng thành phố của bạn. Giao diện cụ thể tùy điện thoại.",
    englishTitle: "Tiếng Anh trong cảnh báo",
    englishBody:
      "Từ năm 2024, Cảnh báo Khẩn cấp và Cảnh báo Thảm họa có chuông báo sẽ thêm tiếng Anh cho các thông tin chính, như loại thảm họa và độ lớn động đất. Phần còn lại vẫn bằng tiếng Hàn.",
    earthquakeTitle: "Cảnh báo động đất",
    earthquakeBody:
      "Độ lớn 6.0 trở lên: Cảnh báo Khẩn cấp cho cả nước. Độ lớn 5.0–5.9: Cảnh báo Thảm họa cho cả nước. Động đất nhỏ hơn: Cảnh báo Thảm họa hoặc Thông báo An toàn, tùy mức rung dự kiến tại nơi bạn ở.",
    enableTitle: "Đảm bảo đã bật cảnh báo",
    iphoneTitle: "iPhone",
    iphoneSteps: [
      "Mở Cài đặt (Settings) và chạm Thông báo (Notifications).",
      "Cuộn xuống dưới cùng.",
      "Trong mục Cảnh báo của chính phủ (Government Alerts), bật các loại cảnh báo.",
    ],
    androidTitle: "Android (Samsung Galaxy)",
    androidSteps: [
      "Mở Cài đặt (Settings) và chạm An toàn và khẩn cấp (Safety and emergency).",
      "Chạm Cảnh báo khẩn cấp không dây (Wireless emergency alerts).",
      "Bật Cho phép cảnh báo (Allow alerts), và kiểm tra các loại cảnh báo bên dưới.",
    ],
    otherAndroid:
      "Điện thoại Android khác: mở ứng dụng Tin nhắn, vào Cài đặt và tìm cài đặt cảnh báo khẩn cấp. Tên menu khác nhau tùy điện thoại và ngôn ngữ.",
    appTitle: "Cảnh báo bằng ngôn ngữ của bạn",
    appBody:
      "Cài ứng dụng Emergency Ready App của chính phủ (phiên bản ngoại ngữ của 안전디딤돌) để nhận tin thảm họa bằng tiếng Anh, Trung, Việt, Thái hoặc Nhật. Ứng dụng cũng hiển thị nơi trú ẩn gần bạn.",
    helpTitle: "Số khẩn cấp và hỗ trợ",
    sourcesTitle: "Nguồn",
    lastChecked: "Kiểm tra lần cuối",
    back: "An toàn",
  },

  scam: {
    title: "Kiểm tra lừa đảo",
    intro: "Dán tin nhắn, tin KakaoTalk hoặc email mà bạn không chắc chắn, hoặc tải ảnh chụp màn hình lên.",
    placeholder: "Dán tin nhắn vào đây…",
    privacy: "Chỉ kiểm tra trên điện thoại của bạn. Tin nhắn không được gửi, lưu hay ghi lại.",
    check: "Kiểm tra tin nhắn",
    clear: "Xóa",
    tooLong: "Chỉ kiểm tra 5.000 ký tự đầu tiên.",
    resultHeading: "Kết quả",
    verdicts: {
      likely_scam: "Có khả năng là lừa đảo",
      unclear: "Chưa rõ",
      no_obvious_signs: "Không thấy dấu hiệu lừa đảo rõ ràng, nhưng hãy xác minh với nguồn chính thức.",
    },
    advice: {
      likely_scam:
        "Đừng bấm vào liên kết, gọi lại, cài ứng dụng, hay gửi tiền hoặc mã. Xóa tin nhắn, hoặc báo cáo đến 1394.",
      unclear:
        "Chúng tôi không thể xác định. Hãy cẩn thận: liên hệ người gửi qua ứng dụng, trang web hoặc số điện thoại chính thức mà bạn tự tìm.",
      no_obvious_signs:
        "Quy tắc của chúng tôi không phát hiện được mọi trò lừa đảo. Nếu tin nhắn đòi tiền, mã hoặc thông tin cá nhân, hãy xác minh với công ty qua ứng dụng hoặc số điện thoại chính thức.",
    },
    reasons: {
      too_short: "Tin nhắn quá ngắn để đánh giá.",
      odd_input: "Đây không giống một tin nhắn bình thường nên chúng tôi không thể đánh giá.",
    },
    signalsTitle: "Dấu hiệu cảnh báo tìm thấy",
    rulesNote: "Các bước kiểm tra này là quy tắc đơn giản, vẫn đang được người bản xứ xem xét. Kiểu lừa đảo mới có thể lọt qua.",
  },

  helpLines: {
    title: "Nhận trợ giúp",
    call: "Gọi",
    lines: {
      emergency: {
        name: "Cấp cứu & cứu hỏa",
        detail: "Trường hợp khẩn cấp. Còn tư vấn y tế 24/7 và cho biết bệnh viện, nhà thuốc nào đang mở cửa.",
      },
      mentalHealthCrisis: {
        name: "Đường dây phòng chống tự tử & sức khỏe tâm thần",
        detail: "Tư vấn 24/7 nếu bạn đang gặp khó khăn hoặc lo lắng cho ai đó. Chủ yếu bằng tiếng Hàn.",
      },
      police: {
        name: "Cảnh sát",
        detail: "Trường hợp khẩn cấp, hoặc nếu bạn đã chuyển tiền hay đang gặp nguy hiểm. Có phiên dịch tiếng Anh.",
      },
      scamReport: {
        name: "Báo cáo lừa đảo qua điện thoại & tin nhắn",
        detail: "Trung tâm 24/7 do cảnh sát vận hành: báo cáo cuộc gọi, tin nhắn lừa đảo và được hỗ trợ chặn thanh toán.",
      },
      fss: {
        name: "Cơ quan Giám sát Tài chính (FSS)",
        detail: "Tư vấn và tiếp nhận báo cáo về gian lận tài chính và cho vay bất hợp pháp. Có tính cước gọi.",
      },
      kisa: {
        name: "KISA (thư rác & tấn công mạng)",
        detail: "Báo cáo tin nhắn rác, liên kết lừa đảo và tấn công mạng.",
      },
      travelHotline: {
        name: "Đường dây hỗ trợ du lịch Hàn Quốc 1330",
        detail: "Phiên dịch qua điện thoại hoặc tin nhắn bằng tiếng Anh, Trung, Nhật và các thứ tiếng khác. Do Tổng cục Du lịch Hàn Quốc vận hành.",
      },
      kdca: {
        name: "Đường dây kiểm soát dịch bệnh (KDCA)",
        detail: "Câu hỏi về bệnh truyền nhiễm. 24 giờ, miễn phí, nhiều ngôn ngữ.",
      },
      immigration: {
        name: "Trung tâm liên lạc Xuất nhập cảnh",
        detail: "Kiểm tra tin nhắn về visa hoặc xuất nhập cảnh có thật không. Có nhiều ngôn ngữ.",
      },
    },
  },

  local: {
    intro: "Tìm trợ giúp gần bạn.",
    hospital: {
      title: "Hỗ trợ bệnh viện & nhà thuốc",
      question: "Bạn cần gì?",
      options: {
        emergency: { label: "Khẩn cấp", hint: "Gọi 119 ngay" },
        doctor: { label: "Đi khám bác sĩ", hint: "Không khẩn cấp" },
        pharmacy: { label: "Tìm nhà thuốc", hint: "Thuốc và đơn thuốc" },
        dental: { label: "Nha khoa", hint: "Đau răng, cạo vôi" },
        mentalHealth: { label: "Sức khỏe tâm thần", hint: "Căng thẳng, lo âu, buồn chán" },
      },
    },
    disclaimer: "Không phải tư vấn y tế. Khi khẩn cấp, hãy gọi 119.",
    back: "Quay lại",
    emergency: {
      title: "Khẩn cấp",
      callTitle: "Gọi 119",
      callBody: "Gọi xe cấp cứu hoặc cứu hỏa. Hoạt động 24 giờ.",
      callButton: "Gọi 119",
      tellThem: "Hãy cho họ biết:",
      tellList: [
        "Bạn đang ở đâu (địa chỉ, hoặc tòa nhà hay ga tàu gần đó)",
        "Chuyện gì đã xảy ra",
        "Số điện thoại của bạn",
      ],
      notSureTitle: "Không chắc có phải khẩn cấp không?",
      notSureBody:
        "119 cũng tư vấn y tế qua điện thoại và cho biết bệnh viện, nhà thuốc nào mở cửa vào ban đêm và ngày lễ.",
      egenLink: "Tìm phòng cấp cứu và nhà thuốc đang mở (E-Gen, tiếng Hàn)",
      findEr: "Tìm phòng cấp cứu gần đây",
    },
    doctor: {
      title: "Đi khám bác sĩ",
      pickerTitle: "Bạn bị làm sao?",
      pickerHint: "Chọn mục gần đúng nhất. Đây chỉ là gợi ý loại phòng khám, không phải chẩn đoán.",
      clinicTitle: "Phòng khám nên đến",
      also: "Hoặc:",
      phrasesTitle: "Nói câu này ở phòng khám",
      bringTitle: "Cần mang theo",
      bringList: [
        "Thẻ ARC (외국인등록증)",
        "Hộ chiếu",
        "Thẻ bảo hiểm y tế, nếu có",
        "Danh sách thuốc bạn đang dùng",
      ],
      bringNote: "Dấu tích không được lưu.",
    },
    pharmacy: {
      title: "Tìm nhà thuốc",
      phrasesTitle: "Câu nói ở nhà thuốc",
      afterHours: "Ban đêm hoặc ngày lễ, hãy gọi 119 hoặc xem E-Gen để tìm nhà thuốc đang mở.",
      egenLink: "Mở E-Gen (tiếng Hàn)",
    },
    dental: {
      title: "Nha khoa",
      phrasesTitle: "Nói câu này ở nha sĩ",
    },
    mentalHealth: {
      title: "Sức khỏe tâm thần",
      crisisTitle: "Cần nói chuyện ngay?",
      centerTitle: "Hoặc thử trung tâm công cộng",
      crisisBody: "Nếu bạn có thể tự làm hại bản thân hoặc đang gặp nguy hiểm ngay lúc này, hãy gọi 119.",
      phrasesTitle: "Câu nói hữu ích",
      reassurance: "Đi khám vì căng thẳng, mất ngủ hay tâm trạng là chuyện bình thường, và tìm kiếm sự giúp đỡ là điều nên làm.",
    },
    clinic: {
      findNearby: "Tìm gần đây:",
      locating: "Đang lấy vị trí của bạn…",
      openIn: "Mở bằng:",
      apps: { naver: "Naver Map", kakao: "Kakao Map", google: "Google Maps" },
      locationNote:
        "Vị trí của bạn ở lại trên điện thoại. Nó chỉ được thêm vào liên kết Google Maps. Naver và Kakao dùng định vị riêng của họ.",
      locationDenied: "Định vị đang tắt. Ứng dụng bản đồ sẽ tìm quanh nơi nó đoán bạn đang ở.",
    },
    recycling: {
      title: "Hướng dẫn phân loại & đổ rác",
      banner: "Quy định khác nhau theo quận. Hãy xem bảng thông báo của tòa nhà hoặc văn phòng quận.",
      chooseDistrict: "Chọn quận của bạn",
      onlyThese: "Hiện chỉ có hướng dẫn cho các quận này.",
      searchLabel: "Tìm một món đồ",
      searchPlaceholder: "vd. hộp pizza, pin, 페트병",
      browse: "Duyệt",
      all: "Tất cả",
      noResults: "Không tìm thấy món đồ này.",
      whenTitle: "Khi nào đổ rác",
      appliesTo: "Áp dụng cho:",
      time: "Thời gian:",
      place: "Ở đâu:",
      binLabel: "Bỏ vào",
      prepLabel: "Trước khi vứt",
      dayLabel: "Ngày thu gom",
      noDay: "Quận không công bố ngày cho loại này.",
      inferred: "Không có tên trong danh sách. Dựa theo quy định chung của quận.",
      bookOnline: "Đặt lịch thu gom trực tuyến (tiếng Hàn)",
      notSureTitle: "Không chắc?",
      notSureBody:
        "Đừng đoán. Hỏi ban quản lý tòa nhà (관리실), xem bảng thông báo cạnh khu đổ rác của tòa nhà, hoặc gọi văn phòng tái chế của quận.",
      call: "Gọi",
      sourcesTitle: "Nguồn",
      lastChecked: "Kiểm tra lần cuối",
      published: "công bố",
      noDate: "không ghi ngày",
      reviewNote: "Dịch từ trang tiếng Hàn của quận. Chưa được người bản xứ kiểm tra.",
      backToItems: "Tất cả món đồ",
      days: { mon: "T2", tue: "T3", wed: "T4", thu: "T5", fri: "T6", sat: "T7", sun: "CN" },
    },
    phrases: {
      copy: "Sao chép",
      copied: "Đã sao chép",
      showLarge: "Hiện",
      close: "Đóng",
      showToStaff: "Đưa cái này cho nhân viên xem",
      screenOn: "Màn hình luôn sáng khi mục này đang mở.",
      screenMayDim: "Màn hình có thể tối đi. Thỉnh thoảng hãy chạm vào để giữ sáng.",
      blankHint: "Chỉ vào ___ hoặc nói từ đó.",
      reviewNote: "Các câu nói chưa được người bản xứ kiểm tra.",
    },
  },

  trails: {
    title: "Địa điểm nên đến",
    searchLabel: "Tìm địa điểm",
    searchPlaceholder: "Địa điểm, thành phố hoặc phim Hàn",
    noResults: "Không có địa điểm nào phù hợp.",
    stopsCount: "điểm dừng",
    tags: {
      kpop: "K-pop",
      kdrama: "Phim Hàn",
      film: "Điện ảnh",
      food: "Ẩm thực",
      nature: "Thiên nhiên",
      culture: "Văn hóa",
    },
    banner: "Địa điểm có thể đóng cửa hoặc thay đổi. Hãy kiểm tra giờ mở cửa trước khi đi.",
    reportProblem: "Báo lỗi",
    reportSubject: "Lỗi về hành trình",
    trail: {
      time: "Thời gian",
      difficulty: "Độ khó",
      season: "Mùa đẹp nhất",
      gettingThere: "Cách đến",
      respectTitle: "Tôn trọng người dân địa phương",
      stopsTitle: "Điểm dừng",
      progress: "đã đến",
      progressNote: "Dấu đã đến chỉ được lưu trên điện thoại này.",
      relatedTo: "Liên quan đến",
      hours: "Giờ mở cửa",
      cost: "Chi phí",
      notPublished: "Chưa công bố. Hãy kiểm tra trước khi đi.",
      map: "Bản đồ",
      copyKorean: "Sao chép tên tiếng Hàn",
      copied: "Đã sao chép",
      markVisited: "Đã đến",
      source: "Nguồn",
      lastChecked: "Kiểm tra lần cuối",
      needsReview: "Chưa được kiểm tra.",
    },
  },

  privacy: {
    title: "Quyền riêng tư",
    link: "Quyền riêng tư: những gì ở lại trên điện thoại",
    updated: "Cập nhật lần cuối: 2026-10-03",
    intro: "KReady không có tài khoản, quảng cáo, theo dõi hay phân tích. Dưới đây là chính xác những gì xảy ra với thông tin của bạn.",
    sections: [
      {
        title: "Tin nhắn và ảnh chụp màn hình bạn kiểm tra",
        body: [
          "Công cụ kiểm tra lừa đảo và dịch tin cảnh báo chạy hoàn toàn trong trình duyệt của bạn.",
          "Những gì bạn dán không bao giờ được gửi đến máy chủ của chúng tôi, không được lưu và không được ghi lại. Nó biến mất khi bạn rời trang.",
          "Ảnh chụp màn hình bạn tải lên hoặc dán được đọc trên điện thoại. Ảnh không bao giờ được tải lên, lưu hay ghi lại.",
          "Lần đầu đọc ảnh chụp màn hình, ứng dụng tải trình đọc chữ (khoảng 8 MB) từ trang của chúng tôi. Trình duyệt giữ một bản sao các tệp ngôn ngữ để lần sau nhanh hơn. Chúng không chứa dữ liệu nào của bạn.",
          "Kiểm tra chính tả và tự động điền bị tắt trong các ô này để nội dung không bị chia sẻ với dịch vụ bàn phím hay kiểm tra chính tả.",
          "Nút loa ở trang Tiếng lóng dùng tính năng đọc có sẵn của trình duyệt. Nó ưu tiên giọng đọc trên điện thoại, nhưng trên một số thiết bị trình duyệt có thể dùng giọng đọc trực tuyến. Chỉ từ lóng được đọc to, không bao giờ là những gì bạn nhập.",
        ],
      },
      {
        title: "Chỉ lưu trên điện thoại của bạn",
        body: [
          "Quận bạn chọn và các điểm dừng bạn đánh dấu đã đến được lưu trong bộ nhớ trình duyệt trên thiết bị này.",
          "Lựa chọn \"Du lịch\" hay \"Sống tại đây\" của bạn, để Trang chủ hiện đúng thẻ trước. Đổi bất cứ lúc nào trong Cài đặt.",
          "Các từ lóng bạn lưu bằng trái tim.",
          "Ngôn ngữ bạn chọn, trong một cookie nhỏ. Trình duyệt gửi nó kèm mỗi lần tải trang để trang hiển thị bằng ngôn ngữ của bạn.",
          "Không lưu gì khác. Lựa chọn sức khỏe, dấu tích danh sách và từ khóa tìm kiếm chỉ nằm trong bộ nhớ tạm và bị xóa khi bạn rời trang.",
          "Để xóa dữ liệu đã lưu, hãy xóa dữ liệu của trang này trong cài đặt trình duyệt.",
        ],
      },
      {
        title: "Vị trí của bạn",
        body: [
          "Ứng dụng chỉ hỏi vị trí khi bạn chạm \"Tìm gần đây\".",
          "Vị trí ở lại trong trình duyệt. Nó được làm tròn đến khoảng 100 m và chỉ được thêm vào liên kết Google Maps nếu bạn mở liên kết đó. Liên kết Naver và Kakao không chứa vị trí.",
          "Vị trí của bạn không bao giờ được gửi đến máy chủ của chúng tôi hay được lưu.",
        ],
      },
      {
        title: "Thời tiết, chất lượng không khí và tỷ giá",
        body: [
          "Máy chủ của chúng tôi lấy dữ liệu này từ Open-Meteo và Frankfurter, dùng điểm trung tâm của quận bạn chọn, không phải vị trí của bạn.",
          "Kết quả được lưu đệm và dùng chung cho mọi người chọn cùng quận.",
        ],
      },
      {
        title: "Liên kết đến dịch vụ khác",
        body: [
          "Ứng dụng bản đồ, cuộc gọi điện thoại và trang web chính phủ hay du lịch bạn mở từ ứng dụng này do bên khác vận hành, và chính sách quyền riêng tư của họ được áp dụng.",
        ],
      },
      {
        title: "Nhật ký kỹ thuật",
        body: [
          "Như mọi trang web, nhà cung cấp dịch vụ lưu trữ có thể giữ nhật ký truy cập tiêu chuẩn (như địa chỉ IP và trang được yêu cầu) vì lý do bảo mật và độ ổn định.",
          "Mã của chúng tôi chỉ ghi lỗi từ dịch vụ thời tiết và tỷ giá. Nó không bao giờ ghi lại những gì bạn nhập hay dán.",
        ],
      },
      {
        title: "Dùng ngoại tuyến",
        body: [
          "Ứng dụng lưu các trang và tệp của chính nó trên thiết bị để có thể hoạt động ngoại tuyến. Không chứa thông tin cá nhân.",
        ],
      },
    ],
    contact: "Có câu hỏi về quyền riêng tư?",
  },

  licenses: {
    title: "Giấy phép mã nguồn mở",
    link: "Giấy phép mã nguồn mở",
    intro:
      "KReady được xây dựng bằng phần mềm miễn phí, mã nguồn mở và phông chữ Pretendard. Đây là các gói được sử dụng, kèm thông báo bản quyền và giấy phép.",
    showText: "Hiện nội dung giấy phép",
    packages: "gói",
  },

  offline: {
    title: "Bạn đang ngoại tuyến",
    body: "Kiểm tra kết nối và thử lại. Các trang bạn đã mở trước đó có thể vẫn hoạt động.",
    retry: "Thử lại",
  },
};
