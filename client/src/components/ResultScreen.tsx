import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CatType, catTypes } from "@/data/catTypes";
import { catTypesEn } from "@/data/catTypesEn";
import { useLanguage } from "@/contexts/LanguageContext";

interface ResultScreenProps {
  result: CatType;
  onRestart: () => void;
  onShare: () => void;
}

export default function ResultScreen({ result, onRestart, onShare }: ResultScreenProps) {
  const { t, language } = useLanguage();
  const currentCatTypes = language === "ko" ? catTypes : catTypesEn;
  const otherCatTypes = currentCatTypes.filter(cat => cat.id !== result.id).slice(0, 3);

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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t('yourCat')}</h2>
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
          className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{t('personality')}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {result.description}
          </p>
          
          {/* Traits */}
          <div className="flex flex-wrap gap-2">
            {result.traits.map((trait, index) => (
              <motion.span
                key={trait}
                className="px-3 py-1 text-gray-700 dark:text-gray-800 text-xs rounded-full"
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
          className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{t('compatible')}</h3>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">😺</span>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">{result.compatible}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{t('compatibleDesc')}</p>
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
          {t('shareResult')}
        </Button>
        
        <Button 
          onClick={onRestart}
          className="w-full font-semibold py-4 px-6 rounded-2xl border-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          style={{
            color: 'var(--cat-peach)',
            borderColor: 'var(--cat-peach)'
          }}
        >
          {t('retakeTest')}
        </Button>
      </motion.div>
      
      {/* Other Cat Types Preview */}
      <motion.div 
        className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
          {t('otherCats')}
        </h4>
        <div className="grid grid-cols-3 gap-3 text-center">
          {otherCatTypes.map((catType, index) => (
            <motion.div
              key={catType.id}
              className="bg-white dark:bg-gray-700 p-2 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <span className="text-lg">{catType.emoji}</span>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{catType.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
