import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiHeart, FiUsers, FiGlobe } = FiIcons;

function HeroSection() {
  return (
    <section className="gradient-bg text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>+++ Diese Seite ist im Aufbau. Landingpage24 startet am 1. Januar 2026+++</h1>
            <p>Kontakte sind vorher nur unter der info@landingpage24.biz möglich</p>
            <br />
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Digitale Präsenz für{' '}
              <span className="text-yellow-300">Organisationen</span>, 
              die Gutes tun
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-purple-100">
              Professionelle Websites für gemeinnützige Vereine und soziale Projekte. 
              Wir helfen dabei, Ihre Mission online zu bringen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/referenzen"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Referenzen ansehen</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              <Link
                to="/anfrage"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Kostenlose Beratung</span>
                <SafeIcon icon={FiHeart} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiHeart} className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Soziale Mission</h3>
                    <p className="text-purple-100">Websites mit Herz und Zweck</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUsers} className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Gemeinnütziger Fokus</h3>
                    <p className="text-purple-100">Spezialisiert auf soziale Projekte & Vereine</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiGlobe} className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Digitale Reichweite</h3>
                    <p className="text-purple-100">Mehr Sichtbarkeit für Ihr Projekt</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;