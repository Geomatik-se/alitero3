import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiShield, FiZap, FiHeart } = FiIcons;

function ValueProposition() {
  const values = [
    {
      icon: FiTarget,
      title: 'Zielgruppenorientiert',
      description: 'Wir verstehen die Bedürfnisse gemeinnütziger Organisationen und entwickeln passgenaue Lösungen.'
    },
    {
      icon: FiShield,
      title: 'Vertrauenswürdig',
      description: 'Transparente Preise, ehrliche Beratung und langfristige Partnerschaften stehen im Mittelpunkt.'
    },
    {
      icon: FiZap,
      title: 'Effizient & Modern',
      description: 'Schnelle Ladezeiten, responsive Design und moderne Technologien für maximale Wirkung.'
    },
    {
      icon: FiHeart,
      title: 'Mit Herz & Verstand',
      description: 'Wir brennen für soziale Projekte und bringen diese Leidenschaft in jedes Website-Projekt ein.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Warum <span className="text-gradient">landingpage24</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als spezialisierte Webagentur verstehen wir die einzigartigen Herausforderungen 
            und Chancen gemeinnütziger Organisationen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={value.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;