const StackCardsPrivacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy for StackCards</h1>
        <p className="text-sm text-gray-600 mb-8"><strong>Last Updated:</strong> January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            StackCards ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Personal Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Account Information:</strong> Email address, name (via Clerk authentication)</li>
            <li><strong>Business Card Data:</strong> Names, job titles, companies, email addresses, phone numbers, and addresses from scanned business cards</li>
            <li><strong>User ID:</strong> Unique identifier for your account</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Automatically Collected Information</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Device Information:</strong> Operating system, device type</li>
            <li><strong>Usage Data:</strong> App features used, scan frequency</li>
            <li><strong>Camera Access:</strong> Required for scanning business cards (images are processed locally and not stored)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Core Functionality</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Card Scanning:</strong> Process business card images using on-device OCR (ML Kit)</li>
            <li><strong>AI Processing:</strong> Extract non-sensitive data (name, role, company, category) using Google AI</li>
            <li><strong>Data Storage:</strong> Store your business cards securely in Supabase database</li>
            <li><strong>Sync:</strong> Enable access to your cards across devices</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Account Management</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Authentication:</strong> Manage your account via Clerk</li>
            <li><strong>Subscription:</strong> Process payments and manage subscriptions via RevenueCat</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Service Improvement</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Monitor app performance and fix bugs</li>
            <li>Improve AI parsing accuracy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy-First Approach</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Processing</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Sensitive Data Protection:</strong> Email addresses, phone numbers, and websites are extracted locally on your device using regex patterns</li>
            <li><strong>No AI Exposure:</strong> Contact information is NEVER sent to Google AI or any third-party AI service</li>
            <li><strong>On-Device OCR:</strong> Text recognition happens on your device using ML Kit</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Send to AI</h3>
          <p className="text-gray-700 mb-2">Only non-sensitive information is sent to Google AI for parsing:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Person's name</li>
            <li>Job title</li>
            <li>Company name</li>
            <li>Industry category</li>
            <li>Physical addresses (non-contact)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Storage Locations</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Supabase (Cloud Database):</strong> Business card data, user profiles</li>
            <li><strong>Local Device:</strong> Cached cards for offline access, scan count for free tier</li>
            <li><strong>Clerk:</strong> Authentication credentials</li>
            <li><strong>RevenueCat:</strong> Subscription status</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>End-to-end encryption for data transmission</li>
            <li>Secure authentication via Clerk</li>
            <li>Row-level security in Supabase database</li>
            <li>No storage of credit card information (handled by app stores)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">We use the following third-party services:</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">1. Clerk (Authentication)</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li><strong>Purpose:</strong> User authentication and account management</li>
                <li><strong>Data Shared:</strong> Email, name, user ID</li>
                <li><strong>Privacy Policy:</strong> <a href="https://clerk.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://clerk.com/privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">2. Supabase (Database)</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li><strong>Purpose:</strong> Store business card data</li>
                <li><strong>Data Shared:</strong> User profile, business cards</li>
                <li><strong>Privacy Policy:</strong> <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">3. Google AI (Gemini)</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li><strong>Purpose:</strong> Parse business card text (non-sensitive data only)</li>
                <li><strong>Data Shared:</strong> Name, role, company, category, addresses (NO emails, phones, or websites)</li>
                <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">4. RevenueCat (Subscriptions)</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li><strong>Purpose:</strong> Manage in-app subscriptions</li>
                <li><strong>Data Shared:</strong> User ID, subscription status</li>
                <li><strong>Privacy Policy:</strong> <a href="https://www.revenuecat.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">5. Google ML Kit (OCR)</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li><strong>Purpose:</strong> On-device text recognition</li>
                <li><strong>Data Shared:</strong> Processed locally, no data sent to Google</li>
                <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-2">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Access:</strong> View all your stored data</li>
            <li><strong>Delete:</strong> Remove your account and all associated data</li>
            <li><strong>Export:</strong> Download your business card data</li>
            <li><strong>Opt-Out:</strong> Disable specific features</li>
            <li><strong>Correct:</strong> Update incorrect information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Active Accounts:</strong> Data retained while account is active</li>
            <li><strong>Deleted Accounts:</strong> All data permanently deleted within 30 days</li>
            <li><strong>Cached Data:</strong> Cleared when you log out or uninstall the app</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            StackCards is not intended for users under 13 years of age. We do not knowingly collect information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free vs Premium Tiers</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Free Tier</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Limited to 5 business cards</li>
            <li>Scan count tracked locally on device</li>
            <li>All privacy protections apply</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Tier</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Unlimited business cards</li>
            <li>Subscription managed via RevenueCat</li>
            <li>No additional data collection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Camera Permissions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Purpose:</strong> Scan business cards</li>
            <li><strong>Usage:</strong> Images captured are processed immediately and not stored</li>
            <li><strong>Control:</strong> You can revoke camera access in device settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-2">We may update this Privacy Policy periodically. We will notify you of significant changes via:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>In-app notification</li>
            <li>Email to registered address</li>
            <li>Updated "Last Updated" date</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">For privacy-related questions or requests:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:hello@scaleforgelabs.com" className="text-blue-600 hover:underline">hello@scaleforgelabs.com</a></li>
            <li><strong>Phone:</strong> +234 906 358 0387</li>
            <li><strong>Support:</strong> In-app support feature</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection Rights (GDPR/CCPA)</h2>
          <p className="text-gray-700 mb-2">If you are in the EU or California, you have additional rights:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Right to access your data</li>
            <li>Right to rectification</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise these rights, contact us at <a href="mailto:hello@scaleforgelabs.com" className="text-blue-600 hover:underline">hello@scaleforgelabs.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consent</h2>
          <p className="text-gray-700 leading-relaxed">
            By using StackCards, you consent to this Privacy Policy and our data practices as described herein.
          </p>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h2>
          <p className="text-gray-700 font-semibold mb-2">StackCards by ScaleForgeLabs</p>
          <p className="text-gray-700">
            Block 13, Flat 4, Jakande Lowcost Housing Estate<br />
            Agbala, Shagamu Road<br />
            Lagos State, Nigeria
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Email:</strong> <a href="mailto:hello@scaleforgelabs.com" className="text-blue-600 hover:underline">hello@scaleforgelabs.com</a><br />
            <strong>Phone:</strong> +234 906 358 0387
          </p>
        </section>
      </div>
    </div>
  );
};

export default StackCardsPrivacy;
