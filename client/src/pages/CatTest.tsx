import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionScreen from "@/components/QuestionScreen";
import LoadingScreen from "@/components/LoadingScreen";
import ResultScreen from "@/components/ResultScreen";
import { questions } from "@/data/questions";
import { calculateCatType, CatType } from "@/data/catTypes";

type Screen = 'welcome' | 'question' | 'loading' | 'result';

export default function CatTest() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<CatType | null>(null);

  const handleStartTest = () => {
    setCurrentScreen('question');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    // Auto-advance after a short delay for visual feedback
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Show loading and calculate results
        setCurrentScreen('loading');
        
        // Calculate result after loading delay
        setTimeout(() => {
          const catResult = calculateCatType(newAnswers);
          setResult(catResult);
          setCurrentScreen('result');
        }, 2000);
      }
    }, 500);
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const handleShare = () => {
    if (!result) return;
    
    const shareText = `나는 ${result.name}래요! 당신도 테스트해보세요!`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: '나만 고양이 없어? 내 마음 속 고양이 찾기',
        text: shareText,
        url: shareUrl
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      // You could add a toast notification here
      alert('결과가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, var(--cat-cream) 0%, white 50%, var(--cat-pink) 100%)'
        }}
      />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentScreen === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WelcomeScreen onStart={handleStartTest} />
            </motion.div>
          )}
          
          {currentScreen === 'question' && (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionScreen
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                selectedAnswer={answers[currentQuestion]}
              />
            </motion.div>
          )}
          
          {currentScreen === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <LoadingScreen />
            </motion.div>
          )}
          
          {currentScreen === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ResultScreen
                result={result}
                onRestart={handleRestart}
                onShare={handleShare}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <div className="p-6 text-center text-xs text-gray-500 relative z-10">
        <p>재미로 즐기는 심리테스트예요 🐾</p>
      </div>
    </div>
  );
}
