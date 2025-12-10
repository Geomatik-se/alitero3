import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMonitor, FiSmartphone, FiSearch, FiEye, FiCode, FiLifeBuoy } = FiIcons;

function ServicesOverview() {
  const services = [
    {
      icon: FiMonitor,
      title: 'Webdesign',
      description: 'Moderne, benutzerfreundliche Websites, die Ihre Mission authentisch vermitteln.'
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Perfekte Darstellung auf allen Geräten – vom Smartphone bis zum Desktop.'
    },
    {
      icon: FiSearch,
      title: 'SEO-Optimierung',
      description: 'Bessere Sichtbarkeit in Suchmaschinen für mehr Reichweite Ihrer Botschaft.'
    },
    {
      icon: FiEye,
      title: 'Barrierefreiheit',
      description: 'Zugängliche Websites nach WCAG-Standards für alle Nutzergruppen.'
    },
    {
      icon: FiCode,
      title: 'CMS-Integration',
      description: 'Einfache Inhaltsverwaltung für Ihr Team ohne technische Kenntnisse.'
    },
    {
      icon: FiLifeBuoy,
      title: 'Support & Wartung',
      description: 'Langfristige Betreuung und technischer Support für Ihre Website.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Komplettlösungen für Ihre digitale Präsenz – von der Konzeption bis zur langfristigen Betreuung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;