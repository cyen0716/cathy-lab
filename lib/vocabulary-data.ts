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
    name: "Daily Life",
    nameKorean: "일상생활",
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
    ],
  },
  {
    id: "emotions",
    name: "Emotions",
    nameKorean: "감정",
    icon: "💕",
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
    ],
  },
  {
    id: "food",
    name: "Food",
    nameKorean: "음식",
    icon: "🍜",
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
    ],
  },
  {
    id: "cafe",
    name: "Cafe",
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
    ],
  },
  {
    id: "travel",
    name: "Travel",
    nameKorean: "여행",
    icon: "✈️",
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
    ],
  },
  {
    id: "kdrama",
    name: "K-drama / Fandom",
    nameKorean: "드라마 / 팬덤",
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
        category.name.toLowerCase().includes(lowerQuery)
      ) {
        results.push(word)
      }
    })
  })

  return results
}
