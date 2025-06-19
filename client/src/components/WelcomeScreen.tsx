import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t } = useLanguage();
  
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
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t('title')}</h1>
        <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--cat-peach)' }}>
          {t('subtitle')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 leading-relaxed whitespace-pre-line">
          {t('description')}
        </p>
        
        <Button 
          onClick={onStart}
          className="w-full font-semibold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 text-white"
          style={{
            background: 'linear-gradient(135deg, var(--cat-peach) 0%, var(--cat-coral) 100%)'
          }}
        >
          {t('startTest')}
        </Button>
        
        <div className="mt-6 flex justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
          <span>{t('timeInfo')}</span>
          <span>{t('shareInfo')}</span>
        </div>
      </motion.div>
    </div>
  );
}
