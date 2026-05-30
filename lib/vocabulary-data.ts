export interface VocabWord {
  korean: string
  chinese: string
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
    name: "生活",
    nameKorean: "생활",
    icon: "🏠",
    color: "bg-rose-100 text-rose-700",
    words: [
      { korean: "안녕하세요", chinese: "你好" },
      { korean: "감사합니다", chinese: "謝謝" },
      { korean: "죄송합니다", chinese: "對不起" },
      { korean: "네", chinese: "是/對" },
      { korean: "아니요", chinese: "不是" },
      { korean: "괜찮아요", chinese: "沒關係" },
      { korean: "화장실", chinese: "廁所" },
      { korean: "지하철", chinese: "地鐵" },
      { korean: "전화", chinese: "電話" },
      { korean: "시간", chinese: "時間" },
      { korean: "물", chinese: "水" },
      { korean: "밥", chinese: "飯" },
      { korean: "집", chinese: "家" },
      { korean: "학교", chinese: "學校" },
      { korean: "회사", chinese: "公司" },
      { korean: "친구", chinese: "朋友" },
      { korean: "가족", chinese: "家人" },
      { korean: "잠깐만요", chinese: "等一下" },
      { korean: "뭐예요?", chinese: "是什麼？" },
      { korean: "어디예요?", chinese: "在哪裡？" },
    ],
  },
  {
    id: "emotions",
    name: "心情",
    nameKorean: "감정",
    icon: "🤎",
    color: "bg-pink-100 text-pink-700",
    words: [
      { korean: "사랑해", chinese: "我愛你" },
      { korean: "행복해", chinese: "幸福" },
      { korean: "슬퍼", chinese: "難過" },
      { korean: "화나", chinese: "生氣" },
      { korean: "무서워", chinese: "害怕" },
      { korean: "걱정돼", chinese: "擔心" },
      { korean: "기뻐", chinese: "開心" },
      { korean: "외로워", chinese: "孤單" },
      { korean: "피곤해", chinese: "累了" },
      { korean: "설레", chinese: "心動" },
      { korean: "졸려", chinese: "想睡" },
      { korean: "심심해", chinese: "無聊" },
      { korean: "짜증나", chinese: "煩躁" },
      { korean: "부끄러워", chinese: "害羞" },
      { korean: "신나", chinese: "興奮" },
      { korean: "우울해", chinese: "憂鬱" },
    ],
  },
  {
    id: "food",
    name: "料理",
    nameKorean: "음식",
    icon: "🥗",
    color: "bg-orange-100 text-orange-700",
    words: [
      { korean: "김치", chinese: "泡菜" },
      { korean: "라면", chinese: "拉麵" },
      { korean: "과자", chinese: "零食" },
      { korean: "배고파", chinese: "餓了" },
      { korean: "밥", chinese: "飯" },
      { korean: "고기", chinese: "肉" },
      { korean: "치킨", chinese: "炸雞" },
      { korean: "삼겹살", chinese: "五花肉" },
      { korean: "떡볶이", chinese: "辣炒年糕" },
      { korean: "비빔밥", chinese: "拌飯" },
      { korean: "김밥", chinese: "紫菜飯捲" },
      { korean: "불고기", chinese: "烤肉" },
      { korean: "냉면", chinese: "冷麵" },
      { korean: "순두부", chinese: "嫩豆腐" },
      { korean: "된장찌개", chinese: "大醬湯" },
      { korean: "삼계탕", chinese: "人參雞湯" },
    ],
  },
  {
    id: "cafe",
    name: "咖啡廳",
    nameKorean: "카페",
    icon: "☕",
    color: "bg-amber-100 text-amber-700",
    words: [
      { korean: "아메리카노", chinese: "美式咖啡" },
      { korean: "라떼", chinese: "拿鐵" },
      { korean: "케이크", chinese: "蛋糕" },
      { korean: "빵", chinese: "麵包" },
      { korean: "아이스", chinese: "冰的" },
      { korean: "뜨거운", chinese: "熱的" },
      { korean: "설탕", chinese: "糖" },
      { korean: "우유", chinese: "牛奶" },
      { korean: "주문", chinese: "點餐" },
      { korean: "계산", chinese: "結帳" },
      { korean: "커피", chinese: "咖啡" },
      { korean: "녹차", chinese: "綠茶" },
      { korean: "홍차", chinese: "紅茶" },
      { korean: "마카롱", chinese: "馬卡龍" },
      { korean: "테이크아웃", chinese: "外帶" },
      { korean: "영수증", chinese: "收據" },
    ],
  },
  {
    id: "travel",
    name: "旅行",
    nameKorean: "여행",
    icon: "🛫",
    color: "bg-sky-100 text-sky-700",
    words: [
      { korean: "공항", chinese: "機場" },
      { korean: "호텔", chinese: "飯店" },
      { korean: "지도", chinese: "地圖" },
      { korean: "택시", chinese: "計程車" },
      { korean: "표", chinese: "票" },
      { korean: "여권", chinese: "護照" },
      { korean: "짐", chinese: "行李" },
      { korean: "예약", chinese: "預約" },
      { korean: "관광", chinese: "觀光" },
      { korean: "사진", chinese: "照片" },
      { korean: "버스", chinese: "公車" },
      { korean: "역", chinese: "站" },
      { korean: "출구", chinese: "出口" },
      { korean: "입구", chinese: "入口" },
      { korean: "편의점", chinese: "便利商店" },
      { korean: "환전", chinese: "換錢" },
    ],
  },
  {
    id: "kdrama",
    name: "追星",
    nameKorean: "팬덤",
    icon: "🎬",
    color: "bg-violet-100 text-violet-700",
    words: [
      { korean: "잘생겼어", chinese: "好帥" },
      { korean: "예뻐", chinese: "漂亮" },
      { korean: "대박", chinese: "太棒了" },
      { korean: "오빠", chinese: "哥哥(女生叫)" },
      { korean: "언니", chinese: "姐姐(女生叫)" },
      { korean: "화이팅", chinese: "加油" },
      { korean: "팬", chinese: "粉絲" },
      { korean: "콘서트", chinese: "演唱會" },
      { korean: "드라마", chinese: "電視劇" },
      { korean: "아이돌", chinese: "偶像" },
      { korean: "형", chinese: "哥哥(男生叫)" },
      { korean: "누나", chinese: "姐姐(男生叫)" },
      { korean: "보고싶어", chinese: "想你" },
      { korean: "앨범", chinese: "專輯" },
      { korean: "배우", chinese: "演員" },
      { korean: "귀여워", chinese: "好可愛" },
      { korean: "최고", chinese: "最棒" },
      { korean: "멋있어", chinese: "好帥" },
    ],
  },
]

export function searchVocabulary(query: string): VocabWord[] {
  if (!query.trim()) return []
  const results: VocabWord[] = []

  vocabularyData.forEach((category) => {
    category.words.forEach((word) => {
      if (
        word.korean.includes(query) ||
        word.chinese.includes(query)
      ) {
        results.push(word)
      }
    })
  })

  return results
}
