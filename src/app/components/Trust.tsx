import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Trust() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('trust.testimonial1Name'),
      role: t('trust.testimonial1Role'),
      content: t('trust.testimonial1'),
      rating: 5,
    },
    {
      name: t('trust.testimonial2Name'),
      role: t('trust.testimonial2Role'),
      content: t('trust.testimonial2'),
      rating: 5,
    },
    {
      name: t('trust.testimonial3Name'),
      role: t('trust.testimonial3Role'),
      content: t('trust.testimonial3'),
      rating: 5,
    },
  ];

  const clients = [
    'TechStart',
    'GrowthLabs',
    'FinanceFlow',
    'CloudSphere',
    'DataPulse',
    'InnovateX',
  ];

  const stats = [
    { value: t('trust.stat1'), label: t('trust.stat1Label') },
    { value: t('trust.stat2'), label: t('trust.stat2Label') },
    { value: t('trust.stat3'), label: t('trust.stat3Label') },
    { value: t('trust.stat4'), label: t('trust.stat4Label') },
  ];

  return (
    <section id="trust" className="py-32 bg-gradient-to-b from-[#27292E] to-[#1f2125] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats section */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t('trust.title')}{' '}
            <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent">
              {t('trust.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16">
            {t('trust.subtitle')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, scale: 0.9 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                // transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-[#27292E]/80 backdrop-blur-xl border border-[#36BFE3]/20 rounded-2xl p-8 group-hover:border-[#36BFE3]/60 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              // transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              
              <div className="relative bg-[#27292E]/90 backdrop-blur-xl border border-[#36BFE3]/20 rounded-2xl p-8 h-full group-hover:border-[#36BFE3]/60 transition-all duration-300">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[#36BFE3]/50" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#36BFE3] text-[#36BFE3]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-[#7BC3D1] text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-wider mb-8">
            {t('trust.clientsLabel')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, scale: 0.8 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                // transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-white/30 font-bold text-2xl tracking-wider hover:text-[#36BFE3] transition-colors cursor-pointer"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}