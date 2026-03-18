import { Monitor, Printer, Camera, Network, Smartphone, ShoppingCart, Briefcase, Truck, Package, CreditCard, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ServicesGrid({ limit }: { limit?: number }) {
  const { t } = useTranslation();

  const services = [
    {
      title: t('servicesGrid.title1'),
      description: t('servicesGrid.desc1'),
      icon: Monitor,
      category: t('servicesGrid.catMain')
    },
    {
      title: t('servicesGrid.title2'),
      description: t('servicesGrid.desc2'),
      icon: Printer,
      category: t('servicesGrid.catMain')
    },
    {
      title: t('servicesGrid.title3'),
      description: t('servicesGrid.desc3'),
      icon: Camera,
      category: t('servicesGrid.catMain')
    },
    {
      title: t('servicesGrid.title4'),
      description: t('servicesGrid.desc4'),
      icon: Network,
      category: t('servicesGrid.catMain')
    },
    {
      title: t('servicesGrid.title5'),
      description: t('servicesGrid.desc5'),
      icon: Smartphone,
      category: t('servicesGrid.catMain')
    },
    {
      title: t('servicesGrid.title6'),
      description: t('servicesGrid.desc6'),
      icon: ShoppingCart,
      category: t('servicesGrid.catSupply')
    },
    {
      title: t('servicesGrid.title7'),
      description: t('servicesGrid.desc7'),
      icon: Briefcase,
      category: t('servicesGrid.catSupply')
    },
    {
      title: t('servicesGrid.title8'),
      description: t('servicesGrid.desc8'),
      icon: Truck,
      category: t('servicesGrid.catAdd')
    },
    {
      title: t('servicesGrid.title9'),
      description: t('servicesGrid.desc9'),
      icon: Package,
      category: t('servicesGrid.catAdd')
    },
    {
      title: t('servicesGrid.title10'),
      description: t('servicesGrid.desc10'),
      icon: CreditCard,
      category: t('servicesGrid.catAdd')
    },
    {
      title: t('servicesGrid.title11'),
      description: t('servicesGrid.desc11'),
      icon: FileText,
      category: t('servicesGrid.catAdd')
    }
  ];

  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayServices.map((service, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group"
        >
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
            <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            {service.category}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {service.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
