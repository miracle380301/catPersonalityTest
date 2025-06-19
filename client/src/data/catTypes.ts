export interface CatType {
  id: string;
  name: string;
  description: string;
  traits: string[];
  compatible: string;
  imageUrl: string;
  emoji: string;
  matchingTraits: string[];
}

export const catTypes: CatType[] = [
  {
    id: "social_mainecoon",
    name: "사교적인 메인쿤",
    description: "당신은 활발하고 친근한 성격이에요. 사람들과 어울리는 것을 좋아하고 분위기 메이커 역할을 잘해요. 큰 체구처럼 마음도 크고 포용력이 있어서 많은 사람들이 당신을 좋아해요.",
    traits: ["사교적", "친근함", "리더십", "포용력"],
    compatible: "장난스러운 아비시니안",
    imageUrl: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😸",
    matchingTraits: ["social", "leadership", "friendly", "outgoing", "collaborative"]
  },
  {
    id: "independent_russian",
    name: "독립적인 러시안블루",
    description: "당신은 조용하고 사려깊은 성격을 가지고 있어요. 혼자만의 시간을 소중히 여기며, 깊이 있는 관계를 선호합니다. 신중하고 관찰력이 뛰어나 상황을 잘 파악해요.",
    traits: ["신중함", "독립적", "관찰력", "우아함"],
    compatible: "온순한 페르시안",
    imageUrl: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😺",
    matchingTraits: ["independent", "introverted", "cautious", "observant", "contemplative"]
  },
  {
    id: "gentle_persian",
    name: "온순한 페르시안",
    description: "당신은 차분하고 우아한 성격이에요. 평화로운 환경을 좋아하고 갈등을 피하려고 해요. 부드럽고 따뜻한 마음을 가지고 있어서 사람들에게 안정감을 줘요.",
    traits: ["온순함", "우아함", "평화로움", "따뜻함"],
    compatible: "독립적인 러시안블루",
    imageUrl: "https://images.unsplash.com/photo-1518788053631-40ea80870bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😌",
    matchingTraits: ["calm", "peaceful", "gentle", "conflict-avoidant", "comfortable"]
  },
  {
    id: "playful_abyssinian",
    name: "활발한 아비시니안",
    description: "당신은 호기심이 많고 에너지가 넘쳐요. 새로운 것을 탐험하는 걸 좋아하고 모험을 즐겨해요. 활동적이고 장난기가 많아서 주변 사람들에게 즐거움을 줘요.",
    traits: ["활발함", "호기심", "모험심", "장난기"],
    compatible: "사교적인 메인쿤",
    imageUrl: "https://images.unsplash.com/photo-1573824266776-f016c09cb1e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😻",
    matchingTraits: ["active", "curious", "adventurous", "energetic", "enthusiastic"]
  },
  {
    id: "mysterious_siamese",
    name: "신비로운 샴",
    description: "당신은 지적이고 예민한 성격이에요. 깊이 있는 생각을 하며 자신만의 철학을 가지고 있어요. 선택적으로 사람들과 관계를 맺지만 한번 마음을 열면 매우 충성스러워요.",
    traits: ["지적", "예민함", "충성심", "신비로움"],
    compatible: "우아한 러시안블루",
    imageUrl: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "🙀",
    matchingTraits: ["smart", "analytical", "selective", "loyal", "introspective"]
  },
  {
    id: "practical_shorthair",
    name: "실용적인 브리티시숏헤어",
    description: "당신은 현실적이고 안정적인 성격이에요. 계획적으로 행동하며 실용성을 중시해요. 꾸준하고 믿을 만한 사람으로 주변 사람들이 당신을 의지해요.",
    traits: ["현실적", "안정적", "계획적", "신뢰감"],
    compatible: "온순한 페르시안",
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    emoji: "😸",
    matchingTraits: ["practical", "organized", "conservative", "reliable", "health-conscious"]
  }
];

export function calculateCatType(answers: string[]): CatType {
  const traitCounts: Record<string, number> = {};
  
  // Count traits from answers
  answers.forEach((answer, questionIndex) => {
    const question = questions[questionIndex];
    const selectedOption = question.options.find(opt => opt.value === answer);
    
    if (selectedOption) {
      selectedOption.traits.forEach(trait => {
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
      });
    }
  });
  
  // Find the cat type with the most matching traits
  let bestMatch = catTypes[0];
  let bestScore = 0;
  
  catTypes.forEach(catType => {
    let score = 0;
    catType.matchingTraits.forEach(trait => {
      score += traitCounts[trait] || 0;
    });
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = catType;
    }
  });
  
  return bestMatch;
}

// Import questions for the calculation function
import { questions } from './questions';
