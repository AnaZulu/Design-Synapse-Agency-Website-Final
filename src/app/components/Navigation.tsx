import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import logoImage from '../../assets/23f9a1f51976f71ae94470cf7be0a2d73f773848.png';

export const Navigation = memo(function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#27292E]/95 backdrop-blur-xl shadow-xl shadow-[#3073B3]/5 border-b border-[#36BFE3]/10' : 'bg-[#27292E]/40 backdrop-blur-md'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="Synapse home page">
              <motion.div
                className="flex items-center gap-2 sm:gap-3 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Glow effect behind logo */}
                <div className="absolute left-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3073B3] to-[#36BFE3] rounded-full blur-xl opacity-60 animate-pulse" aria-hidden="true" />
                
                <img src={logoImage} alt="Synapse Logo" className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg sm:text-xl tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>SYNAPSE</span>
                  <span className="text-[#36BFE3] text-[10px] sm:text-xs tracking-wider opacity-70">{t('nav.tagline')}</span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8" role="menubar">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.services'), path: '/services' },
                { name: t('nav.contact'), path: '/contact' },
              ].map((item) => (
                <Link key={item.path} to={item.path} role="menuitem" aria-current={isActive(item.path) ? 'page' : undefined}>
                  <motion.div
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive(item.path) ? 'text-[#36BFE3]' : 'text-white/70 hover:text-white'
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#3073B3] to-[#36BFE3] transition-all duration-300 ${
                        isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      aria-hidden="true"
                    />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-[#2a2d33]/40 rounded-full p-0.5 border border-[#36BFE3]/10" role="group" aria-label="Language selection">
                <motion.button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white shadow-lg shadow-[#36BFE3]/20'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Switch to English"
                  aria-pressed={language === 'en'}
                >
                  EN
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    language === 'fr'
                      ? 'bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white shadow-lg shadow-[#36BFE3]/20'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Passer au français"
                  aria-pressed={language === 'fr'}
                >
                  FR
                </motion.button>
              </div>

              <Link to="/contact">
                <motion.button
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white text-sm font-semibold relative overflow-hidden group shadow-lg shadow-[#36BFE3]/20"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(54, 191, 227, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label={language === 'en' ? 'Start a new project' : 'Démarrer un nouveau projet'}
                >
                  <span className="relative z-10">{language === 'en' ? 'Start Project' : 'Démarrer'}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#2a2d33]/40 border border-[#36BFE3]/10 text-white"
                whileTap={{ scale: 0.95 }}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-[60px] right-0 bottom-0 w-full sm:w-80 bg-[#27292E]/98 backdrop-blur-xl border-l border-[#36BFE3]/10 z-40 lg:hidden"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full p-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 mb-auto" role="menu" aria-label="Mobile menu items">{[
                  { name: t('nav.home'), path: '/' },
                  { name: t('nav.about'), path: '/about' },
                  { name: t('nav.services'), path: '/services' },
                  { name: t('nav.contact'), path: '/contact' },
                ].map((item, index) => (
                  <Link key={item.path} to={item.path} role="menuitem" aria-current={isActive(item.path) ? 'page' : undefined}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="relative group"
                    >
                      <span className={`text-base font-medium transition-all block pb-2 ${
                        isActive(item.path)
                          ? 'text-[#36BFE3]'
                          : 'text-white/60 hover:text-white'
                      }`}>
                        {item.name}
                      </span>
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="mobile-active-nav"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3073B3] to-[#36BFE3]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          aria-hidden="true"
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}

                {/* Start Project Button */}
                <Link to="/contact">
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.48 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white text-sm font-semibold shadow-lg shadow-[#36BFE3]/20 hover:shadow-xl hover:shadow-[#36BFE3]/30 transition-shadow mt-2"
                    whileTap={{ scale: 0.97 }}
                    aria-label={language === 'en' ? 'Start a new project' : 'Démarrer un nouveau projet'}
                  >
                    {language === 'en' ? 'Start Project' : 'Démarrer Projet'}
                  </motion.button>
                </Link>
              </nav>

              {/* Bottom section with Language Switcher */}
              <div className="mt-auto pt-8 border-t border-[#36BFE3]/10">
                {/* Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                  role="group"
                  aria-label="Language selection"
                >
                  <span className="text-white/40 text-xs mr-2">Language:</span>
                  <motion.button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      language === 'en'
                        ? 'bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white shadow-md shadow-[#36BFE3]/20'
                        : 'bg-[#2a2d33]/40 text-white/40 hover:text-white/70 border border-[#36BFE3]/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Switch to English"
                    aria-pressed={language === 'en'}
                  >
                    EN
                  </motion.button>
                  <motion.button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      language === 'fr'
                        ? 'bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white shadow-md shadow-[#36BFE3]/20'
                        : 'bg-[#2a2d33]/40 text-white/40 hover:text-white/70 border border-[#36BFE3]/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Passer au français"
                    aria-pressed={language === 'fr'}
                  >
                    FR
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
});