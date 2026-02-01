import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const Footer = () => {
  const footerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 }
  });

  return (
    <animated.footer style={footerSpring} className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <motion.img 
                  src="/src/assets/logo.png"
                  alt="ScaleForge Labs"
                  className="w-8 h-8 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-xl font-bold text-gray-900">ScaleForge Lab</span>
              </Link>
              
              <motion.p 
                className="text-gray-600 text-sm max-w-md mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                We're a tech company that builds software solutions to eliminate daily frustrations. 
                Like an idea lab, we identify problems and create tools that make work easier for everyone.
              </motion.p>
              <motion.div 
                className="text-xs text-gray-500 space-y-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="font-semibold text-black">DISRUPTING THE TECH ECOSYSTEM</p>
                <p>RC 8834430</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact us', path: '/contact' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="font-semibold text-gray-900 mb-4">Get in touch</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <motion.p
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                +234 906 358 0387
              </motion.p>
              <motion.p
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                hello@scaleforgelabs.com
              </motion.p>
              <motion.p
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Lagos, Nigeria
              </motion.p>
              
              <div className="flex space-x-4 mt-4">
                {[
                  { 
                    name: 'Twitter',
                    path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
                  },
                  { 
                    name: 'LinkedIn',
                    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="text-gray-400 hover:text-black transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-200 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Copyright 2024 © <strong>ScaleForge Labs</strong>. All Rights Reserved.
            </p>
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200">
              <span className="text-sm mr-2">🇳🇬</span>
              <span className="text-xs font-medium text-green-800">Proudly Nigerian</span>
            </div>
          </div>
        </motion.div>
      </div>
    </animated.footer>
  );
};

export default Footer;