import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16 pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-0"
          >
            Our Products
          </motion.h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Enterprise solutions for global business excellence - advanced productivity platforms engineered for modern organizations
          </p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* StackCards Card */}
            <Link to="/stackcards" className="group">
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
                    Enterprise Digital Business Intelligence Platform
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      "Enterprise Security - Military-grade encryption, automated cloud sync",
                      "Smart Organization - AI-powered categorization, enterprise search", 
                      "AI Intelligence - Instant OCR processing, machine learning accuracy",
                      "Workflow Automation - One-click communications, CRM integration",
                      "Enterprise Management - Scalable licensing, centralized administration",
                      "Professional Networking - Digital business cards, platform integrations",
                      "Business Intelligence - Advanced analytics, predictive insights",
                      "Global Platform - Cross-platform accessibility, offline capabilities"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-black text-white py-3 px-6 rounded-full font-semibold text-center group-hover:bg-gray-800 transition-colors">
                    Learn More
                  </div>
                </div>
              </div>
            </Link>

            {/* BuildTracker Card */}
            <Link to="/buildtracker" className="group">
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
                    Comprehensive project management platform engineered for global enterprises
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      "Multi-Tenant Architecture - Enterprise-grade multi-organization management",
                      "Advanced Task Management - Intelligent task orchestration, automated workflows",
                      "Global Collaboration - Real-time synchronization, secure file management", 
                      "Knowledge Management - Enterprise wiki platform with version control",
                      "Business Intelligence - Advanced analytics, predictive insights",
                      "Real-time Dashboard - Live enterprise metrics, team performance",
                      "Timeline & Milestones - Advanced project visualization, Gantt charts",
                      "Compliance & Security - Multi-factor authentication, SOC 2 Type II",
                      "Global Platform - Optimized for all devices and regions"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-black text-white py-3 px-6 rounded-full font-semibold text-center group-hover:bg-gray-800 transition-colors">
                    Learn More
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the right platform for your enterprise needs and get started today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/stackcards"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore StackCards
            </Link>
            <Link 
              to="/buildtracker"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Explore BuildTracker
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;