import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Home, Smartphone, Users, Phone, BarChart3 } from 'lucide-react';

const NotFound = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 280, friction: 60 }
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 404 number animation
      gsap.fromTo('.error-number', 
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }
      );

      // Floating animation for product cards
      gsap.to('.product-showcase', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* 404 Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24"
        style={{ y }}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <animated.div style={heroSpring} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <motion.div 
              className="error-number text-8xl sm:text-9xl font-bold text-black/10 mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
            >
              404
            </motion.div>
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Page Not Found
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Oops! Page Not Found
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Sorry, we couldn't find the page you're looking for. 
            But don't worry, there's plenty more to explore!
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/" 
                className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Back Home
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center hover:border-black hover:text-black transition-colors"
              >
                Contact Support
                <motion.svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Search Suggestions */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p className="text-sm text-gray-500 mb-4">Looking for something specific? Try these:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Home', 'Products', 'About', 'Contact'].map((page, index) => (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {page}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </animated.div>
      </motion.section>

      {/* Helpful Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">While you're here...</h2>
            <p className="text-xl text-gray-600">Check out our amazing products that help professionals stay organized</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* StackCards */}
            <motion.div 
              className="product-showcase bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-lg cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Smartphone size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">StackCards</h3>
              <p className="text-gray-600 mb-6">
                "Turn every business card into a smart contact. Never lose a connection again."
                Digital business card management with AI-powered scanning.
              </p>
              
              <div className="space-y-2 mb-8 text-sm text-gray-600">
                {[
                  "AI-powered scanning with 99% accuracy",
                  "Smart organization by industry",
                  "One-tap actions for calls and emails"
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.div>
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/products" 
                  className="inline-block w-full bg-black text-white text-center py-3 rounded-full font-semibold"
                >
                  Learn More About StackCards
                </Link>
              </motion.div>
            </motion.div>

            {/* BuildTracker */}
            <motion.div 
              className="product-showcase bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-lg cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <BarChart3 size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BuildTracker</h3>
              <p className="text-gray-600 mb-6">
                Everything you need to manage projects. From planning to execution, BuildTracker provides all the tools your team needs to deliver exceptional results.
              </p>
              
              <div className="space-y-2 mb-8 text-sm text-gray-600">
                {[
                  "Multi-organization management",
                  "Task management with workflows",
                  "Real-time team collaboration"
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.div>
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="https://www.buildtrackerapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-black text-white text-center py-3 rounded-full font-semibold"
                >
                  Download BuildTracker
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Pages</h2>
            <p className="text-gray-600">Here are some pages you might be looking for</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Home', path: '/', icon: Home, desc: 'Back to homepage' },
              { name: 'Products', path: '/products', icon: Smartphone, desc: 'Our applications' },
              { name: 'About', path: '/about', icon: Users, desc: 'Learn about us' },
              { name: 'Contact', path: '/contact', icon: Phone, desc: 'Get in touch' }
            ].map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={page.path}
                  className="bg-white rounded-2xl p-6 text-center block shadow-lg hover:shadow-xl transition-all"
                >
                  <motion.div 
                    className="mb-3 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <page.icon size={32} className="text-black" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">{page.name}</h3>
                  <p className="text-sm text-gray-600">{page.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;