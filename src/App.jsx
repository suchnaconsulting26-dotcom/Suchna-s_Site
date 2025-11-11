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

export default function SuchnaSite() {
  const services = [
    {
      title: 'Web Design & Development',
      desc: 'Beautiful, performance-first responsive websites and progressive web apps.'
    },
    {
      title: 'Custom SaaS & ERPs',
      desc: 'Scalable multi-tenant SaaS and tailored ERP systems with secure auth & analytics.'
    },
    {
      title: 'Graphic Design',
      desc: 'Brand identities, marketing creatives, UI assets and motion-ready visuals.'
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO, paid ads, content, and conversion-driven campaigns.'
    }
  ]

  const portfolio = [
    { title: 'Box-Craft ERP', img: '/ERP.jpg'},
    { title: 'Web Dev', img: 'Web_Dev.jpg' },
    { title: 'Suchna CRM', img: 'CRM.jpg' },
    { title: 'Outfit Generator', img: 'VW.png' }
  ]

  return (
    <div className="min-h-screen bg-neutral-900 text-white antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Suchna Tech & Solutions" className="h-10 w-30 object-contain" />
            <div>
              <div className="text-xl font-extrabold tracking-tight">Suchna Tech & Solutions</div>
              <div className="text-xs text-white/60 -mt-1">Simple. Smart. Suchna.</div>
            </div>
          </a>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#services" className="hover:text-teal-300 transition">Services</a>
            <a href="#work" className="hover:text-teal-300 transition">Work</a>
            <a href="#about" className="hover:text-teal-300 transition">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-teal-500 text-black font-semibold hover:scale-105 transform transition">Contact</a>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-white/10">☰</button>
        </div>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">We build bold digital products that grow businesses.</h1>
            <p className="mt-6 text-white/70 max-w-xl">Suchna Tech & Solutions — expert web design, custom SaaS & ERP development, graphic design and high-ROI digital marketing. Clean, modern, and performance-driven.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-6 py-3 rounded-lg bg-teal-500 text-black font-semibold shadow-lg hover:scale-105 transition">Start a Project</a>
              <a href="#work" className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition">See our work</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-xs text-white/60">Months</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-xs text-white/60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs text-white/60">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-xs text-white/60">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-gradient-to-br from-neutral-800 to-neutral-700 p-6">
              <img src="/showcase.jpg" alt="Showcase" className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-105 transition" />
              <div className="px-2">
                <h3 className="font-bold text-lg">Custom SaaS for analytics</h3>
                <p className="text-sm text-white/70 mt-2">Scalable stack, role-based access, and near real-time dashboards.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-14 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold">Services</h2>
            <p className="text-white/70 mt-2 max-w-2xl">We cover everything from pixel-perfect frontends to complex backends and marketing that converts.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div key={s.title} whileHover={{ y: -6 }} className="p-6 rounded-xl bg-black/40 border border-white/5 hover:shadow-lg transition">
                  <div className="text-sm text-teal-300 font-semibold">Service</div>
                  <h3 className="mt-3 font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="#contact" className="text-sm font-semibold hover:text-teal-300 transition">Get a quote →</a>
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
            <p className="text-white/70 mt-2 max-w-2xl">Some projects we’re proud of. We focus on clarity, metrics, and design systems that scale.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((p) => (
                <motion.div key={p.title} whileHover={{ scale: 1.03 }} className="rounded-xl overflow-hidden border border-white/5 bg-black/30">
                  <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <div className="font-bold">{p.title}</div>
                    <div className="text-sm text-white/60 mt-2">Case study summary — design, build and growth.</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-14 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold">About Suchna Tech</h2>
              <p className="text-white/70 mt-4">We pair strategy and engineering to ship products that move the needle. Our process emphasizes user research, accessible UI, and measurable outcomes.</p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="text-sm text-white/80">Design systems & UI kits</li>
                <li className="text-sm text-white/80">Cloud-native & serverless</li>
                <li className="text-sm text-white/80">Performance & security audits</li>
                <li className="text-sm text-white/80">Growth & analytics</li>
              </ul>
            </div>

            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="rounded-xl p-6 bg-gradient-to-br from-neutral-800 to-neutral-700 border border-white/5">
              <h3 className="font-bold">Our Offer</h3>
              <p className="text-white/70 mt-3">Project scoping, prototypes, MVPs, long-term product development and marketing retainers — choose what fits.</p>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between bg-black/30 px-4 py-3 rounded-md">
                  <div>
                    <div className="text-sm text-white/80">Avg. project timeline</div>
                    <div className="font-bold">6 - 12 weeks</div>
                  </div>
                  <div className="text-sm text-teal-300 font-semibold">Fixed-price or Retainer</div>
                </div>

                <div className="flex items-center justify-between bg-black/30 px-4 py-3 rounded-md">
                  <div>
                    <div className="text-sm text-white/80">Support</div>
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
            <p className="text-white/70 mt-2">Tell us about your project or book a free consultation.</p>

            <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will get back shortly.'); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input aria-label="Name" required placeholder="Your name" className="p-3 rounded-md bg-black/20 border border-white/5" />
                <input aria-label="Email" required type="email" placeholder="Email" className="p-3 rounded-md bg-black/20 border border-white/5" />
              </div>
              <input aria-label="Company" placeholder="Company (optional)" className="p-3 rounded-md bg-black/20 border border-white/5" />
              <textarea aria-label="Message" required placeholder="Describe your project" rows={6} className="p-3 rounded-md bg-black/20 border border-white/5" />

              <div className="flex items-center gap-4">
                <button type="submit" className="px-5 py-3 rounded-lg bg-teal-500 text-black font-semibold">Send message</button>
                <div className="text-sm text-white/60">Or email us at <a href="mailto:suchna.technsolutions@gmail.com" className="text-teal-300">suchna.technsolutions@gmail.com</a></div>
              </div>
            </motion.form>
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
      </main>

      {/* FLOATING BADGE */}
      <a href="#contact" className="fixed bottom-6 right-6 bg-teal-500 text-black px-4 py-2 rounded-full shadow-xl font-semibold hover:scale-105 transform transition">Start a Project</a>
    </div>
  )
}
