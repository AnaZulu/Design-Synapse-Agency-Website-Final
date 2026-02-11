import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    title: 'FinanceHub Pro',
    category: 'Fintech Platform',
    description: 'Modern financial management dashboard with real-time analytics and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMjIzMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'ShopSphere',
    category: 'E-Commerce',
    description: 'Full-featured online marketplace with seamless checkout and inventory management.',
    image: 'https://images.unsplash.com/photo-1760226642567-a5315592c810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAyMTg4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'TaskMaster',
    category: 'SaaS Platform',
    description: 'Enterprise project management tool with team collaboration and workflow automation.',
    image: 'https://images.unsplash.com/photo-1768293336571-c48f8765a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwc29mdHdhcmUlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMTQwNjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue', 'Python', 'PostgreSQL'],
  },
  {
    title: 'HealthTrack',
    category: 'Mobile App',
    description: 'Cross-platform health and wellness app with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMjE2NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'MetricsFlow',
    category: 'Analytics Dashboard',
    description: 'Business intelligence platform with customizable reports and data visualization.',
    image: 'https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDE3ODI2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'D3.js', 'MongoDB'],
  },
  {
    title: 'AdVantage',
    category: 'Marketing Platform',
    description: 'Digital marketing automation suite with multi-channel campaign management.',
    image: 'https://images.unsplash.com/photo-1762330464824-21e95b769038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwcGxhdGZvcm18ZW58MXx8fHwxNzcwMTQ0OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Angular', 'GraphQL', 'AWS'],
  },
];

const clients = [
  { name: 'TechCorp', industry: 'Technology' },
  { name: 'FinanceHub', industry: 'Finance' },
  { name: 'HealthPlus', industry: 'Healthcare' },
  { name: 'RetailMax', industry: 'Retail' },
  { name: 'EduLearn', industry: 'Education' },
  { name: 'MediaStream', industry: 'Media' },
  { name: 'AutoDrive', industry: 'Automotive' },
  { name: 'FoodMart', industry: 'Food & Beverage' },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-16 sm:py-32 bg-[#27292E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#36BFE3]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#3073B3]/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t('portfolio.title')} <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover="hover"
              className="group relative"
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-[#1f2125] rounded-2xl overflow-hidden border border-[#36BFE3]/20 group-hover:border-[#36BFE3]/60 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2125] via-[#1f2125]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3073B3] to-[#36BFE3] flex items-center justify-center"
                      style={{
                        boxShadow: '0 0 30px rgba(54, 191, 227, 0.8)',
                      }}
                    >
                      <ExternalLink className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[#36BFE3] text-sm font-medium mb-2 tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-[#3073B3]/20 text-[#7BC3D1] text-xs border border-[#3073B3]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 rounded-full border-2 border-[#36BFE3]/50 text-white font-semibold text-lg backdrop-blur-sm hover:bg-[#36BFE3]/10 transition-all"
            whileHover={{ scale: 1.05, borderColor: '#36BFE3' }}
            whileTap={{ scale: 0.95 }}
          >
            {t('portfolio.viewAll')}
          </motion.button>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 sm:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {t('portfolio.clientsTitle')} <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent">{t('portfolio.clientsTitleHighlight')}</span>
            </h3>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto px-4">
              {t('portfolio.clientsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3]/30 to-[#36BFE3]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                
                <div className="relative bg-gradient-to-br from-[#2a2d33] to-[#1f2125] rounded-xl p-6 sm:p-8 border border-[#36BFE3]/10 group-hover:border-[#36BFE3]/40 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  {/* Client Name */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#36BFE3] transition-colors duration-300">
                    {client.name}
                  </h4>
                  {/* Industry Tag */}
                  <span className="text-xs sm:text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
                    {client.industry}
                  </span>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-[#36BFE3]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}