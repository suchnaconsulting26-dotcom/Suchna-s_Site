import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';
import { FaChartLine, FaCode, FaGlobe, FaMicrochip, FaPalette, FaUsers, FaArrowRight, FaCheck, FaBullhorn, FaSearch, FaUsers as FaTarget, FaRocket } from 'react-icons/fa';

const DigitalMarketing = () => {
  const { theme } = useTheme();

  const benefits = [
    {
      icon: <FaBullhorn />,
      title: 'Multi-Channel Reach',
      desc: 'Comprehensive marketing strategies across all digital platforms to maximize your audience reach'
    },
    {
      icon: <FaSearch />,
      title: 'Data-Driven Results',
      desc: 'Analytics and insights that guide strategic decisions and optimize campaign performance'
    },
    {
      icon: <FaTarget />,
      title: 'Targeted Campaigns',
      desc: 'Precise audience targeting that delivers the right message to the right people at the right time'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We analyze your business goals, target audience, competitors, and current marketing efforts to create a strategic roadmap.'
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Crafting comprehensive marketing strategies, campaign plans, and content calendars tailored to your objectives.'
    },
    {
      step: '03',
      title: 'Develop',
      desc: 'Implementing campaigns across multiple channels with tracking, optimization, and performance monitoring.'
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'Ongoing campaign management, reporting, and strategic adjustments to maximize ROI.'
    }
  ];

  const features = [
    'SEO Optimization',
    'PPC Advertising',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Conversion Rate Optimization',
    'Analytics & Reporting',
    'Brand Awareness Campaigns',
    'Lead Generation',
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
      title: 'AI Integration',
      icon: <FaMicrochip />,
      link: '/services/ai-integration',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: 'UI/UX & Branding',
      icon: <FaPalette />,
      link: '/services/ui-ux-branding',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];

  const faqs = [
    {
      question: 'What digital marketing services do you offer?',
      answer: 'We provide comprehensive digital marketing including SEO, PPC advertising, social media marketing, content marketing, email marketing, and conversion rate optimization.'
    },
    {
      question: 'How do you measure marketing success?',
      answer: 'We use advanced analytics tools to track KPIs like website traffic, conversion rates, ROI, customer acquisition cost, and lifetime value. We provide detailed monthly reports.'
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary by service: SEO typically shows results in 3-6 months, PPC can show immediate results, and social media marketing can build momentum within 1-3 months.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes, we create customized strategies for startups, small businesses, and enterprise companies. Our approach scales based on your budget and goals.'
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
            <Link to="/work" className="hover:text-teal-300 transition">Work</Link>
            <Link to="/about" className="hover:text-teal-300 transition">About</Link>
            <Link to="/contact" className="px-4 py-2 rounded-md bg-teal-500 text-black font-semibold hover:scale-105 transform transition">Contact</Link>
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
          <span className="text-white">Digital Marketing</span>
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
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
              <FaChartLine className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Digital Marketing
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers across all digital channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Why Choose Our Digital Marketing Services?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">We combine strategic thinking with proven tactics to deliver measurable results that grow your business.</p>
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
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
            <h2 className="text-3xl font-extrabold mb-4">Our Marketing Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A systematic approach that combines strategy, execution, and continuous optimization for maximum impact.</p>
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
              <h2 className="text-3xl font-extrabold mb-6">Comprehensive Marketing Services We Provide</h2>
              <p className="text-white/70 mb-8">Full-spectrum digital marketing solutions that cover every aspect of your online presence and growth strategy.</p>

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
              <h3 className="text-xl font-bold mb-4">Ready to Grow Your Digital Presence?</h3>
              <p className="text-white/70 mb-6">Let's create a marketing strategy that drives real results and scales your business.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:scale-105 transition">
                Start Your Marketing Campaign
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
            <p className="text-white/70 max-w-2xl mx-auto">Explore services that complement our marketing expertise.</p>
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
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-xl">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <div className="flex items-center text-teal-400 font-medium group-hover:text-teal-300 transition-colors duration-300">
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
            <p className="text-white/70">Common questions about our digital marketing services.</p>
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

      {/* ENHANCED FOOTER */}
      <footer className={`py-16 border-t ${theme === 'dark' ? 'bg-neutral-900 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-extrabold mb-4">Suchna Tech & Solutions</h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Premium IT solutions for modern businesses. Transform your digital presence with our innovative services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Home</Link></li>
                <li><Link to="/about" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>About</Link></li>
                <li><Link to="/services" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Services</Link></li>
                <li><Link to="/contact" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/web-development" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Web Development</Link></li>
                <li><Link to="/services/saas-development" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>SaaS/CRM Development</Link></li>
                <li><Link to="/services/ui-ux-branding" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Graphic Designing</Link></li>
                <li><Link to="/services/digital-marketing" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Social Media Marketing</Link></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/109125253/admin/dashboard/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg className={`w-5 h-5 ${theme === 'dark' ? 'fill-white' : 'fill-black'} hover:fill-black`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="https://x.com/SuchnaT_S" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg className={`w-5 h-5 ${theme === 'dark' ? 'fill-white' : 'fill-black'} hover:fill-black`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/5uchna/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </a>
                {/* Email */}
                <a href="mailto:suchna.technsolutions@gmail.com" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg className={`w-5 h-5 ${theme === 'dark' ? 'fill-white' : 'fill-black'} hover:fill-black`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t mb-6 ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}></div>

          {/* Original Footer */}
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="logo" className="h-8 w-16 object-contain" />
              <div>
                <div className="font-bold">Suchna Tech & Solutions</div>
                <div className="text-xs">Simple • Smart • Suchna</div>
              </div>
            </div>
            <div>© {new Date().getFullYear()} Suchna Consulting & Co — All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalMarketing;
