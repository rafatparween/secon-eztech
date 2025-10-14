import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F766E] to-black text-white mt-[60px]">
      {/* Header */}
      <header className="bg-[#0F766E] border-b border-teal-700">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <div className="text-lg text-teal-100 space-y-2">
            <p>Effective Date: January 2025</p>
            <p>Last Updated: January 2025</p>
            <p className="mt-4">This Privacy Policy describes how Hewlett Printers Solution LLC ("Company," "we," "us," or "our") collects, uses, stores, and protects your information when you visit https://www.hewlettprinterssolution.com or use our services.</p>
            <p className="font-semibold">By using our website or services, you agree to the terms of this Privacy Policy.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 1. Company Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">1. Company Information</h2>
          <div className="bg-teal-800/30 p-6 rounded-lg border border-teal-600">
            <div className="space-y-3 text-gray-200">
              <p><span className="font-semibold text-teal-300">Business Name:</span> Hewlett Printers Solution LLC</p>
              <p><span className="font-semibold text-teal-300">Address:</span> 3550 Gila Bnd, Casper, WY 82604, USA</p>
              <p><span className="font-semibold text-teal-300">Email:</span> support@hewlettprinterssolution.com</p>
              <p><span className="font-semibold text-teal-300">Phone:</span> (866) 866-6257</p>
              <p><span className="font-semibold text-teal-300">Website:</span> https://www.hewlettprinterssolution.com</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 2. Information We Collect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">2. Information We Collect</h2>
          <p className="text-gray-200 mb-6">We may collect the following types of information:</p>
          
          <div className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-4">a. Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-3 ml-4">
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Full Name</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Phone Number</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Email Address</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Billing Address</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Payment Information</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Service Request Details</p>
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-4">b. Technical Information</h3>
              <div className="grid md:grid-cols-2 gap-3 ml-4">
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">IP Address</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Browser Type</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Device Information</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Cookies / Tracking Data</p>
                </div>
              </div>
            </div>

            {/* Communication Records */}
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-4">c. Communication Records</h3>
              <div className="grid md:grid-cols-2 gap-3 ml-4">
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Phone call history</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">SMS messages</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Emails</p>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <p className="text-gray-200">Live chat or form submissions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 3. How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">3. How We Use Your Information</h2>
          <p className="text-gray-200 mb-4">We use your information to:</p>
          <div className="grid md:grid-cols-2 gap-4 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Provide printer support and technical services</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Schedule remote or on-site service appointments</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Process payments securely</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Send service alerts and account messages via SMS or email</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Improve website performance and customer support quality</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Prevent fraud and protect our business</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 4. SMS/Text Messaging Consent */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">4. SMS/Text Messaging Consent (TCPA Compliance)</h2>
          <p className="text-gray-200 mb-4">By providing your mobile number, you consent to receive SMS messages from Hewlett Printers Solution LLC for:</p>
          <div className="space-y-3 ml-4 mb-6">
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">Service notifications</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">Appointment confirmations</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">Account-related updates</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">Support communication</p>
            </div>
          </div>
          <div className="space-y-2 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Message frequency varies</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Message and data rates may apply</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Reply STOP to unsubscribe</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Reply HELP for help</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Consent is not a condition of purchase</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 5. Cookies & Tracking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">5. Cookies & Tracking</h2>
          <p className="text-gray-200">We use cookies and tracking technologies to improve website performance and analyze traffic. You may disable cookies in your browser, but some features may not work properly.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 6. Data Sharing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">6. Data Sharing</h2>
          <p className="text-gray-200 mb-4">We do not sell or share personal data with third parties for marketing.<br />
          We may share data only with:</p>
          <div className="space-y-3 ml-4 mb-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Payment processors (Stripe, PayPal, bank partners)</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">IT and service support vendors</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Law enforcement if required by law</p>
            </div>
          </div>
          <p className="text-gray-200 font-semibold">We do not sell customer phone numbers or emails.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 7. Data Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">7. Data Security</h2>
          <p className="text-gray-200">We use SSL encryption, firewalls, and secure payment gateways to protect your data. However, no system is 100% secure—data is shared at your own risk.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 8. Data Retention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">8. Data Retention</h2>
          <p className="text-gray-200 mb-4">We retain customer data only as long as necessary to:</p>
          <div className="grid md:grid-cols-2 gap-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Provide services</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Meet legal obligations</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Resolve disputes</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Prevent fraud</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 9. Your Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">9. Your Rights</h2>
          <p className="text-gray-200 mb-4">Depending on your location, you may:</p>
          <div className="grid md:grid-cols-2 gap-3 ml-4 mb-6">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Request a copy of your data</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Update or correct your data</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Request deletion of data</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Opt out of marketing messages at any time</p>
            </div>
          </div>
          <p className="text-gray-200 font-semibold">Contact: support@hewlettprinterssolution.com</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 10. GDPR Compliance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">10. GDPR (EU/UK) Compliance</h2>
          <p className="text-gray-200 mb-4">If you are in the European Union or UK, you have rights to:</p>
          <div className="grid md:grid-cols-2 gap-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Access and delete your data</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Restrict processing</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Request data portability</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">File a complaint with your local Data Protection Authority</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 11. CCPA Privacy Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">11. CCPA (California) Privacy Rights</h2>
          <p className="text-gray-200 mb-4">California residents have the right to:</p>
          <div className="grid md:grid-cols-2 gap-3 ml-4 mb-6">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Request disclosure of data we collect</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Request deletion of personal information</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Opt-out of data sharing (we do not sell data)</p>
            </div>
          </div>
          <p className="text-gray-200">We do not discriminate against users for exercising privacy rights.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 12. Third-Party Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">12. Third-Party Links</h2>
          <p className="text-gray-200">Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 13. Children's Privacy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">13. Children's Privacy</h2>
          <p className="text-gray-200">We do not knowingly collect or market to children under age 13.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 14. Changes to This Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">14. Changes to This Policy</h2>
          <p className="text-gray-200">We may update this Privacy Policy anytime. Updates will be posted on this page with a new effective date.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 15. Contact Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">15. Contact Us</h2>
          <div className="bg-teal-800/30 p-6 rounded-lg border border-teal-600">
            <p className="text-gray-200 mb-4">For privacy questions or requests, contact:</p>
            <div className="space-y-3 text-gray-200">
              <p className="flex items-center text-lg">
                <span className="mr-3">📧</span>
                support@hewlettprinterssolution.com
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-3">📞</span>
                (866) 866-6257
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-3">🏢</span>
                3550 Gila Bnd, Casper, WY 82604, USA
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;