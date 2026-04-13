'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent/80 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
          <p className="text-text-primary/60 mb-12 italic">Last Updated: April 10, 2026</p>
          
          <div className="space-y-12 prose prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-text-primary/70 leading-relaxed">
                Shadow Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-text-primary/70 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-primary/70">
                <li>Contact information (such as name and email address) when you request our ROI Audit Framework or book a call.</li>
                <li>Business information related to your ecommerce brand.</li>
                <li>Communication preferences and history.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-text-primary/70 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-primary/70">
                <li>Provide and deliver the services and resources you request.</li>
                <li>Communicate with you about our services, updates, and promotional offers.</li>
                <li>Improve our website and service offerings.</li>
                <li>Analyze trends and usage to enhance user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-text-primary/70 leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-text-primary/70 leading-relaxed">
                We may use third-party services (such as Brevo for email marketing and JotForm for intake forms) to facilitate our services. These third parties have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-text-primary/70 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You can also opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions in our emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-text-primary/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at nizami.shadowstudio@gmail.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
