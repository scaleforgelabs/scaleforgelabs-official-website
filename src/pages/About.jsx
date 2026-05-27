import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Shield, Globe, Heart, Target, Users, ArrowRight } from 'lucide-react';

const VALUES = [
  { icon: Lightbulb, title: 'Innovation',       desc: 'We challenge convention and build what others say is too hard. Every product we ship is an answer to a real problem.' },
  { icon: Target,    title: 'Excellence',        desc: 'Mediocrity is not an option. We hold our software \u2014 and ourselves \u2014 to the highest standards of craft and reliability.' },
  { icon: Shield,    title: 'Integrity',         desc: "We do what we say. We protect our customers\u2019 data. We communicate openly and honestly, even when it\u2019s difficult." },
  { icon: Globe,     title: 'Global Thinking',   desc: 'We build for the world. Every design decision accounts for diverse users, languages, time zones, and contexts.' },
  { icon: Heart,     title: 'Customer First',    desc: "Our customers\u2019 success is our success. We listen, iterate, and never stop improving based on real-world feedback." },
  { icon: Users,     title: 'Team Empowerment',  desc: "Great software is built by empowered people. We invest in our team\u2019s growth, autonomy, and wellbeing." },
];


const About = () => {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-950 text-white pt-24 pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1.5px 1.5px at 65% 20%, white, transparent), radial-gradient(1px 1px at 50% 75%, white, transparent), radial-gradient(1px 1px at 85% 60%, white, transparent)',
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            About ScaleForge Labs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
          >
            We're reaching
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-white to-sky-300 bg-clip-text text-transparent">
              for the stars.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            ScaleForge Labs is a global enterprise software company with a simple mission:
            build tools that elevate how organizations work — regardless of their size,
            industry, or location.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Mission & story ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=550&dpr=2"
                alt="ScaleForge team collaboration"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Our story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Born from a vision to build without limits.
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed text-[15px]">
                <p>
                  ScaleForge Labs was founded on the conviction that enterprise software doesn't have to be
                  clunky, expensive, or locked behind impenetrable sales processes. We saw teams around the
                  world struggling with fragmented toolsets, missed deadlines, and collaboration breakdowns.
                </p>
                <p>
                  So we built BuildTracker — a unified project management platform that gives every team,
                  from a 5-person startup to a 5,000-person enterprise, the visibility and control they
                  need to deliver their best work.
                </p>
                <p>
                  Today, ScaleForge Labs is a growing team of engineers, designers, and product thinkers
                  driven by curiosity and a relentless pursuit of excellence. We're just getting started.
                </p>
              </div>
              <Link
                to="/careers"
                className="group inline-flex items-center gap-2 mt-8 text-black font-semibold border-b border-black/30 pb-0.5 hover:border-black transition-colors text-sm"
              >
                Join our team <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              Core values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What we stand for</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              These principles guide every decision we make — from the code we ship
              to the way we treat our customers and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-black/5"
                >
                  <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Culture ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Company culture
              </div>
              <h2 className="text-4xl font-bold mb-6">
                We work like
                <br />
                owners. We think like
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-sky-300 bg-clip-text text-transparent">
                  astronauts.
                </span>
              </h2>
              <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed mb-8">
                <p>
                  At ScaleForge Labs, culture isn't a slide deck — it's how we show up every day.
                  We operate with high autonomy, high trust, and a shared obsession with building
                  software that makes people's working lives genuinely better.
                </p>
                <p>
                  We're fully remote-friendly, async-first, and deeply committed to maintaining
                  a culture where every person — regardless of title — can have an outsized impact.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Remote-first', sub: 'Work from anywhere in the world' },
                  { label: 'Async-friendly', sub: 'Deep work is non-negotiable' },
                  { label: 'Ship fast', sub: 'Iterate. Learn. Improve.' },
                  { label: 'Own it', sub: 'Every person is a stakeholder' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <p className="font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                  alt="Team celebration"
                  className="rounded-2xl object-cover w-full h-48 opacity-80"
                />
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                  alt="Focused work"
                  className="rounded-2xl object-cover w-full h-48 opacity-80"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                  alt="Collaboration"
                  className="rounded-2xl object-cover w-full h-48 opacity-80"
                />
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                  alt="Meeting"
                  className="rounded-2xl object-cover w-full h-48 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">Come build with us.</h2>
          <p className="text-gray-400 text-lg mb-8">
            We're always on the lookout for exceptional people who share our ambition.
            No open roles right now, but we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              View careers
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
