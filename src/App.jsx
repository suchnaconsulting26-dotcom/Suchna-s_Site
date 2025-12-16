// SuchnaSite.jsx
// Single-file React component for a responsive, bold, and clean IT agency website.
// Instructions:
// 1) Create a Vite + React + Tailwind project (or Next.js). Place this file as src/App.jsx (or a page).
// 2) Add Framer Motion: `npm install framer-motion`
// 3) Tailwind should be configured. Example classes are used throughout.
// 4) Put your logo at `public/logo.png` (the provided logo). Replace images in /public/portfolio/*.jpg
// 5) This file uses shadcn/ui component imports as optional — you can remove or replace if not installed.

import React from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import { useTheme } from './ThemeContext.jsx'
import Services from './Services.jsx'
import WebDevelopment from './WebDevelopment.jsx'
import SaaSDevelopment from './SaaSDevelopment.jsx'
import AIIntegration from './AIIntegration.jsx'
import UIUXBranding from './UIUXBranding.jsx'
import DigitalMarketing from './DigitalMarketing.jsx'
import Consulting from './Consulting.jsx'
import About from './about.jsx'
import Contact from './Contact.jsx'
import Work from './Work.jsx'

// Import video assets
import WebsiteDevelopmentVideo from './assets/Website Development.webm'
import SaaSDashboardVideo from './assets/SaaS Dashboard.webm'
import WebDesigningVideo from './assets/Web Designing.webm'
import ConsultingVideo from './assets/Consulting.webm'
import logoAnimate from './assets/logo-animate.gif'

export default function SuchnaSite() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const services = [
    {
      title: 'Web Design & Development',
      gif: WebsiteDevelopmentVideo,
      isGif: true
    },
    {
      title: 'Custom SaaS & ERPs',
      gif: SaaSDashboardVideo,
      isGif: true
    },
    {
      title: 'Graphic Design',
      gif: WebDesigningVideo,
      isGif: true
    },
    {
      title: 'Consultancy',
      gif: ConsultingVideo,
      isGif: true
    }
  ]

  const portfolio = [
    { title: 'Box-Craft ERP', img: '/ERP.jpg' },
    { title: 'Web Dev', img: 'Web_Dev.jpg' },
    { title: 'Suchna CRM', img: 'CRM.jpg' },
    { title: 'Outfit Generator', img: 'VW.png' }
  ]

  return (
    <Routes>
      <Route path="/" element={
        <div className={`min-h-screen antialiased ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
          {/* NAV */}
          <header className={`sticky top-0 z-40 backdrop-blur border-b ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-gray-50/80 border-gray-200'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <a href="#home" className="flex items-center gap-3">
                <img src="/logo.png" alt="Suchna Tech & Solutions" className="h-10 w-30 object-contain" />
                <div>
                  <div className="text-xl font-extrabold tracking-tight">Suchna Tech & Solutions</div>
                  <div className={`text-xs -mt-1 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Simple. Smart. Suchna.</div>
                </div>
              </a>

              <nav className="hidden md:flex gap-6 items-center">
                <Link to="/" className={`hover:text-teal-300 transition ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Home</Link>
                <Link to="/services" className={`hover:text-teal-300 transition ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Services</Link>
                <Link to="/work" className={`hover:text-teal-300 transition ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Work</Link>
                <Link to="/about" className={`hover:text-teal-300 transition ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About</Link>
                <a href="/contact" className="px-4 py-2 rounded-md bg-teal-500 text-black font-semibold hover:scale-105 transform transition">Contact</a>
              </nav>

              <button className={`md:hidden p-2 rounded-md border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>☰</button>
            </div>
          </header>

          {/* HERO */}
          <main id="home">
            <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
              <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">We build bold digital products that grow businesses.</h1>
                <p className={`mt-6 max-w-xl ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Suchna Tech & Solutions — expert web design, custom SaaS & ERP development, graphic design and high-ROI digital marketing. Clean, modern, and performance-driven.</p>

                <div className="mt-8 flex gap-4">
                  <Link to="/contact" className="px-6 py-3 rounded-lg bg-teal-500 text-black font-semibold shadow-lg hover:scale-105 transition">Start a Project</Link>
                  <Link to="/work" className={`px-6 py-3 rounded-lg border transition ${theme === 'dark' ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'}`}>See our work</Link>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">6+</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">12+</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">90%</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
                <div className={`rounded-2xl overflow-hidden border shadow-2xl p-6 ${theme === 'dark' ? 'border-white/5 bg-gradient-to-br from-neutral-800 to-neutral-700' : 'border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                  <img src={logoAnimate} alt="Logo Animation" className="w-full h-auto rounded-lg" />
                  <div className="px-2">
                    <h3 className="font-bold text-lg">Custom SaaS for analytics</h3>
                    <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Scalable stack, role-based access, and near real-time dashboards.</p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* SERVICES */}
            <section id="services" className={`py-14 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-extrabold">Services</h2>
                <p className={`mt-2 max-w-2xl ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>We cover everything from pixel-perfect frontends to complex backends and marketing that converts.</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((s, i) => (
                    <motion.div key={s.title} whileHover={{ y: -6 }} className={`p-6 rounded-xl border hover:shadow-lg transition ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                      {s.isGif ? (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <video
                            src={s.gif}
                            className="w-full h-30 object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                          </video>
                        </div>
                      ) : null}
                      <div className="text-sm text-teal-300 font-semibold">Service</div>
                      <h3 className="mt-3 font-bold text-lg">{s.title}</h3>
                      {s.desc && <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>{s.desc}</p>}
                      <div className="mt-4">
                        <a href="/services/web-development" className="text-sm font-semibold hover:text-teal-300 transition">Learn more →</a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* WORK / PORTFOLIO */}
            <section id="work" className="py-14">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-extrabold">Selected Work</h2>
                <p className={`mt-2 max-w-2xl ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Some projects we’re proud of. We focus on clarity, metrics, and design systems that scale.</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {portfolio.map((p) => (
                    <motion.div key={p.title} whileHover={{ scale: 1.03 }} className={`rounded-xl overflow-hidden border ${theme === 'dark' ? 'border-white/5 bg-black/30' : 'border-gray-200 bg-gray-50'}`}>
                      <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                      <div className="p-4">
                        <div className="font-bold">{p.title}</div>
                        <div className={`text-sm mt-2 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Case study summary — design, build and growth.</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ABOUT */}
            <section id="about" className={`py-14 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold">About Suchna Tech</h2>
                  <p className={`mt-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>We pair strategy and engineering to ship products that move the needle. Our process emphasizes user research, accessible UI, and measurable outcomes.</p>

                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <li className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>Design systems & UI kits</li>
                    <li className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>Cloud-native & serverless</li>
                    <li className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>Performance & security audits</li>
                    <li className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>Growth & analytics</li>
                  </ul>
                </div>

                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className={`rounded-xl p-6 border ${theme === 'dark' ? 'bg-gradient-to-br from-neutral-800 to-neutral-700 border-white/5' : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-200'}`}>
                  <h3 className="font-bold">Our Offer</h3>
                  <p className={`mt-3 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Project scoping, prototypes, MVPs, long-term product development and marketing retainers — choose what fits.</p>

                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <div className={`flex items-center justify-between px-4 py-3 rounded-md ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-100'}`}>
                      <div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>Avg. project timeline</div>
                        <div className="font-bold">6 - 12 weeks</div>
                      </div>
                      <div className="text-sm text-teal-300 font-semibold">Fixed-price or Retainer</div>
                    </div>

                    <div className={`flex items-center justify-between px-4 py-3 rounded-md ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-100'}`}>
                      <div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>Support</div>
                        <div className="font-bold">SLA-backed</div>
                      </div>
                      <div className="text-sm text-teal-300 font-semibold">24/7</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="py-14">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-extrabold">Let’s build something great</h2>
                <p className={`mt-2 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>Tell us about your project or book a free consultation.</p>

                <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will get back shortly.'); }}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input aria-label="Name" required placeholder="Your name" className={`p-3 rounded-md border ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-gray-200'}`} />
                    <input aria-label="Email" required type="email" placeholder="Email" className={`p-3 rounded-md border ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-gray-200'}`} />
                  </div>
                  <input aria-label="Company" placeholder="Company (optional)" className={`p-3 rounded-md border ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-gray-200'}`} />
                  <textarea aria-label="Message" required placeholder="Describe your project" rows={6} className={`p-3 rounded-md border ${theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-gray-50 border-gray-200'}`} />

                  <div className="flex items-center gap-4">
                    <button type="submit" className="px-5 py-3 rounded-lg bg-teal-500 text-black font-semibold">Send message</button>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>Or email us at <a href="mailto:suchna.technsolutions@gmail.com" className="text-teal-300">suchna.technsolutions@gmail.com</a></div>
                  </div>
                </motion.form>
              </div>
            </section>


          </main>

          {/* FLOATING BADGE */}
          <Link to="/contact" className="fixed bottom-6 right-6 bg-teal-500 text-black px-4 py-2 rounded-full shadow-xl font-semibold hover:scale-105 transform transition">Start a Project</Link>

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
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-teal-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
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
      } />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/saas-development" element={<SaaSDevelopment />} />
      <Route path="/services/ai-integration" element={<AIIntegration />} />
      <Route path="/services/ui-ux-branding" element={<UIUXBranding />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/consulting" element={<Consulting />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
