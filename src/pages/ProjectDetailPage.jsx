import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiExternalLink, FiCalendar, FiUsers, FiTrendingUp } = FiIcons;

const ProjectDetailPage = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: 1,
    title: 'Green Future Initiative',
    organization: 'Environmental Non-Profit',
    category: 'environment',
    description: 'A comprehensive website for climate action advocacy with donation integration and impact tracking.',
    fullDescription: 'The Green Future Initiative needed a powerful digital platform to amplify their climate action message and streamline their donation process. We created a modern, responsive website that not only showcases their mission but also provides interactive tools for supporters to get involved.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    url: 'https://example.com',
    duration: '3 months',
    teamSize: '4 people',
    challenge: 'The organization struggled with an outdated website that didn\'t reflect their modern approach to environmental advocacy. They needed better donation functionality and wanted to showcase their impact more effectively.',
    solution: 'We designed and developed a modern, user-friendly website with integrated donation processing, impact visualization dashboards, and a content management system that allows the team to easily update their campaigns and success stories.',
    results: [
      'Increased online donations by 150%',
      'Gained 2,000+ new supporters in the first 6 months',
      'Improved user engagement by 200%',
      'Reduced bounce rate by 40%'
    ],
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop'
    ],
    testimonial: {
      quote: "Landingspage24 transformed our online presence completely. The new website not only looks amazing but has significantly improved our ability to connect with supporters and drive our mission forward.",
      name: "Sarah Johnson",
      role: "Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  };

  return (
    <div className="pt-16">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/references"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
            Back to References
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 bg-gradient-to-r from-blue-600/90 to-green-500/90 relative">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-green-500/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-3xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {project.organization}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium capitalize">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl mb-6 opacity-90">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Visit Website
                <SafeIcon icon={FiExternalLink} className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {project.fullDescription}
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.challenge}
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.solution}
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Results & Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg"
                      >
                        <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <motion.img
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Client Testimonial
                  </h3>
                  <blockquote className="text-lg text-gray-700 italic mb-6">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src={project.testimonial.image}
                      alt={project.testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {project.testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {project.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{project.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-semibold text-gray-900">{project.teamSize}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <Link
                      to="/inquiry"
                      className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-center block"
                    >
                      Start Your Project
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to build something amazing that makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inquiry"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/references"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;