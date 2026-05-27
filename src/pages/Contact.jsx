import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const FAQ = [
  {
    q: 'How do I get started with BuildTracker?',
    a: 'You can sign up for a free account at buildtracker.scaleforgelabs.com — no credit card required. The free plan supports up to 3 users and 1 workspace.',
  },
  {
    q: 'Is BuildTracker suitable for large enterprises?',
    a: 'Absolutely. BuildTracker is designed with multi-organization architecture, role-based access control, SSO, and enterprise security controls. Teams from 5 to 5,000+ are supported.',
  },
  {
    q: 'Do you offer custom enterprise pricing?',
    a: 'Yes. Our Custom plan is tailored for organizations with specific requirements around storage, user counts, or SLA needs. Reach out via the form for a dedicated quote.',
  },
  {
    q: 'What security and compliance standards does BuildTracker meet?',
    a: 'BuildTracker is built with end-to-end encryption, multi-factor authentication, audit trails, and is working toward SOC 2 Type II certification.',
  },
  {
    q: 'Is there a data residency option?',
    a: 'Data residency options are available on the Custom enterprise plan. Contact our sales team to discuss your requirements.',
  },
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'General enquiries',
    value: 'hello@scaleforgelabs.com',
    href: 'mailto:hello@scaleforgelabs.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+234 906 358 0387',
    href: 'tel:+2349063580387',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Headquarters',
    value: 'Lagos, Nigeria · Global Operations',
    href: null,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-950 text-white pt-24 pb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(1px 1px at 20% 40%, white, transparent), radial-gradient(1px 1px at 80% 20%, white, transparent), radial-gradient(1.5px 1.5px at 55% 65%, white, transparent)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            Contact Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            Let's talk.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-xl mx-auto"
          >
            Whether you have a question about BuildTracker, need enterprise support,
            or just want to explore what ScaleForge Labs can do for your organization —
            we're here.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Form + info ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 ring-1 ring-black/5">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 text-sm mb-8">We typically respond within 1 business day.</p>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact information</h2>

              <div className="space-y-6 mb-12">
                {CONTACT_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-medium hover:text-black transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time callout */}
              <div className="bg-gray-950 rounded-2xl p-6 text-white mb-8">
                <p className="font-semibold mb-1">Enterprise support</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  On a Custom plan? You get a dedicated account manager and priority SLA.
                  Reach out via{' '}
                  <a href="mailto:enterprise@scaleforgelabs.com" className="text-white underline">
                    enterprise@scaleforgelabs.com
                  </a>
                  .
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                    { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.84L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors group"
                    >
                      <svg className="w-4 h-4 fill-gray-500 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently asked questions</h2>
            <p className="text-gray-500">
              Can't find your answer here?{' '}
              <a href="mailto:hello@scaleforgelabs.com" className="text-black font-medium hover:underline">
                Email us directly.
              </a>
            </p>
          </div>

          <div className="space-y-5">
            {FAQ.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-7 shadow-sm ring-1 ring-black/5"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
