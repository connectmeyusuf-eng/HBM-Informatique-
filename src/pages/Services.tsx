import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ServicesGrid from '../components/ServicesGrid';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CallbackForm from '../components/CallbackForm';

export default function Services() {
  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>{t('services.title')} | HBM Informatique</title>
        <meta name="description" content="Explore our full range of IT services including computer installation, printer repair, CCTV, and network cabling in Cotonou." />
      </Helmet>

      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t('services.title')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </section>

      <Pricing />
      <FAQ />

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('services.customTitle')}</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('services.customDesc')}
          </p>
          <div className="max-w-md mx-auto text-left">
            <CallbackForm />
          </div>
        </div>
      </section>
    </main>
  );
}
