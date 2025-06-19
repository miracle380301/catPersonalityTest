import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="p-6 text-center">
      {/* Hero Image */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
          alt="Cute cats collection" 
          className="w-full h-48 object-cover rounded-2xl shadow-lg"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-2">나만 고양이 없어?</h1>
        <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--cat-peach)' }}>
          내 마음 속 고양이 찾기
        </h2>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          당신의 숨겨진 고양이 성향을 알아보세요!<br/>
          12개의 질문으로 당신만의 특별한 고양이를 찾아드려요 🐱
        </p>
        
        <Button 
          onClick={onStart}
          className="w-full font-semibold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 text-white"
          style={{
            background: 'linear-gradient(135deg, var(--cat-peach) 0%, var(--cat-coral) 100%)'
          }}
        >
          테스트 시작하기
        </Button>
        
        <div className="mt-6 flex justify-center space-x-4 text-xs text-gray-500">
          <span>⏱️ 약 3분 소요</span>
          <span>📱 결과 공유 가능</span>
        </div>
      </motion.div>
    </div>
  );
}
