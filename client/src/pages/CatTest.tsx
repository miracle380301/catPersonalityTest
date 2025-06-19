import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionScreen from "@/components/QuestionScreen";
import LoadingScreen from "@/components/LoadingScreen";
import ResultScreen from "@/components/ResultScreen";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { questions } from "@/data/questions";
import { questionsEn } from "@/data/questionsEn";
import { calculateCatType, CatType } from "@/data/catTypes";
import { useLanguage } from "@/contexts/LanguageContext";

type Screen = 'welcome' | 'question' | 'loading' | 'result';

export default function CatTest() {
  const { language, t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<CatType | null>(null);
  
  const currentQuestions = language === "ko" ? questions : questionsEn;

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
      if (currentQuestion < currentQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Show loading and calculate results
        setCurrentScreen('loading');
        
        // Calculate result after loading delay
        setTimeout(() => {
          const catResult = calculateCatType(newAnswers, language);
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
    
    const shareText = t('shareText').replace('{result}', result.name);
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: t('title'),
        text: shareText,
        url: shareUrl
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert(t('copied'));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 min-h-screen shadow-xl relative overflow-hidden">
      <ThemeToggle />
      <LanguageToggle />
      
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
                question={currentQuestions[currentQuestion]}
                currentQuestion={currentQuestion}
                totalQuestions={currentQuestions.length}
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
      <div className="p-6 text-center text-xs text-gray-500 dark:text-gray-400 relative z-10">
        <p>{t('forFun')}</p>
      </div>
    </div>
  );
}
