import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPalette, FaCode, FaGlobe, FaShoppingCart, FaChartLine, FaUsers, FaArrowRight, FaCheck, FaLightbulb, FaHeart, FaEye, FaRocket } from 'react-icons/fa';

const UIUXBranding = () => {
  const benefits = [
    {
      icon: <FaLightbulb />,
      title: 'User-Centered Design',
      desc: 'Every design decision focused on enhancing user experience and achieving business goals'
    },
    {
      icon: <FaHeart />,
      title: 'Brand Consistency',
      desc: 'Cohesive visual identity that builds recognition and trust across all touchpoints'
    },
    {
      icon: <FaEye />,
      title: 'Visual Excellence',
      desc: 'Stunning, modern designs that captivate users and drive engagement'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We research your audience, analyze competitors, and understand your brand values to create a strategic design foundation.'
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Crafting comprehensive brand identities, UI/UX designs, and design systems that scale across platforms.'
    },
    {
      step: '03',
      title: 'Develop',
      desc: 'Building design systems, style guides, and implementing designs with pixel-perfect precision.'
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'Final deliverables, brand guidelines, and ongoing design support to maintain consistency.'
    }
  ];

  const features = [
    'Brand Identity Design',
    'Logo & Visual Assets',
    'UI/UX Design',
    'Design System Creation',
    'User Research & Testing',
    'Prototyping & Wireframing',
    'Accessibility Compliance',
    'Cross-Platform Consistency',
    'Brand Guidelines',
    'Design Maintenance'
  ];

  const relatedServices = [
    {
      title: 'Web Development',
      icon: <FaCode />,
      link: '/services/web-development',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'E-commerce',
      icon: <FaShoppingCart />,
      link: '/services/e-commerce',
      gradient: 'from-purple-400 to-purple-600'
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
      question: 'What does UI/UX design include?',
      answer: 'UI/UX design encompasses user interface design (visual elements, layouts, interactions) and user experience design (user research, information architecture, usability testing).'
    },
    {
      question: 'How do you ensure brand consistency across platforms?',
      answer: 'We create comprehensive design systems and brand guidelines that include color palettes, typography, iconography, and usage rules that work across web, mobile, and print.'
    },
    {
      question: 'Do you conduct user research and testing?',
      answer: 'Yes, we follow a user-centered design process including user interviews, usability testing, A/B testing, and analytics-driven iterations to ensure optimal user experiences.'
    },
    {
      question: 'Can you work with existing brand guidelines?',
      answer: 'Absolutely. We can refresh existing brands, extend brand applications to new platforms, or create entirely new brand identities based on your vision.'
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
          <span className="text-white">UI/UX & Branding</span>
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
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
              <FaPalette className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              UI/UX & Branding
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive design solutions that create memorable brand experiences and intuitive user interfaces that drive engagement and conversions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Why Choose Our Design Services?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">We combine strategic thinking with creative excellence to build brands and experiences that resonate with your audience.</p>
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
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
            <h2 className="text-3xl font-extrabold mb-4">Our Design Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A strategic approach that combines research, creativity, and user-centered design principles.</p>
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
              <h2 className="text-3xl font-extrabold mb-6">Comprehensive Design Services We Offer</h2>
              <p className="text-white/70 mb-8">From brand strategy to implementation, we provide end-to-end design solutions that elevate your business.</p>

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
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Brand?</h3>
              <p className="text-white/70 mb-6">Let's create designs that not only look beautiful but drive real business results.</p>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:scale-105 transition">
                Start Your Design Project
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
            <p className="text-white/70 max-w-2xl mx-auto">Explore services that complement our design expertise.</p>
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
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <div className="flex items-center text-pink-400 font-medium group-hover:text-pink-300 transition-colors duration-300">
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
            <p className="text-white/70">Common questions about our UI/UX and branding services.</p>
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

export default UIUXBranding;
