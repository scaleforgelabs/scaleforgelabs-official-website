import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, ClipboardList, Users, BookOpen, BarChart3, Monitor,
  Calendar, Shield, Smartphone, Check, ArrowRight, ChevronDown,
} from 'lucide-react';
import BuildTrackerFeatures from '../components/BuildTrackerFeatures';
import ImageModal from '../components/ImageModal';

const SCREENSHOTS = [
  { src: '/dashboard.png',   label: 'Project Dashboard' },
  { src: '/task.png',        label: 'Task Management' },
  { src: '/gannt-chat.png',  label: 'Gantt Chart' },
  { src: '/module.png',      label: 'Sprint Planning' },
  { src: '/pricing.png',     label: 'Pricing & Plans' },
  { src: '/landing-page.png',label: 'Overview' },
];

const PLANS = [
  {
    name: 'Free',
    price: '₦0',
    usd: '$0',
    period: 'forever',
    desc: 'For small teams getting started.',
    features: ['Up to 3 users', '1 workspace', '500 MB storage', 'Core task management', 'Community support'],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '₦9,900',
    usd: '$6',
    period: 'per month',
    desc: 'For growing teams that need more.',
    features: ['Up to 10 users', '5 workspaces', '5 GB storage', 'Sprint planning', 'Gantt charts', 'Email support'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₦24,900',
    usd: '$15',
    period: 'per month',
    desc: 'For established teams at scale.',
    features: ['Up to 50 users', '20 workspaces', '50 GB storage', 'Advanced analytics', 'Custom fields', 'Priority support'],
    cta: 'Start free trial',
    highlight: false,
  },
  {
    name: 'Custom',
    price: 'Contact us',
    usd: null,
    period: '',
    desc: 'For enterprise organizations.',
    features: ['Unlimited users', 'Unlimited workspaces', '500 GB+ storage', 'SSO & compliance', 'Dedicated SLA', 'Account manager'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

const BuildTracker = () => {
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', alt: '' });
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gray-950 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 75% 15%, white, transparent), radial-gradient(1.5px 1.5px at 45% 70%, white, transparent), radial-gradient(1px 1px at 85% 50%, white, transparent)',
          }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Live product
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-5">
                Build&shy;Tracker
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed mb-8 max-w-lg">
                The enterprise project management platform that gives your team a single source
                of truth — from the first task to the final delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.buildtrackerapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get started free
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Request a demo
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
                {['Free plan available', 'No credit card required', '14-day premium trial'].map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <Check size={12} className="text-gray-400" /> {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div
                className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 cursor-pointer"
                onClick={() => setModalImage({ isOpen: true, src: SCREENSHOTS[activeScreenshot].src, alt: SCREENSHOTS[activeScreenshot].label })}
              >
                <img
                  src={SCREENSHOTS[activeScreenshot].src}
                  alt={SCREENSHOTS[activeScreenshot].label}
                  className="w-full transition-opacity duration-300"
                />
              </div>
              {/* Screenshot picker */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {SCREENSHOTS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreenshot(i)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      activeScreenshot === i
                        ? 'bg-white text-black border-white font-semibold'
                        : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white/90'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Active organizations' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '150+', label: 'Countries' },
              { value: '4.9/5', label: 'Customer rating' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold mb-1">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshot gallery ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              From project dashboards to Gantt charts, BuildTracker gives every stakeholder
              exactly the view they need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCREENSHOTS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group cursor-pointer"
                onClick={() => setModalImage({ isOpen: true, src: s.src, alt: s.label })}
              >
                <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 group-hover:shadow-xl group-hover:ring-black/15 transition-all duration-300">
                  <img src={s.src} alt={s.label} className="w-full group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <p className="text-center text-sm font-medium text-gray-600 mt-3">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature grid ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything in one platform</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              No more juggling five tools. BuildTracker brings everything under one roof.
            </p>
          </div>
          <BuildTrackerFeatures />
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(1px 1px at 10% 50%, white, transparent), radial-gradient(1.5px 1.5px at 90% 20%, white, transparent)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Up and running in minutes</h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto">No long onboarding. No consultants required.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create your organization', desc: 'Sign up free and set up your organization in under 2 minutes. Invite your team via email.' },
              { step: '02', title: 'Set up your workspace', desc: 'Create a workspace, add your projects, and configure your custom workflows and fields.' },
              { step: '03', title: 'Start delivering', desc: 'Assign tasks, track progress in real-time, and deliver your projects on time — every time.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-white/5 mb-4 leading-none">{s.step}</div>
                <h3 className="text-xl font-bold mb-3 -mt-6">{s.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">
              Start free, scale when you're ready. Yearly plans save up to 20%.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? 'bg-black text-white ring-2 ring-black'
                    : 'bg-gray-50 ring-1 ring-black/5'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <div className="mb-5">
                  <p className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</p>
                  <p className={`text-sm mb-3 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                    {plan.usd && <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>/ {plan.usd}</span>}
                  </div>
                  {plan.period && <p className={`text-xs mt-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{plan.period}</p>}
                </div>
                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      <Check size={13} className={plan.highlight ? 'text-amber-400' : 'text-gray-400'} strokeWidth={3} />
                      <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === 'Custom' ? '/contact' : plan.name === 'Free' ? 'https://www.buildtrackerapp.com' : 'https://www.buildtrackerapp.com/pricing'}
                  target={plan.name === 'Custom' ? undefined : '_blank'}
                  rel={plan.name === 'Custom' ? undefined : 'noopener noreferrer'}
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors block ${
                    plan.highlight
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">Ready to get started?</h2>
          <p className="text-gray-400 text-xl mb-10">
            Join over 10,000 organizations already using BuildTracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.buildtrackerapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start free — no credit card
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={() => setModalImage({ isOpen: false, src: '', alt: '' })}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
      />
    </div>
  );
};

export default BuildTracker;
