import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaCode, FaGlobe, FaShoppingCart, FaPalette, FaChartLine, FaArrowRight, FaCheck, FaLightbulb, FaHandshake, FaChartBar, FaRocket } from 'react-icons/fa';

const Consulting = () => {
  const benefits = [
    {
      icon: <FaLightbulb />,
      title: 'Strategic Guidance',
      desc: 'Expert advice and strategic planning to help you make informed decisions and achieve your business goals'
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership Approach',
      desc: 'We work as an extension of your team, providing ongoing support and collaboration'
    },
    {
      icon: <FaChartBar />,
      title: 'Measurable Results',
      desc: 'Data-driven recommendations and clear metrics to track progress and success'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We assess your current situation, challenges, goals, and opportunities through comprehensive analysis.'
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Developing customized strategies, roadmaps, and implementation plans tailored to your needs.'
    },
    {
      step: '03',
      title: 'Develop',
      desc: 'Executing the plan with your team, providing guidance, training, and hands-on support.'
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'Measuring results, optimizing strategies, and ensuring sustainable long-term success.'
    }
  ];

  const features = [
    'Business Strategy Consulting',
    'Technology Assessment',
    'Digital Transformation',
    'Process Optimization',
    'Team Training & Development',
    'Project Management',
    'Risk Assessment',
    'Performance Monitoring',
    'Scalability Planning',
    'Change Management'
  ];

  const relatedServices = [
    {
      title: 'Web Development',
      icon: <FaCode />,
      link: '/services/web-development',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'SaaS Development',
      icon: <FaGlobe />,
      link: '/services/saas-development',
      gradient: 'from-green-400 to-green-600'
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
      question: 'What types of businesses do you consult for?',
      answer: 'We work with startups, small businesses, and enterprise companies across various industries including technology, e-commerce, healthcare, finance, and manufacturing.'
    },
    {
      question: 'How long are consulting engagements?',
      answer: 'Engagements vary based on scope: strategic planning might be 1-3 months, while digital transformation projects can span 6-12 months or longer with ongoing support.'
    },
    {
      question: 'Do you provide ongoing support after consulting?',
      answer: 'Yes, we offer various levels of ongoing support including retainer agreements, quarterly reviews, and as-needed consulting to ensure continued success.'
    },
    {
      question: 'What makes your consulting approach different?',
      answer: 'We combine technical expertise with business acumen, focusing on practical, actionable solutions rather than theoretical advice. We measure success by your results.'
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
          <span className="text-white">Consulting</span>
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
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
              <FaUsers className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Consulting
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Strategic guidance and expert advice to help your business navigate challenges, seize opportunities, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Why Choose Our Consulting Services?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">We bring deep expertise and a results-oriented approach to help you solve complex business challenges.</p>
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
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
            <h2 className="text-3xl font-extrabold mb-4">Our Consulting Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A structured approach that combines analysis, strategy, and implementation for lasting results.</p>
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
              <h2 className="text-3xl font-extrabold mb-6">Comprehensive Consulting Services We Provide</h2>
              <p className="text-white/70 mb-8">From strategic planning to operational excellence, we provide the guidance you need to succeed.</p>

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
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-white/70 mb-6">Let's work together to identify opportunities and create a roadmap for success.</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:scale-105 transition">
                Start Your Consulting Project
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
            <p className="text-white/70 max-w-2xl mx-auto">Explore services that complement our consulting expertise.</p>
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
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">
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
            <p className="text-white/70">Common questions about our consulting services.</p>
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

export default Consulting;
