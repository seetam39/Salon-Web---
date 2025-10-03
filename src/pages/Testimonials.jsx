import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiQuote, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride & Regular Client',
      rating: 5,
      content: 'Absolutely amazing experience! The bridal package was perfect and the staff made me feel like a princess on my special day. The attention to detail and professionalism is unmatched. I wouldn\'t trust anyone else with my hair and makeup!',
      service: 'Bridal Package',
      date: '2 weeks ago',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emily Davis',
      role: 'Business Professional',
      rating: 5,
      content: 'Best salon in the city! The stylists are true professionals and always know exactly what I want. The atmosphere is so welcoming and relaxing. I\'ve been coming here for 3 years and have never been disappointed.',
      service: 'Hair Color & Cut',
      date: '1 month ago',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Jessica Wilson',
      role: 'New Client',
      rating: 5,
      content: 'First time here and I\'m already planning my next visit! The consultation was thorough, the service was impeccable, and the results exceeded my expectations. The staff is incredibly friendly and knowledgeable.',
      service: 'Complete Makeover',
      date: '3 weeks ago',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Amanda Brown',
      role: 'Mother of Two',
      rating: 5,
      content: 'As a busy mom, I appreciate how they accommodate my schedule and always make me feel pampered. The quality of service is consistently excellent, and I love how they remember my preferences from previous visits.',
      service: 'Spa & Hair Treatment',
      date: '1 week ago',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Rachel Green',
      role: 'College Student',
      rating: 5,
      content: 'Love the student discounts and the trendy styles! The stylists are up-to-date with the latest trends and always help me achieve the look I want. Great value for money and amazing results every time.',
      service: 'Hair Styling',
      date: '2 months ago',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michelle Taylor',
      role: 'Event Planner',
      rating: 5,
      content: 'I\'ve recommended XYZ Salon to all my clients for their events. The bridal party styling is flawless, and they handle multiple people with such grace and professionalism. Truly the best in the business!',
      service: 'Bridal Party Styling',
      date: '6 weeks ago',
      image: '/api/placeholder/80/80'
    }
  ];

  const stats = [
    { icon: FiUsers, number: '5000+', label: 'Happy Clients' },
    { icon: FiStar, number: '4.9', label: 'Average Rating' },
    { icon: FiAward, number: '15+', label: 'Years of Excellence' },
    { icon: FiTrendingUp, number: '98%', label: 'Client Retention' }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

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
              Client{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our amazing clients have to say about their experience at XYZ Salon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real reviews from real clients who have experienced our exceptional service and stunning results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
              >
                <div className="absolute top-4 right-4">
                  <FiQuote className="w-8 h-8 text-pink-200" />
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Review
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-12 relative"
          >
            <div className="absolute top-6 left-6">
              <FiQuote className="w-12 h-12 text-pink-300" />
            </div>
            <div className="absolute bottom-6 right-6">
              <FiQuote className="w-12 h-12 text-purple-300 transform rotate-180" />
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {renderStars(5)}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                "XYZ Salon has completely transformed my beauty routine. The level of professionalism, attention to detail, and genuine care for their clients is unmatched. Every visit feels like a luxury experience, and the results speak for themselves. I wouldn't trust my hair and skin to anyone else!"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-2xl">MJ</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">Maria Rodriguez</h3>
                  <p className="text-gray-600">VIP Client & Business Owner</p>
                  <p className="text-sm text-gray-500">Client since 2018</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Integration */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Google{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Reviews
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              See what clients are saying about us on Google Reviews.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <FiStar className="w-5 h-5 text-yellow-400 fill-current" />
              View on Google
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {['A', 'B', 'C', 'D', 'E', 'F'][index]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Client Name</h3>
                    <div className="flex items-center">
                      {renderStars(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "Excellent service and professional staff. Highly recommend XYZ Salon for all your beauty needs!"
                </p>
                <p className="text-xs text-gray-500">Reviewed 2 weeks ago</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Video{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from our satisfied clients about their amazing experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FiStar className="w-8 h-8 text-pink-600" />
                  </motion.button>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Client Testimonial</p>
                    <p className="text-xs opacity-75">Video coming soon</p>
                  </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced our exceptional service. Book your appointment today and see why everyone is raving about XYZ Salon!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;