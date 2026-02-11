import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, CheckCircle, ShoppingCart, BarChart, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMobileDevice } from '../hooks/useReducedMotion';
import { memo } from 'react';
import { FlipCard } from '../components/FlipCard';
import heroVideo from '../../assets/HeroVideo.mp4';
import omarImage from '../../assets/Omar.jpeg';
import RamziImage from '../../assets/Ramzi.png';
import cpPowderVideo from '../../assets/CPPowderCoating.mp4';
import barbershopLogo from '../../assets/jannoun_3.png';

export const HomePage = memo(function HomePage() {
  const { t } = useLanguage();
  const isMobile = useMobileDevice();
  
  return (
    <div className="bg-[#27292E]">
      {/* Hero Section - optimized for mobile */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background with video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover object-[50%_40%] scale-100 opacity-95"

            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#27292E]/50 via-[#27292E]/80 to-[#27292E]" />
        </div>

        {/* Animated background elements - hidden on mobile */}
        <motion.div
          className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#3073B3]/20 rounded-full blur-3xl hidden md:block"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#36BFE3]/20 rounded-full blur-3xl hidden md:block"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 sm:px-6 py-2 rounded-full bg-[#3073B3]/20 border border-[#36BFE3]/30 mb-6 sm:mb-8"
              // initial={{ opacity: 0, scale: 0.8 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ delay: 0.2 }}
            >
              <span className="text-[#36BFE3] text-xs sm:text-sm font-medium">{t('hero.badge')}</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              {t('hero.title1')}
              <br />
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('hero.title2')}
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/70 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              {t('hero.slogan')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link to="/contact#contact-form" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-medium text-base sm:text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(54, 191, 227, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t('home.ctaButton')}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-[#36BFE3]/50 hover:border-[#36BFE3] hover:bg-[#36BFE3]/10 text-white font-medium text-base sm:text-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta2')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview - optimized */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#3073B3]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              {t('home.servicesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                icon: Code,
                title: t('home.service1Title'),
                description: t('home.service1Desc'),
              },
              {
                icon: Smartphone,
                title: t('home.service2Title'),
                description: t('home.service2Desc'),
              },
              {
                icon: ShoppingCart,
                title: t('home.service3Title'),
                description: t('home.service3Desc'),
              },
              {
                icon: Palette,
                title: t('home.service4Title'),
                description: t('home.service4Desc'),
              },
              {
                icon: Search,
                title: t('home.service5Title'),
                description: t('home.service5Desc'),
              },
              {
                icon: BarChart,
                title: t('home.service6Title'),
                description: t('home.service6Desc'),
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-6 sm:p-7 md:p-8 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 relative overflow-hidden group cursor-pointer transition-all"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, margin: "-50px" }}
                // transition={{ delay: isMobile ? 0 : index * 0.05, duration: isMobile ? 0.3 : 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#3073B3]/5 rounded-full blur-2xl group-hover:bg-[#36BFE3]/10 transition-all" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-2.5 sm:p-3 mb-4 sm:mb-6 shadow-lg shadow-[#36BFE3]/30">
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
          >
            <Link to="/services">
              <motion.button
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#36BFE3]/50 hover:border-[#36BFE3] hover:bg-[#36BFE3]/10 text-white font-medium inline-flex items-center gap-2 transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
              >
                {t('home.exploreServices')}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] to-[#1f2125] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#3073B3]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#36BFE3]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
          >
            <motion.div
              className="inline-block px-5 py-2 rounded-full bg-[#3073B3]/10 border border-[#36BFE3]/20 mb-6"
              // initial={{ opacity: 0, scale: 0.8 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true }}
              // transition={{ delay: 0.2 }}
            >
              <span className="text-[#36BFE3] text-sm font-medium tracking-wide">{t('projectsPage.partnershipsBadge')}</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('projectsPage.sponsorshipTitle')}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('projectsPage.sponsorshipSubtitle')}
            </p>
          </motion.div>

          {/* Sponsor Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                name: 'Omar Alieh',
                service: t('projectsPage.sponsor1Service'),
                description: t('projectsPage.sponsor1Desc'),
                image: omarImage,
                instagram: 'omar_alieh',
              },
              {
                name: 'Barbershop Principale',
                service: t('projectsPage.sponsor2Service'),
                description: t('projectsPage.sponsor2Desc'),
                image: barbershopLogo,
                instagram: 'jannoun_barber',
              },
              {
                name: 'Yassine Akkabi',
                service: t('projectsPage.sponsor3Service'),
                description: t('projectsPage.sponsor3Desc'),
                image: 'https://images.unsplash.com/photo-1718778449026-fc05939d7650?w=800&q=80',
              },
              {
                name: 'CP Powder Coating',
                service: t('projectsPage.sponsor4Service'),
                description: t('projectsPage.sponsor4Desc'),
                video: cpPowderVideo,
                instagram: 'cppowdercoating',
              },
              {
                name: 'Ramzi Kerouicha',
                service: t('projectsPage.sponsor5Service'),
                description: t('projectsPage.sponsor5Desc'),
                image: RamziImage,
                instagram: 'ramzi_kerouicha_',
              },
            ].map((sponsor, index) => (
            <FlipCard
              key={sponsor.name}
              name={sponsor.name}
              service={sponsor.service}
              description={sponsor.description}
              image={sponsor.image}
              video={sponsor.video ?? undefined}
              instagram={sponsor.instagram}
              index={index}
              isMobile={isMobile}
            />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] to-[#1f2125] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#36BFE3]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              // initial={{ opacity: 0, x: -30 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('home.whyTitle')}
                <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent"> {t('home.whyHighlight')}</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {t('home.whyDesc')}
              </p>

              <div className="space-y-6">
                {[
                  t('home.whyPoint2'),
                  t('home.whyPoint3'),
                  t('home.whyPoint4'),
                  t('home.whyPoint5'),
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    className="flex items-start gap-4"
                    // initial={{ opacity: 0, x: -20 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ delay: isMobile ? 0 : index * 0.05, duration: isMobile ? 0.2 : 0.3 }}
                  >
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-[#36BFE3]" />
                    </div>
                    <p className="text-white/80 text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/about">
                <motion.button
                  className="mt-10 px-8 py-3 rounded-full border border-[#36BFE3]/50 hover:border-[#36BFE3] hover:bg-[#36BFE3]/10 text-white font-medium inline-flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  {t('home.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3073B3]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-white/70 text-xl mb-10 leading-relaxed">
              {t('home.ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-medium text-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(54, 191, 227, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t('home.ctaButton')}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  className="px-10 py-4 rounded-full border-2 border-[#36BFE3]/50 hover:border-[#36BFE3] hover:bg-[#36BFE3]/10 text-white font-medium text-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('home.viewServices')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});