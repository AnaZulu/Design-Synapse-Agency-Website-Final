import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoImage from '../../assets/23f9a1f51976f71ae94470cf7be0a2d73f773848.png';
import { memo } from 'react';

export const Footer = memo(function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-b from-[#1f2125] to-[#27292E] border-t border-[#36BFE3]/10" role="contentinfo" aria-label="Site footer">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#36BFE3]/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" aria-label="Synapse home page">
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <img src={logoImage} alt="Synapse Logo" className="w-18 h-18" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-3xl tracking-wide">SYNAPSE</span>
                  <span className="text-[#36BFE3] text-base tracking-wider opacity-80">{t('nav.tagline')}</span>
                </div>
              </motion.div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              {t('footer.companyDesc')}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-[#36BFE3]" aria-hidden="true" />
                <a href="mailto:contact@madebysynapse.com" className="hover:text-white transition-colors">
                  contact@madebysynapse.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#36BFE3]" aria-hidden="true" />
                <span>Montréal, Québec</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mb-6">
              <h3 className="text-white font-bold mb-4 tracking-wide text-sm">{t('footer.followUs')}</h3>
              <div className="flex items-center gap-3" role="list" aria-label="Social media links">
                {[
                  { icon: Linkedin, url: '#', label: 'LinkedIn' },
                  { icon: Instagram, url: '#', label: 'Instagram' },
                  { icon: Facebook, url: '#', label: 'Facebook' },
                  { icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  ), url: '#', label: 'TikTok' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3073B3]/10 to-[#36BFE3]/10 border border-[#36BFE3]/30 flex items-center justify-center text-[#36BFE3] hover:bg-gradient-to-br hover:from-[#3073B3] hover:to-[#36BFE3] hover:text-white hover:border-[#36BFE3] hover:shadow-lg hover:shadow-[#36BFE3]/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <p className="text-white/40 text-sm">
              {t('footer.copyrightText')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide">{t('footer.quickLinksTitle')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.quickLink2'), path: '/about' },
                { name: t('footer.quickLink1'), path: '/services' },
                { name: t('footer.quickLink5'), path: '/contact' },
                { name: t('footer.quickLink6'), path: '/contact#faqs' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <motion.div
                      className="text-white/60 hover:text-[#36BFE3] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-white font-bold mb-4 tracking-wide">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-3">
              {[
                t('footer.service1'),
                t('footer.service2'),
                t('footer.service3'),
                t('footer.service4'),
                t('footer.service5'),
                t('footer.service6'),
                t('footer.service7'),
                t('footer.service8'),
                t('footer.service9'),
                t('footer.service10'),
              ].map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <motion.div
                      className="text-white/60 hover:text-[#36BFE3] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {service}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <button className="hover:text-[#36BFE3] transition-colors">
              {t('footer.privacyPolicy')}
            </button>
            <button className="hover:text-[#36BFE3] transition-colors">
              {t('footer.termsOfService')}
            </button>
            <button className="hover:text-[#36BFE3] transition-colors">
              {t('footer.cookiePolicy')}
            </button>
          </div>

          <div className="text-white/40 text-sm">
            {t('footer.tagline')}
          </div>
        </div>
      </div>
    </footer>
  );
});
