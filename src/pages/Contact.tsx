import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CallbackForm from '../components/CallbackForm';

export default function Contact() {
  const { t } = useTranslation();
  const siteUrl = "https://ais-pre-2yfx42lzh74iljtdmp3xx7-150601437327.europe-west2.run.app/contact";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({ name: '', phone: '', message: '' });
  const [touched, setTouched] = useState({ name: false, phone: false, message: false });

  const validatePhone = (phone: string) => /^\+?[0-9\s\-()]{8,20}$/.test(phone);

  const validateField = (field: 'name' | 'phone' | 'message', value: string) => {
    let error = '';
    if (value.trim() === '') {
      error = t('errors.required');
    } else if (field === 'phone' && !validatePhone(value)) {
      error = t('errors.phone');
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field: 'name' | 'phone' | 'message') => {
    setTouched({ ...touched, [field]: true });
    validateField(field, formData[field]);
  };

  const handleChange = (field: 'name' | 'phone' | 'message', value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const isFormValid = formData.name.trim() !== '' && validatePhone(formData.phone) && formData.message.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    // Format message for WhatsApp
    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/2290196279621?text=${text}`, '_blank');
  };

  return (
    <main>
      <Helmet>
        <title>{t('contact.title')} | HBM Informatique - Get in Touch</title>
        <meta name="description" content="Contact HBM Informatique for reliable IT support in Cotonou. Call us at (+229) 01 41 74 59 59 or visit our office for expert assistance." />
        <meta name="keywords" content="Contact HBM Informatique, IT Support Cotonou, Computer Repair Help, Tech Support Benin" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Contact Us | HBM Informatique" />
        <meta property="og:description" content="Need IT support? Reach out to HBM Informatique today for professional solutions." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&h=630&q=80" />
      </Helmet>

      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('contact.getInTouch')}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.phone')}</h3>
                    <p className="text-slate-600"><a href="tel:+2290196279621" className="hover:text-blue-600">(+229) 01 96 27 96 21</a></p>
                    <p className="text-slate-600"><a href="tel:+2290141745959" className="hover:text-blue-600">(+229) 01 41 74 59 59</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.email')}</h3>
                    <p className="text-slate-600"><a href="mailto:m46567961@gmail.com" className="hover:text-blue-600">m46567961@gmail.com</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.location')}</h3>
                    <p className="text-slate-600">Cotonou, Benin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.hours')}</h3>
                    <p className="text-slate-600">{t('contact.hoursDesc')}</p>
                    <p className="text-slate-600">{t('contact.sunday')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <CallbackForm />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.sendMessage')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name && touched.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-all outline-none`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                  />
                  {errors.name && touched.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.formPhone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-all outline-none`}
                    placeholder="+229 XX XX XX XX"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                  />
                  {errors.phone && touched.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message && touched.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-all outline-none resize-none`}
                    placeholder={t('contact.formPlaceholder')}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                  ></textarea>
                  {errors.message && touched.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {t('contact.formSubmit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
