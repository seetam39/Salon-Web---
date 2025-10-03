import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiAward, FiTarget, FiStar, FiCheck } from 'react-icons/fi';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Master Stylist & Owner',
      experience: '12+ years',
      specialty: 'Hair Color & Styling',
      description: 'Sarah founded XYZ Salon with a vision to create a welcoming space where clients feel pampered and beautiful.',
      image: '/api/placeholder/300/300',
      achievements: ['Certified L’Oréal Color Specialist', 'Best Salon Award 2022', '5000+ Happy Clients']
    },
    {
      name: 'Michael Chen',
      role: 'Senior Barber & Stylist',
      experience: '8+ years',   
      specialty: 'Men\'s Cuts & Beard Styling',
      description: 'Michael brings precision and artistry to every cut, specializing in modern men\'s grooming techniques.',
      image: '/api/placeholder/300/300',
      achievements: ['Men\'s Grooming Expert', 'Traditional Barber Certified', 'Style Council Member']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Skincare Specialist',
      experience: '10+ years',
      specialty: 'Facials & Anti-Aging',
      description: 'Emma\'s gentle touch and extensive knowledge make every facial treatment a rejuvenating experience.',
      image: '/api/placeholder/300/300',
      achievements: ['Licensed Esthetician', 'Advanced Skincare Certified', 'Organic Treatments Expert']
    },
    {
      name: 'Lisa Park',
      role: 'Nail Art Technician',
      experience: '6+ years',
      specialty: 'Creative Nail Design',
      description: 'Lisa transforms nails into works of art, staying current with the latest trends and techniques.',
      image: '/api/placeholder/300/300',
      achievements: ['Nail Art Competition Winner', 'Gel Extension Specialist', 'Bridal Nail Expert']
    }
  ];

  const milestones = [
    { year: '2015', event: 'XYZ Salon founded with a vision to revolutionize beauty care' },
    { year: '2017', event: 'Expanded to include spa services and skincare treatments' },
    { year: '2019', event: 'Won "Best Salon in the City" award for exceptional service' },
    { year: '2021', event: 'Reached 5000+ happy clients milestone' },
    { year: '2023', event: 'Introduced eco-friendly and organic product lines' }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Passion for Beauty',
      description: 'We are passionate about helping every client discover their unique beauty and feel confident in their own skin.'
    },
    {
      icon: FiUsers,
      title: 'Client-Centered Approach',
      description: 'Every service is tailored to our clients\' individual needs, preferences, and lifestyle for maximum satisfaction.'
    },
    {
      icon: FiAward,
      title: 'Excellence in Service',
      description: 'We maintain the highest standards of quality, hygiene, and professionalism in everything we do.'
    },
    {
      icon: FiTarget,
      title: 'Continuous Innovation',
      description: 'We stay ahead of beauty trends and continuously update our skills and services to provide cutting-edge treatments.'
    }
  ];

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
              About{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                XYZ Salon
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Where beauty meets expertise. Discover our story, meet our passionate team, and learn why we're the trusted choice for thousands of clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015, XYZ Salon began as a dream to create a sanctuary where beauty and wellness intertwine. Our founder, Sarah Johnson, envisioned a place where clients could escape the everyday hustle and emerge feeling refreshed, confident, and beautiful.
                </p>
                <p>
                  What started as a small boutique salon has grown into a full-service beauty destination, thanks to our unwavering commitment to excellence and our clients' trust. Today, we serve over 5000 happy clients who have become part of our extended family.
                </p>
                <p>
                  Every member of our team shares the same passion for making people look and feel their absolute best. We continuously invest in the latest techniques, premium products, and ongoing education to ensure we deliver exceptional results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <FiStar className="w-20 h-20 text-pink-500 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Salon Interior</p>
                  <p className="text-gray-500 text-sm">Coming Soon - Professional Salon Photos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower every individual to embrace their unique beauty through personalized, high-quality beauty services that enhance confidence and well-being. We strive to create lasting relationships built on trust, expertise, and genuine care for our clients' beauty journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <FiStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading salon in our community, recognized for innovation, sustainability, and exceptional client experiences. We envision a world where beauty services are accessible, inclusive, and environmentally conscious, setting new standards for the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do, from how we treat our clients to how we operate our business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped XYZ Salon into the trusted beauty destination it is today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-pink-500 to-purple-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">{milestone.year.slice(-2)}</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                      </div>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented professionals are here to make you look and feel your absolute best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="w-full h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">Professional Photo</p>
                    <p className="text-gray-500 text-xs">Coming Soon</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.experience} • {member.specialty}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Key Achievements:</p>
                    {member.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <FiCheck className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
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
              Ready to Experience the XYZ Difference?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust us with their beauty needs. Book your appointment today and discover why we're the preferred choice.
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

export default About;