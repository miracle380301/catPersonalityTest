import { createContext, useContext, useState } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Header
    title: "나만 고양이 없어?",
    subtitle: "내 마음 속 고양이 찾기",
    description: "당신의 숨겨진 고양이 성향을 알아보세요!\n12개의 질문으로 당신만의 특별한 고양이를 찾아드려요 🐱",
    startTest: "테스트 시작하기",
    timeInfo: "⏱️ 약 3분 소요",
    shareInfo: "📱 결과 공유 가능",
    
    // Progress
    progress: "진행도",
    
    // Loading
    finding: "당신의 고양이를 찾고 있어요...",
    
    // Results
    yourCat: "당신의 내면 고양이는",
    personality: "성격 특징",
    compatible: "잘 맞는 고양이 친구",
    compatibleDesc: "서로의 성격을 잘 이해해줘요",
    shareResult: "결과 공유하기 📤",
    retakeTest: "다시 테스트하기",
    otherCats: "다른 고양이 성격들도 궁금하다면?",
    
    // Footer
    forFun: "재미로 즐기는 심리테스트예요 🐾",
    
    // Share
    shareText: "나는 {result}래요! 당신도 테스트해보세요!",
    copied: "결과가 클립보드에 복사되었습니다!"
  },
  en: {
    // Header
    title: "Don't I Have a Cat?",
    subtitle: "Find Your Inner Cat",
    description: "Discover your hidden feline personality!\nFind your special cat through 12 questions 🐱",
    startTest: "Start Test",
    timeInfo: "⏱️ Takes about 3 minutes",
    shareInfo: "📱 Shareable results",
    
    // Progress
    progress: "Progress",
    
    // Loading
    finding: "Finding your cat...",
    
    // Results
    yourCat: "Your inner cat is",
    personality: "Personality Traits",
    compatible: "Compatible Cat Friend",
    compatibleDesc: "You understand each other well",
    shareResult: "Share Result 📤",
    retakeTest: "Take Test Again",
    otherCats: "Curious about other cat personalities?",
    
    // Footer
    forFun: "Just for fun personality test 🐾",
    
    // Share
    shareText: "I'm a {result}! Take the test too!",
    copied: "Result copied to clipboard!"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "ko";
  });

  const toggleLanguage = () => {
    const newLang = language === "ko" ? "en" : "ko";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}