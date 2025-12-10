import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiTarget, FiArrowRight } = FiIcons;

function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Über <span className="text-gradient">landingpage24</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Wir sind ein spezialisiertes Team aus Designern und Entwicklern, 
              das sich der Mission verschrieben hat, gemeinnützigen Organisationen 
              zu einer starken digitalen Präsenz zu verhelfen.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unser Ansatz verbindet technische Exzellenz mit einem tiefen Verständnis 
              für die besonderen Herausforderungen und Ziele sozialer Projekte. 
              Jede Website wird mit Leidenschaft und dem Ziel entwickelt, 
              positive Veränderungen zu bewirken.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiHeart} className="text-red-500 text-xl" />
                <span className="text-gray-700">Leidenschaft für soziale Projekte</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiUsers} className="text-blue-500 text-xl" />
                <span className="text-gray-700">Erfahrenes Team aus Design & Entwicklung</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiTarget} className="text-green-500 text-xl" />
                <span className="text-gray-700">Fokus auf Wirkung und Nutzen</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/referenzen"
                className="btn-primary text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <span>Unsere Arbeit ansehen</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              <Link
                to="/anfrage"
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <span>Projekt besprechen</span>
                <SafeIcon icon={FiHeart} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team arbeitet zusammen"
                className="rounded-xl w-full h-64 object-cover mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Unser Mission
                </h3>
                <p className="text-gray-600">
                  Digitale Lösungen schaffen, die gemeinnützige Organisationen 
                  dabei unterstützen, ihre wichtige Arbeit noch effektiver zu machen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;