import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('about.value1Title'),
      description: t('about.value1Desc'),
    },
    {
      icon: Users,
      title: t('about.value2Title'),
      description: t('about.value2Desc'),
    },
    {
      icon: Award,
      title: t('about.value3Title'),
      description: t('about.value3Desc'),
    },
    {
      icon: TrendingUp,
      title: t('about.value4Title'),
      description: t('about.value4Desc'),
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#27292E] relative overflow-hidden">
      {/* Animated background accent */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20"
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#3073B3]/30 border-dashed" />
        <div className="absolute inset-8 rounded-full border-2 border-[#36BFE3]/30 border-dashed" />
        <div className="absolute inset-16 rounded-full border-2 border-[#7BC3D1]/30 border-dashed" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-[#3073B3]/10 border border-[#3073B3]/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#36BFE3] text-sm font-medium tracking-wide">{t('about.badge')}</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {t('about.title1')}{' '}
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('about.title2')}
              </span>
            </h2>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {t('about.desc1')}
            </p>

            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              {t('about.desc2')}
            </p>

            <div className="flex flex-wrap gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-[#36BFE3]/20 text-white/80 text-sm backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: '#36BFE3',
                    boxShadow: '0 0 20px rgba(54, 191, 227, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right column - Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                <div className="relative bg-[#1f2125] border border-[#36BFE3]/20 rounded-2xl p-6 h-full backdrop-blur-sm group-hover:border-[#36BFE3]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3073B3]/20 to-[#36BFE3]/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#36BFE3]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}