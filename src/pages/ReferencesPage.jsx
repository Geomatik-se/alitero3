import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLanguage} from '../contexts/LanguageContext';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiExternalLink, FiEye, FiFilter} = FiIcons;

const ReferencesPage = () => {
  const {t} = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {key: 'all', label: t('references.all')},
    {key: 'environment', label: t('references.categories.environment')},
    {key: 'social', label: t('references.categories.social')},
    {key: 'education', label: t('references.categories.education')},
    {key: 'health', label: t('references.categories.health')},
    {key: 'culture', label: t('references.categories.culture')}
  ];

  const projects = [
    {
      id: 1,
      title: 'Green Future Initiative',
      organization: 'Environmental Non-Profit',
      category: 'environment',
      description: 'A comprehensive website for climate action advocacy with donation integration and impact tracking.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      url: 'https://example.com',
      impact: 'Increased donations by 150% and gained 2,000+ new supporters'
    },
    {
      id: 2,
      title: 'Community Health Network',
      organization: 'Healthcare Initiative',
      category: 'health',
      description: 'Modern healthcare platform connecting communities with local health resources and services.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'PWA', 'Tailwind'],
      url: 'https://example.com',
      impact: 'Served 10,000+ patients and reduced wait times by 40%'
    },
    {
      id: 3,
      title: 'Youth Education Alliance',
      organization: 'Educational Foundation',
      category: 'education',
      description: 'Interactive learning platform with course management and progress tracking for underserved youth.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      technologies: ['Angular', 'PostgreSQL', 'Docker', 'AWS'],
      url: 'https://example.com',
      impact: 'Educated 5,000+ students with 95% completion rate'
    },
    {
      id: 4,
      title: 'Cultural Heritage Project',
      organization: 'Arts & Culture Society',
      category: 'culture',
      description: 'Digital archive and exhibition platform preserving local cultural heritage and traditions.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
      technologies: ['Gatsby', 'Contentful', 'GraphQL', 'Netlify'],
      url: 'https://example.com',
      impact: 'Preserved 1,000+ artifacts and attracted 50,000+ virtual visitors'
    },
    {
      id: 5,
      title: 'Social Support Network',
      organization: 'Community Welfare',
      category: 'social',
      description: 'Platform connecting volunteers with families in need, featuring real-time matching and coordination.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Express', 'Socket.io', 'Redis'],
      url: 'https://example.com',
      impact: 'Connected 2,000+ volunteers with 800+ families in need'
    },
    {
      id: 6,
      title: 'Clean Water Initiative',
      organization: 'Environmental Action',
      category: 'environment',
      description: 'Campaign website with interactive maps showing water quality data and improvement projects.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Mapbox', 'D3.js', 'Vercel'],
      url: 'https://example.com',
      impact: 'Improved water access for 15,000+ people in rural areas'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('references.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('references.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">{t('references.filter')}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="Visit website"
                    >
                      <SafeIcon icon={FiExternalLink} className="w-4 h-4 text-gray-700" />
                    </a>
                    <Link
                      to={`/project/${project.id}`}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label="View case study"
                    >
                      <SafeIcon icon={FiEye} className="w-4 h-4 text-gray-700" />
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      {project.organization}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">
                      {t(`references.categories.${project.category}`) || project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-green-600 font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {t('references.empty')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('references.ctaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('references.ctaDesc')}
          </p>
          <Link
            to="/inquiry"
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            {t('hero.cta')}
            <SafeIcon icon={FiExternalLink} className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;