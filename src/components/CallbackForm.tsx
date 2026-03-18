import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CallbackForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [touched, setTouched] = useState({ name: false, phone: false });

  const validatePhone = (phone: string) => /^\+?[0-9\s\-()]{8,20}$/.test(phone);

  const validateField = (field: 'name' | 'phone', value: string) => {
    let error = '';
    if (value.trim() === '') {
      error = t('errors.required');
    } else if (field === 'phone' && !validatePhone(value)) {
      error = t('errors.phone');
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field: 'name' | 'phone') => {
    setTouched({ ...touched, [field]: true });
    validateField(field, formData[field]);
  };

  const handleChange = (field: 'name' | 'phone', value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const isFormValid = formData.name.trim() !== '' && validatePhone(formData.phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    const text = `Hello, I would like to request a callback.%0AMy name is: ${formData.name}%0AMy phone number is: ${formData.phone}`;
    window.open(`https://wa.me/22941745959?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-50 p-3 rounded-full">
          <PhoneCall className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{t('callback.title')}</h3>
          <p className="text-sm text-slate-600">{t('callback.desc')}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder={t('contact.formName')}
            className={`w-full px-4 py-3 rounded-xl border ${errors.name && touched.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900`}
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
          />
          {errors.name && touched.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder={t('contact.formPhone')}
            className={`w-full px-4 py-3 rounded-xl border ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900`}
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
          />
          {errors.phone && touched.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('callback.submit')}
        </button>
      </form>
    </div>
  );
}
