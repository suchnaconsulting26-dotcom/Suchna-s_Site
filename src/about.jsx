import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';

const About = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen antialiased ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
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

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            About Suchna Tech & Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Empowering businesses with innovative technology solutions since 2023
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-white/70 mb-6">
                At Suchna Tech & Solutions, we believe in the power of technology to transform businesses. Our mission is to deliver simple, smart, and scalable digital solutions that drive growth and innovation.
              </p>
              <p className="text-white/70 mb-6">
                We specialize in web development, SaaS platforms, AI integrations, UI/UX design, digital marketing, and strategic consulting. Our approach combines cutting-edge technology with user-centric design to create products that not only look great but perform exceptionally.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-white/80">User research and accessible design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-white/80">Performance-driven development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-white/80">Measurable business outcomes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-white/80">Scalable and secure solutions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-xl p-8 border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Experience</span>
                  <span className="font-bold text-teal-300">6+ Months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Projects Completed</span>
                  <span className="font-bold text-teal-300">12+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Happy Clients</span>
                  <span className="font-bold text-teal-300">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Client Satisfaction</span>
                  <span className="font-bold text-teal-300">90%</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-white/70 text-sm">
                  We work closely with our clients to understand their unique challenges and deliver tailored solutions that exceed expectations.
                </p>
              </div>
            </motion.div>
          </div>


          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-extrabold mb-6 text-center">Our Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-12 text-center">
              We follow a proven methodology to deliver exceptional results, from concept to launch and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Discovery</h3>
                <p className="text-white/70 text-sm">Understanding your goals, audience, and requirements through research and consultation.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Design</h3>
                <p className="text-white/70 text-sm">Creating wireframes, prototypes, and visual designs that align with your brand and user needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Development</h3>
                <p className="text-white/70 text-sm">Building robust, scalable solutions using modern technologies and best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Launch & Support</h3>
                <p className="text-white/70 text-sm">Deploying your solution and providing ongoing maintenance and optimization.</p>
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-extrabold mb-6">Technologies We Use</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              We leverage cutting-edge technologies to build fast, secure, and scalable digital solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Tailwind CSS', 'Machine Learning', 'PyTorch', 'TensorFlow', 'Next.js', 'Firebase', 'Django', 'Vercel', 'Flutter', 'Flask', 'React Native', 'Vue.js', 'Docker', 'AWS', 'N8N'].map((tech) => (
                <div key={tech} className="bg-black/30 rounded-lg p-4 border border-white/5 hover:border-teal-500 transition">
                  <div className="font-semibold text-teal-300">{tech}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-extrabold mb-2">Meet Our Team</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-12">
              Our diverse team of passionate technologists, designers, and strategists work together to deliver exceptional results for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  initials: 'DP',
                  name: 'Dev Patel',
                  role: 'Founder & CEO',
                  desc: '15+ years in technology consulting with expertise in digital transformation and business strategy.'
                },
                {
                  initials: 'HR',
                  name: 'Hitendra Rathod',
                  role: 'Co-Founder & AI-Expert',
                  desc: 'Full-stack architect passionate about building scalable, innovative solutions for modern businesses.'
                },
                {
                  initials: 'SP',
                  name: 'Sach Panchal',
                  role: 'Head of Design',
                  desc: 'Award-winning designer focused on creating intuitive, beautiful user experiences.'
                },
                
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 rounded-xl p-6 border border-white/5 transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-teal-300 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl p-8 border border-teal-500/20"
          >
            <h2 className="text-3xl font-extrabold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with innovative solutions tailored to your needs.
            </p>
            <Link to="/#contact" className="inline-block px-8 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:scale-105 transition">
              Start Your Project
            </Link>
          </motion.div>
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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg className={`w-5 h-5 ${theme === 'dark' ? 'fill-white' : 'fill-black'} hover:fill-black`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg className={`w-5 h-5 ${theme === 'dark' ? 'fill-white' : 'fill-black'} hover:fill-black`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/5uchna/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  <svg className={`w-5 h-5 ${theme === 'dark' ? 'fill-white' : 'fill-black'} hover:fill-black`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
              <img src="/logo.png" alt="logo" className="h-10 w-20 object-contain" />
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

export default About;
