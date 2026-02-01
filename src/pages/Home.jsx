import { Link } from 'react-router-dom';
import { Lock, ClipboardList, Target, ArrowRight, Check, Building2, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';


const Home = () => {
  const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  };

  const handleDownload = (app) => {
    const isIOS = detectDevice();
    if (app === 'stackcards') {
      if (isIOS) {
        window.open('https://apps.apple.com/app/whatsapp-messenger/id310633997', '_blank');
      } else {
        window.open('https://play.google.com/store/apps/details?id=com.whatsapp', '_blank');
      }
    } else if (app === 'buildtracker') {
      if (isIOS) {
        window.open('https://apps.apple.com/app/telegram-messenger/id686449807', '_blank');
      } else {
        window.open('https://play.google.com/store/apps/details?id=org.telegram.messenger', '_blank');
      }
    }
  };

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Dangote_Group_logo.svg/200px-Dangote_Group_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/GTBank_logo.svg/200px-GTBank_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MTN_Logo.svg/200px-MTN_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Zenith_Bank_logo.svg/200px-Zenith_Bank_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/UBA_logo.svg/200px-UBA_logo.svg.png',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16 pb-32"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="flex -space-x-2 mr-4">
                {[
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
                  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200'
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="user" 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-yellow-400 mb-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Used by 10,000+ professionals worldwide
                </p>
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight px-4 sm:px-0"
            >
              <span className="block sm:inline">Building the </span>
              <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent block sm:inline">
                future of software.
              </span>
            </motion.h1>

            <div className="mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
                We create innovative software solutions for modern businesses.
              </p>
              <p className="text-sm font-semibold text-black tracking-wider">
                DISRUPTING THE TECH ECOSYSTEM
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/products" 
                className="bg-black text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center hover:bg-gray-800 transition-colors"
              >
                <span>Explore Products</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <Link 
                to="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-black hover:text-black transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
                  <span className="text-lg mr-2">🇳🇬</span>
                  <span className="text-sm font-medium text-green-800">Proudly Nigerian</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60 px-4 sm:px-0">
                {logos.map((logo, index) => (
                  <img 
                    key={index}
                    src={logo} 
                    alt="company logo" 
                    className="h-6 sm:h-8 w-auto grayscale hover:grayscale-0 transition-all duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technology Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build innovative software with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "Innovation",
                description: "Cutting-edge technology solutions built for the modern world."
              },
              {
                icon: ClipboardList,
                title: "Quality",
                description: "High-performance software engineered to the highest standards."
              },
              {
                icon: Lock,
                title: "Security",
                description: "Enterprise-grade security and privacy protection built-in."
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 sm:p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-black mb-4 flex justify-center">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>



      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              We build multiple solutions that work together to make life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="StackCards Demo"
                  className="w-full h-64 rounded-t-3xl"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  StackCards
                </h3>
                <p className="text-gray-600 mb-6">
                  Smart contact management and networking automation. Business cards, digital contacts, and more.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    { icon: Target, text: "Scan cards in 2 seconds with 99% accuracy" },
                    { icon: Lock, text: "Never lose contacts with automatic cloud backup" },
                    { icon: ClipboardList, text: "Find any contact instantly with smart search" },
                    { icon: ArrowRight, text: "One-tap to call, email, or visit website" },
                    { icon: Check, text: "Works offline - access contacts anywhere" }
                  ].map((feature, i) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={i} className="flex items-start">
                        <IconComponent size={16} className="mr-2 mt-0.5 text-black flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
                <button 
                  onClick={() => handleDownload('stackcards')}
                  className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Start Free Trial - No Credit Card
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/jNQXAC9IVRw" 
                  title="BuildTracker Demo"
                  className="w-full h-64 rounded-t-3xl"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  BuildTracker
                </h3>
                <p className="text-gray-600 mb-6">
                  Stop project chaos. Get your team organized and deliver projects on time, every time.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    { icon: ClipboardList, text: "Track every task and deadline in one place" },
                    { icon: Users, text: "Real-time collaboration - no more email chaos" },
                    { icon: Building2, text: "Manage multiple projects and teams effortlessly" },
                    { icon: Target, text: "Built-in wiki keeps everyone on the same page" },
                    { icon: BarChart3, text: "See exactly where your projects stand" }
                  ].map((feature, i) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={i} className="flex items-start">
                        <IconComponent size={16} className="mr-2 mt-0.5 text-black flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
                <button 
                  onClick={() => handleDownload('buildtracker')}
                  className="block w-full bg-black text-white py-3 rounded-full font-semibold text-center hover:bg-gray-800 transition-colors"
                >
                  Try BuildTracker Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ScaleForge Labs Innovation
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We have an innovation lab constantly developing the next generation of productivity tools. 
            Today we have 2 products. Tomorrow we might have 5. Next year, 20.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              { title: "StackCards", status: "Live", desc: "Contact automation platform", users: "10K+ users" },
              { title: "BuildTracker", status: "Live", desc: "Project management suite", users: "5K+ teams" },
              { title: "Qirra'a", status: "Coming", desc: "Document automation AI", users: "Beta Soon" }
            ].map((project, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-300' :
                  project.status === 'Coming' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-orange-500/20 text-orange-300'
                }`}>
                  {project.status}
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
                <p className="text-gray-400 text-xs">{project.users}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-400">
            We're building the future of work, one product at a time. <a href="/contact" className="text-white underline hover:no-underline">Join our innovation journey</a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "VP Operations, Global Tech Solutions",
                image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=200",
                quote: "StackCards has transformed our global networking operations. The AI-powered intelligence delivers exceptional accuracy across all business card formats."
              },
              {
                name: "Michael Chen",
                role: "Director of Engineering, Innovation Corp",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
                quote: "BuildTracker's enterprise architecture perfectly supports our distributed teams. The collaboration features are world-class."
              },
              {
                name: "David Rodriguez",
                role: "CEO, Enterprise Solutions Ltd",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
                quote: "The scalability and security features meet our enterprise requirements. ScaleForge Labs delivers professional-grade solutions."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex text-yellow-400 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join 10,000+ professionals working smarter
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop wasting time on manual work. Start automating your daily tasks today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => handleDownload('stackcards')}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial - StackCards
            </button>
            <button 
              onClick={() => handleDownload('buildtracker')}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Try BuildTracker Free
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-12">
            ✅ Free forever plan • ✅ No credit card required • ✅ Cancel anytime
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            {['Setup in 60 seconds', 'Works on all devices', 'Bank-level security', '24/7 support'].map((item, index) => (
              <div key={index} className="flex items-center">
                <Check size={16} className="mr-2 text-green-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;