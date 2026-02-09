import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#27292E] to-[#1f2125] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#3073B3]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#36BFE3]/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('contact.title')} <span className="bg-gradient-to-r from-[#3073B3] to-[#36BFE3] bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto px-4">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Glowing border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3073B3] to-[#36BFE3] rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
            
            <div className="relative bg-[#1f2125]/90 backdrop-blur-xl border border-[#36BFE3]/30 rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-[#27292E]/50 border border-[#36BFE3]/20 rounded-xl text-white placeholder-white/40 focus:border-[#36BFE3] focus:outline-none focus:ring-2 focus:ring-[#36BFE3]/30 transition-all backdrop-blur-sm"
                    placeholder="John Doe"
                    required
                    style={{
                      boxShadow: '0 0 0 0 rgba(54, 191, 227, 0)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(54, 191, 227, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(54, 191, 227, 0)';
                    }}
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-[#27292E]/50 border border-[#36BFE3]/20 rounded-xl text-white placeholder-white/40 focus:border-[#36BFE3] focus:outline-none focus:ring-2 focus:ring-[#36BFE3]/30 transition-all backdrop-blur-sm"
                    placeholder="john@company.com"
                    required
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(54, 191, 227, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(54, 191, 227, 0)';
                    }}
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                    Project Details
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 bg-[#27292E]/50 border border-[#36BFE3]/20 rounded-xl text-white placeholder-white/40 focus:border-[#36BFE3] focus:outline-none focus:ring-2 focus:ring-[#36BFE3]/30 transition-all resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project..."
                    required
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(54, 191, 227, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(54, 191, 227, 0)';
                    }}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-semibold text-lg flex items-center justify-center gap-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(54, 191, 227, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Get in Touch
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Have a project in mind? Whether you need a new website, mobile app, or complete digital transformation, 
                we're here to help bring your vision to life.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'contact@madebysynapse.com',
                  link: 'mailto:contact@madebysynapse.com',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Montréal, Québec',
                  link: 'https://maps.google.com/?q=Montreal,Quebec',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                  onClick={() => item.link && window.open(item.link)}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3073B3]/20 to-[#36BFE3]/20 flex items-center justify-center group-hover:from-[#3073B3]/40 group-hover:to-[#36BFE3]/40 transition-all">
                    <item.icon className="w-6 h-6 text-[#36BFE3]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">{item.title}</div>
                    <div className="text-white font-medium text-lg group-hover:text-[#36BFE3] transition-colors">
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links placeholder */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/60 mb-4">Follow us</p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((social, index) => (
                  <motion.button
                    key={index}
                    className="w-12 h-12 rounded-lg bg-white/5 border border-[#36BFE3]/20 flex items-center justify-center hover:bg-[#36BFE3]/10 hover:border-[#36BFE3] transition-all text-white/60 hover:text-[#36BFE3] text-xs"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.slice(0, 2)}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}