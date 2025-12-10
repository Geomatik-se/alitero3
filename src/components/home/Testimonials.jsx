import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

function Testimonials() {
  const testimonials = [
    {
      quote: "landingspage24 hat unsere Vision perfekt verstanden und eine Website erstellt, die unsere Mission authentisch widerspiegelt. Die Spendenzahlen haben sich seit dem Relaunch verdoppelt.",
      author: "Maria Schmidt",
      position: "Geschäftsführerin",
      organization: "Hilfe für Kinder e.V.",
      rating: 5
    },
    {
      quote: "Endlich eine Webagentur, die versteht, was gemeinnützige Arbeit bedeutet. Professionell, empathisch und mit einem Herz für soziale Projekte.",
      author: "Thomas Weber",
      position: "Vorstand",
      organization: "Umweltschutz Initiative",
      rating: 5
    },
    {
      quote: "Dank der neuen Website erreichen wir viel mehr Freiwillige und Unterstützer. Das Team von landingspage24 war von Anfang an ein echter Partner.",
      author: "Sarah Müller",
      position: "Projektleiterin",
      organization: "Bildung für alle gGmbH",
      rating: 5
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
            Was unsere <span className="text-gradient">Kunden</span> sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echtes Feedback von gemeinnützigen Organisationen, die mit uns zusammenarbeiten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.position}
                </div>
                <div className="text-sm text-purple-600 font-medium">
                  {testimonial.organization}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;