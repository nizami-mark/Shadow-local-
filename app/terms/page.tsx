'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
          <p className="text-text-primary/60 mb-12 italic">Last Updated: April 10, 2026</p>
          
          <div className="space-y-12 prose prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-primary/70 leading-relaxed">
                By accessing or using the Shadow Studio website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
              <p className="text-text-primary/70 leading-relaxed">
                Shadow Studio provides ecommerce scaling services, including ad management, creative strategy, and growth consulting. The specific details of our services are outlined on our website and in individual partner agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Resources</h2>
              <p className="text-text-primary/70 leading-relaxed">
                Our free resources, such as the ROI Audit Framework, are provided for informational purposes only. While we strive for accuracy, we do not guarantee specific results from the use of these resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-text-primary/70 leading-relaxed">
                All content on this website, including text, graphics, logos, and frameworks, is the property of Shadow Studio and is protected by intellectual property laws. You may not reproduce or distribute our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-text-primary/70 leading-relaxed">
                Shadow Studio shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Partner Qualifications</h2>
              <p className="text-text-primary/70 leading-relaxed">
                We reserve the right to select the brands we partner with based on our qualification criteria (e.g., revenue thresholds, product-market fit).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
              <p className="text-text-primary/70 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Shadow Studio operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-text-primary/70 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Your continued use of our services after any changes constitutes your acceptance of the new terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
