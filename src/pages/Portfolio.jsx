import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiCamera, FiFilter, FiGrid, FiList } from 'react-icons/fi';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filters = [
    { id: 'all', name: 'All Work', icon: FiGrid },
    { id: 'hair', name: 'Hair Styling', icon: FiHeart },
    { id: 'makeup', name: 'Makeup Artistry', icon: FiStar },
    { id: 'bridal', name: 'Bridal', icon: FiCamera },
  ];

  const portfolioItems = [
    {
      category: 'hair',
      title: 'Blonde Balayage Transformation',
      description: 'Complete hair transformation with custom balayage technique',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      services: ['Hair Color', 'Balayage', 'Haircut', 'Styling']
    },
    {
      category: 'bridal',
      title: 'Bridal Hair & Makeup',
      description: 'Complete bridal look for a beautiful wedding day',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      services: ['Bridal Hair', 'Bridal Makeup', 'Hair Trial', 'Touch-ups']
    },
    {
      category: 'makeup',
      title: 'Glamorous Evening Makeup',
      description: 'Bold and beautiful evening makeup look',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      services: ['Evening Makeup', 'False Lashes', 'Contouring', 'Highlighting']
    },
    {
      category: 'hair',
      title: 'Short Hair Makeover',
      description: 'From long to short - a complete style transformation',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      services: ['Haircut', 'Styling', 'Hair Treatment', 'Finishing']
    },
    {
      category: 'bridal',
      title: 'Wedding Party Styling',
      description: 'Coordinated looks for the entire bridal party',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      services: ['Bridal Hair', 'Bridesmaid Hair', 'Flower Girl Hair', 'Makeup']
    },
    {
      category: 'makeup',
      title: 'Natural Bridal Makeup',
      description: 'Soft and natural bridal makeup for a timeless look',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      services: ['Bridal Makeup', 'Skin Prep', 'Airbrush Foundation', 'Natural Look']
    }
  ];

  const galleryImages = [
    { original: '/api/placeholder/800/600', thumbnail: '/api/placeholder/150/100', description: 'Bridal Hair Styling' },
    { original: '/api/placeholder/800/600', thumbnail: '/api/placeholder/150/100', description: 'Hair Color Transformation' },
    { original: '/api/placeholder/800/600', thumbnail: '/api/placeholder/150/100', description: 'Makeup Artistry' },
    { original: '/api/placeholder/800/600', thumbnail: '/api/placeholder/150/100', description: 'Special Event Styling' },
    { original: '/api/placeholder/800/600', thumbnail: '/api/placeholder/150/100', description: 'Hair Extensions' },
    { original: '/api/placeholder/800/600', thumbnail: '/api/placeholder/150/100', description: 'Bridal Party' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,219,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the magic of transformation through our collection of stunning before and after photos showcasing our expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Featured Transformations
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Scroll through our gallery to see the beautiful results our clients achieve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <ImageGallery
              items={galleryImages}
              showPlayButton={true}
              showFullscreenButton={true}
              showNav={true}
              autoPlay={true}
              slideInterval={4000}
              className="portfolio-gallery"
            />
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <filter.icon className="w-5 h-5" />
                {filter.name}
              </motion.button>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-full transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FiGrid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-full transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FiList className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the incredible transformations our clients experience with our expert services.
            </p>
          </motion.div>

          <div className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="relative">
                      <div className="grid grid-cols-2 h-64">
                        <div className="relative bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-gray-600 font-bold">BEFORE</span>
                            </div>
                            <p className="text-gray-600 text-sm">Professional photos coming soon</p>
                          </div>
                        </div>
                        <div className="relative bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-pink-600 font-bold">AFTER</span>
                            </div>
                            <p className="text-gray-600 text-sm">Amazing transformation</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.services.map((service, i) => (
                          <span key={i} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex">
                    <div className="w-1/3 relative">
                      <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-gray-600 text-sm block">BEFORE</span>
                          <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mx-auto mt-2">
                            <FiCamera className="w-6 h-6 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 relative">
                      <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-pink-600 text-sm block">AFTER</span>
                          <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mx-auto mt-2">
                            <FiStar className="w-6 h-6 text-pink-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.services.map((service, i) => (
                          <span key={i} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Follow Us on{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Instagram
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with our latest work, beauty tips, and behind-the-scenes content.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FiCamera className="w-5 h-5" />
              Follow @xyzsalon
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center z-10">
                  <FiCamera className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced our magic. Book your appointment today and see what makes XYZ Salon special.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;