export interface Question {
  id: number;
  text: string;
  options: Array<{
    value: string;
    text: string;
    traits: string[];
  }>;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "친구들과 모임에서 당신의 모습은?",
    options: [
      { value: "A", text: "분위기를 주도하며 모든 사람과 대화한다", traits: ["social", "leadership"] },
      { value: "B", text: "친한 친구들과만 깊은 대화를 나눈다", traits: ["selective", "loyal"] },
      { value: "C", text: "분위기를 관찰하며 필요할 때만 참여한다", traits: ["observant", "cautious"] },
      { value: "D", text: "조용히 있다가 일찍 집에 간다", traits: ["independent", "introverted"] }
    ]
  },
  {
    id: 2,
    text: "새로운 환경에 들어갔을 때 당신은?",
    options: [
      { value: "A", text: "먼저 다가가서 인사하고 친해진다", traits: ["social", "confident"] },
      { value: "B", text: "천천히 주변을 살피며 적응한다", traits: ["cautious", "observant"] },
      { value: "C", text: "편안해질 때까지 구석에 있는다", traits: ["introverted", "careful"] },
      { value: "D", text: "빠르게 상황을 파악하고 행동한다", traits: ["smart", "adaptable"] }
    ]
  },
  {
    id: 3,
    text: "스트레스를 받았을 때 당신의 해소법은?",
    options: [
      { value: "A", text: "친구들과 만나서 이야기한다", traits: ["social", "expressive"] },
      { value: "B", text: "혼자서 조용히 생각한다", traits: ["independent", "introspective"] },
      { value: "C", text: "좋아하는 취미에 몰두한다", traits: ["focused", "creative"] },
      { value: "D", text: "충분한 수면을 취한다", traits: ["practical", "self-care"] }
    ]
  },
  {
    id: 4,
    text: "주말에 당신이 선호하는 활동은?",
    options: [
      { value: "A", text: "친구들과 함께 밖에서 활동한다", traits: ["social", "active"] },
      { value: "B", text: "집에서 책을 읽거나 영화를 본다", traits: ["calm", "cultured"] },
      { value: "C", text: "새로운 취미나 기술을 배운다", traits: ["curious", "ambitious"] },
      { value: "D", text: "자연 속에서 산책하거나 혼자 시간을 보낸다", traits: ["independent", "peaceful"] }
    ]
  },
  {
    id: 5,
    text: "음식을 선택할 때 당신의 기준은?",
    options: [
      { value: "A", text: "맛있어 보이는 것부터 먹는다", traits: ["impulsive", "adventurous"] },
      { value: "B", text: "평소 좋아하는 안전한 메뉴를 선택한다", traits: ["conservative", "consistent"] },
      { value: "C", text: "영양과 건강을 고려해서 선택한다", traits: ["practical", "health-conscious"] },
      { value: "D", text: "분위기와 상황에 맞는 것을 고른다", traits: ["thoughtful", "adaptable"] }
    ]
  },
  {
    id: 6,
    text: "문제가 생겼을 때 당신의 해결 방식은?",
    options: [
      { value: "A", text: "즉시 행동으로 해결하려 한다", traits: ["active", "decisive"] },
      { value: "B", text: "충분히 생각한 후 신중하게 접근한다", traits: ["cautious", "analytical"] },
      { value: "C", text: "다른 사람의 도움을 요청한다", traits: ["collaborative", "humble"] },
      { value: "D", text: "시간이 해결해줄 거라고 기다린다", traits: ["patient", "philosophical"] }
    ]
  },
  {
    id: 7,
    text: "당신이 가장 편안함을 느끼는 공간은?",
    options: [
      { value: "A", text: "사람들이 북적이는 카페나 광장", traits: ["social", "energetic"] },
      { value: "B", text: "조용하고 아늑한 개인 공간", traits: ["introverted", "cozy"] },
      { value: "C", text: "자연이 있는 넓은 야외 공간", traits: ["free", "nature-loving"] },
      { value: "D", text: "정리정돈이 잘 된 깔끔한 공간", traits: ["organized", "precise"] }
    ]
  },
  {
    id: 8,
    text: "선물을 받았을 때 당신의 반응은?",
    options: [
      { value: "A", text: "즉시 열어보며 큰 반응을 보인다", traits: ["expressive", "enthusiastic"] },
      { value: "B", text: "고마워하면서 조심스럽게 열어본다", traits: ["grateful", "careful"] },
      { value: "C", text: "나중에 혼자 있을 때 조용히 열어본다", traits: ["private", "contemplative"] },
      { value: "D", text: "상대방의 마음에 먼저 감사를 표한다", traits: ["considerate", "polite"] }
    ]
  },
  {
    id: 9,
    text: "새로운 사람을 만났을 때 당신은?",
    options: [
      { value: "A", text: "먼저 말을 걸며 친근하게 다가간다", traits: ["outgoing", "friendly"] },
      { value: "B", text: "상대방이 먼저 다가오기를 기다린다", traits: ["reserved", "cautious"] },
      { value: "C", text: "상황을 보고 적절히 반응한다", traits: ["adaptable", "diplomatic"] },
      { value: "D", text: "최소한의 인사만 하고 거리를 둔다", traits: ["independent", "selective"] }
    ]
  },
  {
    id: 10,
    text: "하루 중 가장 활발한 시간대는?",
    options: [
      { value: "A", text: "이른 아침, 하루를 시작할 때", traits: ["morning-person", "energetic"] },
      { value: "B", text: "오후, 따뜻한 햇살이 있을 때", traits: ["warm", "comfortable"] },
      { value: "C", text: "저녁, 하루 일과를 마친 후", traits: ["reflective", "social"] },
      { value: "D", text: "밤늦게, 조용한 시간에", traits: ["nocturnal", "contemplative"] }
    ]
  },
  {
    id: 11,
    text: "취미 활동을 선택하는 기준은?",
    options: [
      { value: "A", text: "많은 사람들과 함께 할 수 있는 것", traits: ["social", "collaborative"] },
      { value: "B", text: "혼자서도 충분히 즐길 수 있는 것", traits: ["independent", "self-sufficient"] },
      { value: "C", text: "창의성을 발휘할 수 있는 것", traits: ["creative", "artistic"] },
      { value: "D", text: "실용적이고 도움이 되는 것", traits: ["practical", "goal-oriented"] }
    ]
  },
  {
    id: 12,
    text: "갈등 상황에서 당신의 태도는?",
    options: [
      { value: "A", text: "적극적으로 해결하려고 나선다", traits: ["assertive", "problem-solver"] },
      { value: "B", text: "중재자 역할을 하며 화해시킨다", traits: ["diplomatic", "peacemaker"] },
      { value: "C", text: "상황이 진정될 때까지 피한다", traits: ["conflict-avoidant", "peaceful"] },
      { value: "D", text: "자신의 의견을 분명히 표현한다", traits: ["honest", "direct"] }
    ]
  }
];
