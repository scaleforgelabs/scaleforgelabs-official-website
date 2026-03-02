import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const StackCardsDeleteAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    reason: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const templateParams = {
      from_name: 'StackCards User',
      from_email: formData.email,
      to_email: 'hello@scaleforgelabs.com',
      subject: 'StackCards - Account Deletion Request',
      message: `Account Deletion Request\n\nEmail: ${formData.email}\n\nReason: ${formData.reason || 'No reason provided'}`,
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ email: '', reason: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Delete Your StackCards Account
            </h1>
            <p className="text-gray-600">
              We're sorry to see you go. Please fill out the form below to request account deletion.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Important Information</h3>
            <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
              <li>All your business cards will be permanently deleted</li>
              <li>Your subscription will be cancelled</li>
              <li>This action cannot be undone</li>
              <li>Account deletion will be processed within 30 days</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter the email address associated with your StackCards account
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Leaving (Optional)
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="Help us improve by telling us why you're leaving..."
              />
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4"
              >
                <p className="text-green-800 font-medium">✓ Request Submitted Successfully</p>
                <p className="text-sm text-green-700 mt-1">
                  We've received your account deletion request. You'll receive a confirmation email shortly, and your account will be deleted within 30 days.
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <p className="text-red-800 font-medium">✗ Failed to Submit Request</p>
                <p className="text-sm text-red-700 mt-1">
                  Please try again or contact us at hello@scaleforgelabs.com
                </p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting Request...' : 'Delete My Account'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Need Help Instead?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you're experiencing issues with StackCards, our support team is here to help.
            </p>
            <a
              href="mailto:hello@scaleforgelabs.com"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Contact Support
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StackCardsDeleteAccount;
