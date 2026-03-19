import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="IT Infrastructure"
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              {t('hero.subtitle')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {t('hero.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-lg"
              >
                {t('hero.explore')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/2290196279621?text=Hello,%20I%20need%20your%20IT%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-blue-600 text-base font-medium rounded-lg text-white bg-blue-600/20 hover:bg-blue-600 transition-colors"
              >
                {t('hero.whatsapp')}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t('hero.trusted')}</p>
                  <p className="text-sm text-slate-400">{t('hero.trustedDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t('hero.fast')}</p>
                  <p className="text-sm text-slate-400">{t('hero.fastDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Wrench className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t('hero.expert')}</p>
                  <p className="text-sm text-slate-400">{t('hero.expertDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://image2url.com/r2/default/images/1773839188629-b4f56155-64c1-4f4b-ba05-c50cc125fac1.jpg" 
              alt="HBM Informatique Services" 
              loading="lazy"
              className="relative max-w-[400px] w-full rounded-2xl shadow-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
