import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiExternalLink, FiTarget, FiTrendingUp, FiUsers } = FiIcons;

function CaseStudyPage() {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const caseStudy = {
    id: 1,
    title: 'Umweltschutz Initiative',
    client: 'GreenFuture e.V.',
    category: 'Umwelt & Klimaschutz',
    timeline: '8 Wochen',
    budget: '€8.500',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'GreenFuture e.V. ist eine gemeinnützige Organisation, die sich dem Klimaschutz und der Umweltbildung verschrieben hat. Die bestehende Website war veraltet und konnte die wichtige Mission der Organisation nicht angemessen vermitteln.',
    challenge: {
      title: 'Die Herausforderung',
      points: [
        'Veraltete Website mit schlechter Benutzererfahrung',
        'Geringe Online-Sichtbarkeit und wenig organischer Traffic',
        'Schwierige Spendenprozesse führten zu niedrigen Conversion-Raten',
        'Fehlende mobile Optimierung',
        'Keine Integration von Social Media und Newsletter-Tools'
      ]
    },
    solution: {
      title: 'Unsere Lösung',
      points: [
        'Kompletter Website-Relaunch mit modernem, umweltfreundlichem Design',
        'Implementierung einer benutzerfreundlichen Online-Spendenfunktion',
        'SEO-Optimierung für bessere Sichtbarkeit in Suchmaschinen',
        'Responsive Design für alle Endgeräte',
        'Integration von Social Media Feeds und Newsletter-Anmeldung',
        'Barrierefreie Gestaltung nach WCAG 2.1 AA Standards'
      ]
    },
    results: {
      title: 'Die Ergebnisse',
      metrics: [
        {
          icon: FiTrendingUp,
          value: '+300%',
          label: 'Mehr Online-Spenden',
          description: 'Durch optimierte Spendenprozesse'
        },
        {
          icon: FiUsers,
          value: '+150%',
          label: 'Mehr Website-Besucher',
          description: 'Dank SEO-Optimierung'
        },
        {
          icon: FiTarget,
          value: '+200%',
          label: 'Höhere Engagement-Rate',
          description: 'Mehr Newsletter-Anmeldungen'
        }
      ]
    },
    testimonial: {
      quote: "landingspage24 hat unsere Vision perfekt verstanden und eine Website erstellt, die unsere Mission authentisch widerspiegelt. Die Spendenzahlen haben sich seit dem Relaunch verdreifacht, und wir erreichen endlich die Menschen, die wir erreichen wollten.",
      author: "Dr. Maria Schmidt",
      position: "Geschäftsführerin, GreenFuture e.V."
    },
    technologies: ['WordPress', 'WooCommerce', 'SEO', 'Responsive Design', 'WCAG 2.1 AA'],
    liveUrl: '#'
  };

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/referenzen"
              className="inline-flex items-center space-x-2 text-purple-300 hover:text-white mb-6"
            >
              <SafeIcon icon={FiArrowLeft} />
              <span>Zurück zu den Referenzen</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-300">
              Case Study: {caseStudy.client}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Projekt-Übersicht
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {caseStudy.overview}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Kategorie
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mt-1">
                    {caseStudy.category}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Timeline
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mt-1">
                    {caseStudy.timeline}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Jahr
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mt-1">
                    {caseStudy.year}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Budget
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mt-1">
                    {caseStudy.budget}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={caseStudy.liveUrl}
                  className="inline-flex items-center space-x-2 btn-primary text-white px-6 py-3 rounded-lg font-medium"
                >
                  <span>Live Website ansehen</span>
                  <SafeIcon icon={FiExternalLink} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {caseStudy.challenge.title}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <ul className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">!</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {caseStudy.solution.title}
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
              <ul className="space-y-4">
                {caseStudy.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {caseStudy.results.title}
            </h2>
            <p className="text-xl text-gray-600">
              Messbare Erfolge nach dem Website-Relaunch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.results.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={metric.icon} className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </div>
                <div className="text-gray-600">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Verwendete Technologien
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 lg:p-12 shadow-lg text-center"
          >
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="border-t pt-6">
              <div className="font-semibold text-gray-900 text-lg">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-purple-600 font-medium">
                {caseStudy.testimonial.position}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit für Ihr eigenes Erfolgsprojekt?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Mission perfekt widerspiegelt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/anfrage"
                className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Kostenlose Beratung anfordern
              </Link>
              <Link
                to="/referenzen"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Weitere Referenzen ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyPage;