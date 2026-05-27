export interface VocabWord {
  korean: string
  chinese: string
  romanization: string
}

export interface VocabCategory {
  id: string
  name: string
  nameKorean: string
  icon: string
  color: string
  words: VocabWord[]
}

export const vocabularyData: VocabCategory[] = [
  {
    id: "daily-life",
    name: "Daily Life",
    nameKorean: "일상생활",
    icon: "🏠",
    color: "bg-rose-100 text-rose-700",
    words: [
      { korean: "안녕하세요", chinese: "你好", romanization: "annyeonghaseyo" },
      { korean: "감사합니다", chinese: "謝謝", romanization: "gamsahamnida" },
      { korean: "죄송합니다", chinese: "對不起", romanization: "joesonghamnida" },
      { korean: "네", chinese: "是/對", romanization: "ne" },
      { korean: "아니요", chinese: "不是", romanization: "aniyo" },
      { korean: "괜찮아요", chinese: "沒關係", romanization: "gwaenchanayo" },
      { korean: "화장실", chinese: "廁所", romanization: "hwajangsil" },
      { korean: "지하철", chinese: "地鐵", romanization: "jihacheol" },
      { korean: "전화", chinese: "電話", romanization: "jeonhwa" },
      { korean: "시간", chinese: "時間", romanization: "sigan" },
      { korean: "물", chinese: "水", romanization: "mul" },
      { korean: "밥", chinese: "飯", romanization: "bap" },
      { korean: "집", chinese: "家", romanization: "jip" },
      { korean: "학교", chinese: "學校", romanization: "hakgyo" },
      { korean: "회사", chinese: "公司", romanization: "hoesa" },
      { korean: "친구", chinese: "朋友", romanization: "chingu" },
      { korean: "가족", chinese: "家人", romanization: "gajok" },
      { korean: "잠깐만요", chinese: "等一下", romanization: "jamkkanmanyo" },
      { korean: "뭐예요?", chinese: "是什麼？", romanization: "mwoyeyo" },
      { korean: "어디예요?", chinese: "在哪裡？", romanization: "eodiyeyo" },
    ],
  },
  {
    id: "emotions",
    name: "Emotions",
    nameKorean: "감정",
    icon: "💕",
    color: "bg-pink-100 text-pink-700",
    words: [
      { korean: "사랑해", chinese: "我愛你", romanization: "saranghae" },
      { korean: "행복해", chinese: "幸福", romanization: "haengbokhae" },
      { korean: "슬퍼", chinese: "難過", romanization: "seulpeo" },
      { korean: "화나", chinese: "生氣", romanization: "hwana" },
      { korean: "무서워", chinese: "害怕", romanization: "museowo" },
      { korean: "걱정돼", chinese: "擔心", romanization: "geokjeongdwae" },
      { korean: "기뻐", chinese: "開心", romanization: "gippeo" },
      { korean: "외로워", chinese: "孤單", romanization: "oerowo" },
      { korean: "피곤해", chinese: "累了", romanization: "pigonhae" },
      { korean: "설레", chinese: "心動", romanization: "seolle" },
      { korean: "졸려", chinese: "想睡", romanization: "jollyeo" },
      { korean: "심심해", chinese: "無聊", romanization: "simsimhae" },
      { korean: "짜증나", chinese: "煩躁", romanization: "jjajeungna" },
      { korean: "부끄러워", chinese: "害羞", romanization: "bukkeurowo" },
      { korean: "신나", chinese: "興奮", romanization: "sinna" },
      { korean: "우울해", chinese: "憂鬱", romanization: "uulhae" },
    ],
  },
  {
    id: "food",
    name: "Food",
    nameKorean: "음식",
    icon: "🍜",
    color: "bg-orange-100 text-orange-700",
    words: [
      { korean: "김치", chinese: "泡菜", romanization: "gimchi" },
      { korean: "라면", chinese: "拉麵", romanization: "ramyeon" },
      { korean: "과자", chinese: "零食", romanization: "gwaja" },
      { korean: "배고파", chinese: "餓了", romanization: "baegopa" },
      { korean: "밥", chinese: "飯", romanization: "bap" },
      { korean: "고기", chinese: "肉", romanization: "gogi" },
      { korean: "치킨", chinese: "炸雞", romanization: "chikin" },
      { korean: "삼겹살", chinese: "五花肉", romanization: "samgyeopsal" },
      { korean: "떡볶이", chinese: "辣炒年糕", romanization: "tteokbokki" },
      { korean: "비빔밥", chinese: "拌飯", romanization: "bibimbap" },
      { korean: "김밥", chinese: "紫菜飯捲", romanization: "gimbap" },
      { korean: "불고기", chinese: "烤肉", romanization: "bulgogi" },
      { korean: "냉면", chinese: "冷麵", romanization: "naengmyeon" },
      { korean: "순두부", chinese: "嫩豆腐", romanization: "sundubu" },
      { korean: "된장찌개", chinese: "大醬湯", romanization: "doenjang-jjigae" },
      { korean: "삼계탕", chinese: "人參雞湯", romanization: "samgyetang" },
    ],
  },
  {
    id: "cafe",
    name: "Cafe",
    nameKorean: "카페",
    icon: "☕",
    color: "bg-amber-100 text-amber-700",
    words: [
      { korean: "아메리카노", chinese: "美式咖啡", romanization: "amerikano" },
      { korean: "라떼", chinese: "拿鐵", romanization: "latte" },
      { korean: "케이크", chinese: "蛋糕", romanization: "keikeu" },
      { korean: "빵", chinese: "麵包", romanization: "ppang" },
      { korean: "아이스", chinese: "冰的", romanization: "aiseu" },
      { korean: "뜨거운", chinese: "熱的", romanization: "tteugeoun" },
      { korean: "설탕", chinese: "糖", romanization: "seoltang" },
      { korean: "우유", chinese: "牛奶", romanization: "uyu" },
      { korean: "주문", chinese: "點餐", romanization: "jumun" },
      { korean: "계산", chinese: "結帳", romanization: "gyesan" },
      { korean: "커피", chinese: "咖啡", romanization: "keopi" },
      { korean: "녹차", chinese: "綠茶", romanization: "nokcha" },
      { korean: "홍차", chinese: "紅茶", romanization: "hongcha" },
      { korean: "마카롱", chinese: "馬卡龍", romanization: "makarong" },
      { korean: "테이크아웃", chinese: "外帶", romanization: "teikeuaut" },
      { korean: "영수증", chinese: "收據", romanization: "yeongsujeung" },
    ],
  },
  {
    id: "travel",
    name: "Travel",
    nameKorean: "여행",
    icon: "✈️",
    color: "bg-sky-100 text-sky-700",
    words: [
      { korean: "공항", chinese: "機場", romanization: "gonghang" },
      { korean: "호텔", chinese: "飯店", romanization: "hotel" },
      { korean: "지도", chinese: "地圖", romanization: "jido" },
      { korean: "택시", chinese: "計程車", romanization: "taeksi" },
      { korean: "표", chinese: "票", romanization: "pyo" },
      { korean: "여권", chinese: "護照", romanization: "yeogwon" },
      { korean: "짐", chinese: "行李", romanization: "jim" },
      { korean: "예약", chinese: "預約", romanization: "yeyak" },
      { korean: "관광", chinese: "觀光", romanization: "gwangwang" },
      { korean: "사진", chinese: "照片", romanization: "sajin" },
      { korean: "버스", chinese: "公車", romanization: "beoseu" },
      { korean: "역", chinese: "站", romanization: "yeok" },
      { korean: "출구", chinese: "出口", romanization: "chulgu" },
      { korean: "입구", chinese: "入口", romanization: "ipgu" },
      { korean: "편의점", chinese: "便利商店", romanization: "pyeonuijeom" },
      { korean: "환전", chinese: "換錢", romanization: "hwanjeon" },
    ],
  },
  {
    id: "kdrama",
    name: "K-drama / Fandom",
    nameKorean: "드라마 / 팬덤",
    icon: "🎬",
    color: "bg-violet-100 text-violet-700",
    words: [
      { korean: "잘생겼어", chinese: "好帥", romanization: "jalsaenggyeosseo" },
      { korean: "예뻐", chinese: "漂亮", romanization: "yeppeo" },
      { korean: "대박", chinese: "太棒了", romanization: "daebak" },
      { korean: "오빠", chinese: "哥哥(女生叫)", romanization: "oppa" },
      { korean: "언니", chinese: "姐姐(女生叫)", romanization: "eonni" },
      { korean: "화이팅", chinese: "加油", romanization: "hwaiting" },
      { korean: "팬", chinese: "粉絲", romanization: "paen" },
      { korean: "콘서트", chinese: "演唱會", romanization: "konseoteu" },
      { korean: "드라마", chinese: "電視劇", romanization: "deurama" },
      { korean: "아이돌", chinese: "偶像", romanization: "aidol" },
      { korean: "형", chinese: "哥哥(男生叫)", romanization: "hyeong" },
      { korean: "누나", chinese: "姐姐(男生叫)", romanization: "nuna" },
      { korean: "보고싶어", chinese: "想你", romanization: "bogosipeo" },
      { korean: "앨범", chinese: "專輯", romanization: "aelbum" },
      { korean: "배우", chinese: "演員", romanization: "baeu" },
      { korean: "귀여워", chinese: "好可愛", romanization: "gwiyeowo" },
      { korean: "최고", chinese: "最棒", romanization: "choego" },
      { korean: "멋있어", chinese: "好帥", romanization: "meossisseo" },
    ],
  },
]

export function searchVocabulary(query: string): VocabWord[] {
  if (!query.trim()) return []
  const lowerQuery = query.toLowerCase()
  const results: VocabWord[] = []

  vocabularyData.forEach((category) => {
    category.words.forEach((word) => {
      if (
        word.korean.includes(query) ||
        word.chinese.includes(query) ||
        word.romanization.toLowerCase().includes(lowerQuery) ||
        category.name.toLowerCase().includes(lowerQuery)
      ) {
        results.push(word)
      }
    })
  })

  return results
}
