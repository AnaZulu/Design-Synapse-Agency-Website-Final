import { motion } from 'motion/react';
import { Target, Lightbulb, Camera, Search, Server, FileCheck, DollarSign, Users, Code, TrendingUp, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#27292E] pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3073B3]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#36BFE3]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-block px-6 py-2 rounded-full bg-[#3073B3]/20 border border-[#36BFE3]/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#36BFE3] text-sm font-medium">{t('aboutPage.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('aboutPage.title1')}
              <br />
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('aboutPage.title2')}
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('aboutPage.subtitle')}
            </p>

            {/* Tagline */}
            <motion.div
              className="max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl font-bold text-[#36BFE3] mb-2">
                {t('aboutPage.tagline')}
              </p>
              <p className="text-white/60">
                {t('aboutPage.taglineDesc')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { number: t('aboutPage.stat1'), label: t('aboutPage.stat1Label') },
              { number: t('aboutPage.stat2'), label: t('aboutPage.stat2Label') },
              { number: t('aboutPage.stat3'), label: t('aboutPage.stat3Label') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-8 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 text-center transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-white/60 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] to-[#1f2125]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="border-2 border-[#36BFE3]/40 rounded-3xl p-10 md:p-12 bg-gradient-to-br from-[#2a2d33]/50 to-[#27292E]/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              {t('aboutPage.storyVisionTitle')}
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed text-center">
              <p>{t('aboutPage.storyVisionP1')}</p>
              <p>{t('aboutPage.storyVisionP2')}</p>
              <p className="text-white/80 font-medium">{t('aboutPage.storyVisionP3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-3xl p-10 border border-[#36BFE3]/10 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#3073B3]/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-4 mb-6 shadow-lg shadow-[#36BFE3]/30">
                  <Target className="w-full h-full text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">{t('aboutPage.missionTitle')}</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  {t('aboutPage.missionDesc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-3xl p-10 border border-[#36BFE3]/10 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#36BFE3]/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-4 mb-6 shadow-lg shadow-[#36BFE3]/30">
                  <Lightbulb className="w-full h-full text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">{t('aboutPage.philosophyTitle')}</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  {t('aboutPage.philosophyDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] to-[#1f2125]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('aboutPage.experienceTitle')}
            </h2>
          </motion.div>

          {/* Professional Note */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#3073B3]/10 to-[#36BFE3]/10 border border-[#36BFE3]/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3073B3] to-[#36BFE3] flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('aboutPage.noteTitle')}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {t('aboutPage.noteDesc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: t('aboutPage.exp1Title'),
                description: t('aboutPage.exp1Desc'),
              },
              {
                icon: TrendingUp,
                title: t('aboutPage.exp2Title'),
                description: t('aboutPage.exp2Desc'),
              },
              {
                icon: Users,
                title: t('aboutPage.exp3Title'),
                description: t('aboutPage.exp3Desc'),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-8 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 relative overflow-hidden group transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3073B3]/5 rounded-full blur-2xl group-hover:bg-[#36BFE3]/10 transition-all" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-3 mb-6 shadow-lg shadow-[#36BFE3]/30">
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('aboutPage.whatWeDoTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Globe,
                title: t('aboutPage.whatWeDo1Title'),
                description: t('aboutPage.whatWeDo1Desc'),
              },
              {
                icon: CheckCircle,
                title: t('aboutPage.whatWeDo2Title'),
                description: t('aboutPage.whatWeDo2Desc'),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-10 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 relative overflow-hidden group transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#3073B3]/5 rounded-full blur-2xl group-hover:bg-[#36BFE3]/10 transition-all" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-4 mb-6 shadow-lg shadow-[#36BFE3]/30">
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - The Synapse Advantage */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] to-[#1f2125]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('aboutPage.whyChooseTitle')}
            </h2>
            <p className="text-[#36BFE3] text-2xl font-semibold">
              {t('aboutPage.whyChooseSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: t('aboutPage.advantage1Title'),
                description: t('aboutPage.advantage1Desc'),
              },
              {
                icon: Search,
                title: t('aboutPage.advantage2Title'),
                description: t('aboutPage.advantage2Desc'),
              },
              {
                icon: Server,
                title: t('aboutPage.advantage3Title'),
                description: t('aboutPage.advantage3Desc'),
              },
              {
                icon: FileCheck,
                title: t('aboutPage.advantage4Title'),
                description: t('aboutPage.advantage4Desc'),
              },
              {
                icon: DollarSign,
                title: t('aboutPage.advantage5Title'),
                description: t('aboutPage.advantage5Desc'),
              },
              {
                icon: Users,
                title: t('aboutPage.advantage6Title'),
                description: t('aboutPage.advantage6Desc'),
              },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-8 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 relative overflow-hidden group transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3073B3]/5 rounded-full blur-2xl group-hover:bg-[#36BFE3]/10 transition-all" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-3 mb-6 shadow-lg shadow-[#36BFE3]/30">
                    <advantage.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-white/60 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1f2125] to-[#27292E]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('aboutPage.ctaTitle')}
            </h2>
            <p className="text-white/70 text-xl mb-10 leading-relaxed">
              {t('aboutPage.ctaSubtitle')}
            </p>

            <Link to="/contact#contact-form">
              <motion.button
                className="px-10 py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-medium text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(54, 191, 227, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('aboutPage.ctaButton')}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}