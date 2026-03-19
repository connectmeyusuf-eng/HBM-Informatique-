import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ServicesGrid from '../components/ServicesGrid';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CallbackForm from '../components/CallbackForm';

export default function Services() {
  const { t } = useTranslation();
  const siteUrl = "https://ais-pre-2yfx42lzh74iljtdmp3xx7-150601437327.europe-west2.run.app/services";

  return (
    <main>
      <Helmet>
        <title>{t('services.title')} | HBM Informatique - Professional IT Solutions</title>
        <meta name="description" content="Explore our comprehensive IT services in Cotonou. From computer repair and networking to CCTV security and server maintenance, we have you covered." />
        <meta name="keywords" content="IT Services Cotonou, Computer Repair Benin, CCTV Installation, Network Solutions, Server Maintenance" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Our IT Services | HBM Informatique" />
        <meta property="og:description" content="Professional IT solutions tailored to your needs. Quality service in Cotonou, Benin." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&h=630&q=80" />
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
