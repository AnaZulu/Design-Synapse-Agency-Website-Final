import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Web3Forms Access Key - Get your free key at https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Check if the access key has been configured
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setSubmitError(
        'Contact form is not configured yet. Please get your free access key from https://web3forms.com and add it to the ContactPage.tsx file (line 26).'
      );
      setIsSubmitting(false);
      
      // For demo purposes, show success message after 2 seconds
      console.log('Form data that would be sent:', formData);
      setTimeout(() => {
        setSubmitError(null);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            service: '',
            budget: '',
            message: '',
          });
        }, 5000);
      }, 2000);
      return;
    }

    try {
      // Prepare form data for Web3Forms
      const formPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        service: formData.service,
        budget: formData.budget || 'Not specified',
        message: formData.message,
        subject: `New Contact Form Submission from ${formData.name}`,
        // Optional: Add redirect URL after successful submission
        // redirect: 'https://yourdomain.com/thank-you'
      };

      // Send to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            service: '',
            budget: '',
            message: '',
          });
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to submit form. Please try again or contact us directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Check if URL has hash
    const hash = window.location.hash;
    if (hash === '#faqs') {
      const faqSection = document.getElementById('faqs');
      if (faqSection) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else if (hash === '#contact-form') {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const faqs = [
    { question: t('contactPage.faqQ1'), answer: t('contactPage.faqA1') },
    { question: t('contactPage.faqQ2'), answer: t('contactPage.faqA2') },
    { question: t('contactPage.faqQ3'), answer: t('contactPage.faqA3') },
    { question: t('contactPage.faqQ4'), answer: t('contactPage.faqA4') },
    { question: t('contactPage.faqQ5'), answer: t('contactPage.faqA5') },
    { question: t('contactPage.faqQ6'), answer: t('contactPage.faqA6') },
    { question: t('contactPage.faqQ7'), answer: t('contactPage.faqA7') },
    { question: t('contactPage.faqQ8'), answer: t('contactPage.faqA8') },
    { question: t('contactPage.faqQ9'), answer: t('contactPage.faqA9') },
    { question: t('contactPage.faqQ10'), answer: t('contactPage.faqA10') },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('contactPage.emailTitle'),
      content: t('contactPage.emailContent'),
      description: t('contactPage.emailDescription'),
    },
    {
      icon: Phone,
      title: t('contactPage.phoneTitle'),
      content: t('contactPage.phoneContent'),
      description: t('contactPage.phoneDescription'),
    },
    {
      icon: MapPin,
      title: t('contactPage.locationTitle'),
      content: t('contactPage.locationContent'),
      description: t('contactPage.locationDescription'),
    },
  ];

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
              <span className="text-[#36BFE3] text-sm font-medium">{t('contactPage.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('contactPage.title1')}
              <br />
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('contactPage.title2')}
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('contactPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-3xl p-8 md:p-10 border border-[#36BFE3]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#3073B3]/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-2">{t('contactPage.formTitle')}</h2>
                  <p className="text-white/60 mb-8">{t('contactPage.formSubtitle')}</p>

                  {submitted ? (
                    <motion.div
                      className="py-20 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#36BFE3]/50">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{t('contactPage.formSuccessTitle')}</h3>
                      <p className="text-white/60">{t('contactPage.formSuccessSubtitle')}</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            {t('contactPage.formNameLabel')}
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white placeholder-white/40 focus:border-[#36BFE3]/50 focus:outline-none transition-colors"
                            placeholder={t('contactPage.formNamePlaceholder')}
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            {t('contactPage.formEmailLabel')}
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white placeholder-white/40 focus:border-[#36BFE3]/50 focus:outline-none transition-colors"
                            placeholder={t('contactPage.formEmailPlaceholder')}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            {t('contactPage.formCompanyLabel')}
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white placeholder-white/40 focus:border-[#36BFE3]/50 focus:outline-none transition-colors"
                            placeholder={t('contactPage.formCompanyPlaceholder')}
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            {t('contactPage.formPhoneLabel')}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white placeholder-white/40 focus:border-[#36BFE3]/50 focus:outline-none transition-colors"
                            placeholder={t('contactPage.formPhonePlaceholder')}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            {t('contactPage.formServiceLabel')}
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white focus:border-[#36BFE3]/50 focus:outline-none transition-colors"
                          >
                            <option value="">{t('contactPage.formServicePlaceholder')}</option>
                            <option value="web">{t('contactPage.formServiceWeb')}</option>
                            <option value="mobile">{t('contactPage.formServiceMobile')}</option>
                            <option value="branding">{t('contactPage.formServiceBranding')}</option>
                            <option value="strategy">{t('contactPage.formServiceStrategy')}</option>
                            <option value="ecommerce">{t('contactPage.formServiceEcommerce')}</option>
                            <option value="other">{t('contactPage.formServiceOther')}</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            {t('contactPage.formBudgetLabel')}
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white focus:border-[#36BFE3]/50 focus:outline-none transition-colors"
                          >
                            <option value="">{t('contactPage.formBudgetPlaceholder')}</option>
                            <option value="5k-10k">{t('contactPage.formBudget1')}</option>
                            <option value="10k-25k">{t('contactPage.formBudget2')}</option>
                            <option value="25k-50k">{t('contactPage.formBudget3')}</option>
                            <option value="50k+">{t('contactPage.formBudget4')}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/80 mb-2 text-sm font-medium">
                          {t('contactPage.formMessageLabel')}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl bg-[#27292E]/50 border border-[#36BFE3]/10 text-white placeholder-white/40 focus:border-[#36BFE3]/50 focus:outline-none transition-colors resize-none"
                          placeholder={t('contactPage.formMessagePlaceholder')}
                        />
                      </div>

                      {submitError && (
                        <div className="text-red-500 text-sm mb-4">
                          <AlertCircle className="w-5 h-5 inline-block mr-2" />
                          {submitError}
                        </div>
                      )}

                      <motion.button
                        type="submit"
                        className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#3073B3] to-[#36BFE3] text-white font-medium text-lg relative overflow-hidden group flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(54, 191, 227, 0.6)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">{t('contactPage.formSubmitButton')}</span>
                        <Send className="w-5 h-5 relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#36BFE3] to-[#3073B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-6 border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 relative overflow-hidden group cursor-pointer transition-all"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#3073B3]/5 rounded-full blur-2xl group-hover:bg-[#36BFE3]/10 transition-all" />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-3 shadow-lg shadow-[#36BFE3]/30 flex-shrink-0">
                        <item.icon className="w-full h-full text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                        <p className="text-[#36BFE3] font-medium mb-1">{item.content}</p>
                        <p className="text-white/60 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl p-8 border border-[#36BFE3]/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#36BFE3]/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3073B3] to-[#36BFE3] p-3 mb-6 shadow-lg shadow-[#36BFE3]/30">
                    <Clock className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{t('contactPage.hoursTitle')}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-white/70">
                      <span>{t('contactPage.hoursMonFri')}</span>
                      <span className="text-[#36BFE3] font-medium">{t('contactPage.hoursMonFriTime')}</span>
                    </div>
                    <div className="flex justify-between items-center text-white/70">
                      <span>{t('contactPage.hoursSat')}</span>
                      <span className="text-[#36BFE3] font-medium">{t('contactPage.hoursSatTime')}</span>
                    </div>
                    <div className="flex justify-between items-center text-white/70">
                      <span>{t('contactPage.hoursSun')}</span>
                      <span className="text-white/40">{t('contactPage.hoursSunTime')}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#36BFE3]/10">
                    <div className="flex items-center gap-3 text-white/70">
                      <MessageCircle className="w-5 h-5 text-[#36BFE3]" />
                      <span className="text-sm">{t('contactPage.hoursEmergency')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#27292E] to-[#1f2125]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-3xl h-96 border border-[#36BFE3]/10 overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Map placeholder - in a real app, you'd integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#36BFE3] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{t('contactPage.mapTitle')}</h3>
                <p className="text-white/60">{t('contactPage.mapSubtitle')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 px-6 bg-gradient-to-b from-[#1f2125] to-[#27292E] relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3073B3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#36BFE3]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block px-6 py-2 rounded-full bg-[#3073B3]/20 border border-[#36BFE3]/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#36BFE3] text-sm font-medium">{t('contactPage.faqBadge')}</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contactPage.faqTitle1')}{' '}
              <span className="bg-gradient-to-r from-[#3073B3] via-[#36BFE3] to-[#7BC3D1] bg-clip-text text-transparent">
                {t('contactPage.faqTitle2')}
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t('contactPage.faqSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#2a2d33] to-[#27292E] rounded-2xl border border-[#36BFE3]/10 hover:border-[#36BFE3]/30 overflow-hidden transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-white pr-8 group-hover:text-[#36BFE3] transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#36BFE3] flex-shrink-0" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}