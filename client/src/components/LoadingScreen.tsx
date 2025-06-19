import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LoadingScreen() {
  const { t } = useLanguage();
  
  return (
    <div className="p-6 text-center">
      <div className="py-20">
        {/* Animated cat loading */}
        <motion.div 
          className="mb-8"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-6xl">🐱</div>
        </motion.div>
        
        <motion.h3 
          className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t('finding')}
        </motion.h3>
        
        <div className="w-32 h-2 bg-gray-200 rounded-full mx-auto">
          <motion.div 
            className="h-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--cat-peach) 0%, var(--cat-coral) 100%)'
            }}
            animate={{ 
              width: ["0%", "100%", "0%"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
}
