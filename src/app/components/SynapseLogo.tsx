import { motion } from 'motion/react';

interface SynapseLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export function SynapseLogo({ size = 'md', animated = true, className = '' }: SynapseLogoProps) {
  const sizes = {
    sm: { container: 'w-16 h-16', text: 'text-lg', glow: 'w-20 h-20' },
    md: { container: 'w-24 h-24', text: 'text-3xl', glow: 'w-28 h-28' },
    lg: { container: 'w-28 h-28', text: 'text-4xl', glow: 'w-32 h-32' },
    xl: { container: 'w-36 h-36', text: 'text-5xl', glow: 'w-40 h-40' },
  };

  const sizeClasses = sizes[size];

  const LogoContent = () => (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glowing background effect */}
      <motion.div
        className={`absolute ${sizeClasses.glow} rounded-full bg-gradient-to-br from-[#3073B3]/40 to-[#36BFE3]/40 blur-2xl`}
        animate={animated ? {
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        } : {}}
        transition={animated ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
      />

      {/* Outer glow ring */}
      <motion.div
        className={`absolute ${sizeClasses.glow} rounded-full bg-[#36BFE3]/20 blur-xl`}
        animate={animated ? {
          scale: [1.1, 1.3, 1.1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={animated ? {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        } : {}}
      />

      {/* Logo circle with gradient border */}
      <div className={`relative ${sizeClasses.container} rounded-full bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-[2px] shadow-2xl shadow-[#36BFE3]/60`}>
        {/* Inner dark circle */}
        <div className="w-full h-full rounded-full bg-[#27292E] flex items-center justify-center relative overflow-hidden">
          {/* Inner subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3]/10 to-transparent rounded-full" />
          
          {/* The S letter */}
          <motion.span
            className={`relative z-10 text-[#36BFE3] font-bold ${sizeClasses.text} drop-shadow-lg`}
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 20px rgba(54, 191, 227, 0.6)'
            }}
            animate={animated ? {
              textShadow: [
                '0 0 20px rgba(54, 191, 227, 0.6)',
                '0 0 30px rgba(54, 191, 227, 0.8)',
                '0 0 20px rgba(54, 191, 227, 0.6)'
              ]
            } : {}}
            transition={animated ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            } : {}}
          >
            S
          </motion.span>
        </div>
      </div>
    </div>
  );

  return <LogoContent />;
}
