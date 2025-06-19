import { motion } from "framer-motion";
import { Question } from "@/data/questions";

interface QuestionScreenProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

export default function QuestionScreen({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer,
  selectedAnswer 
}: QuestionScreenProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="p-6">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">진행도</span>
          <span className="text-sm font-medium" style={{ color: 'var(--cat-peach)' }}>
            {currentQuestion + 1}/{totalQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div 
            className="h-3 rounded-full transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, var(--cat-peach) 0%, var(--cat-coral) 100%)',
              width: `${progress}%`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-start mt-2">
          <motion.span 
            className="text-lg"
            animate={{ x: `${progress * 0.9}%` }}
            transition={{ duration: 0.5 }}
          >
            🐾
          </motion.span>
        </div>
      </div>
      
      {/* Question Card */}
      <motion.div 
        className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {question.text}
        </h3>
        
        {/* Answer Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedAnswer === option.value
                  ? 'border-cat-peach bg-cat-cream'
                  : 'border-gray-200 hover:border-cat-peach hover:bg-cat-cream'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <span 
                  className={`w-6 h-6 rounded-full border-2 mr-3 flex-shrink-0 transition-all duration-200 ${
                    selectedAnswer === option.value
                      ? 'bg-cat-peach border-cat-peach'
                      : 'border-gray-300'
                  }`}
                />
                <span className="text-gray-700">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
