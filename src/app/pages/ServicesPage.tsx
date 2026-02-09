import { motion } from 'motion/react';
import { Code, Smartphone, Palette, TrendingUp, ShoppingCart, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function ServicesPage() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Code,
      title: t('servicesPage.webDevTitle'),
      desc: t('servicesPage.webDevDesc'),
      features: [
        t('servicesPage.webDevFeature1'),
        t('servicesPage.webDevFeature2'),
        t('servicesPage.webDevFeature3'),
        t('servicesPage.webDevFeature4'),
        t('servicesPage.webDevFeature5'),
        t('servicesPage.webDevFeature6'),
      ]
    },
    {
      icon: Smartphone,
      title: t('servicesPage.mobileTitle'),
      desc: t('servicesPage.mobileDesc'),
      features: [
        t('servicesPage.mobileFeature1'),
        t('servicesPage.mobileFeature2'),
        t('servicesPage.mobileFeature3'),
        t('servicesPage.mobileFeature4'),
        t('servicesPage.mobileFeature5'),
        t('servicesPage.mobileFeature6'),
      ]
    },
    {
      icon: Palette,
      title: t('servicesPage.brandingTitle'),
      desc: t('servicesPage.brandingDesc'),
      features: [
        t('servicesPage.brandingFeature1'),
        t('servicesPage.brandingFeature2'),
        t('servicesPage.brandingFeature3'),
        t('servicesPage.brandingFeature4'),
        t('servicesPage.brandingFeature5'),
        t('servicesPage.brandingFeature6'),
      ]
    },
    {
      icon: ShoppingCart,
      title: t('servicesPage.ecommerceTitle'),
      desc: t('servicesPage.ecommerceDesc'),
      features: [
        t('servicesPage.ecommerceFeature1'),
        t('servicesPage.ecommerceFeature2'),
        t('servicesPage.ecommerceFeature3'),
        t('servicesPage.ecommerceFeature4'),
        t('servicesPage.ecommerceFeature5'),
        t('servicesPage.ecommerceFeature6'),
      ]
    },
    {
      icon: Search,
      title: t('servicesPage.seoTitle'),
      desc: t('servicesPage.seoDesc'),
      features: [
        t('servicesPage.seoFeature1'),
        t('servicesPage.seoFeature2'),
        t('servicesPage.seoFeature3'),
        t('servicesPage.seoFeature4'),
        t('servicesPage.seoFeature5'),
        t('servicesPage.seoFeature6'),
      ]
    },
    {
      icon: TrendingUp,
      title: t('servicesPage.strategyTitle'),
      desc: t('servicesPage.strategyDesc'),
      features: [
        t('servicesPage.strategyFeature1'),
        t('servicesPage.strategyFeature2'),
        t('servicesPage.strategyFeature3'),
        t('servicesPage.strategyFeature4'),
        t('servicesPage.strategyFeature5'),
        t('servicesPage.strategyFeature6'),
      ]
    },
  ];
  
  return (
    <div className="bg-[#27292E]">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1b1f] via-[#27292E] to-[#27292E]" />
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#3073B3]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-[#36BFE3]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3073B3]/10 to-[#36BFE3]/10 border border-[#36BFE3]/20 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#36BFE3] animate-pulse" />
              <span className="text-[#36BFE3] text-sm font-semibold tracking-wide">{t('servicesPage.badge')}</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('servicesPage.title1')}
              <br />
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('servicesPage.title2')}
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('servicesPage.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gradient-to-br from-[#2a2d33]/80 to-[#25272c]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#36BFE3]/10 hover:border-[#36BFE3]/40 transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient orb background */}
                <motion.div 
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#3073B3]/20 to-[#36BFE3]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#36BFE3]/0 via-[#36BFE3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-3.5 mb-6 shadow-2xl shadow-[#36BFE3]/30"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 20px 40px rgba(54, 191, 227, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#36BFE3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#36BFE3]/20 to-transparent mb-6" />
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.08) + (idx * 0.05) }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#36BFE3] flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] via-[#1f2125] to-[#27292E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#3073B3]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#36BFE3]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('servicesPage.processTitle')}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('servicesPage.processSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                number: t('servicesPage.process1Number'),
                title: t('servicesPage.process1Title'),
                desc: t('servicesPage.process1Desc'),
              },
              {
                number: t('servicesPage.process2Number'),
                title: t('servicesPage.process2Title'),
                desc: t('servicesPage.process2Desc'),
              },
              {
                number: t('servicesPage.process3Number'),
                title: t('servicesPage.process3Title'),
                desc: t('servicesPage.process3Desc'),
              },
              {
                number: t('servicesPage.process4Number'),
                title: t('servicesPage.process4Title'),
                desc: t('servicesPage.process4Desc'),
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Connecting line (hidden on mobile and last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[#36BFE3]/30 to-transparent" />
                )}
                
                <motion.div
                  className="bg-gradient-to-br from-[#2a2d33]/80 to-[#25272c]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#36BFE3]/10 hover:border-[#36BFE3]/40 transition-all duration-500 h-full relative overflow-hidden group"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36BFE3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Number badge */}
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3073B3] to-[#36BFE3] flex items-center justify-center mb-6 shadow-2xl shadow-[#36BFE3]/30"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <span className="text-white text-xl font-bold">{step.number}</span>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {t('servicesPage.processCTA')}
            </p>
            <Link to="/contact#contact-form">
              <motion.button
                className="group px-10 py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-semibold text-lg shadow-2xl shadow-[#36BFE3]/30 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('servicesPage.processCTAButton')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#27292E] to-[#1a1b1f] relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#36BFE3]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('servicesPage.ctaTitle')}
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              {t('servicesPage.ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#contact-form">
                <motion.button
                  className="group px-10 py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-semibold text-lg shadow-2xl shadow-[#36BFE3]/30 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    {t('servicesPage.ctaButton1')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}