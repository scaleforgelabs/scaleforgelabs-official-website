import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'May 2026';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 text-[15px] leading-relaxed space-y-3">{children}</div>
  </div>
);

const Privacy = () => (
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400">Last updated: {LAST_UPDATED}</p>
      </div>
    </motion.section>

    {/* Content */}
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose-like">

          <Section title="1. Introduction">
            <p>
              ScaleForge Labs Ltd ("<strong>ScaleForge Labs</strong>", "we", "our", "us") is committed to
              protecting the privacy and security of your personal data. This Privacy Policy explains how we
              collect, use, disclose, and safeguard information when you use our websites, products, and services
              — including <strong>BuildTracker</strong> — operated under the ScaleForge Labs brand.
            </p>
            <p>
              By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy.
              If you do not agree with its terms, please discontinue use of our services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account information:</strong> Name, email address, password hash, job title, and profile photo when you create an account.</li>
              <li><strong>Organization data:</strong> Company name, billing address, and payment method information for paid subscriptions.</li>
              <li><strong>Usage data:</strong> Log files, IP addresses, browser type, pages visited, features used, and session durations.</li>
              <li><strong>Content data:</strong> Tasks, projects, documents, comments, and files you create or upload within our products.</li>
              <li><strong>Communication data:</strong> Emails and messages you send to our support or sales team.</li>
              <li><strong>Device data:</strong> Device type, operating system, and browser version.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, operate, and improve our products and services.</li>
              <li>Process transactions and send related billing information.</li>
              <li>Send administrative notifications such as confirmations, updates, and security alerts.</li>
              <li>Respond to comments, questions, and requests for customer support.</li>
              <li>Monitor and analyze usage patterns to improve functionality and user experience.</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
              <li>Comply with legal obligations and enforce our terms of service.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing (GDPR)">
            <p>
              For users in the European Economic Area (EEA), United Kingdom, and other applicable jurisdictions,
              we process personal data under the following legal bases:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contract performance:</strong> Processing necessary to deliver our products and services you've signed up for.</li>
              <li><strong>Legitimate interests:</strong> Improving our services, preventing fraud, and ensuring security.</li>
              <li><strong>Legal obligation:</strong> Compliance with applicable laws and regulations.</li>
              <li><strong>Consent:</strong> Where required by law, for example for certain marketing communications.</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing and Disclosure">
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service providers:</strong> Third-party vendors who assist us in operating our services (e.g., cloud hosting, payment processors, email delivery), bound by contractual data protection obligations.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal requirements:</strong> If required by law, court order, or governmental authority.</li>
              <li><strong>Protection of rights:</strong> To protect the rights, property, or safety of ScaleForge Labs, our users, or others.</li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal data for as long as necessary to provide our services and fulfill the purposes
              outlined in this policy, unless a longer retention period is required by law.
            </p>
            <p>
              When you close your account, we will delete or anonymize your personal data within 90 days,
              except where we are required to retain it for legal, regulatory, or legitimate business purposes.
              Organization data and project content may be retained for a limited period to enable account recovery.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement industry-standard technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>TLS/SSL encryption for data in transit.</li>
              <li>AES-256 encryption for data at rest.</li>
              <li>Multi-factor authentication options for account access.</li>
              <li>Role-based access controls within our infrastructure.</li>
              <li>Regular security audits and penetration testing.</li>
            </ul>
            <p>
              No method of transmission over the Internet or electronic storage is 100% secure. While we strive
              to protect your data, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="8. International Data Transfers">
            <p>
              ScaleForge Labs operates globally. Your personal data may be transferred to and processed in
              countries other than the country in which you reside. Where we transfer data outside the EEA
              or UK, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs)
              approved by the European Commission.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</li>
              <li><strong>Restriction:</strong> Request that we limit processing of your data in certain circumstances.</li>
              <li><strong>Portability:</strong> Receive your personal data in a structured, machine-readable format.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
              <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@scaleforgelabs.com" className="text-black underline">
                privacy@scaleforgelabs.com
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title="10. Cookies">
            <p>
              We use cookies and similar tracking technologies to operate and improve our services.
              For detailed information about the cookies we use and your options, please see our{' '}
              <Link to="/cookie-policy" className="text-black underline">Cookie Policy</Link>.
            </p>
          </Section>

          <Section title="11. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly collect
              personal data from children. If you believe we have inadvertently collected such data, please
              contact us immediately at{' '}
              <a href="mailto:privacy@scaleforgelabs.com" className="text-black underline">
                privacy@scaleforgelabs.com
              </a>
              .
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by posting the updated policy on our website and, where appropriate, via email. Your continued
              use of our services after the effective date constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 mt-2">
              <p><strong>ScaleForge Labs Ltd</strong></p>
              <p>Data Protection Contact</p>
              <p>Email: <a href="mailto:privacy@scaleforgelabs.com" className="text-black underline">privacy@scaleforgelabs.com</a></p>
              <p>General: <a href="mailto:hello@scaleforgelabs.com" className="text-black underline">hello@scaleforgelabs.com</a></p>
              <p className="mt-2 text-gray-500 text-sm">RC 8834430 — ScaleForge Labs Ltd</p>
            </div>
          </Section>

        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-gray-500">
          <p>Last updated: {LAST_UPDATED}</p>
          <div className="flex gap-6">
            <Link to="/cookie-policy" className="hover:text-black transition-colors">Cookie Policy</Link>
            <Link to="/contact" className="hover:text-black transition-colors">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
