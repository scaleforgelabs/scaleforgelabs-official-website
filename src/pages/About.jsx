import { motion } from 'framer-motion';
import { Lock, ClipboardList, Target, Smartphone, Building2, BarChart3, Briefcase } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Problem Solving",
      description: "We identify real problems and build elegant solutions that actually work."
    },
    {
      icon: ClipboardList,
      title: "Quality Engineering", 
      description: "Every product we build meets the highest standards of performance and reliability."
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Security and privacy are built into everything we create from day one."
    },
    {
      icon: Smartphone,
      title: "User Experience",
      description: "We design software that people actually enjoy using every day."
    },
    {
      icon: Building2,
      title: "Scalable Solutions",
      description: "Our software grows with your needs, from startup to enterprise scale."
    },
    {
      icon: BarChart3,
      title: "AI-Powered Solutions",
      description: "We integrate artificial intelligence to make software smarter and more intuitive."
    }
  ];

  const team = [
    {
      name: "David Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      description: "Leading the vision for global enterprise transformation"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      description: "Building scalable enterprise technology solutions"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      description: "Designing enterprise-grade user experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16 pb-24"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-8">
            About Us
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-0"
          >
            About{' '}
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              ScaleForge Labs
            </span>
          </motion.h1>
          
          <div className="max-w-3xl mx-auto px-4 sm:px-0 text-center">
            <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              We're a technology company that builds whatever we feel like building. 
              If we see a problem worth solving, we build software for it. 
              No limits, no restrictions - just pure innovation.
            </p>
            <p className="text-sm font-semibold text-black tracking-wider">
              DISRUPTING THE TECH ECOSYSTEM
            </p>
            <p className="text-xs text-gray-500 mt-2">
              RC 8834430
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build whatever we want to build. No rules, no limits - just great software that solves real problems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 sm:p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-black mb-4 flex justify-center">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&auto=format&fit=crop" 
                alt="Nigerian team collaboration" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200',
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
                      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=200'
                    ].map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt="team member" 
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                    <div className="w-8 h-8 bg-black text-white rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                      50+
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Join our community</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <div className="w-16 h-1 bg-black rounded-full mb-8" />
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We're a tech company that builds whatever catches our interest. See a boring manual process? We'll automate it. Notice people struggling with something? We'll build a solution.
                </p>
                <p>
                  We don't limit ourselves to specific industries or problem types. If it's worth building, we build it. Our curiosity drives our product roadmap.
                </p>
                <p>
                  Think of us as builders who never run out of ideas. We create software because we love solving problems, not because we have to stick to a business plan.
                </p>
              </div>

              <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Download Our Apps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose StackCards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ScaleForge Labs?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We build software that's intelligent, secure, and actually solves real problems people face every day.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Briefcase,
                    title: "Real Solutions",
                    description: "We build software that solves actual problems, not just features for the sake of features."
                  },
                  {
                    icon: Smartphone,
                    title: "Quality First",
                    description: "Every product we ship meets our high standards for performance and user experience."
                  },
                  {
                    icon: Lock,
                    title: "Built to Last",
                    description: "Our software is designed to grow with you and stand the test of time."
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&h=600&auto=format&fit=crop" 
                alt="Nigerian professional networking" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-xl text-gray-600 mb-4">
                The global innovators behind ScaleForge Labs
              </p>
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <span className="text-lg mr-2">🇳🇬</span>
                <span className="text-sm font-medium text-green-800">Proudly Nigerian</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-black font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;