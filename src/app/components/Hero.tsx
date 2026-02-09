import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { memo } from 'react';

export const Hero = memo(function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const goToContactPage = () => {
    navigate('/contact');
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#27292E] pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6">
      {/* Background image - optimized for mobile */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1762279389045-110301edeecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwbmV0d29ya3xlbnwxfHx8fDE3NzAyMjM2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          aria-hidden="true"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#27292E]/80 via-[#27292E]/70 to-[#27292E]" aria-hidden="true" />
      </div>

      {/* Animated background glow - hidden on mobile for performance */}
      <motion.div
        className="absolute inset-0 opacity-30 hidden md:block"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(54, 191, 227, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(48, 115, 179, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(54, 191, 227, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      {/* Floating orbs - optimized for performance */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full bg-[#3073B3]/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-[#36BFE3]/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#36BFE3]/30 mb-6 sm:mb-8"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#36BFE3]" />
          <span className="text-[#7BC3D1] text-xs sm:text-sm tracking-wide">{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4"
        >
          {t('hero.title1')}
          <br />
          <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
            {t('hero.title2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.button
            onClick={goToContactPage}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(54, 191, 227, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{t('hero.cta1')}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#36BFE3]/50 text-white font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-[#36BFE3]/10 transition-all"
            whileHover={{ scale: 1.05, borderColor: '#36BFE3' }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta2')}
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4"
        >
          {[
            { number: t('hero.stat1Number'), label: t('hero.stat1Label') },
            { number: t('hero.stat2Number'), label: t('hero.stat2Label') },
            { number: t('hero.stat3Number'), label: t('hero.stat3Label') },
            { number: t('hero.stat4Number'), label: t('hero.stat4Label') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});