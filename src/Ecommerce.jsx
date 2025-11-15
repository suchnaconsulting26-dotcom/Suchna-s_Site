import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCode, FaGlobe, FaPalette, FaChartLine, FaUsers, FaArrowRight, FaCheck, FaCreditCard, FaTruck, FaShieldAlt, FaRocket } from 'react-icons/fa';

const Ecommerce = () => {
  const benefits = [
    {
      icon: <FaCreditCard />,
      title: 'Secure Payments',
      desc: 'Multiple payment gateways with PCI compliance and fraud protection'
    },
    {
      icon: <FaTruck />,
      title: 'Seamless Logistics',
      desc: 'Integrated shipping, inventory, and order management systems'
    },
    {
      icon: <FaRocket />,
      title: 'Conversion Optimized',
      desc: 'User experience designed to maximize sales and reduce cart abandonment'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We analyze your products, target market, and business goals to create a strategic e-commerce roadmap.'
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Crafting conversion-focused UI/UX designs with seamless checkout flows and mobile optimization.'
    },
    {
      step: '03',
      title: 'Develop',
      desc: 'Building robust e-commerce platforms with secure payments, inventory management, and analytics.'
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'Launch, testing, and ongoing optimization to ensure your online store thrives.'
    }
  ];

  const features = [
    'Secure Payment Integration',
    'Inventory Management',
    'Order Processing',
    'Customer Management',
    'Analytics & Reporting',
    'Mobile Optimization',
    'SEO Optimization',
    'Multi-channel Sales',
    'Shipping Integration',
    'Marketing Automation'
  ];

  const relatedServices = [
    {
      title: 'Web Development',
      icon: <FaCode />,
      link: '/services/web-development',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'UI/UX & Branding',
      icon: <FaPalette />,
      link: '/services/ui-ux-branding',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Digital Marketing',
      icon: <FaChartLine />,
      link: '/services/digital-marketing',
      gradient: 'from-teal-400 to-teal-600'
    }
  ];

  const faqs = [
    {
      question: 'What e-commerce platforms do you work with?',
      answer: 'We specialize in custom e-commerce solutions, Shopify, WooCommerce, Magento, and BigCommerce. We choose the best platform based on your specific needs.'
    },
    {
      question: 'How do you ensure secure online payments?',
      answer: 'We integrate PCI-compliant payment gateways like Stripe, PayPal, and Authorize.net with additional security measures including SSL certificates and fraud detection.'
    },
    {
      question: 'Can you integrate with existing inventory systems?',
      answer: 'Yes, we can integrate with existing ERP systems, POS systems, and inventory management tools to ensure real-time stock updates and seamless operations.'
    },
    {
      question: 'What about mobile commerce and responsive design?',
      answer: 'All our e-commerce solutions are mobile-first, ensuring optimal performance across all devices. We also offer Progressive Web App (PWA) capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Suchna Tech & Solutions" className="h-10 w-30 object-contain" />
            <div>
              <div className="text-xl font-extrabold tracking-tight">Suchna Tech & Solutions</div>
              <div className="text-xs text-white/60 -mt-1">Simple. Smart. Suchna.</div>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-teal-300 transition">Home</Link>
            <Link to="/services" className="hover:text-teal-300 transition">Services</Link>
            <a href="/#work" className="hover:text-teal-300 transition">Work</a>
            <a href="/#about" className="hover:text-teal-300 transition">About</a>
            <a href="/#contact" className="px-4 py-2 rounded-md bg-teal-500 text-black font-semibold hover:scale-105 transform transition">Contact</a>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-white/10">☰</button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="text-sm text-white/60">
          <Link to="/" className="hover:text-teal-300 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-teal-300 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-white">E-commerce</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
              <FaShoppingCart className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              E-commerce Solutions
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete online stores with secure payments, inventory management, and conversion-optimized user experiences that drive sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Why Choose Our E-commerce Solutions?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">We build online stores that not only look great but convert visitors into loyal customers with seamless shopping experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Our E-commerce Development Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A proven methodology focused on creating conversion-optimized online stores that drive revenue growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-teal-500 text-black rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Essential E-commerce Features We Deliver</h2>
              <p className="text-white/70 mb-8">Every online store includes comprehensive features and best practices for successful e-commerce operations.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className="text-teal-400 text-sm" />
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-xl p-8 border border-white/5"
            >
              <h3 className="text-xl font-bold mb-4">Ready to Launch Your Online Store?</h3>
              <p className="text-white/70 mb-6">Let's create an e-commerce platform that turns visitors into customers and drives revenue growth.</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:scale-105 transition">
                Start Your E-commerce Project
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Related Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Explore complementary services that can enhance your e-commerce platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">
                      Learn More
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70">Common questions about our e-commerce development services.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-3 text-teal-300">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="h-10 w-20 object-contain" />
            <div>
              <div className="font-bold">Suchna Tech & Solutions</div>
              <div className="text-xs text-white/60">Simple • Smart • Suchna</div>
            </div>
          </div>

          <div className="text-sm text-white/60">© {new Date().getFullYear()} Suchna Consulting & Co — All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Ecommerce;
