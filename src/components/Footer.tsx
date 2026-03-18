import { Link } from 'react-router-dom';
import { MonitorSmartphone, MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MonitorSmartphone className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl text-white">HBM Informatique</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              "Entrepreneur à succès et exemple de réussite"
            </p>
            <p className="text-sm text-slate-400">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t('servicesGrid.title1')}</li>
              <li>{t('servicesGrid.title2')}</li>
              <li>{t('servicesGrid.title3')}</li>
              <li>{t('servicesGrid.title4')}</li>
              <li>{t('servicesGrid.title7')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Cotonou, Benin</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+22941745959" className="hover:text-white transition-colors">+229 41 74 59 59</a>
                  <a href="tel:+22986279621" className="hover:text-white transition-colors">+229 86 27 96 21</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:mk656790@gmail.com" className="hover:text-white transition-colors">mk656790@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} HBM Informatique. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
