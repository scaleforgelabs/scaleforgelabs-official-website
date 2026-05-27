import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Globe, Zap, Shield, ArrowRight, Users } from 'lucide-react';

const PERKS = [
  { icon: Globe,   title: 'Remote-first',         desc: 'Work from anywhere in the world. We care about output, not location.' },
  { icon: Zap,     title: 'High autonomy',         desc: 'We hire exceptional people and trust them to make decisions independently.' },
  { icon: Heart,   title: 'Wellbeing matters',     desc: 'Flexible hours, mental health support, and a culture where rest is respected.' },
  { icon: Shield,  title: 'Equity & ownership',    desc: 'Team members have a stake in what we build. We grow together.' },
  { icon: Users,   title: 'Diverse & inclusive',   desc: 'We hire across borders and backgrounds. Perspectives from everywhere make better products.' },
  { icon: Zap,     title: 'Learning budget',       desc: 'Annual allowance for courses, conferences, and books. We invest in your growth.' },
];

const PRINCIPLES = [
  { num: '01', title: 'Ship things that matter', desc: 'We build with intention. Every feature we ship solves a real problem for a real user.' },
  { num: '02', title: 'Move fast, but thoughtfully', desc: 'Speed matters, but so does quality. We move quickly without breaking trust.' },
  { num: '03', title: 'Communicate openly', desc: 'Radical transparency is our default. We share context, celebrate wins, and learn from failures.' },
  { num: '04', title: 'Aim for the stars', desc: 'We set ambitious goals. Falling short of ambitious is better than achieving mediocre.' },
];

const Careers = () => {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-950 text-white pt-24 pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(1px 1px at 15% 35%, white, transparent), radial-gradient(1.5px 1.5px at 70% 15%, white, transparent), radial-gradient(1px 1px at 55% 70%, white, transparent), radial-gradient(1px 1px at 90% 55%, white, transparent), radial-gradient(1px 1px at 40% 85%, white, transparent)',
          }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            Careers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
          >
            Help us build
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-white to-sky-300 bg-clip-text text-transparent">
              what comes next.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            ScaleForge Labs is a small, ambitious team building enterprise software that
            organizations around the world depend on. We're always interested in hearing
            from exceptional people.
          </motion.p>
        </div>
      </motion.section>

      {/* ── No open roles notice ─────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">No open roles at this time</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We don't have any active job postings right now, but we're always building our
              talent pipeline. If you believe you'd be a great fit for ScaleForge Labs,
              we'd love to hear from you speculatively.
            </p>
            <a
              href="mailto:careers@scaleforgelabs.com"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm"
            >
              Send a speculative application
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Company culture ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Our culture
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A team of builders
                <br />who care deeply.
              </h2>
              <div className="space-y-4 text-gray-500 text-[15px] leading-relaxed">
                <p>
                  At ScaleForge Labs, culture isn't a set of perks — it's a shared way of working.
                  We're a small team by design. Every person has meaningful impact, and we intend
                  to keep it that way as we grow.
                </p>
                <p>
                  We operate asynchronously across time zones, communicate with radical transparency,
                  and make decisions as close to the work as possible. Titles exist for clarity,
                  not hierarchy.
                </p>
                <p>
                  We believe the best software is built by happy, curious, empowered people. That's
                  the culture we protect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                alt="Team collaboration"
                className="rounded-2xl object-cover w-full h-48"
              />
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                alt="Team discussion"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                alt="Focused work"
                className="rounded-2xl object-cover w-full h-48 -mt-4"
              />
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                alt="Office environment"
                className="rounded-2xl object-cover w-full h-48 mt-4"
              />
            </motion.div>
          </div>

          {/* Perks grid */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What we offer</h2>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">
              We invest in the people who build ScaleForge Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-gray-50 rounded-2xl p-7 ring-1 ring-black/5"
                >
                  <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Principles ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">How we work</h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto">
              Four principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 bg-white/5 rounded-2xl p-7"
              >
                <span className="text-4xl font-bold text-white/10 leading-none flex-shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in touch ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Interested in working with us?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Even with no open roles, we welcome exceptional people to reach out.
            Send your CV and a short note about what excites you about ScaleForge Labs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@scaleforgelabs.com"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              careers@scaleforgelabs.com
              <ArrowRight size={16} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-7 py-3.5 rounded-full font-semibold hover:border-black hover:text-black transition-colors"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
