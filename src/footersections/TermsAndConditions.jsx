import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F766E] to-black text-white mt-[60px]">
      {/* Header */}
      <header className="bg-[#0F766E] border-b border-teal-700">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Hewlett Printers Solution LLC – Terms and Conditions</h1>
          <div className="text-lg text-teal-100 space-y-2">
            <p>Effective Date: January 2025</p>
            <p>Last Updated: January 2025</p>
            <p className="mt-4">These Terms and Conditions ("Terms") govern the use of services provided by Hewlett Printers Solution LLC ("Company," "we," "our," or "us"). By accessing our website at www.hewlettprinterssolution.com or using our services, you agree to be bound by these Terms. If you do not agree, do not use our services.</p>
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
              <p><span className="font-semibold text-teal-300">Legal Business Name:</span> Hewlett Printers Solution LLC</p>
              <p><span className="font-semibold text-teal-300">Address:</span> 3550 Gila Bnd, Casper, WY 82604, United States</p>
              <p><span className="font-semibold text-teal-300">Support Email:</span> support@hewlettprinterssolution.com</p>
              <p><span className="font-semibold text-teal-300">Support Phone:</span> (866) 866-6257</p>
              <p><span className="font-semibold text-teal-300">Website:</span> www.hewlettprinterssolution.com</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 2. Scope of Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">2. Scope of Services</h2>
          <p className="text-gray-200 mb-4">Hewlett Printers Solution LLC provides remote technical support services including but not limited to:</p>
          <div className="grid md:grid-cols-2 gap-3 ml-4 mb-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Printer Setup & Installation</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Printer Troubleshooting & Repair Assistance</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Wireless / Network Printer Configuration</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Printer Driver & Software Installation</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Remote Computer Support</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">PC Optimization</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Antivirus Installation & Security Support</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Subscription-Based Support Plans</p>
            </div>
          </div>
          <div className="flex items-start bg-green-900/20 p-4 rounded-lg border border-green-600">
            <span className="text-green-400 mr-3 mt-1">✅</span>
            <p className="text-gray-200">All services are remote only.<br />
            We do not provide physical on-site support unless explicitly stated in writing by the company.</p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 3. Service Eligibility */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">3. Service Eligibility</h2>
          <p className="text-gray-200 mb-4">Services are available only within the United States and Canada. By using our services, you confirm:</p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You are at least 18 years old</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You are the owner or authorized user of the device</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You will not request unlawful, harmful, or fraudulent services</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 4. Independent Business */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">4. Independent Business</h2>
          <p className="text-gray-200">Hewlett Printers Solution LLC is an independent service provider. We are not affiliated with HP, Canon, Brother, Epson, Lexmark, Microsoft, or any other manufacturer unless clearly stated. All brand names are used for identification only.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 5. Customer Responsibilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">5. Customer Responsibilities</h2>
          <p className="text-gray-200 mb-4">To receive service, you must:</p>
          <div className="space-y-3 ml-4 mb-6">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Provide accurate contact details</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Ensure stable internet connection for remote support</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Follow technician instructions during service</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Maintain legal software and licensing</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Not misuse or abuse the services</p>
            </div>
          </div>
          <p className="text-gray-200 mb-4">You agree not to request or involve us in:</p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Pirated/cracked software</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Illegal data recovery</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Hacking, unethical or malicious activities</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Fraudulent chargeback or dispute abuse</p>
            </div>
          </div>
        </section>

        {/* Continue with remaining sections in similar pattern */}
        {/* 6. Remote Access Authorization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">6. Remote Access Authorization</h2>
          <p className="text-gray-200 mb-4">By using our support services, you authorize our technicians to remotely access your computer/printer system using secure tools (AnyDesk, TeamViewer, ConnectWise, etc.).</p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You must remain present during remote service</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You may terminate the session at any time</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">We do not save or copy any personal files</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You are responsible for closing confidential data before service</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 7. Data Safety and Backup */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">7. Data Safety and Backup</h2>
          <p className="text-gray-200 mb-4">Technical service carries risk, including accidental file deletion, system corruption, or data loss.</p>
          <div className="flex items-start bg-green-900/20 p-4 rounded-lg border border-green-600 mb-4">
            <span className="text-green-400 mr-3 mt-1">✅</span>
            <p className="text-gray-200">You are fully responsible for backing up your data before service.</p>
          </div>
          <p className="text-gray-200">Hewlett Printers Solution LLC is not responsible for data loss during or after service.</p>
        </section>

        {/* Continue with all remaining sections following the same pattern */}
        {/* 8. Payment Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">8. Payment Terms</h2>
          <p className="text-gray-200 mb-4">All payments must be made before service unless agreed by written contract.<br />
          We accept Stripe, PayPal, debit/credit cards, online invoices, or ACH.</p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">All fees are clearly communicated before payment</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Service fees may include one-time, hourly, or subscription plans</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Prices may vary based on technical difficulty</p>
            </div>
          </div>
        </section>

        {/* 9. Refund Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">9. Refund Policy (7-Day Limited Refund)</h2>
          <p className="text-gray-200 mb-4">Refunds are available within 7 days of purchase ONLY IF:</p>
          <div className="space-y-2 ml-4 mb-6">
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">No service was delivered</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">Duplicate payment occurred</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✅</span>
              <p className="text-gray-200">Service plan was purchased by mistake</p>
            </div>
          </div>
          <p className="text-gray-200 mb-4">No refunds will be issued if:</p>
          <div className="space-y-2 ml-4 mb-4">
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Service has already started</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Customer changes mind after support begins</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Problem is due to hardware failure or third-party issues</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Customer refuses required troubleshooting steps</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-400 mr-3 mt-1">❌</span>
              <p className="text-gray-200">Internet/network issues prevent service completion</p>
            </div>
          </div>
          <p className="text-gray-200">Approved refunds are processed within 5–10 business days to the original payment method.</p>
        </section>

        {/* 10. Cancellation Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">10. Cancellation Policy</h2>
          <p className="text-gray-200">You may cancel before service starts. No cancellations or refunds after service has begun.</p>
        </section>

        {/* 11. Chargeback & Fraud Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">11. Chargeback & Fraud Policy (Strict Enforcement)</h2>
          <p className="text-gray-200">By purchasing our services, you agree not to file false chargebacks.<br />
          Any unauthorized chargeback will be treated as fraud.</p>
        </section>

        {/* 12. No Guarantee Clause */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">12. No Guarantee Clause</h2>
          <p className="text-gray-200">Technical support involves troubleshooting and diagnosis, which may not always resolve every issue due to system limitations, hardware defects, manufacturer restrictions, or prior damage. Hewlett Printers Solution LLC does not guarantee resolution of all issues. Fees are for service effort and time, not guaranteed results.</p>
        </section>

        {/* 13. Software License & Security Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">13. Software License & Security Policy</h2>
          <p className="text-gray-200 mb-4">Some services may require installation of software, printer drivers, system tools, or antivirus applications.</p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">We provide only legitimate software suggestions</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">You are responsible for software licensing compliance</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">No refunds are issued once software/license keys are activated</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">We do not support pirated or cracked software</p>
            </div>
          </div>
        </section>

        {/* Continue with remaining sections... */}
        {/* 14. Confidentiality & NDA Protection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">14. Confidentiality & NDA Protection</h2>
          <p className="text-gray-200 mb-4">Hewlett Printers Solution LLC agrees to keep customer data confidential. Likewise, you agree not to publish, share, or misuse:</p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Internal technical methods</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Remote access procedures</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Proprietary troubleshooting processes</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Technician recordings or communications</p>
            </div>
          </div>
        </section>

        {/* 15. Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">15. Limitation of Liability</h2>
          <p className="text-gray-200 mb-4">To the maximum extent permitted by law:</p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Hewlett Printers Solution LLC is not liable for data loss, lost profits, system damage, or incidental or consequential damages.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Total liability shall not exceed the total service fee paid by the customer.</p>
            </div>
          </div>
        </section>

        {/* 16. Indemnification */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">16. Indemnification</h2>
          <p className="text-gray-200">You agree to defend, indemnify and hold harmless Hewlett Printers Solution LLC from any claims, disputes, losses, or damages resulting from:</p>
          <div className="space-y-2 ml-4 mt-3">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Violation of these Terms</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Misuse of services</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Illegal system use</p>
            </div>
          </div>
        </section>

        {/* 17. Monitoring & Recording Consent */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">17. Monitoring & Recording Consent</h2>
          <p className="text-gray-200">For quality and security purposes, customer calls, chats, remote sessions, or emails may be recorded. By using our services, you consent to this monitoring.</p>
        </section>

        {/* 18. SMS/Text Messaging Consent */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">18. SMS/Text Messaging Consent (TCPA Compliance)</h2>
          <p className="text-gray-200 mb-4">By contacting us or submitting your phone number, you consent to receive SMS messages related to:</p>
          <div className="space-y-2 ml-4 mb-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Service updates</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Appointment confirmations</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Verification messages</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Support communication</p>
            </div>
          </div>
          <p className="text-gray-200">Message/data rates may apply. Reply STOP to unsubscribe or HELP for support. Consent is not a condition of purchase.</p>
        </section>

        {/* 19. Electronic Acceptance Consent */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">19. Electronic Acceptance Consent</h2>
          <p className="text-gray-200 mb-4">This is a legally binding agreement. You accept these Terms electronically by:</p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Using our website</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Contacting us</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Paying for or requesting service</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">•</span>
              <p className="text-gray-200">Receiving remote support</p>
            </div>
          </div>
          <p className="text-gray-200 mt-4">No physical signature is required.</p>
        </section>

        {/* 20. Governing Law & Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">20. Governing Law & Dispute Resolution</h2>
          <p className="text-gray-200 mb-4">These Terms are governed by the laws of the State of Wyoming, USA.</p>
          <div className="flex items-start">
            <span className="text-teal-400 mr-3 mt-1">⚖️</span>
            <p className="text-gray-200">All legal disputes must be handled exclusively in Natrona County, Wyoming.<br />
            You waive the right to out-of-state or international legal claims.</p>
          </div>
        </section>

        {/* 21. Right to Modify Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">21. Right to Modify Terms</h2>
          <p className="text-gray-200">Hewlett Printers Solution LLC may update these Terms at any time. Continued use of services means you accept the updated Terms.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 22. Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">22. Contact Information</h2>
          <div className="bg-teal-800/30 p-6 rounded-lg border border-teal-600">
            <p className="text-gray-200 mb-4">For legal or service-related questions, contact:</p>
            <div className="space-y-3 text-gray-200">
              <p className="font-semibold text-teal-300 text-xl">Hewlett Printers Solution LLC</p>
              <p>3550 Gila Bnd, Casper, WY 82604, United States</p>
              <p className="flex items-center">
                <span className="mr-3">📧</span>
                support@hewlettprinterssolution.com
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                (866) 866-6257
              </p>
              <p className="flex items-center">
                <span className="mr-3">🌐</span>
                www.hewlettprinterssolution.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;