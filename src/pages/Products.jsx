import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Building2, ClipboardList, Users, BookOpen,
  BarChart3, Monitor, Calendar, Shield, Smartphone, Check,
} from 'lucide-react';

const SCREENSHOTS = [
  '/dashboard.png',
  '/task.png',
  '/gannt-chat.png',
  '/module.png',
  '/pricing.png',
  '/landing-page.png',
];

const FEATURES = [
  { icon: Building2,    color: 'bg-indigo-50 text-indigo-600',  title: 'Multi-Organization',    desc: 'Manage multiple organizations, role-based permissions, isolated workspaces, cross-org reporting.' },
  { icon: ClipboardList, color: 'bg-emerald-50 text-emerald-600', title: 'Task Management',       desc: 'Create, assign, and track tasks across custom workflows with automated updates and priority management.' },
  { icon: Users,         color: 'bg-amber-50 text-amber-600',    title: 'Team Collaboration',    desc: 'Real-time collaboration, file sharing, comments, activity feeds, and smart team notifications.' },
  { icon: BookOpen,      color: 'bg-blue-50 text-blue-600',      title: 'Wiki & Documentation',  desc: 'Built-in wiki with version control, collaborative editing, and a searchable knowledge base.' },
  { icon: BarChart3,     color: 'bg-purple-50 text-purple-600',  title: 'Analytics & Reports',   desc: 'Performance metrics, progress tracking, exportable insights, and fully custom reports.' },
  { icon: Monitor,       color: 'bg-cyan-50 text-cyan-600',      title: 'Real-time Dashboard',   desc: 'Live project metrics, team activity feeds, customizable widgets, and KPI indicators.' },
  { icon: Calendar,      color: 'bg-rose-50 text-rose-600',      title: 'Timeline & Milestones', desc: 'Visual timelines, Gantt charts, deadline management, and milestone tracking.' },
  { icon: Shield,        color: 'bg-red-50 text-red-600',        title: 'Enterprise Security',   desc: 'Multi-factor authentication, end-to-end encryption, SOC 2 compliance, and audit trails.' },
  { icon: Smartphone,    color: 'bg-green-50 text-green-600',    title: 'Mobile Responsive',     desc: 'Optimized for all devices — access your projects from anywhere.' },
];

const Products = () => {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-950 text-white pt-24 pb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 75% 15%, white, transparent), radial-gradient(1.5px 1.5px at 55% 70%, white, transparent)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            Our Products
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
          >
            One flagship product.
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-sky-300 bg-clip-text text-transparent">
              Infinite possibilities.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            ScaleForge Labs' current flagship is BuildTracker — a comprehensive
            enterprise project management platform built for global teams.
          </motion.p>
        </div>
      </motion.section>

      {/* ── BuildTracker feature spotlight ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Flagship — Live
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">BuildTracker</h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                The enterprise project management suite designed to replace the patchwork of tools your team
                is currently juggling. One platform. Every view. Real-time, everywhere.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Gantt charts, Kanban boards, and sprint planning',
                  'Role-based multi-organization architecture',
                  'Built-in wiki, file storage, and knowledge management',
                  'Advanced analytics with custom report builder',
                  'Enterprise security and compliance controls',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/buildtracker"
                className="group inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Explore BuildTracker
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Primary screenshot */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src={SCREENSHOTS[0]} alt="BuildTracker dashboard" className="w-full" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-44 rounded-xl overflow-hidden shadow-xl ring-1 ring-black/10 hidden sm:block">
                <img src={SCREENSHOTS[4]} alt="Analytics view" className="w-full" />
              </div>
            </div>
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {SCREENSHOTS.slice(1).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300"
              >
                <img src={src} alt={`BuildTracker view ${i + 2}`} className="w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature grid ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything your team needs</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              BuildTracker ships with every feature a modern enterprise team requires — no add-ons, no hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-7 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${f.color.split(' ')[0]}`}>
                    <Icon size={20} className={f.color.split(' ')[1]} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coming soon ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
            What's next
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
            More products are on the way.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            ScaleForge Labs runs a continuous innovation process. We're always exploring
            the next category of enterprise software. Stay tuned.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-black hover:text-black transition-colors text-sm"
          >
            Reach out to share an idea
          </Link>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">Ready to transform your organization?</h2>
          <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto">
            Get started with BuildTracker today. Free plan available. Enterprise plans on request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buildtracker"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start free trial
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
