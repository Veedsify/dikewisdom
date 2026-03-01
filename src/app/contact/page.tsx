'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Socials from '@/components/Socials';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main className="dark:bg-gray-950 pt-32">
        <section>
          <div className="container">
            <div className="lg:border-x">
              <div className="lg:max-w-screen-lg lg:mx-auto py-14 lg:py-20">
                <div className="text-center mb-16">
                  <h1 className="text-4xl sm:text-5xl font-black !mt-0 font-heading">
                    Get In Touch
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind, need technical consulting, or just want to say
                    hello? I&apos;d love to hear from you.
                  </p>
                </div>

                <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                  {/* Contact Form */}
                  <div className="not-prose">
                    <form onSubmit={handleSubmit} className="grid gap-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-200 transition-shadow"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-200 transition-shadow"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                          className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-200 transition-shadow"
                          placeholder="Project inquiry, consulting, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                          className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-200 transition-shadow resize-y"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>
                      {status === 'sent' && (
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                          ✅ Message sent! I&apos;ll get back to you soon.
                        </p>
                      )}
                      {status === 'error' && (
                        <p className="text-red-600 dark:text-red-400 font-medium">
                          ❌ Something went wrong. Please try emailing me directly.
                        </p>
                      )}
                    </form>
                  </div>

                  {/* Contact Info Sidebar */}
                  <aside className="not-prose">
                    <div className="border rounded-xl p-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 sticky top-24">
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-200 mb-6 font-heading">
                        Contact Info
                      </h3>
                      <div className="grid gap-6">
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-500">Email</p>
                          <a
                            href="mailto:me@dikewisdom.com"
                            className="text-gray-950 dark:text-gray-200 font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                          >
                            me@dikewisdom.com
                          </a>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-500">Location</p>
                          <p className="text-gray-950 dark:text-gray-200 font-medium">
                            Lagos, Nigeria
                          </p>
                          <p className="text-sm text-gray-500">Available for Remote Work</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-3">Social</p>
                          <Socials />
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
