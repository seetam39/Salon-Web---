import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiScissors, FiHeart, FiStar, FiDroplet, FiSmile, FiZap, FiArrowRight, FiCheck } from 'react-icons/fi';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('hair');

  const categories = [
    { id: 'hair', name: 'Hair Services', icon: FiScissors },
    { id: 'skin', name: 'Skin Care', icon: FiHeart },
    { id: 'makeup', name: 'Makeup', icon: FiStar },
    { id: 'spa', name: 'Spa & Massage', icon: FiDroplet },
    { id: 'nails', name: 'Nails', icon: FiSmile },
    { id: 'treatments', name: 'Special Treatments', icon: FiZap },
  ];

  const services = {
    hair: [
      {
        name: 'Haircut & Styling',
        description: 'Professional cut and styling tailored to your face shape and lifestyle',
        price: '$45+',
        duration: '45-60 min',
        features: ['Consultation', 'Wash & Condition', 'Cut & Style', 'Finishing Products']
      },
      {
        name: 'Hair Color',
        description: 'Premium hair coloring services using L\'Oréal professional products',
        price: '$85+',
        duration: '90-120 min',
        features: ['Color Consultation', 'Premium Color', 'Toner', 'Style Finish']
      },
      {
        name: 'Balayage/Highlights',
        description: 'Hand-painted highlights for natural-looking dimension and brightness',
        price: '$120+',
        duration: '120-180 min',
        features: ['Custom Technique', 'Premium Lightener', 'Toner', 'Treatment']
      },
      {
        name: 'Hair Treatment',
        description: 'Deep conditioning and repair treatments for damaged or dry hair',
        price: '$65+',
        duration: '45-60 min',
        features: ['Hair Analysis', 'Custom Treatment', 'Deep Conditioning', 'Style']
      },
      {
        name: 'Bridal Hair',
        description: 'Complete bridal hair styling for your special day',
        price: '$150+',
        duration: '90-120 min',
        features: ['Trial Session', 'Day-of Styling', 'Touch-ups', 'Accessories']
      },
      {
        name: 'Hair Extensions',
        description: 'Premium quality hair extensions for length and volume',
        price: '$200+',
        duration: '120-180 min',
        features: ['Consultation', 'Premium Extensions', 'Custom Coloring', 'Styling']
      }
    ],
    skin: [
      {
        name: 'Classic Facial',
        description: 'Deep cleansing facial tailored to your skin type',
        price: '$75',
        duration: '60 min',
        features: ['Skin Analysis', 'Deep Cleansing', 'Exfoliation', 'Mask & Moisturize']
      },
      {
        name: 'Anti-Aging Facial',
        description: 'Advanced treatment to reduce fine lines and wrinkles',
        price: '$95',
        duration: '75 min',
        features: ['Skin Analysis', 'Vitamin C Treatment', 'Collagen Mask', 'LED Therapy']
      },
      {
        name: 'Acne Treatment',
        description: 'Specialized treatment for acne-prone and problematic skin',
        price: '$85',
        duration: '60 min',
        features: ['Deep Cleansing', 'Extractions', 'Healing Mask', 'Home Care Advice']
      },
      {
        name: 'Hydrating Facial',
        description: 'Intensive moisture treatment for dry and dehydrated skin',
        price: '$80',
        duration: '60 min',
        features: ['Hydrating Mask', 'Hyaluronic Acid', 'Moisture Lock', 'Protection']
      },
      {
        name: 'Chemical Peel',
        description: 'Professional chemical exfoliation for skin renewal',
        price: '$100',
        duration: '45 min',
        features: ['Skin Prep', 'Custom Peel', 'Neutralizer', 'After Care Kit']
      }
    ],
    makeup: [
      {
        name: 'Day Makeup',
        description: 'Natural, everyday makeup look for any occasion',
        price: '$55',
        duration: '45 min',
        features: ['Skin Prep', 'Foundation', 'Eye Makeup', 'Lip Color']
      },
      {
        name: 'Evening Makeup',
        description: 'Glamorous makeup look for special events and nights out',
        price: '$75',
        duration: '60 min',
        features: ['Full Face Makeup', 'Contouring', 'Highlighting', 'Long-lasting Products']
      },
      {
        name: 'Bridal Makeup',
        description: 'Complete bridal makeup for your wedding day',
        price: '$150',
        duration: '90 min',
        features: ['Trial Session', 'Wedding Day Application', 'Touch-up Kit', 'False Lashes']
      },
      {
        name: 'Special Effects',
        description: 'Creative and artistic makeup for photoshoots or events',
        price: '$90',
        duration: '75 min',
        features: ['Creative Design', 'Special Effects', 'Long-lasting Products', 'Photography Ready']
      }
    ],
    spa: [
      {
        name: 'Swedish Massage',
        description: 'Relaxing full-body massage to relieve tension and stress',
        price: '$90',
        duration: '60 min',
        features: ['Full Body Massage', 'Aromatherapy', 'Hot Towels', 'Relaxation']
      },
      {
        name: 'Deep Tissue Massage',
        description: 'Therapeutic massage targeting deep muscle tension',
        price: '$110',
        duration: '60 min',
        features: ['Deep Pressure', 'Trigger Point Therapy', 'Stretching', 'Pain Relief']
      },
      {
        name: 'Hot Stone Massage',
        description: 'Soothing massage using heated stones for ultimate relaxation',
        price: '$120',
        duration: '75 min',
        features: ['Heated Stones', 'Full Body Massage', 'Energy Balance', 'Deep Relaxation']
      },
      {
        name: 'Couples Massage',
        description: 'Romantic massage experience for couples',
        price: '$200',
        duration: '60 min',
        features: ['Side-by-Side Rooms', 'Synchronized Massage', 'Champagne', 'Chocolates']
      }
    ],
    nails: [
      {
        name: 'Classic Manicure',
        description: 'Complete nail care and polish application',
        price: '$35',
        duration: '45 min',
        features: ['Nail Shaping', 'Cuticle Care', 'Massage', 'Polish']
      },
      {
        name: 'Gel Manicure',
        description: 'Long-lasting gel polish with chip-resistant finish',
        price: '$50',
        duration: '60 min',
        features: ['Gel Application', 'UV Curing', 'Nail Art', 'Long-lasting Finish']
      },
      {
        name: 'Nail Extensions',
        description: 'Acrylic or gel nail extensions for added length',
        price: '$75',
        duration: '90 min',
        features: ['Custom Length', 'Shape Design', 'Gel Polish', 'Maintenance Tips']
      },
      {
        name: 'Nail Art Design',
        description: 'Creative nail art and intricate designs',
        price: '$15+',
        duration: '30-45 min',
        features: ['Custom Design', 'Multiple Techniques', 'Gems & Accents', 'Special Occasions']
      }
    ],
    treatments: [
      {
        name: 'Lash Extensions',
        description: 'Professional eyelash extensions for fuller lashes',
        price: '$120',
        duration: '120 min',
        features: ['Individual Lashes', 'Custom Length', '2-Week Fill', 'After Care']
      },
      {
        name: 'Microblading',
        description: 'Semi-permanent eyebrow tattoo for perfect brows',
        price: '$350',
        duration: '150 min',
        features: ['Initial Session', 'Touch-up Included', 'Custom Shape', 'Natural Look']
      },
      {
        name: 'Waxing Services',
        description: 'Professional hair removal for smooth skin',
        price: '$25+',
        duration: '15-45 min',
        features: ['Professional Wax', 'Soothing Treatment', 'Multiple Areas', 'Long-lasting Results']
      },
      {
        name: 'Body Scrub',
        description: 'Exfoliating treatment for smooth, glowing skin',
        price: '$85',
        duration: '60 min',
        features: ['Full Body Exfoliation', 'Hydrating Mask', 'Moisturizing', 'Relaxation']
      }
    ]
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
              Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional services tailored to your unique needs and preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeCategory]?.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <FiCheck className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2"
                  >
                    Book Now
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Special{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exclusive packages designed to give you the complete beauty experience at exceptional value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bridal Package',
                price: '$450',
                originalPrice: '$550',
                description: 'Complete bridal preparation for your special day',
                features: ['Bridal Hair Styling', 'Bridal Makeup', 'Trial Session', 'Touch-up Kit', 'Nail Art', 'Eyebrow Shaping']
              },
              {
                name: 'Spa Day Package',
                price: '$180',
                originalPrice: '$220',
                description: 'Ultimate relaxation and rejuvenation experience',
                features: ['Swedish Massage (60min)', 'Classic Facial', 'Manicure & Pedicure', 'Herbal Tea', 'Aromatherapy']
              },
              {
                name: 'Makeover Package',
                price: '$120',
                originalPrice: '$150',
                description: 'Complete transformation for any occasion',
                features: ['Hair Cut & Style', 'Hair Color Touch-up', 'Day Makeup', 'Brow Shaping', 'Style Consultation']
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save ${parseInt(pkg.originalPrice.replace('$', '')) - parseInt(pkg.price.replace('$', ''))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-pink-600">{pkg.price}</span>
                  <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <div className="space-y-2 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <FiCheck className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
                >
                  Book Package
                </motion.button>
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you look and feel your absolute best. Book your appointment today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;