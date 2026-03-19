import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.plan1Name'),
      price: t('pricing.plan1Price'),
      description: t('pricing.plan1Desc'),
      features: [
        t('pricing.plan1Feat1'),
        t('pricing.plan1Feat2'),
        t('pricing.plan1Feat3'),
        t('pricing.plan1Feat4'),
        t('pricing.plan1Feat5')
      ]
    },
    {
      name: t('pricing.plan2Name'),
      price: t('pricing.plan2Price'),
      description: t('pricing.plan2Desc'),
      features: [
        t('pricing.plan2Feat1'),
        t('pricing.plan2Feat2'),
        t('pricing.plan2Feat3'),
        t('pricing.plan2Feat4'),
        t('pricing.plan2Feat5')
      ],
      popular: true
    },
    {
      name: t('pricing.plan3Name'),
      price: t('pricing.plan3Price'),
      description: t('pricing.plan3Desc'),
      features: [
        t('pricing.plan3Feat1'),
        t('pricing.plan3Feat2'),
        t('pricing.plan3Feat3'),
        t('pricing.plan3Feat4'),
        t('pricing.plan3Feat5')
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-slate-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular ? 'border-blue-600 shadow-xl shadow-blue-900/5' : 'border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  {t('pricing.mostRequested')}
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="text-2xl font-extrabold text-blue-600">{plan.price}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2290196279621?text=Hello,%20I%20would%20like%20a%20quote%20for%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {t('pricing.requestQuote')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
