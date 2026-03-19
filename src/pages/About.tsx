import { Helmet } from 'react-helmet-async';
import { Award, Target, Users, ShieldCheck, Zap, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const siteUrl = "https://ais-pre-2yfx42lzh74iljtdmp3xx7-150601437327.europe-west2.run.app/about";

  return (
    <main>
      <Helmet>
        <title>{t('about.title')} | HBM Informatique - Our Story & Mission</title>
        <meta name="description" content="Learn about HBM Informatique, led by CEO M. Marius Kounma. Discover our mission to provide top-tier IT services and computer solutions in Cotonou, Benin." />
        <meta name="keywords" content="About HBM Informatique, Marius Kounma, IT Company Benin, Cotonou IT Experts" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="About HBM Informatique | Our Story & Mission" />
        <meta property="og:description" content="Discover the team and mission behind Cotonou's leading IT service provider." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&h=630&q=80" />
      </Helmet>

      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t('about.title')}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('about.storyTitle')}</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {t('about.story1')}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('about.story2')}
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t('about.ceoTitle')}</h3>
                <p className="text-blue-800 italic">
                  {t('about.ceoQuote')}
                </p>
                <p className="mt-4 font-semibold text-blue-900">{t('about.ceoName')}</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                  alt="IT Professionals working" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl text-white">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">10+</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t('about.exp')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('about.missionTitle')}</h3>
              <p className="text-slate-600">
                {t('about.missionDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('about.teamTitle')}</h3>
              <p className="text-slate-600">
                {t('about.teamDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('about.valuesTitle')}</h3>
              <p className="text-slate-600">
                {t('about.valuesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">{t('about.trustTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.trustReliability')}</h3>
              <p className="text-slate-600 max-w-xs">{t('about.trustReliabilityDesc')}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.trustSpeed')}</h3>
              <p className="text-slate-600 max-w-xs">{t('about.trustSpeedDesc')}</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('about.trustAffordability')}</h3>
              <p className="text-slate-600 max-w-xs">{t('about.trustAffordabilityDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
