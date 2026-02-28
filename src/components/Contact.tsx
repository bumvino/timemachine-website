"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to form handling service (e.g., Formspree, SendGrid, or API route)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-teal/60 text-lg leading-relaxed mb-10">
              Have a project in mind? Whether it&apos;s a PLC retrofit, a new
              automation system, or a website for your business — we&apos;d love
              to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center text-orange shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal">Email</h4>
                  <p className="text-teal/60">hi@bumvino.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center text-orange shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal">Phone</h4>
                  <p className="text-teal/60">(470) 618-9034</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center text-orange shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-teal">Location</h4>
                  <p className="text-teal/60">Arizona and Georgia USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 rounded-xl p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-teal mb-2">
                  Message Sent!
                </h3>
                <p className="text-teal/60">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-teal mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-white text-teal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-teal mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-white text-teal"
                      placeholder="hi@bumvino.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-teal mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-white text-teal"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-teal mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-white text-teal"
                  >
                    <option value="">Select a service</option>
                    <option value="plc">PLC Programming</option>
                    <option value="hmi">HMI Development</option>
                    <option value="integration">System Integration</option>
                    <option value="equipment">Equipment Engineering</option>
                    <option value="web">Web Development</option>
                    <option value="design">Graphic Design & Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-teal mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-white text-teal resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
