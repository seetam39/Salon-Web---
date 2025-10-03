import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiGift, FiAward, FiHeart, FiZap, FiCheck, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Loyalty = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const tabs = [
    { id: 'benefits', name: 'Program Benefits', icon: FiGift },
    { id: 'tiers', name: 'Membership Tiers', icon: FiCrown },
    { id: 'rewards', name: 'Rewards Catalog', icon: FiStar },
    { id: 'faq', name: 'FAQ', icon: FiHeart }
  ];

  const benefits = [
    {
      icon: FiGift,
      title: 'Earn Points on Every Visit',
      description: 'Earn 1 point for every $1 spent on services and products',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FiStar,
      title: 'Exclusive Member Discounts',
      description: 'Enjoy special pricing on all services and premium products',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiCrown,
      title: 'Priority Booking Access',
      description: 'Skip the waitlist and book prime appointment slots',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiHeart,
      title: 'Birthday Month Perks',
      description: 'Special treats and complimentary services during your birthday month',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FiZap,
      title: 'Bonus Point Events',
      description: 'Earn double or triple points during special promotional periods',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FiUsers,
      title: 'Referral Rewards',
      description: 'Earn bonus points for every friend you refer to our salon',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const tiers = [
    {
      name: 'Bronze',
      points: '0-999',
      color: 'from-amber-400 to-orange-500',
      benefits: [
        'Earn 1 point per $1 spent',
        '10% off products',
        'Birthday month card',
        'Member-only newsletter'
      ],
      icon: FiStar
    },
    {
      name: 'Silver',
      points: '1,000-4,999',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Earn 1.5 points per $1 spent',
        '15% off all services',
        'Priority booking',
        'Free birthday service',
        'Exclusive events access'
      ],
      icon: FiAward,
      popular: true
    },
    {
      name: 'Gold',
      points: '5,000-9,999',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Earn 2 points per $1 spent',
        '25% off all services',
        'VIP priority booking',
        'Monthly complimentary service',
        'Personal stylist consultation',
        'Partner salon access'
      ],
      icon: FiCrown
    },
    {
      name: 'Platinum',
      points: '10,000+',
      color: 'from-purple-400 to-purple-600',
      benefits: [
        'Earn 2.5 points per $1 spent',
        '35% off all services',
        'Immediate booking access',
        'Unlimited complimentary services',
        'Dedicated beauty consultant',
        'Exclusive VIP events',
        'Premium product gift sets'
      ],
      icon: FiCrown
    }
  ];

  const rewards = [
    { points: 100, reward: '10% off next service', category: 'Discount' },
    { points: 250, reward: 'Complimentary eyebrow shaping', category: 'Service' },
    { points: 500, reward: 'Free haircut & styling', category: 'Service' },
    { points: 750, reward: 'Classic facial treatment', category: 'Treatment' },
    { points: 1000, reward: '25% off entire service package', category: 'Discount' },
    { points: 1500, reward: 'Premium hair treatment', category: 'Treatment' },
    { points: 2000, reward: 'Complete spa day package', category: 'Package' },
    { points: 3000, reward: 'Bridal package (hair & makeup)', category: 'Package' }
  ];

  const faqs = [
    {
      question: 'How do I join the loyalty program?',
      answer: 'Simply visit us for any service and ask our staff to enroll you. It\'s completely free to join and you\'ll start earning points immediately!'
    },
    {
      question: 'Do my points expire?',
      answer: 'Points are valid for 2 years from the date they are earned. We\'ll send you reminders before any points expire.'
    },
    {
      question: 'Can I combine loyalty discounts with other offers?',
      answer: 'Loyalty program discounts can be combined with most promotional offers, but cannot be combined with other discount programs or gift certificates.'
    },
    {
      question: 'How do I check my points balance?',
      answer: 'You can check your points balance by logging into your account on our website, through our mobile app, or by asking any staff member during your visit.'
    },
    {
      question: 'Can I transfer points to another person?',
      answer: 'Points are non-transferable and can only be used by the account holder. However, you can use your points to purchase gift certificates for others.'
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
              Loyalty{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Program
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive loyalty program and unlock amazing rewards, exclusive discounts, and VIP treatment on every visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FiUsers, number: '5000+', label: 'Active Members' },
              { icon: FiGift, number: '$50K+', label: 'Rewards Given' },
              { icon: FiTrendingUp, number: '98%', label: 'Member Satisfaction' },
              { icon: FiAward, number: '15+', label: 'Years Running' }
            ].map((stat, index) => (
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

      {/* Tab Navigation */}
      <section className="py-12 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Benefits</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover all the amazing benefits you'll enjoy as a valued member of our loyalty program.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <benefit.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tiers Tab */}
          {activeTab === 'tiers' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Membership Tiers</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Unlock higher tiers and better benefits as you accumulate points and visit more frequently.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      tier.popular ? 'ring-2 ring-pink-500' : ''
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}

                    <div className={`p-8 bg-gradient-to-br ${tier.color}`}>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <tier.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-white/90 mb-6">{tier.points} points</p>
                    </div>

                    <div className="p-8">
                      <div className="space-y-3">
                        {tier.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-gray-600">
                            <FiCheck className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Rewards Catalog</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Redeem your hard-earned points for amazing rewards and exclusive services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rewards.map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{reward.points}</span>
                    </div>
                    <div className="text-2xl font-bold text-pink-600 mb-2">{reward.points}</div>
                    <p className="text-gray-900 font-medium mb-2">{reward.reward}</p>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs">
                      {reward.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about our loyalty program.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Join
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Joining our loyalty program is quick, easy, and completely free!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Visit Us',
                description: 'Come in for any service or simply stop by to enroll'
              },
              {
                step: '02',
                title: 'Sign Up',
                description: 'Our staff will help you create your membership account'
              },
              {
                step: '03',
                title: 'Start Earning',
                description: 'Begin earning points immediately on all purchases'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Ready to Start Earning Rewards?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied members who are already enjoying exclusive benefits, priority access, and amazing rewards at XYZ Salon.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Now - It's Free!
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Loyalty;