import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Jean-Paul D.',
      role: t('testimonials.role1'),
      content: t('testimonials.content1'),
      rating: 5
    },
    {
      name: 'Amina S.',
      role: t('testimonials.role2'),
      content: t('testimonials.content2'),
      rating: 5
    },
    {
      name: 'Koffi T.',
      role: t('testimonials.role3'),
      content: t('testimonials.content3'),
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-slate-600">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
