import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiGlobe, FiClock } = FiIcons;

function TrustElements() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  const targetValues = {
    projects: 150,
    clients: 120,
    years: 5,
    satisfaction: 98
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          projects: Math.round(targetValues.projects * progress),
          clients: Math.round(targetValues.clients * progress),
          years: Math.round(targetValues.years * progress),
          satisfaction: Math.round(targetValues.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('trust-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: FiGlobe,
      value: `${counters.projects}+`,
      label: 'Realisierte Projekte',
      color: 'text-blue-600'
    },
    {
      icon: FiUsers,
      value: `${counters.clients}+`,
      label: 'Zufriedene Kunden',
      color: 'text-green-600'
    },
    {
      icon: FiClock,
      value: `${counters.years}+`,
      label: 'Jahre Erfahrung',
      color: 'text-purple-600'
    },
    {
      icon: FiAward,
      value: `${counters.satisfaction}%`,
      label: 'Kundenzufriedenheit',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="trust-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Zahlen, die für sich <span className="text-gradient">sprechen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Engagement für gemeinnützige Organisationen spiegelt sich in unseren Erfolgen wider.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <SafeIcon icon={stat.icon} className={`${stat.color} text-2xl`} />
              </div>
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 counter-animation`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Auszeichnungen & Zertifizierungen
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium text-gray-700">WCAG 2.1 AA Zertifiziert</div>
              <div className="text-sm font-medium text-gray-700">Google Partner</div>
              <div className="text-sm font-medium text-gray-700">WordPress Certified</div>
              <div className="text-sm font-medium text-gray-700">ISO 27001 konform</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustElements;