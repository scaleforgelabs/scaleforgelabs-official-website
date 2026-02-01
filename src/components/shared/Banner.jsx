import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { Sparkles } from 'lucide-react';

const Banner = () => {
  const bannerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 300, friction: 30 }
  });

  return (
    <animated.div 
      style={bannerSpring}
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-3 overflow-hidden relative"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div 
            className="text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-yellow-400" />
            </motion.div>
            {' '}Enterprise Solutions Now Available —{' '}
            <motion.span 
              className="underline underline-offset-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              explore our platforms
            </motion.span>
          </motion.div>
        </div>
      </div>
    </animated.div>
  );
};

export default Banner;