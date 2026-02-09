import { motion, AnimatePresence } from 'motion/react';
import { Search, Lightbulb, Code, Rocket, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Process() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('process.step1Title'),
      description: t('process.step1Desc'),
      color: 'from-[#3073B3] to-[#36BFE3]',
      expandedContent: [
        t('process.step1Detail1'),
        t('process.step1Detail2'),
        t('process.step1Detail3'),
        t('process.step1Detail4'),
        t('process.step1Detail5'),
      ],
    },
    {
      icon: Lightbulb,
      title: t('process.step2Title'),
      description: t('process.step2Desc'),
      color: 'from-[#36BFE3] to-[#7BC3D1]',
      expandedContent: [
        t('process.step2Detail1'),
        t('process.step2Detail2'),
        t('process.step2Detail3'),
        t('process.step2Detail4'),
        t('process.step2Detail5'),
      ],
    },
    {
      icon: Code,
      title: t('process.step3Title'),
      description: t('process.step3Desc'),
      color: 'from-[#7BC3D1] to-[#3073B3]',
      expandedContent: [
        t('process.step3Detail1'),
        t('process.step3Detail2'),
        t('process.step3Detail3'),
        t('process.step3Detail4'),
        t('process.step3Detail5'),
      ],
    },
    {
      icon: Rocket,
      title: t('process.step4Title'),
      description: t('process.step4Desc'),
      color: 'from-[#3073B3] to-[#36BFE3]',
      expandedContent: [
        t('process.step4Detail1'),
        t('process.step4Detail2'),
        t('process.step4Detail3'),
        t('process.step4Detail4'),
        t('process.step4Detail5'),
      ],
    },
  ];

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section id="process" className="py-32 bg-gradient-to-b from-[#1f2125] to-[#27292E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t('process.title')} <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#36BFE3]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step number with glow */}
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#3073B3] to-[#36BFE3] flex items-center justify-center font-bold text-white text-lg z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    boxShadow: '0 0 30px rgba(54, 191, 227, 0.6)',
                  }}
                >
                  {index + 1}
                </motion.div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative pt-10 group"
                >
                  {/* Glowing border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  
                  <div className="relative bg-[#27292E]/90 backdrop-blur-xl border border-[#36BFE3]/20 rounded-2xl p-8 h-full group-hover:border-[#36BFE3]/60 transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-[2px]`}>
                        <div className="w-full h-full rounded-xl bg-[#27292E] flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-[#36BFE3]" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <motion.div
                      className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </motion.div>

                    {/* Expandable content */}
                    <div className="mt-4">
                      <button
                        className="flex items-center text-[#36BFE3] font-semibold"
                        onClick={() => toggleStep(index)}
                      >
                        {expandedStep === index ? t('process.hideDetails') : t('process.showDetails')}
                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${expandedStep === index ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedStep === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2"
                          >
                            <ul className="list-disc list-inside text-white/60 leading-relaxed">
                              {step.expandedContent.map((content, i) => (
                                <li key={i}>{content}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}