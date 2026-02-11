import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMobileDevice } from '../hooks/useReducedMotion';

export function ProjectsPage() {
  const { t } = useLanguage();
  const isMobile = useMobileDevice();
  const [filter, setFilter] = useState(t('projectsPage.categoryAll'));

  const categories = [
    t('projectsPage.categoryAll'),
    t('projectsPage.categoryWeb'),
    t('projectsPage.categoryMobile'),
    t('projectsPage.categoryBranding'),
    t('projectsPage.categoryEcommerce'),
  ];

  const projects = [
    {
      title: t('projectsPage.project1Title'),
      category: t('projectsPage.project1Category'),
      description: t('projectsPage.project1Desc'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'TypeScript', 'D3.js'],
      results: t('projectsPage.project1Result'),
    },
    {
      title: t('projectsPage.project2Title'),
      category: t('projectsPage.project2Category'),
      description: t('projectsPage.project2Desc'),
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      results: t('projectsPage.project2Result'),
    },
    {
      title: t('projectsPage.project3Title'),
      category: t('projectsPage.project3Category'),
      description: t('projectsPage.project3Desc'),
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      tags: ['React Native', 'Firebase', 'HealthKit'],
      results: t('projectsPage.project3Result'),
    },
    {
      title: t('projectsPage.project4Title'),
      category: t('projectsPage.project4Category'),
      description: t('projectsPage.project4Desc'),
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
      tags: ['Brand Identity', 'Design System', 'Guidelines'],
      results: t('projectsPage.project4Result'),
    },
    {
      title: t('projectsPage.project5Title'),
      category: t('projectsPage.project5Category'),
      description: t('projectsPage.project5Desc'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      tags: ['Vue.js', 'Node.js', 'MongoDB'],
      results: t('projectsPage.project5Result'),
    },
    {
      title: t('projectsPage.project6Title'),
      category: t('projectsPage.project6Category'),
      description: t('projectsPage.project6Desc'),
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      tags: ['Flutter', 'Google Maps', 'Payment Gateway'],
      results: t('projectsPage.project6Result'),
    },
    {
      title: t('projectsPage.project7Title'),
      category: t('projectsPage.project7Category'),
      description: t('projectsPage.project7Desc'),
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tags: ['Shopify', 'AR Integration', 'AI Recommendations'],
      results: t('projectsPage.project7Result'),
    },
    {
      title: t('projectsPage.project8Title'),
      category: t('projectsPage.project8Category'),
      description: t('projectsPage.project8Desc'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['UI/UX', 'Design System', 'Prototyping'],
      results: t('projectsPage.project8Result'),
    },
    {
      title: t('projectsPage.project9Title'),
      category: t('projectsPage.project9Category'),
      description: t('projectsPage.project9Desc'),
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      tags: ['React', 'AWS', 'Video Streaming'],
      results: t('projectsPage.project9Result'),
    },
  ];

  const filteredProjects = filter === t('projectsPage.categoryAll')
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { number: t('projectsPage.stat1Number'), label: t('projectsPage.stat1Label') },
    { number: t('projectsPage.stat2Number'), label: t('projectsPage.stat2Label') },
    { number: t('projectsPage.stat3Number'), label: t('projectsPage.stat3Label') },
    { number: t('projectsPage.stat4Number'), label: t('projectsPage.stat4Label') },
  ];

  return (
    <div className="bg-[#27292E] pt-20">
      {/* Hero Section */}
      <section id="projects-hero" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3073B3]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#36BFE3]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            // initial={{ opacity: 0, y: 30 }}
            // animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-block px-6 py-2 rounded-full bg-[#3073B3]/20 border border-[#36BFE3]/30 mb-6"
              // initial={{ opacity: 0, scale: 0.8 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ delay: 0.2 }}
            >
              <span className="text-[#36BFE3] text-sm font-medium">{t('projectsPage.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('projectsPage.title1')}
              <br />
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('projectsPage.title2')}
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('projectsPage.subtitle')}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white shadow-lg shadow-[#36BFE3]/30'
                    : 'bg-[#2a2d33] text-white/70 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl overflow-hidden border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 cursor-pointer transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : index * 0.05, duration: isMobile ? 0.2 : 0.3 }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#27292E] via-[#27292E]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] flex items-center justify-center shadow-lg shadow-[#36BFE3]/50"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-[#36BFE3] px-3 py-1 rounded-full bg-[#36BFE3]/10 border border-[#36BFE3]/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#36BFE3] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('projectsPage.ctaTitle')}
            </h2>
            <p className="text-white/70 text-xl mb-10 leading-relaxed">
              {t('projectsPage.ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-medium text-lg relative overflow-hidden group inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(54, 191, 227, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t('projectsPage.ctaButton1')}</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
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
                  {t('projectsPage.ctaButton2')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}