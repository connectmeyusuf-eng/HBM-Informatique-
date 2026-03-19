import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Gallery from '../components/Gallery';
import VideoShowcase from '../components/VideoShowcase';
import Testimonials from '../components/Testimonials';
import CallbackForm from '../components/CallbackForm';

export default function Home() {
  const { t } = useTranslation();
  const siteUrl = "https://ais-pre-2yfx42lzh74iljtdmp3xx7-150601437327.europe-west2.run.app";

  return (
    <main>
      <Helmet>
        <title>HBM Informatique | Expert IT Services & Solutions in Cotonou, Benin</title>
        <meta name="description" content="Reliable IT solutions in Cotonou. We specialize in computer repair, CCTV installation, network cabling, and server maintenance. Led by CEO M. Marius Kounma." />
        <meta name="keywords" content="IT Services Benin, Computer Repair Cotonou, CCTV Installation Benin, Network Cabling Cotonou, HBM Informatique, Marius Kounma" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="HBM Informatique | Expert IT Services in Cotonou" />
        <meta property="og:description" content="Professional IT solutions, computer repair, and security systems in Benin. Quality service guaranteed." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content="HBM Informatique | Expert IT Services in Cotonou" />
        <meta property="twitter:description" content="Professional IT solutions, computer repair, and security systems in Benin. Quality service guaranteed." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80" />
      </Helmet>

      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('home.coreServices')}</h2>
              <p className="text-lg text-slate-600">
                {t('home.coreDesc')}
              </p>
            </div>
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {t('home.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <ServicesGrid limit={6} />
        </div>
      </section>

      <VideoShowcase />
      <Gallery />

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.supportTitle')}</h2>
              <p className="text-xl text-blue-100 mb-10">
                {t('home.supportDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+2290141745959"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center"
                >
                  {t('home.call')} (+229) 01 41 74 59 59
                </a>
                <a 
                  href="https://wa.me/2290196279621?text=Hello,%20I%20need%20urgent%20IT%20support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors text-center"
                >
                  {t('home.whatsappUs')}
                </a>
              </div>
            </div>
            <div className="lg:pl-12">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
