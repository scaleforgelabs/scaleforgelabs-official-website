import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
            Contact Us
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-0"
          >
            Get In Touch
          </motion.h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Get in touch with us about StackCards, BuildTracker, or any enterprise inquiries. 
            Or reach out directly to us at{' '}
            <a href="mailto:hello@scaleforgelabs.com" className="text-black hover:underline font-medium">
              hello@scaleforgelabs.com
            </a>
          </p>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              <div className="mb-12">
                <p className="text-gray-600 mb-4">
                  Get in touch with us about StackCards, BuildTracker, or any enterprise inquiries. We're here to help businesses worldwide!
                </p>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 inline-flex">
                  <span className="text-lg mr-2">🇳🇬</span>
                  <span className="text-sm font-medium text-green-800">Proudly Nigerian</span>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email",
                    details: ["hello@scaleforgelabs.com"]
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Phone",
                    details: ["+234 906 358 0387"]
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Office",
                    details: ["Lagos, Nigeria", "West Africa", "Global Operations"]
                  }
                ].map((contact, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 hover:translate-x-2 transition-transform"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                      <div className="space-y-1">
                        {contact.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Social Media */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Us</h2>
              <p className="text-gray-600 mb-8">Stay connected with ScaleForge Labs on social media</p>
              
              <div className="flex justify-center space-x-6">
                {[
                  { name: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                  { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { name: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How do I get started with StackCards?",
                    answer: "Simply download the platform and start processing your first business cards. The enterprise tier includes unlimited processing and advanced features."
                  },
                  {
                    question: "Is BuildTracker suitable for small teams?",
                    answer: "Absolutely! BuildTracker scales from small teams to global enterprise organizations with flexible pricing and advanced features."
                  },
                  {
                    question: "Do you offer enterprise support?",
                    answer: "Yes, we provide dedicated enterprise support with custom integrations, priority assistance, and global deployment options."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 pb-6 hover:translate-x-2 transition-transform"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;