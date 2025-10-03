import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiCrown, FiHeart, FiZap, FiGift } from 'react-icons/fi';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const serviceCategories = [
    {
      title: 'Hair Services',
      icon: FiCrown,
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'Haircut & Styling', price: '$45', popular: false },
        { name: 'Hair Color (Full)', price: '$85', popular: true },
        { name: 'Balayage/Highlights', price: '$120', popular: false },
        { name: 'Hair Treatment', price: '$65', popular: false },
        { name: 'Bridal Hair', price: '$150', popular: true },
        { name: 'Hair Extensions', price: '$200', popular: false }
      ]
    },
    {
      title: 'Skin Care',
      icon: FiHeart,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Classic Facial', price: '$75', popular: false },
        { name: 'Anti-Aging Facial', price: '$95', popular: true },
        { name: 'Acne Treatment', price: '$85', popular: false },
        { name: 'Hydrating Facial', price: '$80', popular: false },
        { name: 'Chemical Peel', price: '$100', popular: false }
      ]
    },
    {
      title: 'Makeup Artistry',
      icon: FiStar,
      color: 'from-blue-500 to-purple-500',
      services: [
        { name: 'Day Makeup', price: '$55', popular: false },
        { name: 'Evening Makeup', price: '$75', popular: true },
        { name: 'Bridal Makeup', price: '$150', popular: true },
        { name: 'Special Effects', price: '$90', popular: false }
      ]
    },
    {
      title: 'Spa & Massage',
      icon: FiZap,
      color: 'from-green-500 to-blue-500',
      services: [
        { name: 'Swedish Massage (60min)', price: '$90', popular: false },
        { name: 'Deep Tissue Massage', price: '$110', popular: true },
        { name: 'Hot Stone Massage', price: '$120', popular: false },
        { name: 'Couples Massage', price: '$200', popular: false }
      ]
    }
  ];

  const packages = [
    {
      name: 'Essential Package',
      price: '$89',
      originalPrice: '$120',
      description: 'Perfect for maintaining your look',
      icon: FiCheck,
      color: 'from-pink-500 to-purple-500',
      features: [
        'Haircut & Styling',
        'Basic Manicure',
        'Eyebrow Shaping',
        'Style Consultation'
      ],
      savings: 'Save $31'
    },
    {
      name: 'Deluxe Package',
      price: '$159',
      originalPrice: '$210',
      description: 'Complete beauty treatment',
      icon: FiStar,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Hair Color Touch-up',
        'Classic Facial',
        'Gel Manicure',
        'Eyebrow Tinting',
        'Deep Conditioning Treatment'
      ],
      savings: 'Save $51',
      popular: true
    },
    {
      name: 'Premium Package',
      price: '$299',
      originalPrice: '$380',
      description: 'Ultimate luxury experience',
      icon: FiCrown,
      color: 'from-yellow-400 to-orange-500',
      features: [
        'Full Hair Color',
        'Anti-Aging Facial',
        'Full Body Massage',
        'Gel Manicure & Pedicure',
        'Bridal Makeup Trial',
        'Hair Treatment'
      ],
      savings: 'Save $81'
    }
  ];

  const memberships = [
    {
      name: 'Silver Membership',
      price: '$99',
      period: 'month',
      description: 'Perfect for regular maintenance',
      features: [
        '1 Haircut & Styling per month',
        '20% off additional services',
        'Priority booking',
        'Birthday month free facial',
        'Member-only events'
      ]
    },
    {
      name: 'Gold Membership',
      price: '$199',
      period: 'month',
      description: 'Complete beauty coverage',
      features: [
        '2 services per month (hair or skin)',
        '30% off additional services',
        'VIP priority booking',
        'Free monthly facial',
        'Complimentary hair treatment',
        'Exclusive product discounts'
      ],
      popular: true
    },
    {
      name: 'Platinum Membership',
      price: '$299',
      period: 'month',
      description: 'Ultimate luxury experience',
      features: [
        'Unlimited services',
        '50% off all services',
        'Immediate booking access',
        'Personal beauty consultant',
        'Complimentary premium products',
        'Exclusive VIP events',
        'Partner salon access'
      ]
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
              Pricing &{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing and exclusive packages designed to give you exceptional value while delivering outstanding results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pricing Tables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed pricing for all our premium beauty services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl shadow-lg p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`flex items-center justify-between p-4 rounded-2xl ${
                        service.popular ? 'bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200' : 'bg-white'
                      }`}
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        {service.popular && (
                          <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full mt-1 inline-block">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
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
              Exclusive packages that combine our most popular services at incredible value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-pink-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 bg-gradient-to-br ${pkg.color}`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/90 mb-6">{pkg.description}</p>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-lg text-white/75 line-through">{pkg.originalPrice}</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
                    <p className="text-white font-medium text-center">{pkg.savings}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <FiCheck className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Membership{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Plans
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join our membership program for exclusive benefits, priority access, and significant savings on all services.
            </p>

            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === 'annual'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual (Save 20%)
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  membership.popular ? 'ring-2 ring-pink-500' : ''
                }`}
              >
                {membership.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{membership.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-pink-600">
                      ${billingCycle === 'annual' ? Math.round(parseInt(membership.price.replace('$', '')) * 0.8 * 12) : membership.price}
                    </span>
                    <span className="text-gray-600">/{membership.period}</span>
                  </div>
                  <p className="text-gray-600 mb-8">{membership.description}</p>

                  <div className="space-y-4 mb-8">
                    {membership.features.map((feature, i) => (
                      <div key={i} className="flex items-start text-gray-600">
                        <FiCheck className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      membership.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'bg-white border-2 border-pink-200 text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Limited Time{' '}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Offers
              </span>
            </h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">
              Take advantage of these exclusive offers and save on your favorite services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'New Client Special',
                discount: '25% OFF',
                description: 'Welcome to XYZ Salon! Enjoy 25% off your first service.',
                validUntil: 'First Visit Only',
                color: 'from-pink-500 to-rose-500'
              },
              {
                title: 'Student Discount',
                discount: '15% OFF',
                description: 'Show your valid student ID and save on all services.',
                validUntil: 'Ongoing',
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Refer a Friend',
                discount: 'FREE SERVICE',
                description: 'Refer a friend and both get a complimentary service.',
                validUntil: 'Limited Time',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${offer.color} rounded-3xl p-8 text-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                  <div className="text-4xl font-bold text-white mb-4">{offer.discount}</div>
                  <p className="text-white/90 mb-6">{offer.description}</p>
                  <div className="text-sm text-white/75 mb-6">{offer.validUntil}</div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-purple-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Claim Offer
                  </motion.button>
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Choose from our comprehensive services or exclusive packages. Our expert team is ready to help you look and feel your absolute best.
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

export default Pricing;