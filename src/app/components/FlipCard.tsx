import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FlipCardProps {
  name: string;
  service: string;
  description: string;
  image?: string;
  video?: string;
  instagram?: string;
  index: number;
  isMobile: boolean;
}

export function FlipCard({
  name,
  service,
  description,
  image,
  video,
  instagram,
  index,
  isMobile
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      className="relative h-[450px] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: isMobile ? 0 : index * 0.1, duration: 0.5 }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a2d33] to-[#27292E] border border-[#36BFE3]/20 shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Image or Video */}
          <div className="relative h-full overflow-hidden">
            {video ? (
              <video
                src={video}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <motion.img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#27292E] via-[#27292E]/80 to-transparent" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#3073B3]/80 backdrop-blur-sm border border-[#36BFE3]/30 text-[#36BFE3] text-xs font-semibold tracking-wide">
                  {t('projectsPage.supportingSynapse')}
                </span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {name}
              </h3>
              <p className="text-[#36BFE3] text-sm md:text-base font-medium mb-3">
                {service}
              </p>
              
              {/* Click to flip indicator */}
              <motion.div
                className="flex items-center gap-2 text-white/60 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>{t('projectsPage.clickToLearnMore')}</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  ↻
                </motion.div>
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3]/0 via-[#36BFE3]/10 to-[#7BC3D1]/0 opacity-50" />
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a2d33] to-[#1f2125] border border-[#36BFE3]/40 shadow-xl p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Header */}
          <div className="mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3073B3] to-[#36BFE3] flex items-center justify-center mb-3 shadow-lg shadow-[#36BFE3]/30">
              <span className="text-white text-xl font-bold">{name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-[#36BFE3]/80 text-sm font-medium">{service}</p>
          </div>

          {/* Divider */}
          <div className="h-[2px] bg-gradient-to-r from-[#36BFE3]/0 via-[#36BFE3]/50 to-[#36BFE3]/0 mb-4" />

          {/* Description */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#36BFE3]/20 scrollbar-track-transparent">
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Instagram Handle */}
          {instagram && (
            <div className="mt-4 pt-4 border-t border-[#36BFE3]/20">
              <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-white/80 hover:text-[#36BFE3] transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium group-hover:underline">@{instagram}</span>
              </a>
            </div>
          )}

          {/* Click to flip back indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 text-white/40 text-xs mt-4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>{t('projectsPage.clickToFlipBack')}</span>
          </motion.div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#36BFE3]/10 to-transparent rounded-bl-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}