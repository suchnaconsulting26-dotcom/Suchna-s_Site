import React, { useState } from 'react';
import { FaBolt, FaUserTie, FaBullseye, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration - read from Vite env vars
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('Email is not configured. Please set EmailJS keys in your .env file (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      interest: formData.interest,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Thanks — we will get back to you shortly.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Sorry, there was an error sending your message. Please try again or contact us directly at suchna.technsolutions@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
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
            <a href="/work" className="hover:text-teal-300 transition">Work</a>
            <Link to="/about" className="hover:text-teal-300 transition">About</Link>
            <Link to="/contact" className="px-4 py-2 rounded-md bg-teal-500 text-black font-semibold hover:scale-105 transform transition">Contact</Link>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-white/10">☰</button>
        </div>
      </header>

      {/* HERO CTA */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Your Vision, Our <span className="text-blue-500">Expertise</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">Have an idea or project in mind? Let's discuss it over WhatsApp — fast, personal, and hassle-free.</p>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">Start on WhatsApp <span className="text-white/90">💬</span></a>
        </div>
      </section>

      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-xl p-8 border border-white/5"
          >
            <h1 className="text-3xl font-extrabold mb-3">Get in touch</h1>
            <p className="text-white/70 mb-6">Tell us about your project, request a quote, or say hello — we usually respond within 1 business day.</p>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Name"
                required
                placeholder="Full name"
                className="p-3 rounded-md bg-black/20 border border-white/5"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email"
                required
                type="email"
                placeholder="Email"
                className="p-3 rounded-md bg-black/20 border border-white/5"
              />
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                aria-label="Company"
                placeholder="Company (optional)"
                className="p-3 rounded-md bg-black/20 border border-white/5"
              />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="p-3 rounded-md bg-black/20 border border-white/5"
              >
                <option>I'm interested in...</option>
                <option>Web Development</option>
                <option>SaaS Development</option>
                <option>AI Integration</option>
                <option>Design & Branding</option>
                <option>Marketing</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                required
                placeholder="Describe your project or question"
                rows={6}
                className="p-3 rounded-md bg-black/20 border border-white/5"
              />

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-3 rounded-lg bg-teal-500 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
                <a href="mailto:suchna.technsolutions@gmail.com" className="text-sm text-white/60">Or email us at <span className="text-teal-300">suchna.technsolutions@gmail.com</span></a>
              </div>
            </form>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-white/80">Office</div>
                <div className="font-bold">Suchna Consulting & Co</div>
                <div className="text-white/60">123 Digital Lane, Kathmandu, Nepal</div>
              </div>

              <div>
                <div className="text-sm text-white/80">Phone</div>
                <div className="font-bold">+977 1 234 5678</div>
                <div className="text-sm text-white/60 mt-2">Mon — Fri, 9am — 6pm</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div className="w-full h-80 bg-black/20 rounded-xl overflow-hidden border border-white/5">
              <iframe
                title="map"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.7598315101773!2d73.46637257529879!3d22.516379279531822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39608172c1587637%3A0x4f94a56b6b949a2e!2sSuchna%20Consulting!5e1!3m2!1sen!2sin!4v1763739238075!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 bg-black/30 rounded-xl p-6 border border-white/5">
              <h3 className="font-bold text-lg mb-2">Other ways to reach us</h3>
              <ul className="space-y-3 text-white/70">
                <li>Email: <a href="mailto:suchna.technsolutions@gmail.com" className="text-teal-300">suchna.technsolutions@gmail.com</a></li>
                <li>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-teal-300">/suchnaconsulting</a></li>
                <li>Twitter: <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-teal-300">@suchna</a></li>
              </ul>
            </div>

            {/* Why Contact Us card (from provided image) */}
            <div className="mt-6 bg-gradient-to-br from-neutral-800/40 to-neutral-900/30 rounded-xl p-6 border border-white/5">
              <h3 className="text-2xl font-extrabold mb-4">Why Contact Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center mt-1">
                    <FaBolt />
                  </div>
                  <div>
                    <div className="font-semibold">Quick Response</div>
                    <div className="text-white/70 text-sm">We respond within 1-2 hours during business hours</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center mt-1">
                    <FaUserTie />
                  </div>
                  <div>
                    <div className="font-semibold">Expert Consultation</div>
                    <div className="text-white/70 text-sm">Free 30-minute consultation to discuss your project</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center mt-1">
                    <FaBullseye />
                  </div>
                  <div>
                    <div className="font-semibold">Tailored Solutions</div>
                    <div className="text-white/70 text-sm">Custom proposals based on your specific needs</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <div className="font-semibold">No Obligation</div>
                    <div className="text-white/70 text-sm">Free quotes with no commitment required</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

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
                    <li><Link to="/services/ai-integration" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>AI Integration</Link></li>
                    <li><Link to="/services/ui-ux-branding" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>UI/UX & Branding</Link></li>
                    <li><Link to="/services/digital-marketing" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Digital Marketing</Link></li>
                    <li><Link to="/services/consulting" className={`text-sm hover:text-teal-300 transition ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Consulting</Link></li>
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
}
