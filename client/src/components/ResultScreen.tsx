import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CatType, catTypes } from "@/data/catTypes";

interface ResultScreenProps {
  result: CatType;
  onRestart: () => void;
  onShare: () => void;
}

export default function ResultScreen({ result, onRestart, onShare }: ResultScreenProps) {
  const otherCatTypes = catTypes.filter(cat => cat.id !== result.id).slice(0, 3);

  return (
    <div className="p-6">
      {/* Result Card */}
      <motion.div 
        className="rounded-2xl shadow-lg p-6 mb-6"
        style={{
          background: 'linear-gradient(135deg, var(--cat-cream) 0%, white 100%)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">당신의 내면 고양이는</h2>
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--cat-peach)' }}>
            {result.name}
          </h1>
          
          {/* Cat result image */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={result.imageUrl}
              alt={result.name}
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
            />
          </motion.div>
        </div>
        
        {/* Personality Description */}
        <motion.div 
          className="bg-white rounded-xl p-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">성격 특징</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {result.description}
          </p>
          
          {/* Traits */}
          <div className="flex flex-wrap gap-2">
            {result.traits.map((trait, index) => (
              <motion.span
                key={trait}
                className="px-3 py-1 text-gray-700 text-xs rounded-full"
                style={{ backgroundColor: `var(--cat-${['mint', 'pink', 'beige', 'cream'][index % 4]})` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Compatibility */}
        <motion.div 
          className="bg-white rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">잘 맞는 고양이 친구</h3>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">😺</span>
            <div>
              <p className="font-medium text-gray-800">{result.compatible}</p>
              <p className="text-xs text-gray-600">서로의 성격을 잘 이해해줘요</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Action Buttons */}
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button 
          onClick={onShare}
          className="w-full font-semibold py-4 px-6 rounded-2xl shadow-lg text-white"
          style={{
            background: 'linear-gradient(135deg, var(--cat-peach) 0%, var(--cat-coral) 100%)'
          }}
        >
          결과 공유하기 📤
        </Button>
        
        <Button 
          onClick={onRestart}
          className="w-full font-semibold py-4 px-6 rounded-2xl border-2 bg-white hover:bg-gray-50"
          style={{
            color: 'var(--cat-peach)',
            borderColor: 'var(--cat-peach)'
          }}
        >
          다시 테스트하기
        </Button>
      </motion.div>
      
      {/* Other Cat Types Preview */}
      <motion.div 
        className="mt-8 p-4 bg-gray-50 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">
          다른 고양이 성격들도 궁금하다면?
        </h4>
        <div className="grid grid-cols-3 gap-3 text-center">
          {otherCatTypes.map((catType, index) => (
            <motion.div
              key={catType.id}
              className="bg-white p-2 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <span className="text-lg">{catType.emoji}</span>
              <p className="text-xs text-gray-600 mt-1">{catType.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
