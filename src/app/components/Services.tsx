import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Smartphone, Globe, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { memo } from 'react';

export const Services = memo(function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Code2,
      title: t('services.service1Title'),
      description: t('services.service1Desc'),
    },
    {
      icon: Smartphone,
      title: t('services.service2Title'),
      description: t('services.service2Desc'),
    },
    {
      icon: Palette,
      title: t('services.service3Title'),
      description: t('services.service3Desc'),
    },
    {
      icon: Rocket,
      title: t('services.service4Title'),
      description: t('services.service4Desc'),
    },
    {
      icon: Globe,
      title: t('services.service5Title'),
      description: t('services.service5Desc'),
    },
    {
      icon: Zap,
      title: t('services.service6Title'),
      description: t('services.service6Desc'),
    },
  ];

  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#27292E] to-[#1f2125] overflow-hidden">
      {/* Background effects - optimized for mobile */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-[#3073B3]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#36BFE3]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
            {t('services.title')} <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-white/70 max-w-2xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" aria-hidden="true" />
              
              <div className="relative bg-[#27292E]/80 backdrop-blur-xl border border-[#36BFE3]/20 rounded-2xl p-6 sm:p-7 md:p-8 h-full hover:border-[#36BFE3]/50 transition-all duration-300">{/* Icon container with glow */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3073B3] to-[#36BFE3] rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity" aria-hidden="true" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect arrow */}
                <motion.div
                  className="mt-4 sm:mt-6 text-[#36BFE3] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-medium">{t('services.learnMore')} →</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});