import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaGlobe, FaShoppingCart, FaPalette, FaChartLine, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <FaCode />,
      gradient: 'from-blue-400 to-blue-600',
      description: 'Custom websites, web apps, and performance-optimized solutions',
      link: '/services/web-development'
    },
    {
      title: 'SaaS Development',
      icon: <FaGlobe />,
      gradient: 'from-green-400 to-green-600',
      description: 'Scalable SaaS platforms, dashboards, and automation solutions',
      link: '/services/saas-development'
    },
    {
      title: 'E-commerce',
      icon: <FaShoppingCart />,
      gradient: 'from-purple-400 to-purple-600',
      description: 'Online stores, payment systems, and conversion optimization',
      link: '/services/e-commerce'
    },
    {
      title: 'UI/UX & Branding',
      icon: <FaPalette />,
      gradient: 'from-pink-400 to-pink-600',
      description: 'Design systems, brand identity, and user experience optimization',
      link: '/services/ui-ux-branding'
    },
    {
      title: 'Digital Marketing',
      icon: <FaChartLine />,
      gradient: 'from-teal-400 to-teal-600',
      description: 'SEO, social media, campaigns, and growth strategies',
      link: '/services/digital-marketing'
    },
    {
      title: 'Consulting',
      icon: <FaUsers />,
      gradient: 'from-cyan-400 to-cyan-600',
      description: 'Business strategy, tech consulting, and scaling frameworks',
      link: '/services/consulting'
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
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your unique needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
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
    </div>
  );
};

export default Services;
