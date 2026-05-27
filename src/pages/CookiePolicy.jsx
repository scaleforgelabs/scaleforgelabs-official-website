import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'May 2026';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 text-[15px] leading-relaxed space-y-3">{children}</div>
  </div>
);

const COOKIE_TABLE = [
  { name: 'scfl_session', type: 'Essential', purpose: 'Maintains your authenticated session across pages.', duration: 'Session' },
  { name: 'scfl_auth', type: 'Essential', purpose: 'Stores a secure token to keep you signed in.', duration: '30 days' },
  { name: 'scfl_pref', type: 'Functional', purpose: 'Remembers your UI preferences (theme, language, sidebar state).', duration: '1 year' },
  { name: '_ga, _gid', type: 'Analytics', purpose: 'Google Analytics — tracks aggregated usage statistics.', duration: '2 years / 24 hours' },
  { name: 'scfl_exp', type: 'Analytics', purpose: 'Records which product experiments you have been assigned to.', duration: '90 days' },
  { name: 'scfl_ref', type: 'Marketing', purpose: 'Tracks the referral source that led you to our website.', duration: '30 days' },
];

const CookiePolicy = () => (
  <div className="min-h-screen bg-white">

    {/* Hero */}
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-950 text-white pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/70 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Legal
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-400">Last updated: {LAST_UPDATED}</p>
      </div>
    </motion.section>

    {/* Content */}
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Section title="1. What Are Cookies?">
          <p>
            Cookies are small text files placed on your device when you visit a website. They are widely used
            to make websites function correctly, work more efficiently, and provide reporting information to
            site owners.
          </p>
          <p>
            This Cookie Policy explains how ScaleForge Labs Ltd ("we", "our", "us") uses cookies and similar
            tracking technologies on our websites and products, including <strong>buildtracker.io</strong> and
            all subdomains operated by ScaleForge Labs.
          </p>
        </Section>

        <Section title="2. Types of Cookies We Use">
          <p>We use the following categories of cookies:</p>

          <div className="space-y-4 mt-2">
            {[
              {
                type: 'Essential Cookies',
                color: 'bg-blue-50 text-blue-700 border-blue-200',
                desc: 'These cookies are strictly necessary for our websites and applications to function. Without them, services such as authentication and session management cannot be provided. You cannot opt out of these cookies.',
              },
              {
                type: 'Functional Cookies',
                color: 'bg-green-50 text-green-700 border-green-200',
                desc: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and UI settings. Disabling them may affect your user experience.',
              },
              {
                type: 'Analytics Cookies',
                color: 'bg-purple-50 text-purple-700 border-purple-200',
                desc: 'These cookies help us understand how visitors interact with our services by collecting and reporting information anonymously. We use this data to improve our products.',
              },
              {
                type: 'Marketing Cookies',
                color: 'bg-amber-50 text-amber-700 border-amber-200',
                desc: 'These cookies track your browsing activity across sites to help us deliver relevant advertising and measure the effectiveness of our marketing campaigns. You may opt out of these cookies.',
              },
            ].map((cat, i) => (
              <div key={i} className={`rounded-xl border p-5 ${cat.color}`}>
                <p className="font-bold mb-1">{cat.type}</p>
                <p className="text-[14px] leading-relaxed opacity-90">{cat.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="3. Cookies We Set">
          <p>The following table lists the specific cookies set by ScaleForge Labs services:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200 rounded-tl-lg">Cookie name</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Type</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Purpose</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200 rounded-tr-lg">Duration</th>
                </tr>
              </thead>
              <tbody>
                {COOKIE_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border border-gray-200 font-mono text-xs">{row.name}</td>
                    <td className="p-3 border border-gray-200">{row.type}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.purpose}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="4. Third-Party Cookies">
          <p>
            Some cookies on our services are set by third-party providers we work with. These include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Analytics (Google LLC):</strong> Used to analyze website traffic and user behavior. See Google's Privacy Policy for more information.</li>
            <li><strong>Stripe (Stripe, Inc.):</strong> Used for secure payment processing on our checkout pages.</li>
            <li><strong>Intercom (Intercom, Inc.):</strong> Used for in-product support chat and user messaging.</li>
          </ul>
          <p>
            These third parties have their own privacy and cookie policies and ScaleForge Labs is not responsible for
            the cookies they set independently.
          </p>
        </Section>

        <Section title="5. Managing Your Cookie Preferences">
          <p>
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings.
              Note that blocking all cookies may affect the functionality of our services.
            </li>
            <li>
              <strong>Our consent banner:</strong> When you first visit our website, you will be presented with a cookie
              consent banner that allows you to accept or decline non-essential cookies.
            </li>
            <li>
              <strong>Google Analytics opt-out:</strong> You can opt out of Google Analytics by installing the
              Google Analytics Opt-out Browser Add-on.
            </li>
          </ul>
          <p>
            Please note that essential cookies cannot be disabled as they are necessary for our services to function.
          </p>
        </Section>

        <Section title="6. Do Not Track">
          <p>
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites that the user does not
            want to be tracked. Our services do not currently alter their behavior in response to DNT signals,
            as there is no consistent industry standard for how websites should respond to such signals.
          </p>
        </Section>

        <Section title="7. Updates to This Policy">
          <p>
            We may update this Cookie Policy periodically to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We encourage you to review this policy regularly.
            The date at the top of this page indicates when it was last updated.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>
            If you have questions about our use of cookies, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mt-2">
            <p><strong>ScaleForge Labs Ltd</strong></p>
            <p>Email: <a href="mailto:privacy@scaleforgelabs.com" className="text-black underline">privacy@scaleforgelabs.com</a></p>
            <p>General: <a href="mailto:hello@scaleforgelabs.com" className="text-black underline">hello@scaleforgelabs.com</a></p>
          </div>
        </Section>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-gray-500">
          <p>Last updated: {LAST_UPDATED}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-black transition-colors">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CookiePolicy;
