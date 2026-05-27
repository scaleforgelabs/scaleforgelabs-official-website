import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, BarChart3, Users, Shield, Zap, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const SCREENSHOTS = [
  '/dashboard.png',
  '/task.png',
  '/gannt-chat.png',
  '/module.png',
  '/pricing.png',
  '/landing-page.png',
];

const STATS = [
  { value: '10,000+', label: 'Organizations worldwide' },
  { value: '99.9%', label: 'Platform uptime SLA' },
  { value: '150+', label: 'Countries served' },
  { value: '4.9/5', label: 'Customer satisfaction' },
];

const PILLARS = [
  {
    icon: Zap,
    title: 'Enterprise Performance',
    description:
      'Built on a high-throughput async architecture, designed to scale with your organization from day one.',
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description:
      'End-to-end encryption, role-based access control, audit logs, and SOC 2 Type II compliance built in.',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description:
      'Deployed across multi-region cloud infrastructure, delivering sub-100ms response times globally.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'BuildTracker transformed how our distributed teams coordinate across time zones. Delivery timelines are down 40% since we onboarded.',
    name: 'Priya Anand',
    role: 'VP of Engineering, Meridian Systems',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
  {
    quote:
      "The Gantt charts, sprint planning, and wiki — everything we needed was already there. We canceled three separate SaaS subscriptions after switching.",
    name: 'James Okafor',
    role: 'Head of Product, Vantage Global',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
  {
    quote:
      'ScaleForge Labs understands enterprise needs. The security model and multi-organization architecture are exactly what we required.',
    name: 'Elena Fischer',
    role: 'CTO, Apex Infrastructure Group',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
];

const Star = () => (
  <svg className="w-5 h-5 fill-current text-amber-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/854275-hd_1280_720_30fps%20(1).mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

        {/* Stars overlay – subtle dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 70% 15%, white, transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 80% 80%, white, transparent), radial-gradient(1px 1px at 10% 80%, white, transparent), radial-gradient(1px 1px at 60% 45%, white, transparent)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            ScaleForge Labs — Enterprise Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6"
          >
            Reaching for
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-white to-sky-300 bg-clip-text text-transparent">
              the stars.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ScaleForge Labs builds enterprise software that transforms how
            organizations plan, collaborate, and deliver — at any scale, across
            any geography.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/buildtracker"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-200 shadow-lg"
            >
              Explore BuildTracker
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Our story
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────────── */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BuildTracker product showcase ────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Flagship Product
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                BuildTracker
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                The enterprise project management platform built for teams who
                refuse to compromise. From Gantt charts to sprint planning,
                knowledge wikis to real-time analytics — everything your
                organization needs in one unified workspace.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Multi-organization with role-based access control',
                  'Gantt charts, sprint boards, and Kanban views',
                  'Built-in wiki and knowledge management',
                  'Real-time collaboration and file management',
                  'Advanced analytics and custom reporting',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Link
                  to="/buildtracker"
                  className="group inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
                >
                  Get started free
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/buildtracker"
                  className="inline-flex items-center gap-1 text-gray-600 hover:text-black font-medium transition-colors text-sm"
                >
                  View all features <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Screenshot collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src={SCREENSHOTS[0]}
                  alt="BuildTracker dashboard"
                  className="w-full"
                />
              </div>
              {/* Floating mini-screenshot */}
              <div className="absolute -bottom-6 -left-6 w-48 rounded-xl overflow-hidden shadow-xl ring-1 ring-black/10 hidden sm:block">
                <img src={SCREENSHOTS[3]} alt="BuildTracker analytics" className="w-full" />
              </div>
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-black text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hidden sm:block">
                Live now
              </div>
            </motion.div>
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SCREENSHOTS.slice(1).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300"
              >
                <img src={src} alt={`BuildTracker feature ${i + 2}`} className="w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three pillars ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              Why ScaleForge
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
              Built for the enterprise.
              <br />
              Loved by every team.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              We design software that meets the demands of global organizations
              without sacrificing the experience teams actually want to use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission dark section ──────────────────────────────────────────── */}
      <section className="py-28 bg-black text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2"
                alt="Enterprise team collaboration"
                className="rounded-2xl object-cover w-full h-80 opacity-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                We believe software
                <br />
                should be{' '}
                <span className="bg-gradient-to-r from-amber-300 to-sky-300 bg-clip-text text-transparent">
                  limitless.
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                ScaleForge Labs was founded on a simple conviction: the tools
                that power the world's most ambitious teams should be beautiful,
                fast, and secure — without compromise.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Today, BuildTracker is our flagship — a platform used by
                organizations across six continents to plan, execute, and
                deliver their most important work.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Read our story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by world-class teams
            </h2>
            <p className="text-xl text-gray-500">
              Organizations across every industry rely on ScaleForge Labs products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 ring-1 ring-black/5"
              >
                <div className="flex gap-1 mb-5">
                  {Array(5).fill(null).map((_, j) => <Star key={j} />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(1.5px 1.5px at 15% 25%, white, transparent), radial-gradient(1px 1px at 75% 10%, white, transparent), radial-gradient(1px 1px at 50% 70%, white, transparent), radial-gradient(2px 2px at 85% 55%, white, transparent), radial-gradient(1px 1px at 30% 80%, white, transparent)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Ready to elevate
            <br />
            how your team works?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto"
          >
            Join over 10,000 organizations already using BuildTracker to
            deliver projects on time, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <a
              href="https://www.buildtrackerapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start for free
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to sales
            </Link>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            {[
              'Free 14-day trial',
              'No credit card required',
              'Cancel anytime',
              'Enterprise SLA available',
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <Check size={13} className="text-gray-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
